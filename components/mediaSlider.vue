<template>
	<div class="container holder">
		<div ref="mediaScroller" class="media-scroller snaps-inline">
			<slot></slot>
		</div>
		<div
			class="absolute hidden top-0 left-0 h-full w-full md:flex justify-between items-center"
		>
			<button @click="slideLeft" class="btn-left">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 126">
					<path
						id="Polygon_4"
						data-name="Polygon 4"
						d="M63,0l63,47H0Z"
						transform="translate(0 126) rotate(-90)"
						fill="currentColor"
					/>
				</svg>
			</button>
			<button @click="slideRight" class="btn-right">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 126">
					<path
						id="Polygon_5"
						data-name="Polygon 5"
						d="M63,0l63,47H0Z"
						transform="translate(47) rotate(90)"
						fill="currentColor"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	const mediaScroller = ref()

	const slideLeft = () => {
		mediaScroller.value.scrollLeft -= 250
	}
	const slideRight = () => {
		mediaScroller.value.scrollLeft += 250
	}
</script>

<style scoped lang="scss">
	.media-scroller {
		display: grid;
		grid-template-rows: min-content;
		grid-auto-flow: column;
		grid-auto-columns: 100%;
		gap: 0rem;
		overflow-x: auto;
		overscroll-behavior-inline: contain;
		mask-image: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 10%,
			rgba(0, 0, 0, 1) 90%,
			rgba(0, 0, 0, 0) 100%
		);
		scroll-behavior: smooth;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		@media (min-width: 768px) {
			grid-auto-columns: 15%;
			gap: 2rem;
		}
	}

	.media-scroller::-webkit-scrollbar {
		display: none;
	}
	.snaps-inline {
		scroll-snap-type: inline mandatory;
		scroll-padding: 2rem;

		& > * {
			scroll-snap-align: start;
		}
	}

	.holder {
		position: relative;
	}

	button {
	}

	.btn-left,
	.btn-right {
		z-index: 50;
		width: 1.5rem;
		color: #fff;
		transition: all 0.2s ease;

		&:hover {
			color: var(--pink);
			width: 2rem;
		}
	}
</style>
