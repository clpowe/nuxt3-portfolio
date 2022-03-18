<template>
	<div>
		<div class="grid place-content-center h-[80vh]">
			<Hero />
		</div>
		<section>
			Work
			<MediaSlider>
				<div class="project1 h-48 w-78 bg-light-700">1</div>
			</MediaSlider>
		</section>
	</div>
</template>

<script setup>
	import Hero from '@ui/Hero.vue'
	import MediaSlider from '@/components/mediaSlider.vue'
</script>

<style lang="scss">
	.project1 {
		background-image: url('/gammage.png');
	}
</style>
