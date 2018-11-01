<template>
    <div class="block">
        <nav class="level">
            <div class="level-left">
                <p class="level-item" :class="{'has-text-weight-bold' : productFilterTagAll}">
                    <a @click="productFilter('all')">All</a>
                </p>
                <p class="level-item" :class="{'has-text-weight-bold' : productFilterTagAvailable}">
                    <a @click="productFilter('available')">Available</a>
                </p>
                <p class="level-item" :class="{'has-text-weight-bold' : productFilterTagUnavailable}">
                    <a @click="productFilter('unavailable')">Unavailable</a>
                </p>
            </div>

            <div class="level-right">
                <div class="level-item">
                    <div class="field">
                        <div class="field has-addons">
                            <p class="control">
                                <input ref="searchProductInput" type="text" class="input" @input="searchProduct(searchText)" v-model="searchText" placeholder="Search product..." />
                            </p>
                            <p class="control">
                                <a @click="searchProduct(searchText)" class="button is-info">Search</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { Event } from "@/utils/commonUtils.js";

export default {
    name: "ProductSearch",

    props: [
        'filterProductCallbackMethod',
        'searchProductCallbackMethod'
    ],

    data() {
        return {
            searchText: '',
            productFilterTagAll: true,
            productFilterTagAvailable: false,
            productFilterTagUnavailable: false
        };
    },

    mounted() {
        this.$refs.searchProductInput.focus();
    },

    methods: {
        productFilter(status) {
            Event.fire(this.filterProductCallbackMethod, status);
            this.changeProductFilterClassNameForCss(status);
        },

        searchProduct(searchText) {
            Event.fire(this.searchProductCallbackMethod, searchText);
        },

        changeProductFilterClassNameForCss(status) {
            if (status === 'all') {
                this.productFilterTagAll = true;
                this.productFilterTagAvailable = false;
                this.productFilterTagUnavailable = false;
            } else if (status === "available") {
                this.productFilterTagAll = false;
                this.productFilterTagAvailable = true;
                this.productFilterTagUnavailable = false;
            } else {
                this.productFilterTagAll = false;
                this.productFilterTagAvailable = false;
                this.productFilterTagUnavailable = true;
            }
        }
    }
}
</script>