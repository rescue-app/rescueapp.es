<template>
    <section class="section section-l bg-light section-protect pb-0" id="queHacemos">
        <div class="section-head text-center wide-lg">
            <h5 class="subtitle">Sobre nosotros</h5>
            <h2 class="title">¿Qué hacemos?</h2>
            <p>
                Nuestra misión principal es atender la creciente necesidad de recursos sanitarios.
                Lo hacemos mediante la centralización de la oferta y la demanda y así hacer el emparejamiento más óptimo.
            </p>
        </div>
        <InfographicSection />
        <ExamplesVideo />
    </section>
</template>

<script>
import InfographicSection from '@/components/infographicSection'
import ExamplesVideo from '@/components/examplesVideo'
export default {
    components: {
        InfographicSection,
        ExamplesVideo
    }
}
</script>
