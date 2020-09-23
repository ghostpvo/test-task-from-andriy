<template>
  <div id="app">
    <Header />
    <FormWithSteps />
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormWithSteps from './components/FormWithSteps/FormWithSteps'
export default {
  name: 'App',
  components: { FormWithSteps, Footer, Header }
}
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
