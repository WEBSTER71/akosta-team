<template>
	<footer class="footer">
		<div class="footer__container _container">
			<div class="footer__wrapper">
				<div class="footer__items">
					<router-link to="/ipr" class="footer__title">LOGO</router-link>
					<div class="footer__copyrat">© 2021. Logo. Все права защищены</div>
				</div>
				<div class="footer__items">
					<div class="footer__social">
						<a href="#" class="footer__icon"><img src="../assets/img/footer/vk.svg"></a>
						<a href="#" class="footer__icon"><img src="../assets/img/footer/tg.svg"></a>
					</div>
					<div class="footer__user">Пользовательское соглашение</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'footerComponents',
}
</script>