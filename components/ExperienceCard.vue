<template>
	<div>
		<div>
			<h3>{{ experience.company }}</h3>
			<div>
				<h4>{{ experience.role }}</h4>
				<p>{{ experience.date }}</p>
			</div>
			<dir v-for="tool in experience.tools" key="tool">{{ tool }}</dir>
			<div>
				<p>
					{{ experience.brief }}
				</p>
			</div>
			<nuxt-link to="/">View project</nuxt-link>
		</div>
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
