<template>
    <div>
        <b-container class="pl-0 pr-0">
            <b-navbar toggleable="lg" fixed="top" class="bg-white pl-5 pr-5" v-b-scrollspy="20">
                <b-navbar-brand to="/">
                    <img style="width: 200px" src="~/assets/images/logo-rescueapp.png" alt="Rescueapp logo" />
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/#mainHero" @click="scrollTo('#mainHero')">Home</b-nav-item>
                        <b-nav-item to="/#queHacemos" @click="scrollTo('#queHacemos')">¿Qué hacemos?</b-nav-item>
                        <b-nav-item to="/#valores" @click="scrollTo('#valores')">Valores</b-nav-item>
                        <b-nav-item to="/#quienesSomos" @click="scrollTo('#quienesSomos')">¿Quienes somos?</b-nav-item>
                        <b-nav-item to="/#contacto" @click="scrollTo('#contacto')">Contacto</b-nav-item>
                        <b-button class="d-none d-lg-block ml-lg-3" to="/participar" @click="removeActiveClass">Participar</b-button>
                        <b-nav-item class="d-lg-none" to="/participar" @click="removeActiveClass">
                            <span class="font-weight-bold text-success">Participar</span>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
export default {
    mounted () {
        // From testing, without a brief timeout, it won't work.
        if (this.$route.hash) {
            setTimeout(() => this.scrollTo(this.$route.hash), 1)
        }
    },
    methods: {
        scrollTo (hashbang) {
            setTimeout(() => { location.href = hashbang }, 1)
        },
        removeActiveClass () {
            const active = document.getElementsByClassName('active')
            while (active.length) { active[0].classList.remove('active') }
        }
    }
}
</script>
