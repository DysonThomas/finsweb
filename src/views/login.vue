<template>
   <div>
        <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Login</h3>
                    <hr class="login-hr">
                    <p class="subtitle has-text-black">Please login to proceed.</p>
                    <div class="box">
                        <figure class="avatar mb-1">
                            <img src="../assets/logo.png">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="/signup" >Sign Up</router-link> &nbsp;·&nbsp;
                        <router-link to="/fpassword">Forgot Password</router-link> &nbsp;·&nbsp;
                    </p>
                </div>
            </div>
        </div>
    </section>
   
  </div> 
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
name:'login',
components:{
navbar
}
}
</script>

<style>
.login-hr{
  color: black;
}
</style>