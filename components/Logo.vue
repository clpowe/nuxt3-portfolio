<template>
	<div>
		<div class="w-[85%] mix-blend-luminosity mx-auto md:w-[24rem]">
			<Top />
		</div>

		<div class="text-center text-light-100">
			<span class="chris text-[var(--white)] uppercase block">Christopher</span
			><br />

			<div class="powe font-black uppercase block flex justify-center">
				Powe
			</div>

			<div
				class="flex gap-4 mx-auto justify-center items-center align-middle w-full mt-1"
			>
				<Skill skill="Designer" />
				<Skill skill="Animator" />
				<Skill skill="Developer" />
			</div>
		</div>
		<div class="w-[80%] mix-blend-luminosity mx-auto mt-3 md:(mt-5 w-[22rem])">
			<Bottom />
		</div>
	</div>
</template>

<script setup>
	import Skill from './ui/Skill.vue'
	import Top from './Top.vue'
	import Bottom from './Bottom.vue'
</script>

<style lang="scss" scoped>
	.headTop {
		transform-origin: bottom left;
	}
	.face {
		mix-blend-mode: luminosity;
		width: 28rem;
	}

	.top {
		margin-bottom: 0rem;
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
		font-size: 8rem;
		line-height: 6rem;
		margin-top: 0.3rem;
		margin-bottom: 1.3rem;
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
