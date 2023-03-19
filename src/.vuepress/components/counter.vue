<template>
  <div>
    {{ user.name }} : {{ user.age }}
  </div>
  <div>
    <a-button type="primary" @click="user.age++" danger>add</a-button>
  </div>
</template>
<script setup lang="ts">
import {onBeforeMount, ref, reactive} from 'vue'
import axios from "axios";

onBeforeMount(async () => {
  let result = await axios.request({
    url: "http://localhost:7777/mock/user/info",
    method: "post",
    data: {}
  })
  console.log(result.data)
  user.name=result.data.data.username
  user.age=result.data.data.age
})
const count = ref(0)
const user = reactive({
  name: '',
  age: 0
})
</script>
