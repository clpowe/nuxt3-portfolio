<template>
	<div>
		<div class="grid place-content-center h-[80vh]">
			<Hero />
		</div>
		<section>
			Work
			<MediaSlider>
				<div>1</div>
				<div>1</div>
				<div>1</div>
			</MediaSlider>
		</section>
	</div>
</template>

<script setup>
	import Hero from '@ui/Hero.vue'
	import MediaSlider from '@/components/mediaSlider.vue'
</script>

<style lang="scss"></style>
