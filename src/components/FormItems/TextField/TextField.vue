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
        v-model="currentVal"
        @change="input"
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
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String
    }
  },
  data () {
    return {
      currentVal: this.value
    }
  },
  methods: {
    input () {
      this.$emit('input', this.currentVal)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "text-field";
</style>
