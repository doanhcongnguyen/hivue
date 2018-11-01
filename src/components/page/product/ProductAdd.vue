<template>
    <div class="modal is-active" @keyup.esc="closePopup">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    Create new product
                </p>
                <!-- <button class="modal-close is-large" aria-label="close" @click="closePopup"></button> -->
                <button class="delete" aria-label="close" @click="closePopup"></button>
            </header>
            <section class="modal-card-body">
                <form @submit.prevent="addProduct">
                    <div class="field">
                        <label class="label">Product name</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-info" type="text" placeholder="Product name" v-model="product.name">
                            <span class="icon is-small is-left">
                                <i class="fa fa-book"></i>
                            </span>
                        </div>
                        <p v-show="hasError" class="help is-danger">Invalid product name</p>
                    </div>

                    <div class="field">
                        <label class="label">Product code</label>
                        <div class="control">
                            <input class="input is-info" type="text" placeholder="Product code" v-model="product.code">
                        </div>
                        <p v-show="hasError" class="help is-danger">Invalid product code</p>
                    </div>

                    <div class="field">
                        <label class="label">Status</label>
                        <div class="control">
                            <div class="select is-info">
                                <select v-model="product.status">
                                    <option>available</option>
                                    <option>unavailable</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <a class="button is-primary is-outlined" @click.prevent="addProduct">Add</a>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
import { Event } from "@/utils/commonUtils.js";

export default {
    name: "ProductAdd",

    props: {
        callbackMethod: { required: true },
        closePopupMethod: { required: true }
    },

    data() {
        return {
            product: {
                name: '',
                code: '',
                status: 'available'
            },
            hasError: false
        }
    },

    methods: {
        closeModal() {
            console.log('close');
        },

        addProduct() {
            Event.fire(this.callbackMethod, this.product);
            this.resetProduct();
        },

        resetProduct() {
            this.product.name = '';
            this.product.code = '';
        },

        closePopup() {
            Event.fire(this.closePopupMethod, null);
        }
    }
};

</script>