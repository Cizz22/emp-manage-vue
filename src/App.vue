<template>

<Nav></Nav>

<router-view></router-view>
</template>

<script>
import Nav from './components/Nav'
 export default {
  components: {
    Nav,
  }
}
</script>
