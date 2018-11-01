<template>
    <div>
        <tabs>
            <tab name="About us" :selected="true"><h3>Here is the content for the about us tabs</h3></tab>
            <tab name="About our culture"><h3>Here is the content for the about our culture tabs</h3></tab>
            <tab name="About our vision"><h3>Here is the content for the about our vision tabs</h3></tab>
        </tabs>
    </div>
</template>

<script>
import Tabs from "@/components/ui/tab/Tabs";
import Tab from "@/components/ui/tab/Tab";

export default {
  name: "UsingTab",

  components: {
    Tabs,
    Tab
  }
};
</script>