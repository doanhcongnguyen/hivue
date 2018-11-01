<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-2">
                    <app-left-nav></app-left-nav>
                </div>

                <div class="column">
                    <router-view />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppLeftNav from "@/components/view/AppLeftNav";

export default {
  name: "AppContent",

  components: {
    AppLeftNav
  }
};
</script>