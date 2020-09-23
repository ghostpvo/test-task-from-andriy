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
    }
  }
}
</script>

<style lang="scss">
  @import "select-field";
</style>
