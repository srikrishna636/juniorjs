import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Add MDX as page extension
};

const withMDX = createMDX({
  // Add any MDX options here if needed later
});

export default withMDX(nextConfig);