<template>
    <div>
        <form @submit.prevent="addUser">
            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Enter user name" v-model="user" @blur="addUser">
                    <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
                <p class="help is-success">This username is available</p>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <a class="button is-primary" @click.prevent="addUser">Add</a>
                </div>
            </div>
        </form>

        <table class="table is-hoverable">
            <thead>
                <tr>
                    <th><abbr title="Number">No.</abbr></th>
                    <th>User name</th>
                    <th class="has-text-centered">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.user">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user }}</td>
                    <td @click="deleteUser(user)"><abbr title="delete">x</abbr></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

import { removeItemInList } from "@/utils/commonUtils.js";

export default {
    name: "AddUser",

    data() {
        return {
            user: '',
            users: ['Ti', 'Teo']
        };
    },

    methods: {
        addUser() {
            if (this.user !== '') {
                this.users.push(this.user);
                this.user = '';
            }
        },

        deleteUser(user) {
            this.users = removeItemInList(this.users, user);
        }
    }
};
</script>