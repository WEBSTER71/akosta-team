<template>
	<div class="wrapper">
		<header-form-components/>
		<main class="page">
			<div class="registration">
				<div class="registration__container _container">
					<div class="registration__items">
						<div class="registration__title">Руководитель</div>
						<div class="registration__wrapper-input">
							<textarea class="registration__textarea" placeholder="О себе"></textarea>
						</div>
						<div class="registration__wrapper-input">
							<input type="text" placeholder="Компания" class="registration__input">
						</div>
						<button type="submit" class="registration__button btn" @click="sendButtonReg">
							<div class="btn-txt">Регистрация</div>
						</button>
						<div class="registration__text">У вас есть аккаунт?<router-link to="/login" class="registration__green-txt">Войти</router-link></div>
					</div>
				</div>
			</div>
		</main>
		<footer-components/>
	</div>
</template>

<script>
import headerFormComponents from '../components/header-form'
import footerComponents from '../components/footer'

export default {
	name: 'registrationRukovoditel',
	components: {
		headerFormComponents,
		footerComponents,
	},

	data() {
		return {
			showPass: false,
			showPassTwo: false,
			firstPass: "",
			secondPass: "",
		}
	},
	methods: {
		async sendButtonReg() {
			window.location.href = '/catalog';
		}
	}
}
</script>