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
      v-model="currentVal"
      @input="update"
      :disabled="disabled"
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
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentVal: this.value
    }
  },
  methods: {
    update () {
      this.$emit('update', this.currentVal)
    }
  }
}
</script>

<style lang="scss">
  @import "select-field";
</style>
