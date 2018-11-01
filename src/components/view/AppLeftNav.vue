<template>
    <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
        </ul>
        
        <p class="menu-label">Example</p>
        <ul class="menu-list">
            <li>
                <a class="is-active">Templates</a>
                <ul>
                    <li><a href="#/using-modal">Using modal</a></li>
                    <li><a href="#/using-coupon">Using coupon</a></li>
                    <li><a href="#/using-tab">Using tab</a></li>
                </ul>
            </li>
            <li><a href="#/add-user">Add user</a></li>
            <li><a href="#/list-task">List tasks</a></li>
            <li><a href="#/change-attribute">Change attribute</a></li>
            <li><a href="#/product">Product</a></li>
        </ul>
        <p class="menu-label">Bulma</p>
        <ul class="menu-list">
            <li><a href="#/bulma-form">Form</a></li>
            <li><a href="#/bulma-sandbox">Sandbox</a></li>
            <li><a>Team Settings</a></li>
            <li>
                <a>Manage Your Team</a>
                <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                </ul>
            </li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
        </ul>
    </aside>
</template>

<script>
export default {
  name: "AppLeftNav"
};
</script>