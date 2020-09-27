<template>
  <div class="select-field-wrap">
    <label
      :for="id"
      v-if="label"
      class="select-field-label"
    >
      {{ label }}
    </label>
    <v-select
      :id="id"
      :options="options"
      class="select-field"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="update"
    />
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    options: {
      type: Array
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    update (data) {
      this.$emit('input', data)
    }
  }
}
</script>

<style lang="scss">
  @import "select-field";
</style>
