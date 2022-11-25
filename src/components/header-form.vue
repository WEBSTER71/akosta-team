<template>
	<header class="header">
		<div class="header__container _container">
			<div class="header__wrapper">
				<div class="header__items">
					<div class="header__title">Logo</div>
				</div>
				<div class="header__items">
					<button class="header__logo" @click="openPopupHeader"><img src="../assets/img/header/ava.jpg" alt=""></button>
				</div>
			</div>
		</div>
	</header>
	<transition name="modal">
		<popup-header v-if="isPopupHeader" @closePopup="closePopup"></popup-header>
	</transition>
</template>

<script>
import popupHeader from '../components/popup-header'

export default {
	name: 'headerFormComponents',
	components: {
		popupHeader,
	},
	data() {
		return {
			isPopupHeader: false,
		}
	},
	methods: {
		
		openPopupHeader() {
			this.isPopupHeader = true;
			if (this.openPopupProfile) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		closePopup() {
			this.isPopupHeader = false;
			if (this.closePopup) {
				document.documentElement.style.overflow = 'auto'
				return
			}
		},
	}
}

</script>