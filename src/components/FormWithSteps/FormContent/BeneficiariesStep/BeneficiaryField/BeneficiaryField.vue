<template>
  <div class="beneficiary-field">
    <TextField
      class="beneficiary-field-name"
      :label="'Full name'"
      :type="'text'"
      :id="`${groupId}-name`"
      :placeholder="'John Doe'"
      :value="name"
      :disabled="disabled"
      :reset="formReset"
      @input="emitName"
    />
    <TextField
      class="beneficiary-field-date"
      :label="'Date of Birth'"
      :type="'date'"
      :id="`${groupId}-date`"
      :placeholder="'MM/DD/YYYY'"
      :value="birth"
      :disabled="disabled"
      :reset="formReset"
      @input="emitBirth"
    />
    <SelectField
      class="beneficiary-field-ssn"
      :id="`${groupId}-ssn`"
      :options="['SSN', 'NSS']"
      :placeholder="'SSN'"
      :value="ssn"
      :disabled="disabled"
      :reset="formReset"
      @update="emitSSN"
    />
    <TextField
      class="beneficiary-field-description"
      :type="'text'"
      :id="`${groupId}-description`"
      :placeholder="'Optional'"
      :value="description"
      :disabled="disabled"
      :reset="formReset"
      @input="emitDscr"
    />
    <SelectField
      class="beneficiary-field-relationship"
      :label="'Relationship'"
      :id="`${groupId}-relationship`"
      :options="['Trust', 'Contract']"
      :placeholder="'Select'"
      :value="relationship"
      :disabled="disabled"
      :reset="formReset"
      @update="emitRelationship"
    />
    <TextField
      class="beneficiary-field-percent"
      :type="'number'"
      :id="`${groupId}-percent`"
      :placeholder="'0'"
      :value="percent"
      :disabled="disabled"
      :reset="formReset"
      @input="emitPercent"
    />
    <span
      v-if="disabled"
      class="drop-beneficiary"
      @click="dropData"
    >
      <i class="uil uil-times"></i>
    </span>
    <span
      v-if="!disabled"
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
    ssn: {
      type: String
    },
    description: {
      type: String
    },
    relationship: {
      type: String
    },
    percent: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    formReset: {
      type: Number
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
    dropData () {
      this.$emit('dropBeneficiary')
    },
    emitName (data) {
      this.readyBeneficiary.name = data
    },
    emitBirth (data) {
      this.readyBeneficiary.birth = data
    },
    emitSSN (data) {
      this.readyBeneficiary.ssn = data
    },
    emitDscr (data) {
      this.readyBeneficiary.description = data
    },
    emitRelationship (data) {
      this.readyBeneficiary.relationship = data
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
