<template>
    <section class="section section-l bg-light section-handwash" id="handwash">
        <div class="container mt-n4">
            <div class="section-subhead text-center">
                <h4 class="title">¿Dónde? <br class="d-sm-none"> Toda España</h4>
            </div>
            <div v-if="interaction" class="m-auto" style="position:relative; max-width:1020px;">
                <iframe width="100%" height="600" src="https://es.mapa.frenalacurva.net/views/map" frameborder="0" allowfullscreen></iframe>
                <img class="frame-overlay" src="~/assets/images/logo-rescueapp.png">
            </div>
            <div v-if="!interaction" style="cursor: pointer;">
                <img class="img-fluid d-none d-lg-block" src="~/assets/images/frena-la-curva-iframe.jpg" @click="enableInteraction" />
                <img class="img-fluid d-lg-none" src="~/assets/images/frena-la-curva-iframe-mobile.jpg" @click="enableInteraction" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            interaction: false
        }
    },
    methods: {
        enableInteraction () {
            this.interaction = true
        }
    }

}
</script>

<style scoped>
.frame-overlay {
    border-top-left-radius:18px;
    border-bottom-left-radius:18px;
    padding:.6em; background-color:#fff7ed;
    height:59px;
    top:529px;
    right:0px;
    position:absolute;
    z-index:9
}
</style>
