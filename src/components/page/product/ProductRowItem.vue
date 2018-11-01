<template>
    <td @dblclick="editProductName(product)">
        <div v-if="viewMode">{{ product.name }}</div>
        <div v-else><input type="text" class="input"  ref="productNameInput" /></div>
    </td>
</template>

<script>
export default {
    name: "ProductRowItem",

    props: [
        'product'
    ],

    data() {
        return {
            viewMode: true
        };
    },

    methods: {
        editProductName(product) {
            this.viewMode = false;
            console.log(this.$refs.productNameInput);
            this.$refs.productNameInput.focus();
        }
    }
}

</script>