<template>
    <div>
        <navbar></navbar>
        <hero/>
        <aboutus/>
        <team/>
        <footercomponent/>
    </div>
</template>
<script>
import navbar from '@/components/navbar.vue'
import hero from '@/components/hero.vue'
import aboutus from '@/components/aboutus.vue'
import team from '@/components/team.vue'
import footercomponent from '@/components/footer-component.vue'


export default {
    name:'homepage',
     components: {
    navbar,
    hero,
    aboutus,
    team,
    hero,
    footercomponent
  }
}
</script>
