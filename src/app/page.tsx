import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authConfig } from "@/lib/auth"

export default async function Home() {
    const session = await getServerSession(authConfig)

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Welcome to Time Management</h1>
                <p className="mt-4 text-gray-600">
                    Hello, {session.user?.name || session.user?.email}
                </p>
            </div>
        </div>
    )
}
