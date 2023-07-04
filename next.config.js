/** @type {import('next').NextConfig} */
const nextConfig = {
      experimental: {
            appDir: true,
      },
      images: {
            remotePatterns: [
                  {
                        protocol: 'https',
                        hostname: 'avatars.githubusercontent.com',
                        port: '',
                        pathname: '/u/**',
                  },
                  {
                        protocol: 'https',
                        hostname: 'lh3.googleusercontent.com',
                        port: '',
                        pathname: '/a/**',
                  },
                  {
                        protocol: 'https',
                        hostname: 'pbs.twimg.com',
                        port: '',
                        pathname: '/profile_images/**',
                  }
            ]
      }
}

module.exports = nextConfig
