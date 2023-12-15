// import adapter from '@sveltejs/adapter-auto';
// // import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter()
//   },
//   preprocess: vitePreprocess()
// };
// export default config;

import node from '@sveltejs/adapter-node';
const config = {
	kit: {
		adapter: node(),
    methodOverride:{
      allowed: ['PATCH', 'DELETE']
    },
	}
};

export default config;