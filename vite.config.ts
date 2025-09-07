import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';

    return {
      define: {
        'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || '')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        minify: 'terser',
        terserOptions: isProduction ? {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
            passes: 2, // Reduced passes for safer compression
            unsafe: false, // Disable unsafe optimizations
            unsafe_comps: false,
            unsafe_Function: false,
            unsafe_math: false,
            unsafe_symbols: false,
            unsafe_methods: false,
            unsafe_proto: false,
            unsafe_regexp: false,
            unsafe_undefined: false
          },
          mangle: {
            properties: {
              regex: /^_[A-Za-z]/,
              keep_quoted: true, // Keep quoted properties safe
              reserved: ['ai', 'characters', 'userProfile', 'VITE_GEMINI_API_KEY', 'import', 'meta', 'env'] // Reserve critical properties
            },
            toplevel: false, // Disable toplevel mangling for safety
            safari10: true
          },
          format: {
            comments: false,
            ecma: 2020
          }
        } : undefined,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['@google/genai'],
              ui: ['jszip']
            }
          }
        },
        sourcemap: false, // Disable source maps for production
        cssMinify: 'esbuild'
      }
    };
});
