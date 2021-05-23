<template>
      <div class="card shadow">
          <div class="card-body">
            <h3 class="card-text">Add Departement</h3>
            <form @submit.prevent="addDepartements()" >
              <div class="form-group mb-3">
                  <label for="">Departement Name</label>
                  <input v-model="form.name" class="form-control" type="text" name="Departement">
              </div>
               <div class="form-group mb-3">
                  <label for="">Detail</label>
                  <textarea v-model="form.Detail" name="detail" id="" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
</template>

<script>
export default {
    name: 'AddDepartement',
    data(){
        return{
        form: {
            name: '',
            Detail: ''
         }
        }
    }, methods: {
        addDepartements(){
            const form = {
                name : this.form.name,
                Detail: this.form.Detail
            }

        this.$emit('add-departement', form)

        this.form.name = '',
        this.form.Detail = ''
        }
    }
}
</script>