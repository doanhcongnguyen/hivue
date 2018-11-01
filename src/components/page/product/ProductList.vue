<template>
    <div class="block">
        <table class="table is-hoverable is-striped">
            <thead>
                <tr>
                    <th><abbr title="Number">No.</abbr></th>
                    <th>Product name</th>
                    <th>Product code</th>
                    <th>Status</th>
                    <th class="has-text-centered">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="product.code">
                    
                    <td>{{ index + 1 }}</td>
                    <product-row-item :product="product"></product-row-item>
                        <!--
                    <td @click="editProductName(product)">
                        <div v-if="viewMode">{{ product.name }}</div>
                        <div v-else><input type="text" class="input" /></div>
                    </td>
                        -->

                    <td>{{ product.code }}</td>
                    <td>{{ product.status }}</td>
                    <td @click="deleteProduct(product)"><abbr title="delete">x</abbr></td>
                    
                </tr>
            </tbody>
        </table>

        <div class="block">
            <nav class="pagination">
                <a href="#/product" class="pagination-previous button" disabled>Previous</a>
                <a href="#/product" class="pagination-next button is-info">Next page</a>
                <ul class="pagination-list">
                    <li>
                        <a href="#/product" class="pagination-link is-current">1</a>
                    </li>
                    <li>
                        <a href="#/product" class="pagination-link">2</a>
                    </li>
                    <li>
                        <a href="#/product" class="pagination-link">3</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { Event } from "@/utils/commonUtils.js";
import ProductRowItem from "@/components/page/product/ProductRowItem";

export default {
    name: "ProductList",

    components: {
        ProductRowItem
    },

    props: [
        'products',
        // 'editProductCallbackMethod',
        'deleteProductCallbackMethod'
    ],

    data() {
        return {
            viewMode: true
        };
    },

    methods: {
        // editProduct(product) {
        //     Event.fire(this.editProductCallbackMethod, product);
        // },

        editProductName(product) {
            this.viewMode = false;
        },

        deleteProduct(product) {
            Event.fire(this.deleteProductCallbackMethod, product);
        }
    }
}
</script>