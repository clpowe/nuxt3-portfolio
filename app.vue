<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');

	:root {
		--green: #23d5ab;
		--orange: #ee7752;
		--pink: #e73c7e;
		--blue: #23a6d5;
		--white: #fffcf9;
	}

	body {
		font-family: 'Oswald', sans-serif;
		background-size: 100% 100%;
		height: 100vh;
		background-image: linear-gradient(
			-180deg,
			var(--green),
			var(--blue),
			var(--pink)
		);

		// animation: gradient 15s ease infinite;

		@media (min-width: 640px) {
			background-size: 100% 200%;
			background-image: linear-gradient(
				45deg,
				var(--pink),
				var(--blue),
				var(--green)
			);
			// animation: gradient2 15s ease infinite;
		}
	}

	// @keyframes gradient {
	// 	0% {
	// 		background-position: 50% 0%;
	// 	}
	// 	50% {
	// 		background-position: 0% 100%;
	// 	}
	// 	100% {
	// 		background-position: 50% 0%;
	// 	}
	// }
	// @keyframes gradient2 {
	// 	0% {
	// 		background-position: 0% 50%;
	// 	}
	// 	50% {
	// 		background-position: 100% 50%;
	// 	}
	// 	100% {
	// 		background-position: 0% 50%;
	// 	}
	// }

	.container {
		@apply container mx-auto;
	}
</style>
