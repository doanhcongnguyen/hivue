<template>
    <div>
        <div class="tabs">
            <ul>
                <li :class="{ 'is-active' : tab.isActive }" v-for="tab in tabs" :key="tab.tab">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-detail">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "Tabs",

  data() {
    return {
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  }
};
</script>