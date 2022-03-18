<template>
	<div class="bg-light-400 rounded-2xl p-4 space-y-2">
		<h3 class="text-2xl">{{ experience.company }}</h3>
		<div class="flex justify-between">
			<h4 class="text-lg uppercase">{{ experience.role }}</h4>
			<p class="text-lg uppercase">{{ experience.date }}</p>
		</div>
		<slot></slot>
		<div>
			<p class="text-body font-sans font-light text-gray-500">
				{{ experience.brief }}
			</p>
		</div>
		<nuxt-link to="/">View project</nuxt-link>
	</div>
</template>

<script setup lang="ts">
	import { PropType } from 'nuxt3/dist/app/compat/capi'

	interface Experience {
		company: String
		date: String
		brief: String
		role: String
		tools: String[]
	}

	const props = defineProps({
		experience: {
			type: Object as PropType<Experience>
		}
	})
</script>

<style lang="scss" scoped>
	h3 {
		color: var(--blue);
	}

	h4 {
		color: var(--pink);
	}
</style>
