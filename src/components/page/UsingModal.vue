<template>
    <div>
        <a class="button is-primary" @click="showModal">Show modal</a>

        <modal v-show="isVisible">
            <template slot="header">Header</template>
            <p>Here is my main content.</p>
            <template slot="footer">
                <button class="button is-success" @click="closeModal">OK</button>
            </template>
        </modal>
    </div>
</template>

<script>
import Modal from "@/components/ui/Modal";

export default {
    name: "UsingModal",

    components: {
        Modal
    },

    data() {
        return {
            isVisible: false
        }
    },

    methods: {
        showModal() {
            this.isVisible = true;
        },

        closeModal() {
            this.isVisible = false;
        }
    }
};
</script>