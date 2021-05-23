<template>
       <div class="card shadow" v-show="showEdit">
         <div class="card-body">
           <div class="row">
            <div class="col-md-9">
              <h3 class="card-text">Edit Departement</h3>
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary" @click="$emit('show-edit')">back</button> 
            </div>
          </div>
          <div class="row">
              <div class="col-md-5">
                <form @submit.prevent="EditDepartement">
                  <div class="form-group mb-2">
                      <label class="mb-1" for="">Departement Name</label>
                      <input v-model="form.name" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                      <label class="mb-1" for="">Detail</label>
                      <input v-model="form.Detail" type="text" class="form-control">
                  </div>
                  <div class="form-group mt-1">
                      <button class="btn btn-success">Edit</button>
                  </div>
                </form>
              </div>
          </div>
          </div>
          </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EditDepartement',
    props: {
        showEdit: Boolean,
        id: Number,
        departements:Array,
        
    },
    data(){
        return{
        form: {
            name: '',
            Detail: ''
        },
        
        
        }
        
    },
    methods:{
        async EditDepartement(){
            let form = {
                name: this.form.name,
                Detail: this.form.Detail
            }
            console.log(form)

            let res = await axios.put(`/departement/${this.id}`, form)
            
            this.name= ''
            this.Detail = ''

            this.$emit('show-edit')
            
        }
    },
}
</script>