import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'


// eslint-disable-next-line no-unused-vars
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: "@import './src/app.scss';",
		}
	}),
    // Remove vite-plugin-svelte warnings about unused CSS selectors
    onwarn: (warning, handler) => {
        const { code, frame } = warning;
        if (code === 'css-unused-selector') return;
        handler(warning);
    },
	kit: {
		adapter: adapter()
	}
};

export default config;