<template>
<div>
  <div class="tabs is-toggle is-medium  is-centered is-mobile is-multiline">
      <ul>
        <li><a><span class="icon is-small is-hoverable"><i class="fas fa-utensils"></i></span>Special</a></li>
        <li><a><span class="icon is-small"><i class="fas fa-cookie"></i></span><span>BreakFast</span></a></li>
        <li><a><span class="icon is-small"><i class="fas fa-concierge-bell"></i></span><span>Lunch</span></a></li>
        <li><a><span class="icon is-small"><i class="fas fa-apple-alt"></i></span><span>Dinner</span></a></li>
        <li><a><span class="icon is-small"><i class="fas fa-coffee"></i></span><span>Snacks</span></a></li>
      </ul>
    </div>
    <div class="columns px-4  is-mobile is-multiline">
      <div  id="cardcontents" class="column">
        <div class="card">
          <div class="card-image">
              <img class="is-rounded mt-5" src="../assets/food_menu/single_food_1.png" alt="Placeholder image">
          </div>
          <div class="card-content">
            <h1 class="is-size-5 is-size-4-mobile">Oreo Cheesecake</h1>
            <!-- <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</p> -->
            <p class="mt-1 is-size-5" p>₹120</p>
            <button id="showModal" class="button mt-2  is-success is-rounded">Add To Bag <i class="fas fa-cart-plus"></i></button>
          </div>
        </div>

      </div>
      <div  id="cardcontents" class="column is-four-fifth">
        <div class="card">
          <div class="card-image">
              <img class="is-rounded mt-5" src="../assets/food_menu/single_food_2.png" alt="Placeholder image">
          </div>
          <div class="card-content">
            <h1 class="is-size-5 is-size-4-mobile">Mango Meringue Cake</h1>
            <!-- <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</p> -->
            <p class="mt-1 is-size-5" p>₹120</p>
            <button id="showModal" class="button mt-2  is-success is-rounded">Add To Bag<i class="fas fa-cart-plus"></i></button>
          </div>
        </div>

      </div>
      <div  id="cardcontents" class="column is-four-fifth">
        <div class="card">
          <div class="card-image">
              <img class="is-rounded mt-5" src="../assets/food_menu/single_food_3.png" alt="Placeholder image">
          </div>
          <div class="card-content">
            <h1 class="is-size-5 is-size-4-mobile">Eggless Truffle Cake</h1>
            <!-- <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</p> -->
            <p class="mt-1 is-size-5" p>₹120</p>
            <button id="showModal" class="button mt-2  is-success is-rounded">Add To Bag <i class="fas fa-cart-plus"></i></button>
          </div>
        </div>

      </div>
      <div  id="cardcontents" class="column  is-four-fifth">
        <div class="card card-shape">
          <div class="card-image">
              <img class="is-rounded mt-5" src="../assets/food_menu/single_food_4.png" alt="Placeholder image">
          </div>
          <div class="card-content">
            <h1 class="is-size-5 is-size-4-mobile">Pineapple Cake</h1>
            <!-- <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</p> -->
            <p class="mt-1 is-size-5" p>₹120</p>
            <button id="showModal" class="button mt-2  is-success is-rounded">Add To Bag <i class="fas fa-cart-plus"></i></button>
          </div>
        </div>

      </div>
      
    </div>
    </div>
</template>

<script>
export default {
    name:'menulist'

}
</script>

<style>

</style>