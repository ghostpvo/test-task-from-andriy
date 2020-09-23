<template>
  <aside class="form-steps">
    <ul class="steps-list">
      <li
        v-for="(item, index) in stepsList"
        :class="[
          'form-step',
          {'form-step-complete': item.status === 'completed'},
          {'form-step-in-progress': item.status === 'in-progress'},
          {'form-step-not-passed': item.status === 'not-passed'}
        ]"
        :key="`form-step-${index}`"
      >
        <i
          class="uil uil-check"
          v-if="item.status === 'completed'"
        ></i>
        <span class="step-title">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'FormSteps',
  computed: {
    stepsList () {
      return [
        {
          title: 'Personal Information',
          status: 'completed'
        },
        {
          title: 'Contact Information',
          status: 'completed'
        },
        {
          title: 'Relationship',
          status: 'completed'
        },
        {
          title: 'Beneficiaries',
          status: 'in-progress'
        },
        {
          title: 'Account Characteristics',
          status: 'not-passed'
        },
        {
          title: 'Review',
          status: 'not-passed'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'form-steps';
</style>
