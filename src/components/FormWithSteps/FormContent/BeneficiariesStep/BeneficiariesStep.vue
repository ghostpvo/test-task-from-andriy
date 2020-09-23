<template>
  <div class="beneficiaries-step">
    <h5 class="step-title">Primary Beneficiaries</h5>
    <div class="beneficiaries-items">
      <BeneficiaryField
        v-for="(item, index) in describedBeneficiaries"
        :key="`beneficiary-field-${index}`"
        :groupId="`beneficiary-field-${index}`"
        :name="item.name"
        :birth="item.birth"
        :description="item.description"
        :percent="item.percent"
      />
    </div>
    <BeneficiaryField
      :groupId="`beneficiary-field-new`"
      @newBeneficiary="buildNewBeneficiary"
      :name="newName"
      :birth="newBirth"
      :description="newDescription"
      :percent="newPercent"
    />
    <button class="main-btn go-next-step">Next</button>
  </div>
</template>

<script>
import BeneficiaryField from './BeneficiaryField/BeneficiaryField'
export default {
  name: 'BeneficiariesStep',
  components: { BeneficiaryField },
  data () {
    return {
      newName: '',
      newBirth: '',
      newDescription: '',
      newPercent: ''
    }
  },
  computed: {
    describedBeneficiaries () {
      return this.$store.state.describedBeneficiaries
    }
  },
  methods: {
    buildNewBeneficiary (data) {
      this.$store.commit('PUSH_BENEFICIARY', data)
      this.formReset()
    },
    formReset () {
      this.newName = ''
      this.newBirth = ''
      this.newDescription = ''
      this.newPercent = ''
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'beneficiaries-step';
</style>
