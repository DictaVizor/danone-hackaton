/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'media.graphassets.com',
            port: '',
            
        }]
    }
}

module.exports = withSvgr(nextConfig)
