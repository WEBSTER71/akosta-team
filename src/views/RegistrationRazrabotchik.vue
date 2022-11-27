<template>
	<div class="wrapper">
		<header-form-components/>
		<main class="page">
			<div class="registration">
				<div class="registration__container _container">
					<div class="registration__items">
						<div class="registration__title">Разработчик</div>
						<div class="registration__wrapper-input">
							<textarea class="registration__textarea" placeholder="О себе"></textarea>
						</div>
						<div class="registration__select">
							<div class="registration__wrapper-input registration__wrapper-input_options">
								<div class="options">
									<span class="options__title">Выберите должность:</span>
									<label class="options__item">
										<input class="options__input _male" checked type="radio" value="man" name="form[option]">
										<span class="options__text"><span>Программирование</span></span>
									</label>
									<label class="options__item">
										<input class="options__input" type="radio" value="female" name="form[option]">
										<span class="options__text"><span>Дизайн</span></span>
									</label>
									<label class="options__item">
										<input class="options__input _male" type="radio" value="man" name="form[option]">
										<span class="options__text"><span>Маркетинг</span></span>
									</label>
									<label class="options__item">
										<input class="options__input" type="radio" value="female" name="form[option]">
										<span class="options__text"><span>Менеджемент</span></span>
									</label>
								</div>
							</div>
							<div class="registration__checkbox">
								<div class="checkbox__title">Выберите скиллы:</div>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">html</div>
								</label>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">css</div>
								</label>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">scss</div>
								</label>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">gulp</div>
								</label>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">js</div>
								</label>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">vue js</div>
								</label>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">photoshop</div>
								</label>
								<label class="checkbox">
									<input type="checkbox" class="checkbox__input">
									<div class="checkbox__text">figma</div>
								</label>
							</div>
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
	name: 'registrationRazrabotchik',
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
			window.location.href = '/catalog';
		}
	}
}
</script>