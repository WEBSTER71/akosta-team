<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<div class="main-block">
				<div class="main-block__container _container">
					<div class="main-block__wrapper">
						<div class="main-block__items">
							<div class="main-block__title">Фабрика скилов</div>
							<div class="main-block__subtitle">Мы сервис который поможет IT-cпециалистам обучиться новым технолигиям, а также найти хорошую работу, с высокой заработной платой и любыми условиями подходящими именно ему. А работадателю мы поможем найти хороших спецалистов с нужными знаниями для воплощения его проекта.</div>
						</div>
						<div class="main-block__items">
							<div class="main-block__bg"><img src="../assets/img/homepage/main-bg.png" alt=""></div>
						</div>
					</div>
				</div>
			</div>
			<div class="advantages">
				<div class='advantages__container _container'>
					<div class="advantages__title">Наши преимущества</div>
					<div class="advantages__wrapper">
						<div class="advantages__items">
							<div class="advantages__icon"><img src="../assets/img/homepage/people-icon.svg" alt=""></div>
							<div class="advantages__text">Большая база<br>IT-специалистов</div>
						</div>
						<div class="advantages__items">
							<div class="advantages__icon"><img src="../assets/img/homepage/skills-icon.svg" alt=""></div>
							<div class="advantages__text">Развитие скиллов<br>IT-специалистов</div>
						</div>
						<div class="advantages__items">
							<div class="advantages__icon"><img src="../assets/img/homepage/design-icon.svg" alt=""></div>
							<div class="advantages__text">Красивый дизайн</div>
						</div>
					</div>
				</div>
			</div>
			<div class="skills">
				<div class="skills__container _container">
					<div class="skills__title">Скиллы</div>
					<div class="skills__wrapper">
						<div class="skills__subtitle-box">
							<a href="#" class="skills__subtitle">Программирование</a>
							<a href="#" class="skills__subtitle">Маркетинг</a>
							<a href="#" class="skills__subtitle">Дизайн</a>
							<a href="#" class="skills__subtitle">Менеджемент</a>
						</div>
						<div class="skills__content-box">
							<div class="skills__text">html</div>
							<div class="skills__text">css</div>
							<div class="skills__text">scss</div>
							<div class="skills__text">js</div>
							<div class="skills__text">vue js</div>
						</div>
						<div class="skills__content-box">
							<div class="skills__text">gulp</div>
							<div class="skills__text">photoshop</div>
							<div class="skills__text">figma</div>
							<div class="skills__text">css</div>
							<div class="skills__text">scss</div>
						</div>
						<div class="skills__content-box">
							<div class="skills__text">html</div>
							<div class="skills__text">js</div>
							<div class="skills__text">vue js</div>
							<div class="skills__text">photoshop</div>
							<div class="skills__text">figma</div>
						</div>
					</div>
				</div>
			</div>
			<div class="blog">
				<div class="blog__container _container">
					<div class="blog__title">Блог:</div>
					<div class="blog__wrapper">
						<div class="blog__items">
								<div class="blog__items__img"><img src="../assets/img/homepage/news.jpg"></div>
								<div class="blog__items__tx">Добавлен новый "Практический курс по HR" в раздел "Индивидуального плана развития" </div>
								<div class="blog__items__date">25 ноября 2022</div>
						</div>
						<div class="blog__items">
								<div class="blog__items__img"><img src="../assets/img/homepage/news.jpg"></div>
								<div class="blog__items__tx">Добавлен новый "Практический курс по HR" в раздел "Индивидуального плана развития" </div>
								<div class="blog__items__date">25 ноября 2022</div>
						</div>
						<div class="blog__items">
								<div class="blog__items__img"><img src="../assets/img/homepage/news.jpg"></div>
								<div class="blog__items__tx">Добавлен новый "Практический курс по HR" в раздел "Индивидуального плана развития" </div>
								<div class="blog__items__date">25 ноября 2022</div>
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
	name: 'mainPage',
	components: {
		headerComponents,
		footerComponents,
	}
}
</script>
