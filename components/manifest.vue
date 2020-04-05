<template>
    <section class="section section-l bg-accent-light tc-light section-treatment has-overlay mt-3" id="quienesSomos">
        <div class="overlay shape shape-b"></div><!-- Overlay Shape -->
        <div class="container">
            <div class="section-content">
                <div class="row g-gs gy-sm-m justify-content-between align-items-center">
                    <div class="col-lg-7 col-xl-6">
                        <div class="text-block">
                            <h5 class="subtitle">Equipo</h5>
                            <h2 class="title">#yosumo</h2>
                            <p> <strong>Todo esto es posible gracias a estas empresas y colaboradores. </strong></p>
                            <PartnerLogoContainer style="background-color: #FFFFFF;" />
                            <p>Y todos los demás que luchan y apoyan nuestra causa, respetando #QuedateEnCasa</p>
                        </div><!-- .text-block -->
                    </div><!-- .col -->
                    <div class="col-lg-5">
                        <div class="box5 bg-accent-dark">
                            <h6 class="title">Manifesto #StopCorona</h6>
                            <ul class="list-arrow">
                                <li>Somos emprendedores: supervivientes a prueba de crisis.</li>
                                <li>Somos el motor de la innovación de nuestro país.</li>
                                <li>Utilizar la tecnología para solucionar problemas es nuestro ADN.</li>
                                <li>Conocemos los patrones de la viralización aplicados a internet.</li>
                                <li>Nuestras plataformas se saturan como el sistema sanitario.</li>
                                <li>Los datos son el oro de nuestros negocios.</li>
                                <li>Hemos construido nuestras startups aprendiendo de los otros.</li>
                                <li>Internet es nuestro universo y tenemos que hacernos oír.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PartnerLogoContainer from '@/components/partnerLogoContainer'

export default {
    components: {
        PartnerLogoContainer
    }
}
</script>
