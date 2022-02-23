<template>
	<div>
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

<style></style>
