<template>
    <div>
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
        
    </div>
</template>

<script>
import AppHeader from "@/components/view/AppHeader";
import AppContent from "@/components/view/AppContent";
import AppFooter from "@/components/view/AppFooter";

export default {
    name: "App",

    components: {
        AppHeader,
        AppContent,
        AppFooter
    }
};
</script>
