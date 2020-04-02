<template>
    <div>
        <SmallHero />
        <div class="container mt-4">
            <div class="section-content">
                <div class="row g-gs justify-content-between">
                    <div class="col">
                        <div class="text-block">
                            <h5 class="subtitle">¿CÓMO PUEDO COLABORAR O PEDIR AYUDA?</h5>
                            <h2 class="title">PARTICIPA</h2>
                            <p class="lead">En Rescue app, buscamos centralizar los recursos contra el COVID-19, <strong>creando un repositorio único de con la información sobre las necesidades de cada centro hospitalario, residencia de mayores y de asistencia a particulares.</strong></p>
                            <p>A continuación puedes participar en el proyecto, por favor sigue los pasos indicados y nos pondremos en contacto contigo lo antes posible para darte una solución</p>
                            <Typeform
                                class="w-100 mb-3"
                                style="height: 700px"
                                :hide-headers="true"
                                :hide-footer="true"
                                :opacity="0"
                                url="https://info548263.typeform.com/to/W2VwqF"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Typeform from '@/components/typeform'
import SmallHero from '@/components/smallHero'

export default {
    components: {
        SmallHero,
        Typeform
    }
}
</script>
