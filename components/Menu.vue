<template>
    <div>
        <b-container class="pl-0 pr-0">
            <b-navbar toggleable="lg" type="light">
                <b-navbar-brand to="/">
                    <img style="width: 200px" src="~/assets/images/logo-rescueapp.png" alt="Rescueapp logo" />
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-button class="d-none d-lg-block ml-lg-3" to="/participar">Participar</b-button>
                        <b-nav-item class="d-lg-none" to="/participar">
                            <span class="font-weight-bold text-success">Participar</span>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>
