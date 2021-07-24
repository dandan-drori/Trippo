<template>
	<section class="about">
		<h1>Our Team</h1>
		<section class="cards-container">
			<article v-for="(card, idx) in cards" :key="idx" class="card">
				<img :src="card.imgUrl" alt="profile" />
				<h3>{{ card.heading }}</h3>
				<div class="social">
					<a :href="card.github" target="_blank">
						<FontAwesomeIcon :icon="github" />
					</a>
					<a :href="card.linkedin" target="_blank">
						<FontAwesomeIcon :icon="linkedin" />
					</a>
				</div>
			</article>
		</section>
		<section class="stack">
			<h2>Our tech stack</h2>
			<ul>
				<li>Vue.js</li>
				<li>SCSS</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>MongoDB</li>
        <li>Web Sockets</li>
			</ul>
		</section>
	</section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default {
	components: { FontAwesomeIcon },
	props: {},
	data() {
		return {
			github: faGithub,
			linkedin: faLinkedin,
			cards: [
				{
					imgUrl:
						'https://res.cloudinary.com/dandan-img-cloud/image/upload/v1626605750/jpucx1tza5s0rrfidjrj.jpg',
					heading: 'Daniel',
					github: 'https://github.com/Danielbarak618',
					linkedin: 'https://www.linkedin.com/in/daniel-barak-54b162204/',
				},
				{
					imgUrl:
						'https://res.cloudinary.com/dandan-img-cloud/image/upload/v1626605720/tuaqdrt6gmhrbqnjkd5w.jpg',
					heading: 'Guy',
					github: 'https://github.com/guyjof?tab=repositories',
					linkedin: 'https://www.linkedin.com/in/guyjof/',
				},
				{
					imgUrl:
						'https://res.cloudinary.com/dandan-img-cloud/image/upload/v1627137564/kpor0edoixmtaebmh8dv.jpg',
					heading: 'Dandan',
					github: 'https://github.com/dandan-drori?tab=repositories',
					linkedin: 'https://www.linkedin.com/in/dandan-drori-9b2496122/',
				},
			],
		}
	},
	computed: {},
	methods: {},
	created() {
		this.$emit('scrolled', true)
	},
}
</script>
