<template>
    <div>
        <SmallHero />
        <div class="container mt-4">
            <div class="section-content">
                <div class="row g-gs justify-content-between">
                    <div class="col">
                        <h2 class="title">AYÚDANOS CON ESTA NECESIDAD</h2>
                        <p>Si puedes aportar tu ayuda a esta necesidad, por favor completa el siguiente formulario:</p>
                    </div>
                </div>

                <Ask :type="type" :id="id" :reference="reference" />
            </div>
        </div>
    </div>
</template>

<script>
import SmallHero from '@/components/smallHero'
import Ask from '@/components/ask'

export default {
    components: {
        SmallHero,
        Ask
    },
    data () {
        return {
            id: 'id' in this.$route.query ? this.$route.query.id : undefined,
            reference: 'reference' in this.$route.query ? this.$route.query.reference : undefined,
            type: 'need'
        }
    }
}
</script>
