<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2>Edit User</h2>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="number" class="form-control" v-model="user.phone">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb'
export default {
    data(){
        return{
            user:{

            }
        }
    },
    created() {
        let dbRef = db.collection('users').doc(this.$route.params.id);
        dbRef.get().then((doc)=>{
            this.user = doc.data();
            console.log(this.user.name)
        }).catch((error)=>{
            console.log(error)
        })
    },
    methods:{
        onUpdateForm(event){
            event.preventDefault()
            db.collection('users').doc(this.$route.params.id)
                .update(this.user).then(() => {
                    console.log('user updated successfully!')
                    this.$router.push('/list')
                }).catch((error)=>{
                    console.log(error)
                })
        }
    }

}
</script>
