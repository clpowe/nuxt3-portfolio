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

	.container {
		@apply container mx-auto;
	}
</style>
