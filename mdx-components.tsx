import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Optional: Add custom overrides here, e.g., for headings or code blocks
  };
}