<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="card shadow">
                    <div class="card-body">
                        <h3 class="card-text">Employee List</h3>
                        <table class="table table-hovered table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Departement</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="employee in employees" :key="employee.id">
                                    <td>{{employee.name}}</td>
                                    <td>{{employee.contact}}</td>
                                    <td>{{employee.email}}</td>
                                    <td>{{employee.departement.name}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
            <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h3 class="card-text">
                                Add Employee
                            </h3>
                            <form @submit.prevent="addEmployee">
                                <div class="form-group">
                                    <label for="">Name</label>
                                    <input v-model="form.name" class="form-control" type="text">
                                </div>
                                 <div class="form-group">
                                    <label for="">Email</label>
                                    <input v-model="form.email" class="form-control" type="text">
                                </div>
                                 <div class="form-group">
                                    <label for="">Contact</label>
                                    <input v-model="form.contact" class="form-control" type="text">
                                </div>
                                <div class="form-group">
                                    <label for="\">Departement</label> 
                                    <select name="departement" id="departemnent" class="form-select" v-model="form.departement_id">
                                        <option v-for="departement in departements" :key="departement.id" :value="departement.id">{{departement.name}}</option>
                                    </select>
                                </div>
                                <div class="form-group mt-2">
                                    <button class="btn btn-success" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
             </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Employee',
    data(){
        return{
            employees: [],
            departements: [],
            form: {
                name:'',
                contact:'',
                email:'',
                departement_id:''
            }
        }
    }, 
    async created(){
        this.employees = await this.getEmployee()
        this.departements = await this.getDepartement()
    },
    methods: {
        async getEmployee(){
            let res = await axios.get('/employee')
            return res.data.data
        },
        async getDepartement(){
            let res = await axios.get('/departement')
            return res.data.data
        },
        async addEmployee(){
            let res = await axios.post('/employee', this.form)


            this.employees = [...this.employees, res.data.data]

            console.log(res.data.data)

            this.form.name = ''
            this.form.contact = ''
            this.form.email = ''
        }

    }
}
</script>