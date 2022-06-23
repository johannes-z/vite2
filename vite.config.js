import * as path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  optimizeDeps: {
    entries: 'src/dev.ts',
  },
  plugins: [
    createVuePlugin({
      jsx: true,
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: 'condense',
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'test',
      formats: ['umd'],
      fileName: (format) => 'test.js',
    },
  },
})
