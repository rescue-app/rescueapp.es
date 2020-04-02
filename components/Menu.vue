<template>
    <div class="nk-navbar is-light is-sticky" id="navbar">
        <div class="container">
            <div class="nk-navbar-wrap">
                <div class="nk-navbar-logo logo">
                    <nuxt-link class="logo-link" to="/">
                        <img src="images/logo-rescue.png" alt="Rescueapp logo" />
                    </nuxt-link>
                </div>
                <div class="nk-navbar-toggle d-lg-none">
                    <a href="#" class="toggle" data-menu-toggle="navbar-menu">
                        <em class="icon-menu icon ni ni-menu"></em>
                        <em class="icon-close icon ni ni-cross"></em>
                    </a>
                </div>
                <nav class="nk-navbar-menu" id="navbar-menu">
                    <ul class="nk-menu">
                        <li class="nk-menu-item">
                            <nuxt-link class="nav-link nk-menu-link" to="/">Home</nuxt-link>
                        </li>
                        <li class="nk-menu-item">
                            <nuxt-link class="nav-link nk-menu-link" to="/">¿Quienes somos?</nuxt-link>
                        </li>
                    </ul>
                    <ul class="nk-menu-btns">
                        <li class="nk-menu-item">
                            <nuxt-link class="btn btn-sm scrollto nav-link" to="/participar">Participar</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
