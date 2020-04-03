<template>
    <section class="section section-l bg-light section-handwash" id="handwash">
        <div class="container mt-n4">
            <div class="section-subhead text-center">
                <h4 class="title">¿Dónde? <br class="d-sm-none"> Toda España</h4>
                <a href="https://frenalacurva.net/" class="btn btn-sm btn-transparent scrollto"><span>Con la colaboración de FrenaLaCurva</span><em class="icon ni ni-arrow-long-right"></em></a>
            </div>
            <div v-if="interaction">
                <iframe width="100%" height="600" src="https://es.mapa.frenalacurva.net/views/map" frameborder="0" allowfullscreen></iframe>
            </div>
            <div v-if="!interaction">
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
