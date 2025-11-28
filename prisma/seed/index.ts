import { PrismaClient } from "../generated/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Starting database seeding...")

    const hashedPassword = await bcrypt.hash("password123", 12)

    const testUser = await prisma.user.upsert({
        where: { email: "test@example.com" },
        update: {},
        create: {
            email: "test@example.com",
            name: "Test User",
            password: hashedPassword,
        },
    })

    console.log("✅ Created test user:", testUser.email)

    console.log("🌱 Database seeding completed!")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error("❌ Error seeding database:", e)
        await prisma.$disconnect()
        process.exit(1)
    })
