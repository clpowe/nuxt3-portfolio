<template>
	<div class="flex flex-col justify-center h-screen">
		<div class="face mx-auto top">
			<Top />
		</div>
		<div class="text-center text-light-100 justify-center">
			<div class="welcome">
				<div class="intro">My name is</div>
			</div>
			<div class="font-black uppercase chris">Christopher</div>
			<div class="font-black uppercase powe">Powe</div>
			<div class="skills flex gap-4 mx-auto justify-center">
				<Skill skill="Designer" />
				<Skill skill="Animator" />
				<Skill skill="Developer" />
			</div>
		</div>
		<div class="face mx-auto">
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
		line-height: 0;
		margin: 0;
	}

	.powe {
		font-size: 14rem;
		letter-spacing: -1.5rem;
		mix-blend-mode: screen;
		line-height: 110%;
	}
	.intro {
		font-family: 'Comforter', cursive;
		color: var(--pink);
		z-index: 1;
		font-size: 5rem;
		margin-bottom: -1.6rem;
	}
</style>
