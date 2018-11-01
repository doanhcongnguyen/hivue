<template>
    <section class="section">
        <h1 class="title">Product list</h1>
        <a class="button is-primary is-outlined" @click="productAddVisible = true" title="Create new product"><i class="fas fa-plus"></i></a>

        <product-search 
            filterProductCallbackMethod="doFilterProduct"
            search-product-callback-method="doSearchProduct">
        </product-search>

        <product-add v-show="productAddVisible" 
            callback-method="doAddNewProduct"
            close-popup-method="doCloseProductAdd">
        </product-add>

        <product-list :products="products" 
            delete-product-callback-method="doDeleteProduct">
        </product-list>
        

    </section>
    
</template>

<script>
import ProductAdd from "@/components/page/product/ProductAdd";
import ProductEdit from "@/components/page/product/ProductEdit";
import ProductList from "@/components/page/product/ProductList";
import ProductSearch from "@/components/page/product/ProductSearch";

import { removeItemInList } from "@/utils/commonUtils.js";
import { Event } from "@/utils/commonUtils.js";

export default {
    name: "Product",

    components: {
        ProductAdd,
        ProductEdit,
        ProductList,
        ProductSearch
    },

    data() {
        return {
            productAddVisible: false,
            product: {
                name: '',
                code: ''
            },
            products: [
                { name: "Dummy", code: "D", status: "available" },
                { name: "Whatever", code: "W", status: "unavailable" },
                { name: "You suck", code: "S", status: "unavailable" },
                { name: "You rock", code: "R", status: "available" },
                { name: "Anything", code: "XX", status: "available" }
            ],
            productsBackup: []
        };
    },

    mounted() {
        this.products.filter(product => this.productsBackup.push(product));
    },

    methods: {
        addProduct(product) {
            if (product.name !== '') {
                let p = { name: product.name, code: product.code, status: product.status };
                this.products.push(p);
                this.productsBackup.push(p);
            }
        },

        deleteProduct(product) {
            this.products = this.productsBackup = removeItemInList(this.products, product);
        },

        searchProduct(searchText) {
            if (searchText === '') {
                this.products = this.productsBackup;
            } else {
                this.products = this.products.filter(p => p.name.toLowerCase().includes(searchText) || p.code.toLowerCase().includes(searchText));
            }
        },

        filterProduct(status) {
            if (status === 'all') {
                this.products = this.productsBackup;
            } else {
                this.products = this.products.filter(p => p.status === status);
            }
        }
    },

    created() {
        Event.listen('doAddNewProduct', (product) => {
            this.addProduct(product);
            this.productAddVisible = false;
        });

        Event.listen('doSearchProduct', (searchText) => {
            this.searchProduct(searchText);
        });

        Event.listen('doFilterProduct', (status) => {
            this.products = this.productsBackup;
            this.filterProduct(status);
        });

        Event.listen('doCloseProductAdd', () => {
            this.productAddVisible = false;
        });

        Event.listen('doEditProduct', (product) => {
            this.products = removeItemInList(this.products, product);
        });

        Event.listen('doDeleteProduct', (product) => {
            this.products = removeItemInList(this.products, product);
        });
    }
};

</script>