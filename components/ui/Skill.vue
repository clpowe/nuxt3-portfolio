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
		text-align: center;
		@apply font-extralight uppercase text-left;
		letter-spacing: 1rem;
		font-weight: 100;
		transition-timing-function: ease;
		color: white;
		z-index: 10;
		animation-delay: 250ms;
		will-change: transform;
		transition-property: all;
		display: block;
		align-self: center;
	}
</style>
