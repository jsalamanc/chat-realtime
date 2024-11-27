/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'www.kuepa.com',
            port: '',
            pathname: '/assets/**'
        }]
    },
    env: {
        API_KEY: process.env.APY_KEY
    }
};

export default nextConfig;
