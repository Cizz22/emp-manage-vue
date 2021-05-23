<template>
   <div class="container-fluid">
      <div class="row">
      <div class="col-md-8">
        <div class="card shadow" v-show="!showEdit">
          <TableDepartement :departements="departements" @delete-departement="deleteDepartement" @edit-departement="editDepartement"></TableDepartement>
        </div>

     <EditDepartement :departements="departements" :id="departementid" :showEdit="showEdit" @show-edit="showEdit = false" ></EditDepartement>

      </div>
      <div class="col-md-4">
        <div class="card shadow">
          <AddDepartement @add-departement="addDepartement" />
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import TableDepartement from '../components/Departement/TableDepartement'
import AddDepartement from '../components/Departement/AddDepartement'
import EditDepartement from '../components/Departement/EditDepartement'
export default {
    name: 'Departement',
    components:{
      TableDepartement,
      AddDepartement,
      EditDepartement
    },
  data() {
    return{
      departements:[],
      showEdit:false,
      departementid: null
       
    }
  },
  async created() {
    this.departements = await this.departementFetch()
  },

  methods: {
   async departementFetch(){
      const res = await axios.get('/departement')
      return res.data.data
      
    },
    async deleteDepartement(id){
     let res = await axios.delete(`/departement/${id}`)

     res.status === 200 ? this.departements = this.departements.filter((departement) => departement.id !== id) : alert('error')

  },
    async addDepartement(form){
      let res = await axios.post('/departement', form)
  
      this.departements = [...this.departements, res.data.data]
    },
    async editDepartement(editData){
      this.showEdit = editData.showEdit
      this.departementid = editData.id
    },
  },
  
  
}
</script>