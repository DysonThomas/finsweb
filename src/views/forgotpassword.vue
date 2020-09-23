<template>
   <div>
        <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <div class="box">
                        <figure class="avatar mb-1">
                            <img src="../assets/logo.png">
                        </figure>
                        
                            <div  v-if="status==0" class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>
                            <button  v-if="status==0" @click="status=1" class="button is-block is-info is-large is-fullwidth">Send OTP</button>
                            <div v-if="status==1" class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="OTP">
                                </div>
                            </div>
                            <button v-if="status==1" @click="status=2" class="button is-block is-info is-large is-fullwidth">Verify</button>
                            <div v-if="status==2" class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Enter New Password">
                                </div>
                            </div>
                            <div v-if="status==2" class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Verify New Password">
                                    <button class="button mt-3 is-block is-info is-large is-fullwidth">Confirm</button>
                                </div>
                            </div>

                    </div>
                   
                </div>
            </div>
        </div>
    </section>
   
  </div> 
</template>

<script>


export default {
name:'forgotpassword',
data(){
    return{
        status:0
    }
}
}
</script>

<style>
.login-hr{
  color: black;
}
</style>