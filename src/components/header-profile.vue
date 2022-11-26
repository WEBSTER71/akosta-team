<template>
	<header class="header">
		<div class="header__container _container">
			<div class="header__wrapper">
				<router-link to="/" class="header__items">
					<div class="header__title">Logo</div>
				</router-link>
				<div class="header__items">
					<button class="header__logo" @click="openPopupProfile"><img src="../assets/img/header/ava.jpg" alt=""></button>
				</div>
			</div>
		</div>
	</header>
	<transition name="modal">
		<popup-profile v-if="isPopupProfile" @closePopup="closePopup"></popup-profile>
	</transition>
</template>

<script>
import popupProfile from '../components/popup-profile'

export default {
	name: 'headerProfileComponents',
	components: {
		popupProfile,
	},
	data() {
		return {
			isPopupProfile: false,
		}
	},
	methods: {
		
		openPopupProfile() {
			this.isPopupProfile = true;
			if (this.openPopupProfile) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		closePopup() {
			this.isPopupProfile = false;
			if (this.closePopup) {
				document.documentElement.style.overflow = 'auto'
				return
			}
		},
	}
}

</script>