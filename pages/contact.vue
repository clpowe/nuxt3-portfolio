<template>
	<section class="h-screen px-[10%]">
		<div class="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto mt-48">
			<div>
				<h1 class="text-5xl uppercase font-bold text-light-300">Contact Me</h1>
				<p class="font-sans">I would be glad to answer any questions</p>
			</div>
			<div class="l-form">
				<div v-if="success" class="text-light-300">{{ success }}</div>
				<div class="lds-ripple" v-if="isFetching">
					<div></div>
					<div></div>
				</div>
				<form v-else-if="!success" v-on:submit.prevent="handleSubmit">
					<div v-if="error" class="text-light-300">{{ error }}</div>
					<div class="form_div">
						<label class="form_label z-10 text-light-300" for="name">
							Name
						</label>
						<input
							class="form_input text-light-300"
							type="text"
							name="name"
							v-model="name"
						/>
					</div>
					<div class="form_div">
						<label class="form_label text-light-300" for="email">Email</label>
						<input
							class="form_input"
							type="email"
							name="email"
							v-model="email"
						/>
					</div>
					<div class="form_div">
						<label class="form_label text-light-300" for="message"
							>Message</label
						>
						<textarea
							class="form_input"
							name="message"
							v-model="message"
						></textarea>
					</div>
					<!-- your other form fields go here -->
					<button>Send</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from 'vue'

	const isFetching = ref(false)
	const name = ref(null)
	const email = ref(null)
	const message = ref(null)
	const error = ref()
	const success = ref()

	const handleSubmit = async () => {
		isFetching.value = true
		error.value = null
		success.value = null
		try {
			const res = await $fetch('https://formspree.io/f/xeqnlbgd', {
				method: 'POST',
				body: { name: name.value, email: email.value, message: message.value }
			})
			if (res.ok) {
				isFetching.value = false
				error.value = null
				success.value = "Thanks I'll be contacting you soon!"
			}
		} catch (err) {
			isFetching.value = false
			success.value = null
			error.value = 'Oops! There was a problem submitting your form'
			console.log(error.value)
		}
	}
</script>

<style lang="scss">
	.form_div {
		@apply flex flex-col;
	}

	.lds-ripple {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ripple div {
		position: absolute;
		border: 4px solid #fff;
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	.lds-ripple div:nth-child(2) {
		animation-delay: -0.5s;
	}
	@keyframes lds-ripple {
		0% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 0px;
			left: 0px;
			width: 72px;
			height: 72px;
			opacity: 0;
		}
	}
</style>
