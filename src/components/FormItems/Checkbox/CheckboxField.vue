<template>
  <div :class="['checkbox-field-wrap', {'checkbox-field-disabled': disabled}]">
    <input
      type="checkbox"
      class="checkbox-field-input"
      :id="id"
      :checked="checked"
      :disabled="disabled"
      :value="value"
      v-model="currentVal"
    >
    <label
      :for="id"
      class="checkbox-field"
    >
      <span class="checkbox-field-icon">
        {{id}}
      </span>
      <span class="checkbox-field-title">
        {{ title }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxField',
  props: {
    checked: {
      type: Boolean
    },
    title: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    id: {
      type: String
    }
  },
  data () {
    return {
      currentVal: this.checked
    }
  }
}
</script>

<style scoped lang="scss">
  @import "checkbox-field";
</style>
