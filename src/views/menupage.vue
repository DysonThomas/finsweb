<template>
<div>
  <navbar/>
  <menutitle/>
  <menulist/>   
  <footercomponent/>
</div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import menutitle from '@/components/menutitle.vue'
import menulist from '@/components/menulist.vue'
import footercomponent from '@/components/footer-component.vue'


export default {
    name:'menupage',
 components: {
    navbar,
    menutitle,
    menulist,
    footercomponent
 }
}
</script>

<style>

</style>