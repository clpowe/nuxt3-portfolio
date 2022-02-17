<template>
	<div>
		<h2>{{ skill }}</h2>
	</div>
</template>

<script setup>
	defineProps({
		skill: String
	})
</script>

<style lang="scss" scoped>
	h2 {
		font-family: 'Oswald', sans-serif;
		@apply font-extralight uppercase;
		letter-spacing: 0.1rem;
		font-weight: 100;
		color: white;
		display: block;
		align-self: center;
	}
</style>
