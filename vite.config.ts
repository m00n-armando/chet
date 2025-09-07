import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';

    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
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
            passes: 3, // Multiple passes for better compression
            unsafe: true,
            unsafe_comps: true,
            unsafe_Function: true,
            unsafe_math: true,
            unsafe_symbols: true,
            unsafe_methods: true,
            unsafe_proto: true,
            unsafe_regexp: true,
            unsafe_undefined: true
          },
          mangle: {
            properties: {
              regex: /^_[A-Za-z]/,
              keep_quoted: false,
              reserved: ['ai', 'characters', 'userProfile'] // Keep important global variables
            },
            toplevel: true,
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
