<template>
	<div class="wrapper">
		<header-form-components/>
		<main class="page">
			<div class="registration">
				<div class="registration__container _container">
					<div class="registration__items">
						<div class="registration__title">Регистрация</div>
						<div class="registration__wrapper-input">
							<input type="text" pattern="\d [0-9]" placeholder="Номер телефона" title="Введите в это поле ввода свой электронный адрес." class="registration__input">
						</div>
						<div class="registration__wrapper-input">
							<input type="text" placeholder="Имя" class="registration__input _name">
						</div>
						<div class="registration__wrapper-input">
							<input type="text" placeholder="Фамилия" class="registration__input _surname">
						</div>
						<div class="registration__wrapper-input registration__wrapper-input_password">
							<input type="password" placeholder="Пароль" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _first-password-pass" v-model="password" v-show="!showPass">
							<input type="text" placeholder="Пароль" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _first-password-text" v-model="password" v-show="showPass">
							<div class="registration__password" @click="showPass = !showPass">
								<transition name="password"><div v-show="!showPass" title="Показать пароль." class="registration__password-img"><img src="../assets/img/form/eyes.svg" alt=""></div></transition>
								<transition name="password"><div v-show="showPass" title="Скрыть пароль." class="registration__password-img-active"><img src="../assets/img/form/eyes-active.svg" alt=""></div></transition>
							</div>
						</div>
						<div class="registration__wrapper-input registration__wrapper-input_password">
							<input type="password" placeholder="Повторите пароль" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _second-password-pass" v-model="passwordTwo" v-show="!showPassTwo">
							<input type="text" placeholder="Повторите пароль" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _second-password-text" v-model="passwordTwo" v-show="showPassTwo">
							<div class="registration__password" @click="showPassTwo = !showPassTwo">
								<transition name="password"><div v-show="!showPassTwo" title="Показать пароль." class="registration__password-img"><img src="../assets/img/form/eyes.svg" alt=""></div></transition>
								<transition name="password"><div v-show="showPassTwo" title="Скрыть пароль." class="registration__password-img-active"><img src="../assets/img/form/eyes-active.svg" alt=""></div></transition>
							</div>
						</div>
						<div class="registration__button-box">
							<button type="submit" class="registration__button btn" @click="sendButtonRegRuk">
								<div class="btn-txt">Руководитель</div>
							</button>
							<button type="submit" class="registration__button btn" @click="sendButtonRegRaz">
								<div class="btn-txt">Разработчик</div>
							</button>
						</div>
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
	name: 'registrationPage',
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
		async sendButtonRegRuk() {
			if (this.showPass == true) {
				this.firstPass = document.querySelector("._first-password-text").value
			}
			else {
				this.firstPass = document.querySelector("._first-password-pass").value
			}

			if (this.showPassTwo == true) {
				this.secondPass = document.querySelector("._second-password-text").value
			}
			else {
				this.secondPass = document.querySelector("._second-password-pass").value
			}
			window.location.href = '/registrationRukovoditel';
		},
		async sendButtonRegRaz() {
			if (this.showPass == true) {
				this.firstPass = document.querySelector("._first-password-text").value
			}
			else {
				this.firstPass = document.querySelector("._first-password-pass").value
			}

			if (this.showPassTwo == true) {
				this.secondPass = document.querySelector("._second-password-text").value
			}
			else {
				this.secondPass = document.querySelector("._second-password-pass").value
			}
			window.location.href = '/registrationRazrabotchik';
		}
	}
}
</script>