/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    output: "standalone",
    serverExternalPackages: ["@prisma/client", "bcryptjs"],
}

module.exports = nextConfig
