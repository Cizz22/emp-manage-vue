<template>
<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EMP-Manage</a>
    <div class="navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link> 
        </li>
        

<template v-if="authenticated">
   <li class="nav-item">
           <router-link class="nav-link"  to="/dashboard">Dashboard</router-link>
        </li> 
      <li class="nav-item">
           <router-link class="nav-link" to="/departement">Departement</router-link>
        </li>   
       <li class="nav-item">
            <router-link class="nav-link" to="/employee">Employee</router-link>
        </li>
        <li class="nav-item">
          <a @click.prevent="signOut" class="nav-link" href="">Logout</a>
        </li>
        <div style="position: absolute;right: 20px">
              <a class="nav-link">{{user.name}}</a>
        </div>
</template>
     <template v-else>
          <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li>
             <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        </template>
      </ul>    
    </div>
  
  </div>
</nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'Nav',
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user : 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        logout: 'auth/signOut'
      }),

      signOut() {
        this.logout().then(() => {
          this.$router.replace({
            name: 'Home'
          })
        })
      }
    }
}
</script>

<style scoped>

</style>