/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    test: {
        globals: true,
        environment: 'jsdom',
        css: true,
        setupFiles: './src/test/setup.ts',
        coverage: {
            provider: 'v8',
        },
    },
});
