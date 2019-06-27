<script>
	export let name;
	export let address;
	export let email;
	export let phone;
	export let linkedin;

	import Personal from './Personal.svelte';
	import Summary from './Summary.svelte';
	import Achievements from './Achievements.svelte';
	import Career from './Career.svelte';
	import Education from './Education.svelte';
	import Additional from './Additional.svelte';
	import Interests from './Interests.svelte';

	// import common from './styles/common.svelte';

</script>

<div class="div-container">
	<!-- <Personal /> -->

	<Summary />

	<Achievements />

	<Career />

	<Education />

	<Additional />
	
	<Interests />

	<div>
		<strong style="font-style: italic">
			References available upon request
		</strong>
	</div>

</div>
