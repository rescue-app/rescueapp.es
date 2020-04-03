<template>
    <div class="nk-wrap">
        <Menu />
        <nuxt />
        <Footer />
        <CookieControl locale="es" />
    </div>
</template>

<script>
import Menu from '@/components/menu'
import Footer from '@/components/footer'
export default {
    components: {
        Menu,
        Footer
    }
}
</script>
