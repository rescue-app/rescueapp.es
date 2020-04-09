<template>
    <div class="nk-wrap">
        <Navbar />
        <nuxt style="margin-top:7em" />
        <Footer />
        <CookieControl locale="es" />
    </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
    components: {
        Navbar,
        Footer
    }
}
</script>
