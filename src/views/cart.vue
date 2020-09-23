<template>
<div>

  <navbar></navbar>
  <cartbody></cartbody>
  <footercomponent/>
</div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import cartbody from '@/components/cartbody.vue'
import footercomponent from '@/components/footer-component.vue'


export default {
name:'cart',
components: {
    navbar,
    cartbody,
    footercomponent
}
}
</script>

<style>

</style>