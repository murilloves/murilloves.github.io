import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Murillo Silva',
		address: '09 H-40 Street - Santa Fe - Aparecida de Goiania',
		email: 'murillov.dev@gmail.com',
		phone: '+55 62 983-196-600',
		linkedin: {
			url: 'www.linkedin.com/in/murillo-vieira',
			link: 'https://linkedin.com/in/murillo-vieira'
		}
	}
});

export default app;
