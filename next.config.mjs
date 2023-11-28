import { env } from './env.mjs';
import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';
const { i18n } = require('./next-i18next.config.mjs');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withPlugins(
  [[withBundleAnalyzer({ enabled: env.ANALYZE })]],
  {
    i18n,
    reactStrictMode: true,
    experimental: { instrumentationHook: true },
    rewrites() {
      return [
        { source: '/healthz', destination: '/api/health' },
        { source: '/api/healthz', destination: '/api/health' },
        { source: '/health', destination: '/api/health' },
        { source: '/ping', destination: '/api/health' },
      ];
    },
  }
);

module.exports = nextConfig;
