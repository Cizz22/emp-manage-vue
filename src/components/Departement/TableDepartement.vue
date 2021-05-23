<template>
     <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-9">
                    <h3>Departement List</h3>
                </div>
                <div class="col-md-3">
                                  </div>
              </div>
              <div >
                <table class="table table-hovered table-striped table-bordered">
              <thead>
                <tr>
                  <th>Departement</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="departement.id" v-for="departement in departements" >
                  <td>{{departement.name}}</td>
                  <td>
                  <button @click="deleteDepartement(departement.id)" class="btn btn-danger mr-3">Delete</button> 
                  <button @click="editDepartement(departement.id)" class="btn btn-primary">Edit</button>
                  <button class="btn btn-secondary">Employee</button>
                  </td>
                </tr>
              </tbody>
            </table>
              </div>
          </div>
</template>

<script>
export default {
    name: 'TableDepartement',
    props: {
        departements:Array,
    },
    methods: {
        deleteDepartement(id){
            this.$emit('delete-departement', id)
        },
        editDepartement(id){
            const editData ={
                id: id,
                showEdit : true
            }

            this.$emit('edit-departement', editData)
        }
    }
}
</script>