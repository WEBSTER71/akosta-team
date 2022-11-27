<template>
	<div class="wrapper">
		<header-profile-components />
		<main class="page">
			<div class="profile">
                <div class="profile__container _container">
                    <div class="profile__wrapper">
                        <div class="profile__items">
                            <div class="profile__surname">Roman Zhuludkov</div>
                            <div class="main-blcok__profession">Front-end разработчкик</div>
                        </div>
                        <div class="profile__items">
                            <div class="profile__photo"><img src="../assets/img/profile/Roman.jpg"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description">
                <div class="descryption__container _container">
                    <div class="description__wrapper">
                        <div class="description__items">
                            <div class="description__title">О себе:</div>
                            <div class="description__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ornare nulla. Aliquam volutpat, est consequat facilisis pellentesque, felis dolor lacinia magna, id rhoncus nibh est id metus. Nam lobortis metus a vehicula ornare. Mauris non dolor interdum, egestas ipsum ut, rhoncus dolor. In in velit ligula. Pellentesque nec dictum sem. Nulla pretium eget magna eget sodales. Vivamus malesuada ornare lorem, eu imperdiet odio varius nec. Curabitur id augue a mi cursus vulputate vitae a orci.</div>
                        </div>
                        <div class="description__items">
                            <div class="description__title-skill">Мои скиллы:</div>
                            <div class="description__button-box">
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">Python-разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">Web-разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">Мобильная разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">PHP-разработка</div>
                                </div>
                                 <div class="description__button btn-color">
                                    <div class="btn-color__txt">Python-разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">Web-разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">Мобильная разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">PHP-разработка</div>
                                </div>
                                 <div class="description__button btn-color">
                                    <div class="btn-color__txt">Python-разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">Web-разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">Мобильная разработка</div>
                                </div>
                                <div class="description__button btn-color">
                                    <div class="btn-color__txt">PHP-разработка</div>
                                </div>
                            </div>
                        </div>
                        <div class="description__items">
                            <div class="description__map-title">Карта скиллов:</div>
                            <div class="description__map-block">
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
import Footer from '@/components/footer.vue'



export default {
  name: 'profile',
  components: {
		headerProfileComponents,
		footerComponents
  }

}
</script>