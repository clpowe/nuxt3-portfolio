<template>
	<div
		class="absolute top-0 body w-full bg-cover bg-center bg-no-repeat h-[824px] z-0"
	></div>
	<div class="bg-light-800 pb-32 pt-[800px] px-[10%]">
		<div class="max-w-screen-md mx-auto space-y-20">
			<div class="max-w-screen-md mx-auto text-center">
				<h1>Agape Christian Bar Prep</h1>
				<p class="font-sans">Website for Agape bar preperation services</p>
			</div>
			<div class="flex flex-wrap gap-2">
				<div v-for="logo in logos" class="mx-auto">
					<div v-html="logo.code" class="mx-auto w-20"></div>
				</div>
			</div>
			<img
				src="https://ik.imagekit.io/cpds/Portfolio/Agape/AgapeOne_PWB01nYaj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649162197236"
				alt=""
			/>
			<img
				src="https://ik.imagekit.io/cpds/Portfolio/Agape/AgapeTwo_PVBQX4GPc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649162196812"
				alt=""
			/>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const logos = ref([
		{
			name: 'Adobe XD',
			code: `<svg id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.338 125.13">
  <g id="Surfaces">
    <g id="UI_UX_Surface">
      <g id="Outline_no_shadow">
        <path id="Path_46" data-name="Path 46" d="M22.727,0h82.885a22.707,22.707,0,0,1,22.727,22.727V102.4a22.707,22.707,0,0,1-22.727,22.727H22.727A22.707,22.707,0,0,1,0,102.4V22.727A22.707,22.707,0,0,1,22.727,0Z" fill="#470137"/>
      </g>
    </g>
  </g>
  <g id="Outlined_Mnemonics_Logos" transform="translate(18.695 27.424)">
    <g id="Xd">
      <path id="Path_47" data-name="Path 47" d="M83.75,60.8,67.708,87.272,84.82,115.346a.92.92,0,0,1,.107.642c-.053.214-.267.053-.588.107H72.093c-.856,0-1.444-.053-1.818-.588-1.123-2.246-2.3-4.438-3.422-6.684-1.123-2.192-2.353-4.438-3.636-6.738s-2.567-4.6-3.85-6.952h-.107c-1.123,2.3-2.353,4.6-3.583,6.9s-2.46,4.6-3.636,6.845c-1.23,2.246-2.46,4.545-3.69,6.738-.214.535-.642.588-1.23.588H35.356c-.214,0-.374.107-.374-.16a.743.743,0,0,1,.107-.588l16.63-27.272-16.2-27.432c-.16-.214-.214-.428-.107-.535A.62.62,0,0,1,35.944,60H48.083a3.156,3.156,0,0,1,.749.107,1.517,1.517,0,0,1,.535.481c1.016,2.3,2.192,4.6,3.422,6.9,1.283,2.3,2.513,4.545,3.85,6.791,1.283,2.246,2.46,4.492,3.583,6.791h.107c1.123-2.353,2.3-4.652,3.476-6.9s2.406-4.492,3.636-6.738,2.406-4.545,3.583-6.738a.909.909,0,0,1,.321-.535,1.02,1.02,0,0,1,.7-.107H83.322a.493.493,0,0,1,.588.374c.053.053-.053.267-.16.374Z" transform="translate(-34.961 -55.339)" fill="#ff61f6"/>
      <path id="Path_48" data-name="Path 48" d="M152.811,113.162a26.585,26.585,0,0,1-11.5-2.406,18.643,18.643,0,0,1-8.075-7.272A23.138,23.138,0,0,1,130.3,91.291a21.962,21.962,0,0,1,2.941-11.283,22.206,22.206,0,0,1,8.5-8.288,27.353,27.353,0,0,1,13.529-3.1,9.549,9.549,0,0,1,1.123.053c.481.053,1.016.053,1.658.107v-16.9c0-.374.16-.588.535-.588h10.855a.48.48,0,0,1,.535.374v51.014c0,.963.053,2.032.107,3.208.107,1.123.16,2.192.214,3.1a.868.868,0,0,1-.535.856,40.838,40.838,0,0,1-8.716,2.567A47.168,47.168,0,0,1,152.811,113.162Zm5.24-10.695V78.939a13.678,13.678,0,0,0-1.444-.267c-.588-.053-1.176-.107-1.765-.107a13.182,13.182,0,0,0-6.043,1.39,11.988,11.988,0,0,0-4.545,3.957A11.854,11.854,0,0,0,142.49,90.7a14.9,14.9,0,0,0,.909,5.508,10.451,10.451,0,0,0,2.406,3.8,9.238,9.238,0,0,0,3.636,2.139,14,14,0,0,0,4.438.7c.8,0,1.551-.053,2.246-.107A4.677,4.677,0,0,0,158.051,102.468Z" transform="translate(-79.316 -51.284)" fill="#ff61f6"/>
    </g>
  </g>
</svg>
`
		},

		{
			name: 'Javascript',
			code: `<svg id="javascript" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.243 130.972">
  <rect id="Rectangle_47" data-name="Rectangle 47" width="42.491" height="87.036" transform="translate(59.405 19.625)" fill="#fff"/>
  <path id="Path_101" data-name="Path 101" d="M10.606,117.888-.09.13,115.153.175,104.546,117.8l-47.1,13.3Zm85.266-6.427L104.814,10.6H57.621l.361,111.239ZM53.216,25.39H41.755L41.62,85.752,19.372,79.684l.045,13.8,33.8,9.124Z" transform="translate(0.09 -0.13)" fill="#d4b830"/>
  <path id="Path_102" data-name="Path 102" d="M406.189,563.87c-1.483-.45-8.809-2.427-16.27-4.449L376.39,555.78v-6.787c0-6.652,0-6.787.674-6.562.359.135,5.3,1.483,10.967,3.056l10.293,2.83.09-30.114.09-30.114H409.74v38.294c0,30.429-.09,38.294-.4,38.294-.225-.045-1.663-.4-3.144-.809Z" transform="translate(-356.66 -462.517)" fill="rgba(235,235,235,0)" opacity="0.986" style="isolation: isolate"/>
  <path id="Path_103" data-name="Path 103" d="M371.315,551.047l-.045-13.8s14.2,4,22.248,6.068L393.653,483h11.461v77.171Z" transform="translate(-351.808 -457.694)" fill="rgba(235,235,235,0.92)" opacity="0.986" style="isolation: isolate"/>
  <path id="Path_104" data-name="Path 104" d="M1101.11,199.1H1148.3l-8.942,100.859-38.249,10.382Zm35.822,83.959,3.1-37.71-22.922,2.562V227.776l24.452-.09.989-13.753-36.9.18.495,50.07,22.293-3.82-.314,11.147-22.473,5.978.225,13.664,31.058-8.09Z" transform="translate(-1043.399 -188.673)" fill="#fdd83c"/>
</svg>

`
		},
		{
			name: 'CSS',
			code: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 115.243 129.648">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0.39" stop-color="#d1d3d4" stop-opacity="0"/>
      <stop offset="1" stop-color="#d1d3d4"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="0" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-3" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#e8e7e5"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
  </defs>
  <g id="Group_54" data-name="Group 54" transform="translate(-1104.127 -2202)">
    <g id="css3" transform="translate(1104.127 2202)">
      <path id="Path_91" data-name="Path 91" d="M104.437,117.041,57.62,129.648,10.8,117.041,0,0H115.243Z" fill="#2062af"/>
      <path id="Path_92" data-name="Path 92" d="M167.64,27.58V137.695l.107.027,37.887-10.2,8.744-99.941Z" transform="translate(-110.02 -18.1)" fill="#3c9cd7"/>
      <path id="Path_93" data-name="Path 93" d="M103.538,84.188,70.03,98.143l1.11,13.817,32.4-13.852L138,83.373l1.426-14.133Z" transform="translate(-45.96 -45.441)" fill="#fff"/>
      <path id="Path_94" data-name="Path 94" d="M70.03,126.685,71.14,140.5l32.4-13.852V112.73Z" transform="translate(-45.96 -73.983)" fill="url(#linear-gradient)"/>
      <path id="Path_95" data-name="Path 95" d="M203.41,69.24,167.52,84.188v13.92l34.464-14.735Z" transform="translate(-109.941 -45.441)" fill="url(#linear-gradient-2)"/>
      <path id="Path_96" data-name="Path 96" d="M70.18,153.33l1.114,13.817,49.708.158-1.11,18.423-16.357,4.606-15.725-3.97-.956-11.435H72.246L74.15,197l29.542,8.737,29.377-8.579,3.812-43.83Z" transform="translate(-46.058 -100.629)" fill="url(#linear-gradient-3)"/>
      <g id="Group_53" data-name="Group 53" transform="translate(24.07 52.701)" opacity="0.05">
        <path id="Path_97" data-name="Path 97" d="M103.538,153.33H70.03l1.11,13.817,32.4.1Z" transform="translate(-70.03 -153.33)" fill="#231f20"/>
        <path id="Path_98" data-name="Path 98" d="M107.483,231.53l-.158.045L91.6,227.605l-.952-11.435H76.04l1.9,22.073,29.539,8.737Z" transform="translate(-73.974 -194.571)" fill="#231f20"/>
      </g>
      <path id="Path_99" data-name="Path 99" d="M61.25,69.24h72.417L132.24,83.373H63Z" transform="translate(-40.198 -45.441)" fill="url(#linear-gradient-3)"/>
      <path id="Path_100" data-name="Path 100" d="M97.776,69.24H61.25L63,83.373h34.78Z" transform="translate(-40.198 -45.441)" fill="#231f20" opacity="0.05"/>
    </g>
  </g>
</svg>

`
		},
		{
			name: 'HTML',
			code: `<svg id="Group_51" data-name="Group 51" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.317 129.648">
  <path id="Path_85" data-name="Path 85" d="M0,0,10.4,116.687l46.685,12.96L103.9,116.669,114.317,0Z" transform="translate(0 0.001)" fill="#e44d26"/>
  <path id="Path_86" data-name="Path 86" d="M216.79,146.373l37.828-10.487,8.9-99.7H216.79Z" transform="translate(-159.632 -26.645)" fill="#f16529"/>
  <path id="Path_87" data-name="Path 87" d="M116.568,119.433H97.63l-1.308-14.655h20.246V90.466H80.682l.342,3.84,3.517,39.438h32.026Z" transform="translate(-59.41 -66.614)" fill="#ebebeb"/>
  <path id="Path_88" data-name="Path 88" d="M129.134,297.451l-.063.017-15.938-4.3-1.019-11.414H97.747l2.005,22.471,29.316,8.138.066-.018Z" transform="translate(-71.975 -207.464)" fill="#ebebeb"/>
  <path id="Path_89" data-name="Path 89" d="M216.6,200.33v14.311h17.623L232.563,233.2,216.6,237.51V252.4l29.339-8.131.215-2.417,3.363-37.677.349-3.843H216.6Z" transform="translate(-159.493 -147.512)" fill="#fff"/>
  <path id="Path_90" data-name="Path 90" d="M216.6,90.467v14.311H251.17l.287-3.217.652-7.255.342-3.84Z" transform="translate(-159.493 -66.614)" fill="#fff"/>
</svg>
`
		}
	])
</script>

<style scoped>
	.body {
		background-image: url('https://ik.imagekit.io/cpds/Portfolio/Agape/AgapeXsm_FO4WG_U7q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649161983994');

		@media (min-width: 768px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/Agape/AgapeSm_w7Vt-UiQJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649161984260');
		}
		@media (min-width: 1024px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/Agape/Agape_YWod6zP0sl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649161984438');
		}
		@media (min-width: 1280px) and (max-width: 1535.9px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/Agape/AgapeMd_F-IF25gPJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649161984857');
		}
		@media (min-width: 1536px) {
			background-image: url('https://ik.imagekit.io/cpds/Portfolio/Agape/AgapeXL_OB2z7vPSb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649161985176');
		}
	}
</style>
