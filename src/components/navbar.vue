<template>
     <div class="container">
  <nav class="navbar is-transparent  px-6 mt-4 " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img id="icon-brand" src="../assets/logo.png">
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div id="navbar-custom" class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>

        <router-link class="navbar-item" to="/">
          About
        </router-link>
       <router-link class="navbar-item" to="menu">
          Menu
        </router-link>
        <router-link class="navbar-item" to="/">
          Chefs
        </router-link>
        <router-link class="navbar-item" to="/">
          Contact
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link to="/login" class="button  is-success is-rounded is-outlined ">
              <strong><i class="far fa-user"></i></strong>
            </router-link>
          </div>
          <div class="buttons ml-2">
            <router-link to="cart" class="button  is-success is-rounded">
              <i class="fas fa-cart-plus"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>
<script>
export default {
    name:'navbar',

}
</script>
