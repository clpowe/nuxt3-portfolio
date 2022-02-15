<template>
	<div class="content grid place-content-center">
		<div class="grid grid-cols-1 grid-row-auto">
			<div class="intro">My name is</div>
			<div class="name grid">
				<h1 class="">Christopher</h1>
				<h1 class="powe">Powe</h1>
			</div>
			<div class="skills">
				<Skill skill="Designer" />
				<Skill skill="Animator" />
				<Skill skill="Developer" />
			</div>
			<img src="/Portrait.svg" class="mix-blend-add w-auto" alt="" />
		</div>
	</div>
</template>

<script setup>
	import Skill from './Skill.vue'
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
		font-family: 'Oswald', sans-serif;

		h1 {
			color: white;
			@apply uppercase text-5xl;
		}
		.powe {
			@apply tracking-tighter uppercase;
			line-height: 0.7;
			font-size: 10rem;
			margin-left: -0.4rem;
			font-weight: 600;
		}

		.intro {
			font-family: 'Comforter', cursive;
			@apply text-5xl -mb-5;
			color: var(--pink);
			z-index: 1;
		}

		.skills {
			@apply flex flex-col gap-3;
		}
	}
</style>
