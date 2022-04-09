<template>
	<div>
		<div
			class="absolute top-0 body w-full bg-cover bg-center bg-no-repeat h-[824px] z-0"
		></div>
		<div class="bg-light-800 pb-32 pt-[800px] px-[10%]">
			<div class="max-w-screen-md mx-auto space-y-20">
				<div class="max-w-screen-md mx-auto text-center">
					<h1>My Art</h1>
					<p class="font-sans">Just some fun with Photoshop</p>
				</div>
				<div class="flex flex-wrap gap-2">
					<div v-for="logo in logos" class="mx-auto">
						<div v-html="logo.code" class="mx-auto w-20"></div>
					</div>
				</div>
				<img
					src="https://ik.imagekit.io/cpds/Portfolio/ArtWork/StephCurry_m7GXsrw8m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165899716"
					alt=""
				/>
				<img
					src="https://ik.imagekit.io/cpds/Portfolio/ArtWork/DejounteMurray_MUvYIi-mb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649165897673"
					alt=""
				/>
				<img
					src="https://ik.imagekit.io/cpds/Portfolio/ArtWork/Happy_Birthday-1_nVL3Oz4wO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165899806"
					alt=""
				/>

				<img
					src="https://ik.imagekit.io/cpds/Portfolio/ArtWork/Lonnie_xUiF3Mg-F.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165898594"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const logos = ref([
		{
			name: 'Photoshop',
			code: `<svg id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.338 125.13">
  <g id="Surfaces">
    <g id="Photo_Surface">
      <g id="Outline_no_shadow">
        <path id="Path_43" data-name="Path 43" d="M22.727,0h82.885a22.707,22.707,0,0,1,22.727,22.727V102.4a22.707,22.707,0,0,1-22.727,22.727H22.727A22.707,22.707,0,0,1,0,102.4V22.727A22.707,22.707,0,0,1,22.727,0Z" fill="#001e36"/>
      </g>
    </g>
  </g>
  <g id="Outlined_Mnemonics_Logos" transform="translate(28.876 31.817)">
    <g id="Ps">
      <path id="Path_44" data-name="Path 44" d="M54,115.434V60.409c0-.374.16-.588.535-.588.909,0,1.765,0,2.995-.053,1.283-.053,2.62-.053,4.064-.107s2.995-.053,4.652-.107,3.262-.053,4.866-.053a31.442,31.442,0,0,1,11.016,1.658,19.1,19.1,0,0,1,7.166,4.385,17.026,17.026,0,0,1,3.9,6.1,20.467,20.467,0,0,1,1.23,6.952,19.118,19.118,0,0,1-3.208,11.39A18.32,18.32,0,0,1,82.609,96.5a34.657,34.657,0,0,1-12.032,1.818c-1.283,0-2.139,0-2.674-.053s-1.283-.053-2.3-.053v17.165a.665.665,0,0,1-.588.749H54.642C54.214,116.129,54,115.915,54,115.434ZM65.657,70.141V88.109c.749.053,1.444.107,2.085.107h2.834a19.975,19.975,0,0,0,6.15-.963,9.2,9.2,0,0,0,4.385-2.834,8.263,8.263,0,0,0,1.658-5.508,8.8,8.8,0,0,0-1.23-4.759A7.755,7.755,0,0,0,77.8,71.1a15.691,15.691,0,0,0-6.31-1.069c-1.39,0-2.62,0-3.636.053a12.244,12.244,0,0,0-2.192.053Z" transform="translate(-54 -59.5)" fill="#31a8ff"/>
      <path id="Path_45" data-name="Path 45" d="M167.94,96.385a18.926,18.926,0,0,0-5.134-1.818,28.189,28.189,0,0,0-5.989-.7,10.767,10.767,0,0,0-3.208.374,2.746,2.746,0,0,0-1.658,1.069,2.834,2.834,0,0,0-.428,1.444,2.379,2.379,0,0,0,.535,1.39,6.034,6.034,0,0,0,1.818,1.444c1.23.642,2.513,1.23,3.8,1.765a38.731,38.731,0,0,1,8.235,3.9,12.442,12.442,0,0,1,4.224,4.438,11.544,11.544,0,0,1,1.23,5.508,12.442,12.442,0,0,1-2.085,7.112,13.4,13.4,0,0,1-5.989,4.759,24.5,24.5,0,0,1-9.679,1.711,36.835,36.835,0,0,1-7.272-.7,21.571,21.571,0,0,1-5.454-1.711,1.052,1.052,0,0,1-.588-1.016v-9.3a.581.581,0,0,1,.214-.481.407.407,0,0,1,.481.053,22.891,22.891,0,0,0,6.631,2.62,24.894,24.894,0,0,0,6.31.8,10.206,10.206,0,0,0,4.438-.749,2.484,2.484,0,0,0,1.444-2.246,2.833,2.833,0,0,0-1.283-2.139,22.679,22.679,0,0,0-5.24-2.513,32.718,32.718,0,0,1-7.593-3.85,13.846,13.846,0,0,1-4.064-4.545,11.474,11.474,0,0,1-1.23-5.454,12.577,12.577,0,0,1,1.818-6.47,13.182,13.182,0,0,1,5.615-4.92A20.737,20.737,0,0,1,157.3,84.3a46.1,46.1,0,0,1,6.631.481,18.815,18.815,0,0,1,4.6,1.23.939.939,0,0,1,.535.481,2.684,2.684,0,0,1,.107.642V95.85a.658.658,0,0,1-.267.535A1.425,1.425,0,0,1,167.94,96.385Z" transform="translate(-94.146 -71.038)" fill="#31a8ff"/>
    </g>
  </g>
</svg>
`
		}
	])
</script>

<style scoped>
	.body {
		background-image: url('https://ik.imagekit.io/cpds/Portfolio/ArtWork/myartXsm_W17jhkpcQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165200509');

		@media (min-width: 768px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/ArtWork/myartSm_qVV8PB3b8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165200241');
		}
		@media (min-width: 1024px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/ArtWork/myart_wxWTGmXtP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165200410');
		}
		@media (min-width: 1280px) and (max-width: 1535.9px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/ArtWork/myartLg_us5AXJjT6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165200529');
		}
		@media (min-width: 1536px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/ArtWork/myartXL_XtlDftKZ1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649165200673');
		}
	}
</style>
