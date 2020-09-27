<template>
  <div class="beneficiary-field">
    <TextField
      class="beneficiary-field-name"
      :label="'Full name'"
      :type="'text'"
      :id="`${groupId}-name`"
      :placeholder="'John Doe'"
      :disabled="disabled"
      :value="actual.name"
      @input="actual.name = $event"
    />
    <TextField
      class="beneficiary-field-date"
      :label="'Date of Birth'"
      :type="'date'"
      :id="`${groupId}-date`"
      :placeholder="'MM/DD/YYYY'"
      :disabled="disabled"
      :value="actual.birth"
      @input="actual.birth = $event"
    />
    <SelectField
      class="beneficiary-field-ssn"
      :id="`${groupId}-ssn`"
      :options="['SSN', 'NSS']"
      :placeholder="'SSN'"
      :disabled="disabled"
      :value="actual.ssn"
      @input="actual.ssn = $event"
    />
    <TextField
      class="beneficiary-field-description"
      :type="'text'"
      :id="`${groupId}-description`"
      :placeholder="'Optional'"
      :disabled="disabled"
      :value="actual.description"
      @input="actual.description = $event"
    />
    <SelectField
      class="beneficiary-field-relationship"
      :label="'Relationship'"
      :id="`${groupId}-relationship`"
      :options="['Trust', 'Contract']"
      :placeholder="'Select'"
      :disabled="disabled"
      :value="actual.relationship"
      @input="actual.relationship = $event"
    />
    <TextField
      class="beneficiary-field-percent"
      :type="'number'"
      :id="`${groupId}-percent`"
      :placeholder="'0'"
      :disabled="disabled"
      :value="actual.percent"
      @input="actual.percent = $event"
    />
    <div class="beneficiary-field-controls">
      <span
        v-if="!newField"
        class="drop-beneficiary"
        @click="dropData"
      >
        <i class="uil uil-times"></i>
      </span>
      <span
        v-if="newField || isEditedField"
        class="save-beneficiary"
        @click="saveData"
      >
        <i class="uil uil-check"></i>
      </span>
    </div>
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
    },
    newField: {
      type: Boolean
    }
  },
  data () {
    return {
      actual: {
        name: this.name,
        birth: this.birth,
        ssn: this.ssn,
        description: this.description,
        relationship: this.relationship,
        percent: this.percent
      },
      isEditedField: false
    }
  },
  computed: {
    readyBeneficiary () {
      return {
        name: this.actual.name,
        birth: this.actual.birth,
        ssn: this.actual.ssn,
        description: this.actual.description,
        relationship: this.actual.relationship,
        percent: this.actual.percent
      }
    },
    isNewField () {
      return this.newField
    }
  },
  watch: {
    formReset () {
      for (const item in this.actual) {
        this.actual[item] = ''
      }
    },
    newField () {
      this.isNewField = this.newField
    },
    readyBeneficiary () {
      if (!this.newField && !this.isEditedField) this.isEditedField = true
    }
  },
  methods: {
    saveData () {
      if (this.newField) {
        this.$emit('newBeneficiary', this.readyBeneficiary)
      } else {
        this.$emit('editBeneficiary', this.readyBeneficiary)
        this.isEditedField = false
      }
    },
    dropData () {
      this.$emit('dropBeneficiary')
    }
  }
}
</script>

<style lang="scss">
  @import 'beneficiary-field';
</style>
