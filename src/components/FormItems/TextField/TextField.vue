<template>
  <div
    :class="[
      'text-field-wrapper',
      `type-${type}`
    ]"
  >
    <label
      v-if="label"
      :for="id"
      class="text-field-label"
    >
      {{ label }}
    </label>
    <div class="field-wrap">
      <input
        :type="type"
        :id="id"
        class="text-field"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="value"
        @input="input"
      />
      <i
        v-if="type === 'date'"
        class="uil uil-calendar-alt"
      ></i>
      <i
        v-else-if="type === 'number'"
        class="uil uil-percentage"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String
    },
    type: {
      type: String
    },
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    input (data) {
      this.$emit('input', data.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "text-field";
</style>
