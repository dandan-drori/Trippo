<template>
	<section class="login-modal" @click.stop>
		<div class="login-header">
			<button @click="close">
				<span class="material-icons">
					close
				</span>
			</button>
			<p>Log in</p>
		</div>
		<div class="login-input">
			<div class="input-txt">
				<h2>Welcome to Trippo</h2>
			</div>
			<form action="" @submit.prevent="login">
				<input
					type="text"
					placeholder="Enter email or username"
					v-model="userCred.username"
					ref="usernameInputRef"
				/>
				<input type="password" placeholder="Enter password" v-model="userCred.password" />
				<button class="checkout-btn" ref="myBtn"><span>Continue</span></button>
			</form>
		</div>
		<div class="login-divider">
			<div class="border"></div>
			<small>or</small>
		</div>
		<div class="login-socials">
			<button>
				<span class="material-icons" style="color:#4267B2;"> facebook </span>Continue with Facebook
			</button>
			<button>
				<img src="@/assets/imgs/svgs/google.svg" alt="" />
				Continue with Google
			</button>
			<button>
				<img src="@/assets/imgs/svgs/apple.png" alt="" />
				Continue with Apple
			</button>
			<button>
				<span class="material-icons" style="color:#000;"> phone_iphone </span>Continue with Phone
			</button>
		</div>
	</section>
</template>

<script>
import { showMsg } from '@/services/event-bus.service.js'
export default {
	data() {
		return {
			userCred: {
				username: '',
				password: '',
			},
		}
	},
	methods: {
		async login() {
			try {
				await this.$store.dispatch({ type: 'login', userCred: this.userCred })
				showMsg('Logged in successfully')
				this.close()
			} catch (err) {
				showMsg('Logged in failed', 'error')
				console.log('err', err)
				// TODO: alert user that his credentials are incorrect
			}
		},
		close() {
			this.$emit('login', false)
		},
	},
	mounted() {
		this.$refs.usernameInputRef.focus()
		this.$refs.myBtn.onmousemove = e => {
			const x = e.offsetX
			const y = e.offsetY

			e.target.style.setProperty('--x', `${x}px`)
			e.target.style.setProperty('--y', `${y}px`)
		}
	},
}
</script>
