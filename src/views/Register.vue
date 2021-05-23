<template>
<main class="form-signin">
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Register</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="Name" v-model="form.name">
      <label for="floatingPassword">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="form.email">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="form.password">
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>

</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import {mapActions} from 'vuex'
export default {
  name: 'Register',
  components: {
  },
  data() {
    return{
      form: {
        name: '',
        email:'',
        password:''
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),

    submit(){
      this.register(this.form).then( () => {
        this.$router.replace({
          name: 'Dashboard'
        })  
      }).catch( () => {
        console.log('something wrong')
    })
    }
  }
  // setup() {
  //   const form = reactive({
  //     name: '',
  //     email: '',
  //     password: ''
  //   });

  //   const submit = async () => {
  //       axios.post('/register', form)
  //   }

  //   return{
  //     form , submit
  //   }
  // }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>