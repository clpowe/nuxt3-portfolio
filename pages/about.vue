<template>
	<div>
		<section>
			<img src="/PhotoAbout.png" alt="" />
			<h1>About Me</h1>
			<p>
				I’m creative. I’m a problem-solver. I want the work I do to not only
				look good, but to provide solutions to the challenges my clients face.
				That’s what drives me to experiment and explore the world of graphic and
				web design.
			</p>
			<p>
				I don’t blindly follow trends, but I also don’t ignore them. I seek to
				understand them. From there, I analyze the information gathered and
				create better solutions for my clients.
			</p>
		</section>
		<section>
			<h2>Experience</h2>

			{{ experiences[0].tools }}

			<ExperienceCard />
		</section>
		<section>
			<h2>Skills</h2>
			<div>
				<Pill />
			</div>
		</section>
		<section>
			<div>Chart</div>
		</section>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { db } from '../firebase/config'
	import { collection, getDocs } from 'firebase/firestore'

	const experiences = ref([])

	try {
		const responce = await getDocs(collection(db, 'experiences'))
		responce.forEach((exp) => {
			experiences.value.push({ ...exp.data(), id: exp.id })
		})
	} catch (error) {
		console.log(error)
	}
</script>
