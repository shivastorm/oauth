
// type User = {
//     name?: string | null | undefined;
//     email?: string | null | undefined;
//     image?: string | null | undefined;
// } | undefined

type Props = {
    user: any,
    pagetype: string,
    role: string
}

export default function Card({ user, pagetype, role }: Props) {
    console.log("roleis===>", role)
    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            Hello {user?.name}!
        </div>
    ) : null



    return (
        <section className="flex flex-col gap-4 ">
            {greeting}
            {/* {emailDisplay} */}
            {/* {userImage} */}
            <p className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
                {pagetype} Page!</p>
            <p className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
                role is :{role} !</p>
        </section>
    )
}