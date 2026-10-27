import { defineConfig } from 'vite';
 
export default defineConfig({
    base: "/SiteWeb/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});
 