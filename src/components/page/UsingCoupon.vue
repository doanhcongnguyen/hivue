<template>
    <div>
        <div class="field">
            <label class="label">Coupon code</label>
            <div class="control">
                <coupon callbackMethod="doCallBack"></coupon>
            </div>
            <p class="help is-success" v-if="couponApplied">You used a coupon:  {{ couponCode }} </p>
        </div>
        
        <div class="field">
            <label class="label">Other code</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Other code" v-model="otherCouponCode" />
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
            <p class="help is-success">Other coupon: {{ otherCouponCode }}</p>
        </div>

    </div>
</template>

<script>
import Coupon from "@/components/ui/Coupon";
import { Event } from "@/utils/commonUtils.js";

export default {
    name: "UsingCoupon",

    components: {
        Coupon
    },

    data() {
        return {
            couponCode: '',
            otherCouponCode: '',
            couponApplied: false
        };
    },

    created() {
        Event.listen('doCallBack', (code) => {
            this.couponCode = code;
            if (code !== '') {
                this.couponApplied = true;
            }
        });

        Event.listen('doOtherCallback', (code) => {
            this.otherCouponCode = code;
        });
    }
};
</script>