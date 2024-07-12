import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { transform } from 'esbuild';
import pkg from './package.json';

const bundleComponents = process.env.BUNDLE_COMPONENTS ?? true;

// https://vitejs.dev/config/
export default defineConfig({
  root: './packages/lib/',
  build: {
    outDir: '../../dist/lib/web-components',
    emptyOutDir: true,
    lib: {
      entry: './index.ts',
      formats: bundleComponents ? ['es', 'esm', 'umd'] as any : ['es'],
      name: pkg.name.replace(/-./g, (char) => char[1].toUpperCase()),
      fileName: (format) => ({
        es: `index.js`,
        esm: `index.min.js`,
        umd: `index.umd.js`,
      })[format]
    },
    rollupOptions: {
      output: bundleComponents ? {} : {
        inlineDynamicImports: false,
        chunkFileNames: "[name].js",
        manualChunks: { 'svelte': ["svelte"] }
      }
    }
  },
  plugins: [
    svelte({
      include: /.svelte$/ as any,
      compilerOptions: {
        customElement: true,
      },
    }),
    minifyEs()
  ]
});

// Workaround for https://github.com/vitejs/vite/issues/6555
function minifyEs() {
  return {
    name: 'minifyEs',
    renderChunk: {
      order: 'post' as const,
      async handler(code, chunk, outputOptions) {
        if (outputOptions.format === 'es' && (!bundleComponents || chunk.fileName.endsWith('.min.js'))) {
          return await transform(code, { minify: true });
        }
        return code;
      },
    }
  };
}
