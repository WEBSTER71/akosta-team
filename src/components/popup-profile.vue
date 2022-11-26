<template>
	<div class="popup popup_header">
		<div class="popup__content">
			<div class="popup__body">
				<div class="popup__items">
					<div class="popup__profile-ico"><img src="../assets/img/header/ava.jpg" alt=""></div>
					<div class="popup__name-box">
						<div class="popup__name">Roman</div>
						<div class="popup__surname">Zhuludkov</div>
					</div>
				</div>
				<div class="popup__items">
					<div class="popup__button-box">
						<div class="popup__buttom btn">
							<div class="btn-txt" @click="exit">Выйти</div>
						</div>
					</div>
				</div>
				<div class="popup__cross" @click="closePopup">
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'popupProfile',
	methods: {
		closePopup() {
			this.$emit('closePopup');
		},
		exit() {
			this.$emit('closePopup');
			window.location.href = '/login';
		}
	},
	mounted () {
		document.addEventListener('keydown', function (e) {
			if (e.code === 'Escape') {
				closePopup();
			}
		});
	},
}
</script>