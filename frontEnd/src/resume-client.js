import { app, store } from './resume.js'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
//store.replaceState(window.__INITIAL_STATE__)

// actually mount to DOM

console.log(app);
app.$mount('#app');
