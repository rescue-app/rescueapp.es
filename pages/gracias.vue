<template>
    <div>
        <SmallHero />
        <b-container class="mt-4">
            <b-row>
                <b-col>
                    <h2>¡Gracias por participar!</h2>
                    <h6>Nos pondremos en contacto contigo lo antes posible. Recuerda seguirnos en nuestras redes sociales =)</h6>
                </b-col>
            </b-row>
        </b-container>
        <Contact />
    </div>
</template>

<script>
import SmallHero from '@/components/smallHero'
import Contact from '@/components/contact'
export default {
    components: {
        SmallHero,
        Contact
    }
}
</script>
