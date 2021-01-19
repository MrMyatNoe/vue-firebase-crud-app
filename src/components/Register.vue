<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="container bg-info text-white">
        <h2 class="text-center">Register Form</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label>Name</label>
            <input
              type="type"
              placeholder="Enter Name"
              class="form-control"
              v-model="user.name" required
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              class="form-control"
              v-model="user.email" required
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              class="form-control"
              v-model="user.password" required
            />
          </div>
          <div class="form-group">
            <button type="Submit" class="btn btn-success">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from '../firebaseDb';
export default {
    data(){
        return{
            user:{
            
            }
        }
    },
    methods:{
        register(event){
            event.preventDefault()
            console.log(this.user.email)
            db.auth()
            .createUserWithEmailAndPassword(this.user.email,this.user.password)
            .then(() => {
                alert('user register successfully')
                this.$router.push('/list');
            }).catch((error) =>{
                console.log(error)
            });
        }
    }
};
</script>
