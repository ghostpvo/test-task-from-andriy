<template>
  <div class="general-header-wrap">
    <header class="general-header">
      <div class="logo-place">
        <a href="#" class="app-logo-link">
          <i class="app-logo-icon uil uil-desert"></i>
          <span class="app-title">IRA Application</span>
        </a>
        <span class="general-description">IRA Accounts provided by Fidelity Investments</span>
      </div>
      <ul class="header-progress-list">
        <li
          :class="[
            'header-step',
            {'header-step-done': item.done}
          ]"
          v-for="(item, index) in headerMenu"
          :key="`header-step-${index}`"
        >
          <i
            :class="[
              'header-step-icon',
              'uil',
              item.icon
            ]"
          ></i>
          <span  class="header-step-dscr">
            {{ item.title }}
          </span>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      headerMenu: [
        {
          title: 'IRA Application',
          icon: 'uil-desert',
          done: true
        },
        {
          title: 'Risk Assessment',
          icon: 'uil-desert',
          done: true
        },
        {
          title: 'Upload ID',
          icon: 'uil-desert',
          done: false
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "header";
</style>
