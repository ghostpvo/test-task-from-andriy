<template>
  <div class="form-with-steps">
    <FormSteps />
    <FormContent />
  </div>
</template>

<script>
import FormSteps from './FormSteps/FormSteps'
import FormContent from './FormContent/FormContent'
export default {
  name: 'FormWithSteps',
  components: { FormContent, FormSteps }
}
</script>

<style scoped lang="scss">
  @import 'form-with-steps';
</style>
