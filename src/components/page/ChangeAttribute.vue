<template>
    <div>
        <h3>Change color using data binding</h3>
        <input class="input" type="text" :disabled="disabled" />
        <a :class="className" :title="btnTitle" @click="toggleColor">Change color</a>
    </div>
</template>

<script>
export default {
    name: "ChangeAttribute",

    data() {
        return {
            disabled: true,
            isPrimary: true,
            className: 'button is-primary',
            btnTitle: "here's button title"
        };
    },

    methods: {
        toggleColor() {
            this.className = this.isPrimary ? 'button is-danger' : 'button is-primary';
            this.disabled = !this.disabled;
            this.isPrimary = !this.isPrimary;
        }
    }
}
</script>