<template>
	<nav class="z-50">
		<div
			class="container w-full grid text-white py-5 my-5 px-6 place-items-center sm:(grid-cols-3)"
		>
			<div class="hidden sm:block justify-self-start uppercase tracking-widest">
				<NuxtLink to="/" class="branding"> Christopher Powe </NuxtLink>
			</div>
			<div class="fill-white h-10 hover:animate-bounce">
				<Github />
			</div>
			<ul
				class="hidden sm:flex justify-self-end uppercase space-x-9 tracking-widest items-center"
			>
				<li text="About">
					<NuxtLink to="/about" class="z-50">About</NuxtLink>
				</li>
				<li text="Work">
					<NuxtLink to="/projects">Work</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
	import Github from '../GithubIcon.vue'
</script>

<style lang="scss" scoped>
	.branding {
		position: relative;
		font-family: 'Oswald', sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
		z-index: 1;

		&:hover {
			&::after {
				color: var(--pink);
				content: 'Christopher Powe';
				position: absolute;
				font-family: 'Comforter';
				text-transform: none;
				letter-spacing: normal;
				left: -10px;
				font-size: 2.4rem;
			}
		}
	}

	ul {
		li {
			font-family: 'Oswald', sans-serif;
			font-weight: 200;
			text-align: center;
			font-size: 1.5rem;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			position: relative;

			&:hover {
				&::after {
					color: var(--pink);
					content: attr(text);
					position: absolute;
					font-family: 'Comforter';
					text-transform: none;
					letter-spacing: normal;
					left: 0;
					font-size: 2.4rem;
					transform: rotate(-5deg);
				}
			}
		}
	}
</style>
