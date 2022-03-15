<template>
	<div ref="logo" class="logo">
		<Logo />
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import Logo from '../Logo.vue'
	import VanillaTilt from 'vanilla-tilt'

	const logo = ref()

	onMounted(() => {
		VanillaTilt.init(logo.value, {
			max: 25,
			speed: 400
		})
	})
</script>

<style>
	.logo {
		width: 100%;
		height: 100%;
		mix-blend-mode: overlay;
	}
</style>
