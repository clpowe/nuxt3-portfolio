<template>
	<div>
		<div class="grid place-content-center h-[80vh]">
			<Hero />
		</div>
		<section id="work" class="my-48">
			<div class="container mx-auto flex justify-center gap-4 flex-wrap">
				<NuxtLink to="/gammunition" class="z-30">
					<div class="gammunition h-48 w-78 bg-center bg-cover"></div>
				</NuxtLink>
				<NuxtLink to="/agapechristian" class="z-30">
					<div class="agape h-48 w-78 bg-center bg-cover"></div>
				</NuxtLink>
				<NuxtLink to="/notes-app" class="z-30">
					<div class="easynote h-48 w-78 bg-center bg-no-repet bg-cover"></div>
				</NuxtLink>
				<NuxtLink to="/myart" class="z-30">
					<div class="photoshop h-48 w-78 bg-center bg-no-repet bg-cover"></div>
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
		background-image: url('https://ik.imagekit.io/cpds/Portfolio/gammunitionlink_KeTH1iZuB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649120239455');
	}
	.easynote {
		background-image: url('https://ik.imagekit.io/cpds/Portfolio/EaskLink_b5JBAcvTf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649120180128');
	}
	.agape {
		background-image: url('https://ik.imagekit.io/cpds/Portfolio/AgapeLink_A2nL3wMB4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649120180595');
	}
	.photoshop {
		background-image: url('https://ik.imagekit.io/cpds/Portfolio/ArtWork/myart_wxWTGmXtP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165200410');
	}
</style>
