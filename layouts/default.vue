<template>
	<div class="bg">
		<Nav />
		<slot />
		<!-- <Footer /> -->
	</div>
</template>

<script setup>
	import Nav from '@common/Navbar.vue'
	import Footer from '@common/Footer.vue'

	import { provide, reactive } from 'vue'

	const projects = ref([
		{
			name: 'Gammunition'
		},
		{
			name: 'Agape'
		}
	])

	provide('projects', projects)
</script>

<style lang="scss">
	body {
		font-family: 'Oswald', sans-serif;
		background-size: 100% 120%;
		height: 100%;

		background-image: radial-gradient(
			ellipse at top,
			var(--green),
			var(--blue),
			var(--pink)
		);
		background-repeat: repeat;
		background-size: cover;
		// animation: gradient 15s ease infinite;

		@media (min-width: 640px) {
			background-image: radial-gradient(
				circle at top center,
				var(--green) 0%,
				var(--blue) 40%,
				var(--pink) 110%
			);
			background-repeat: repeat;
			background-size: cover;
			// animation: gradient2 15s ease infinite;
		}
	}
</style>
