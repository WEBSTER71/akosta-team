<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<div class="error">
				<div class="error__container _container">
					<div class="error__wrapper">
						<div class="error__items">
							<div class="error__icon"><img src="../assets/img/error/window.svg"></div>
							<div class="error__text-box">
								<div class="error__text-box__title">Страница не найдена!</div>
								<div class="error__text-box__descrypt">Возможно она устрала, была удалена, или был введен неверный адрес в адресной строке. </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<footer-components />
	</div>
</template>

<script>
import headerComponents from '../components/header'
import footerComponents from '../components/footer'

export default {
  name: 'error',
  components: {
		headerComponents,
		footerComponents,
  }
}
</script>