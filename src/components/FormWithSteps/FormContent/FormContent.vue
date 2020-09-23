<template>
  <section class="form-content">
    <h4 class="form-step-title">Beneficiaries</h4>
    <BeneficiariesStep class="form-step-content"/>
  </section>
</template>

<script>
import BeneficiariesStep from './BeneficiariesStep/BeneficiariesStep'
export default {
  name: 'FormContent',
  components: { BeneficiariesStep }
}
</script>

<style scoped lang="scss">
  @import 'form-content';
</style>
