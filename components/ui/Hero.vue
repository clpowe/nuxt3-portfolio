<template>
	<div class="w-xs px-2 mx-auto text-center">
		<div class="w-full mx-auto -mb-10">
			<Top />
		</div>
		<div class="text-center text-light-100">
			<p class="intro">My name is</p>
			<!-- <h1 class="chris font-black uppercase block">Christopher</h1> -->
			<span class="chris uppercase block">Christopher</span><br />
			<h1 class="powe font-black uppercase block">Powe</h1>
			<div
				class="flex gap-4 mx-auto justify-center items-center align-middle w-full"
			>
				<Skill skill="Designer" />
				<Skill skill="Animator" />
				<Skill skill="Developer" />
			</div>
		</div>
		<div class="w-[15rem] mx-auto">
			<Bottom />
		</div>
	</div>

	<!-- <div class="container">
		<div class="Text">
			<div class="Name">
				<div class="name grid">
			
					<h1 class="uppercase text-5xl font-thin tracking-widest">
						Christopher
					</h1>
					<h1 class="powe uppercase text-5xl font-bold">Powe</h1>
				</div>
			</div>
			<div class="Skills">
				<div class="skills">
					<Skill skill="Designer" />
					<Skill skill="Animator" />
					<Skill skill="Developer" />
				</div>
			</div>
		</div>
	</div> -->
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
		margin-bottom: -5rem;
	}

	.chris {
		font-size: 2rem;
		line-height: 0rem;
		letter-spacing: 4px;
	}

	.powe {
		display: inline-block;
		font-size: 8rem;
		line-height: 6rem;
	}
	.intro {
		font-family: 'Comforter', cursive;
		color: var(--pink);
		z-index: 1;
		font-size: 4rem;
		line-height: 4rem;
	}
</style>
