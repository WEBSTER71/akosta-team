<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			page
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
