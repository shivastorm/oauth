"use client"
import { useState } from 'react';
import { Session } from 'next-auth';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
export default async function Home() {
  const [role, setRole] = useState('');
  console.log("roled", role)
  interface CustomSession extends Session {
    user: {
      name: string;
      email: string;
      image?: string | undefined;
    };
    access_token?: string; // Add the access_token property
  }
  const session = (await getServerSession(options)) as CustomSession
  //  console.log("session from home with token==>", session)
  const accessToken = session?.access_token;
  if (accessToken) {
    try {
      //  const decodedToken = jwt.decode(accessToken);
      const decodedToken: string | JwtPayload | null = jwt.decode(accessToken);
      if (decodedToken && typeof decodedToken === 'object' && decodedToken !== null) {
        const resourceAccess = decodedToken.resource_access;
        const planiq = resourceAccess?.PlanIQ.roles[0]
        setRole(planiq)
        console.log("roled", role)
        // const roles = planiq.DI-Studio
        console.log('Resource Access:====>hi', planiq);
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    console.error('Access token not available');
  }

  return (
    <>
      {session ? (
        <UserCard user={session} pagetype={"Home"} role={role} />
      ) : (
        <h1 className="text-5xl">welcome to ReaDocs !! </h1>
      )}
    </>
  )
}