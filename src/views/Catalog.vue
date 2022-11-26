<template>
	<div class="wrapper">
		<header-profile-components />
		<main class="page">
			<div class="catalog">
				<div class="catalog__container _container">
					<div class="catalog__main-title">Каталог</div>
					<div class="catalog__wrapper">
						<div class="catalog__left-box">
							<div class="catalog__left-title">Фильтры</div>
							<div class="catalog__filter-box">
								<div class="catalog__point">
									<label class="checkbox">
										<input type="checkbox" class="checkbox__input">
										<div class="checkbox__text">Программирование</div>
									</label>
								</div>
								<div class="catalog__point">
									<label class="checkbox">
										<input type="checkbox" class="checkbox__input">
										<div class="checkbox__text">Маркетинг</div>
									</label>
								</div>
								<div class="catalog__point">
									<label class="checkbox">
										<input type="checkbox" class="checkbox__input">
										<div class="checkbox__text">Дизайн</div>
									</label>
								</div>
								<div class="catalog__point">
									<label class="checkbox">
										<input type="checkbox" class="checkbox__input">
										<div class="checkbox__text">Менеджемент</div>
									</label>
								</div>
								<div class="catalog__point">
									<label class="checkbox">
										<input type="checkbox" class="checkbox__input">
										<div class="checkbox__text">Проходит курс на нашем сайте</div>
									</label>
								</div>
							</div>
						</div>
						<div class="catalog__right-box">
							<div class="catalog__content-box">
								<div class="catalog__info">
									<div class="catalog__profile-ico"><img src="../assets/img/header/ava.jpg" alt=""></div>
									<div class="catalog__name-box">
										<div class="catalog__name">Roman</div>
										<div class="catalog__surname">Zhuludkov</div>
									</div>
								</div>
								<div class="catalog__profession">Программирование</div>
								<div class="catalog__skills">
									<div class="catalog__text">html</div>
									<div class="catalog__text">css</div>
									<div class="catalog__text">js</div>
									<div class="catalog__text">html</div>
									<div class="catalog__text">css</div>
									<div class="catalog__text">js</div>
									<div class="catalog__text">html</div>
									<div class="catalog__text">css</div>
									<div class="catalog__text">js</div>
									<div class="catalog__text">html</div>
									<div class="catalog__text">css</div>
									<div class="catalog__text">js</div>
								</div>
								<!--<div class="catalog__progress">пока незнаю</div>-->
								<div class="catalog__button-box">
									<div class="catalog__button btn">
										<div class="btn-txt">Пригласить</div>
									</div>
									<div class="catalog__button btn">
										<div class="btn-txt">Профиль</div>
									</div>
								</div>
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
import headerProfileComponents from '../components/header-profile'
import footerComponents from '../components/footer'

export default {
	name: 'catalog',
	components: {
		headerProfileComponents,
		footerComponents,
	}
}
</script>
