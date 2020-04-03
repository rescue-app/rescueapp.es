<template>
    <div class="nk-wrap">
        <Menu />
        <nuxt style="margin-top:5em" />
        <Footer />
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
