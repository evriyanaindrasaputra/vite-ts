import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  test: {
    alias: { '~': './src' },
    include: ['**/*.test.ts{,x}'],
    coverage: {
      // Coverage reporters
      all: true,
      include: ['src/**/*.ts{,x}'],
      exclude: ['src/*.ts{,x}', '**/*.test.ts{,x}'],

      // Coverage thresholds
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
  },
})
