<template>
    <div class="wrapper">
        <header-components />
        <main class="page">
            <div class="login">
                <div class="login__container _container">
                    <div class="login__wrapper">
                        <div class="login__items">
                            <div class="login__title">Авторизация</div>
                            <div class="login__box">
                                <div class="login__box__title-login">Логин:</div>
                                <div class="login__box__input">
                                    <input type="text" placeholder="Ник Telegram: @NickName" title="Введите в это поле ввода свой Telegram логин">
                                </div>
                                <div class="login__box__title-pass">Пароль:</div>
                                <div class="login__box__input">
                                    <input type="password" placeholder="Пароль" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов.">
                                </div>
                                <div class="login__box__btn _btn">
                                    <div class="login__box__btx__tx">Авторизоваться</div>
                                </div>
                                <button class="login__box__resetpass" @click="openPopup">Забыли пароль?</button>
                                <div class="login__box__registr">Регистрация</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footerComponents />
    </div>
</template>

<script>
import headerComponents from '../components/header'
import footerComponents from '../components/footer'
import Footer from '@/components/footer.vue'

export default {
  name: 'mainPage',
  components: {
		headerComponents,
		footerComponents,
  }
}

    Footer</script>