/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'www.kuepa.com',
            port: '',
            pathname: '/assets/**'
        }]
    }
};

export default nextConfig;
