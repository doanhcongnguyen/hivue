<template>
    <input class="input" placeholder="Enter your coupon code" @blur="doCouponApplied" v-model="couponCode" />
</template>

<script>
import { Event } from "@/utils/commonUtils.js";

export default {
    name: "Coupon",

    props: {
        callbackMethod: { required: true }
    },

    data() {
        return {
            couponCode: ''
        };
    },

    methods: {
        doCouponApplied() {
            Event.fire(this.callbackMethod, this.couponCode);
        }
    }
};
</script>