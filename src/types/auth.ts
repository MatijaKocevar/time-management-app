import { z } from "zod"
import { Session, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import { DefaultSession } from "next-auth"

export const ExtendedSessionSchema = z.object({
    user: z.object({
        id: z.string(),
        name: z.string().nullable(),
        email: z.string().nullable(),
        image: z.string().nullable(),
    }),
    expires: z.string(),
})

export type ExtendedSession = z.infer<typeof ExtendedSessionSchema>

export interface ExtendedUser extends User {
    id: string
}

export interface ExtendedToken extends JWT {
    id?: string
}

export interface ExtendedAuthSession extends Session {
    user: {
        id: string
    } & DefaultSession["user"]
}
