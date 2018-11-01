<template>
    <div>
        <h3>{{ msg }}</h3>
        Hello {{ $route.params.name }}
    </div>
</template>
<script>
export default {
  name: "firstroute",
  data() {
    return {
      msg: "FirstRoute"
    };
  }
};
</script>