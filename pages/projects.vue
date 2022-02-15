<template>
	<div>
		<h1>Projects</h1>
		<div>
			<div v-for="project in projects" :key="project.name">
				<NuxtLink :to="`/projects/${project.name}`">
					{{ project.name }}
				</NuxtLink>
			</div>
		</div>
		<Transition mode="out-in">
			<div>
				<NuxtPage :key="$route.fullPath" />
			</div>
		</Transition>
	</div>
</template>

<script setup>
	import { inject } from 'vue'

	const projects = inject('projects')
</script>

<style lang="scss" scoped></style>
