<template>
	<header class="header">
		<div class="header__container _container">
			<div class="header__wrapper">
				<router-link to="/" class="header__items">
					<div class="header__title">Logo</div>
				</router-link>
				<div class="header__items">
					<div class="header__button-box">
						<router-link to="/login" class="header__button btn">
							<div class="btn-txt">Вход</div>
						</router-link>
						<router-link to="/registration" class="header__button btn">
							<div class="btn-txt">Регистрация</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'headerComponents',
}
</script>