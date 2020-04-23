<template>
    <div class="nk-banner" id="mainHero">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <b-col md="6">
                    <div class="nk-banner-block">
                        <div class="content mt-4 mt-sm-0">
                            <h1>Rescue app</h1>
                            <h2>Tu red de ayudas</h2>
                            <p>Centralización y emparejamiento de la oferta y la demanda de recursos sanitarios</p>
                            <p>
                                <b-button class="d-md-none" block squared to="/participar">Participar</b-button>
                                <b-button class="d-none d-md-inline" squared size="lg" to="/participar">Participar</b-button>
                            </p>
                            <p class="mt-4 ds-wrapper">
                                <iframe scrolling="no" class="data" src="https://datastudio.google.com/embed/reporting/7bc90df8-23a4-420f-8175-ac8862d9e05b/page/hUWLB" frameborder="0" style="border:0"></iframe>
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col md="4" class="d-none d-md-block" style="overflow:hidden;">
                    <video class="d-none d-md-block w-100" style="margin-bottom:-1px" autoplay muted loop>
                        <source src="~/assets/videos/rescueapp-header-video.mp4" type="video/mp4">
                    </video>
                    <!-- <div class="d-none d-md-block w-100"><img src="~/assets/videos/rescue-app-header-animation.gif" alt="" /></div> -->
                    <div class="d-md-none d-flex justify-content-center"><img class="h-50 w-50" src="~/assets/images/tu-red-de-ayudas.jpg" alt="" /></div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ds-wrapper {
    max-height: 100px;
    overflow: hidden;
}
.data {
    width: 100%;
    height: 100%;
    max-width: 330px;
    pointer-events: none;
    overflow: scroll;
}
</style>
