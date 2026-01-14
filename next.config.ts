import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  // allow mobile testing on LAN (dev only)
  allowedDevOrigins: [
    'http://192.168.128.1:3000',
    'http://localhost:3000',
  ],
}

export default withMDX(nextConfig)
