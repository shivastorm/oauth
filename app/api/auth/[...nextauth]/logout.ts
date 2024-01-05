
export default async function logout(req: any, res: any) {
    const keycloakIssuer = `${process.env.KEYCLOAK_ISSUER}`
    const nextAuthUrl=`${process.env.NEXTAUTH_URL}`
    const redirectionUrl=encodeURIComponent(nextAuthUrl)

    const logoutUrl = `${keycloakIssuer}/protocol/openid-connect/logout?post_logout_redirect_uri=${redirectionUrl}&client_id=${process.env.KEYCLOAK_ID}`

    res.redirect(logoutUrl);
}