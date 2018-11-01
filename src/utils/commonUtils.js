import Vue from 'vue';

export function removeItemInList(array, itemToDelete) {
    return array.filter(item => item !== itemToDelete);
}

export function hello() {
    console.log("hi");
}

export let Event = new class {
    constructor () {
        this.vue = new Vue();
    }

    fire(event, data) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}


