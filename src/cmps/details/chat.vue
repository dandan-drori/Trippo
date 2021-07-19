<template>
	<section>
		<div class="chat-header">
			<div class="name">
				<p>{{ stay.host.fullname }}</p>
			</div>
			<div class="chat-controls">
				<button>_</button>
				<button @click="toggleChat">X</button>
			</div>
		</div>
		<div class="chat-body">Hey there!</div>
		<div class="chat-footer">
			<input type="text" placeholder="Enter your message" />
		</div>
	</section>
</template>

<script>
import { socketService } from '@/services/socket.service.js'

export default {
	props: {
		stay: Object,
	},
	data() {
		return {
			msg: { from: this.$store.getters.loggedinUser.username, txt: '' },
			msgs: [],
		}
	},
	methods: {
		toggleChat() {
			this.$emit('close', false)
		},
	},
	computed: {
		loggedinUserName() {
			return this.$store.getters.loggedinUser.username
		},
	},
}
</script>
