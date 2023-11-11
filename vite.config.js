import { defineConfig } from "vite";

export default defineConfig({
    build: {
        minify: "terser", // Default is 'terser', but you can also use 'esbuild'
        terserOptions: {
            compress: {
                drop_console: true, // Remove console logs for production
                // Other terser options here
            },
        },
    },
    // Other configurations...
});
