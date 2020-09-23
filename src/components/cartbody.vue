<template>
  <div>
       <div class="container">
    <div class="columns mt-5">
      <div class="column is-two-thirds">

        <div class="card my-5 mx-5">
          <div class="card-content columns">
            <div class="column is-one-fifth">
              <figure class="image is-128x128">
                <img class="is-rounded" src="../assets/food_menu/single_food_1.png">
              </figure>
            </div>
            <div id="carddetails" class="column has-text-left">
              <h1 class="subtitle mb-2">Black Forest Gateau</h1>
              <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

              <div class="columns mt-3" >
                <div id="qtybutton" class="column qty ">
                  <span class="qty-subtract"><i class="fas fa-minus"></i></span>
                  <input type="text" name="qty" value="1">
                  <span class="qty-add"><i class="fas fa-plus"></i></span>
                </div>
                
                  <button class="column button is-success mt-4 savebtn">Save for later</button>
                  <button class="column button is-success mt-4 savebtn">Remove Item</button>
              </div>

            </div>
          </div>
        </div>

        <div class="card my-5 mx-5">
          <div class="card-content columns">
            <div class="column is-one-fifth">
              <figure class="image is-128x128">
                <img class="is-rounded" src="../assets/food_menu/single_food_2.png">
              </figure>
            </div>
            <div id="carddetails" class="column has-text-left">
              <h1 class="subtitle mb-2">Pineapple Cake.</h1>
              <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

              <div class="columns mt-3" >
                <div id="qtybutton" class="column qty ">
                  <span class="qty-subtract"><i class="fas fa-minus"></i></span>
                  <input type="text" name="qty" value="1">
                  <span class="qty-add"><i class="fas fa-plus"></i></span>
                </div>
                
                  <button class="column button is-success mt-4 savebtn">Save for later</button>
                  <button class="column button is-success mt-4 savebtn">Remove Item</button>
              </div>

            </div>
          </div>
        </div>

        

      </div>


      <div class="column is-one-third has-text-left">
        <div id="PriceCard" class="card mx-5">
          <div class="card-content">
            <div class="content">
              <h1 class="subtitle is-5">PRICE DETAILS</h1>
              <hr>
              <div class="table-container">
                <table class="table is-borderless">
                  <tr>
                    <td>Item Total</td>
                    <td>₹1250</td>
                  </tr>
                  <tr>
                    <td>Delivery Fee</td>
                    <td>₹40</td>
                  </tr>
                  <tr>
                    <td>Tax and Charges</td>
                    <td>₹52</td>
                  </tr>
                </table>
              </div>
              <button class="button is-success is-fullwidth" style="border-radius: 20px;">Place Order</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
name:'cartbody,'
}
</script>

<style>

</style>