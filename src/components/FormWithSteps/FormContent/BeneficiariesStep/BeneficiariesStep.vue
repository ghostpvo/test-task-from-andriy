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
        :ssn="item.ssn"
        :description="item.description"
        :relationship="item.relationship"
        :percent="item.percent"
        @dropBeneficiary="dropBeneficiary(index)"
        disabled
      />
    </div>
    <BeneficiaryField
      :groupId="`beneficiary-field-new`"
      :formReset="formReset"
      @newBeneficiary="buildNewBeneficiary"
    />
    <div class="primary-total-wrap">
      <div
        :class="[
           'primary-total',
          {'primary-total-less': beneficiariesPercentSum < 100},
          {'primary-total-ok': beneficiariesPercentSum === 100},
          {'primary-total-more': beneficiariesPercentSum > 100}
        ]"
      >
        <i class="uil uil-check" v-if="beneficiariesPercentSum === 100"></i>
        <span class="primary-total-title">Primary Total:</span>
        <span>
          {{ beneficiariesPercentSum }}%
        </span>
      </div>
    </div>
    <CheckboxField
      :title="'Contingent Beneficiaries'"
      :value="'Contingent Beneficiaries'"
      :id="'contingent-beneficiaries-check'"
    />
    <button class="main-btn go-next-step">Next</button>
  </div>
</template>

<script>
import BeneficiaryField from './BeneficiaryField/BeneficiaryField'
import CheckboxField from '../../../FormItems/Checkbox/CheckboxField'
export default {
  name: 'BeneficiariesStep',
  components: { CheckboxField, BeneficiaryField },
  data () {
    return {
      beneficiariesPercentSum: 0,
      formReset: 0
    }
  },
  computed: {
    describedBeneficiaries () {
      return this.$store.state.describedBeneficiaries
    }
  },
  methods: {
    buildNewBeneficiary (data) {
      const dataObject = JSON.parse(JSON.stringify(data))
      this.$store.commit('PUSH_BENEFICIARY', dataObject)
      this.countSum()
      this.$nextTick(() => {
        this.formReset++
      })
    },
    dropBeneficiary (index) {
      this.$nextTick(() => {
        this.$store.commit('REMOVE_BENEFICIARY', parseInt(index, 10))
        this.countSum()
      })
    },
    countSum () {
      this.beneficiariesPercentSum = 0
      for (let i = 0; i < this.describedBeneficiaries.length; i++) {
        const current = parseInt(this.describedBeneficiaries[i].percent, 10)
        this.beneficiariesPercentSum += (isNaN(current) ? 0 : current)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'beneficiaries-step';
</style>
