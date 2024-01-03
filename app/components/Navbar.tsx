import Link from "next/link"
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
export default async function Navbar() {
    const session = await getServerSession(options)
    return (
        <nav className="bg-red-800 p-4">
            {session ?
                (<ul className="flex justify-evenly text-2xl font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/server">Server</Link></li>
                    <li><Link href="/client">Client</Link></li>
                    <li><Link href="/extra">Extra</Link></li>
                    <li><Link href="/api/auth/signout">Sign Out</Link></li>
                    <li>
                        {session ? (
                            <p className="text-sky-600"> Hi {session?.user?.name}</p>
                        ) : null}
                    </li>
                </ul>) :
                <>
                    <ul className="flex justify-evenly text-2xl font-bold">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/api/auth/signin">Sign In</Link></li>
                    </ul>
                    {/* <li><Link href="/server">Server</Link></li>
                 <li><Link href="/client">Client</Link></li>
                 <li><Link href="/extra">Extra</Link></li> */}
                </>
            }
        </nav>
    )
}
