<template>
	<div
		class="w-xs h-lg px-2 my-24 mx-auto text-center text-[var(--white)] md:(w-md)"
	>
		<div class="w-full mix-blend-luminosity mx-auto -mb-8 md:(w-[95%])">
			<Top />
		</div>
		<div class="text-center text-light-100">
			<p class="intro relative">My name is</p>

			<span class="chris text-[var(--white)] uppercase block">Christopher</span
			><br />
			<h1 class="powe font-black uppercase block">Powe</h1>
			<div
				class="flex gap-4 mx-auto justify-center items-center align-middle w-full mt-1"
			>
				<Skill skill="Designer" />
				<Skill skill="Animator" />
				<Skill skill="Developer" />
			</div>
		</div>
		<div class="w-[80%] mix-blend-luminosity mx-auto mt-3 md:(mt-5 w-[75%])">
			<Bottom />
		</div>
	</div>
</template>

<script setup>
	import Skill from './Skill.vue'
	import Top from '../Top.vue'
	import Bottom from '../Bottom.vue'
	import lottie from 'lottie-web'

	import { ref, onMounted } from 'vue'

	const anim = ref()
</script>

<style lang="scss" scoped>
	.face {
		mix-blend-mode: luminosity;
		width: 28rem;
	}

	.top {
		margin-bottom: -2rem;
	}

	.chris {
		font-size: 2rem;
		line-height: 0rem;
		letter-spacing: 4px;
		mix-blend-mode: luminosity;

		@media (min-width: 768px) {
			font-size: 2.5rem;
		}
	}

	.powe {
		display: inline-block;
		font-size: 8rem;
		line-height: 6rem;
		mix-blend-mode: luminosity;
		color: #eaeaea;
		@media (min-width: 768px) {
			font-size: 10rem;
			line-height: 7.5rem;
		}
	}
	.intro {
		font-family: 'Comforter', cursive;
		color: var(--pink);
		z-index: 2;
		font-size: 3rem;
		line-height: 3rem;

		@media (min-width: 768px) {
			font-size: 4rem;
			line-height: 4rem;
		}
	}
</style>
