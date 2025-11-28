import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactCompiler: true,
    output: "standalone",
    experimental: {
        serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
    },
}

export default nextConfig
