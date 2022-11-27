<template>
    <div class="wrapper">
        <header-form-components />
        <main class="page">
					<div class="login">
						<div class="login__container _container">
							<div class="login__items">
								<div class="login__title">Вход</div>
								<div class="login__wrapper-input">
									<input type="email" placeholder="Номер телефона" title="Введите в это поле ввода свой электронный адрес."
										class="login__input _email-auth">
								</div>
								<div class="login__wrapper-input login__wrapper-input_password">
									<input type="password" placeholder="Пароль" pattern="(.{6,})"
										title="Пароль должен содержать не менее 6-ти символов." class="login__input _password-pass"
										v-model="password" v-show="!showPass">
									<input type="text" placeholder="Пароль" pattern="(.{6,})"
										title="Пароль должен содержать не менее 6-ти символов." class="login__input _password-text"
										v-model="password" v-show="showPass">
									<div class="login__password" @click="showPass = !showPass">
										<transition name="password">
											<div v-show="!showPass" title="Показать пароль." class="login__password-img"><img src="../assets/img/form/eyes.svg" alt=""></div>
										</transition>
										<transition name="password_active">
											<div v-show="showPass" title="Скрыть пароль." class="login__password-img-active"><img src="../assets/img/form/eyes-active.svg" alt=""></div>
										</transition>
									</div>
								</div>
								<button class="login__button btn" @click="sendButtonAuth">
									<div class="btn-txt">Войти</div>
								</button>
								<div class="login__text">У вас нет аккаунта?<router-link to="/registration" class="login__green-txt">Регистрация</router-link></div>
							</div>
						</div>
					</div>
        </main>
        <footerComponents />
    </div>
</template>

<script>
import headerFormComponents from '../components/header-form'
import footerComponents from '../components/footer'
import Footer from '@/components/footer.vue'

export default {
  name: 'mainPage',
  components: {
		headerFormComponents,
		footerComponents,
  },
	data() {
		return {
			showPass: false,
			Pass: "",
		}
	},
	methods: {
		async sendButtonAuth() {
			if (this.showPass == true) {
				this.Pass = document.querySelector("._password-text").value
			}
			else {
				this.Pass = document.querySelector("._password-pass").value
			}
			window.location.href = '/profile';
		}
	}
}
</script>