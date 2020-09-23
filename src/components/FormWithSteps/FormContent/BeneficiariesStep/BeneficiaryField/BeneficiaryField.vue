<template>
  <div class="beneficiary-field">
    <TextField
      :label="'Full name'"
      :type="'text'"
      :id="`${groupId}-name`"
      :placeholder="'John Doe'"
      :value="name"
      class="beneficiary-field-name"
      @input="emitName"
    />
    <TextField
      :label="'Date of Birth'"
      :type="'date'"
      :id="`${groupId}-date`"
      :placeholder="'MM/DD/YYYY'"
      :value="birth"
      class="beneficiary-field-date"
      @input="emitBirth"
    />
    <SelectField
      :id="`${groupId}-ssn`"
      :options="['SSN', 'NSS']"
      :placeholder="'SSN'"
      class="beneficiary-field-ssn"
    />
    <TextField
      :type="'text'"
      :id="`${groupId}-description`"
      :placeholder="'Optional'"
      :value="description"
      class="beneficiary-field-description"
      @input="emitDscr"
    />
    <SelectField
      :label="'Relationship'"
      :id="`${groupId}-relationship`"
      :options="['Trust', 'Contract']"
      :placeholder="'Select'"
      class="beneficiary-field-relationship"
    />
    <TextField
      :type="'number'"
      :id="`${groupId}-percent`"
      :placeholder="'0'"
      :value="percent"
      class="beneficiary-field-percent"
      @input="emitPercent"
    />
    <span
      class="save-beneficiary"
      @click="saveData"
    >
      <i class="uil uil-check"></i>
    </span>
  </div>
</template>

<script>
import TextField from '../../../../FormItems/TextField/TextField'
import SelectField from '../../../../FormItems/SelectField/SelectField'
export default {
  name: 'BeneficiaryField',
  components: { SelectField, TextField },
  props: {
    groupId: {
      type: String
    },
    name: {
      type: String
    },
    birth: {
      type: String
    },
    description: {
      type: String
    },
    percent: {
      type: String
    }
  },
  computed: {
    readyBeneficiary () {
      return {}
    }
  },
  methods: {
    saveData () {
      this.$emit('newBeneficiary', this.readyBeneficiary)
    },
    emitName (data) {
      this.readyBeneficiary.name = data
    },
    emitBirth (data) {
      this.readyBeneficiary.birth = data
    },
    emitDscr (data) {
      this.readyBeneficiary.description = data
    },
    emitPercent (data) {
      this.readyBeneficiary.percent = data
    }
  }
}
</script>

<style lang="scss">
  @import 'beneficiary-field';
</style>
