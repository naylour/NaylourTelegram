import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    optimizeDeps: {
        exclude: ['svelte']
    },
    build: {
        lib: {
            name: '@naylour/telegram',
            entry: [
                resolve(import.meta.dirname, 'src/store.ts'),
                resolve(import.meta.dirname, 'src/reactivity.svelte.ts'),
                // resolve(import.meta.dirname, 'src/types.d.ts'),
            ],
            formats: ['es'],
        },
        rollupOptions: {
            external: ['svelte', 'esm-env'],
            output: {
                globals: {
                    svelte: 'svelte',
                    'esm-env': 'esm-env'
                }
            },
            plugins: [
                dts({
                    entryRoot: resolve(import.meta.dirname, 'src'),
                    tsconfigPath: resolve(import.meta.dirname, 'tsconfig.json'),
                })
            ]
        }
    }
})
