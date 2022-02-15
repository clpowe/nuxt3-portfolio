<template>
	<div>
		<h3>Child</h3>
		{{ $route.params.project }}
	</div>
</template>

<script setup>
	defineProps({
		project: Object
	})
</script>
