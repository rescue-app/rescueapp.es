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
                            <custom-form></custom-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SmallHero from '@/components/smallHero'
import CustomForm from '@/components/customForm'

export default {
    components: {
        SmallHero,
        CustomForm
    },
    methods: {
        onSubmit () {
            this.$ga.event({
                eventCategory: 'Forms',
                eventAction: 'Send Take Part Form',
                eventLabel: 'takePart',
                eventValue: 1
            })
        }
    }
}
</script>
