<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	import { ref, provide } from 'vue'

	const experience = ref([
		{
			title: '',
			type: '',
			date: ''
		}
	])
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');

	:root {
		--green: #23d5ab;
		--orange: #ee7752;
		--pink: #e73c7e;
		--blue: #23a6d5;
		--white: #eaeaea;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		font-family: 'Oswald', sans-serif;
		background-size: 100% 120%;

		background-image: radial-gradient(
			ellipse at top,
			var(--green),
			var(--blue),
			var(--pink)
		);

		// animation: gradient 15s ease infinite;

		@media (min-width: 640px) {
			background-image: radial-gradient(
				circle at top center,
				var(--green) 0%,
				var(--blue) 40%,
				var(--pink) 110%
			);
			// animation: gradient2 15s ease infinite;
		}
	}

	.container {
		@apply container mx-auto;
	}
</style>
