<template>
	<div>
		<div class="grid place-content-center h-[80vh]">
			<Hero />
		</div>
		<section>
			Work
			<div>
				<NuxtLink to="/gammunition" class="z-30">
					<div class="gammunition h-48 w-78 bg-center bg-contain"></div>
				</NuxtLink>
				<NuxtLink to="/gammunition" class="z-30">
					<div class="agape h-48 w-78 bg-center bg-contain"></div>
				</NuxtLink>
				<NuxtLink to="/gammunition" class="z-30">
					<div class="easynote h-48 w-78 bg-center bg-contain"></div>
				</NuxtLink>
				<NuxtLink to="/gammunition" class="z-30">
					<div class="gammunition h-48 w-78 bg-center bg-contain"></div>
				</NuxtLink>
			</div>
		</section>
	</div>
</template>

<script setup>
	import Hero from '@ui/Hero.vue'
	import MediaSlider from '@/components/mediaSlider.vue'
</script>

<style lang="scss">
	.gammunition {
		background-image: url('/gammunitionlink.png');
	}
	.easynote {
		background-image: url('/Easklink.png');
	}
	.agape {
		background-image: url('/Agapelink.png');
	}
</style>
