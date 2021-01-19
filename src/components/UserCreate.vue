<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Add User</h2>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" 
                    v-model="user.name" required/>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" 
                    v-model="user.phone" required/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" 
                    v-model="user.email" required/>
                </div>
                <div class="form-group">
                    <button type="submit" 
                    class="btn btn-primary btn-block">Save</button>
                </div>
            </form>
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
        onFormSubmit(event){
            event.preventDefault()
            db.collection('users').add(this.user).then(() => {
                alert('User added successfully');
                this.user.name = '';
                this.user.phone = '',
                this.user.email = ''
            }).catch((error) => {
                console.log(error)
            });
        }
    }
}
</script>
