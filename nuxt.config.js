
module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Rescueapp: Centralización y emparejamiento de la oferta y la demanda de recursos sanitarios',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Centralización y emparejamiento de la oferta y la demanda de recursos sanitarios' },
            { hid: 'og_locale', property: 'og:locale', content: 'es_ES' },
            { hid: 'og_type', property: 'og:type', content: 'Website' },
            { hid: 'og_title', property: 'og:title', content: 'Rescueapp' },
            { hid: 'og_description', property: 'og:description', content: 'Centralización y emparejamiento de la oferta y la demanda de recursos sanitarios' },
            { hid: 'og_url', property: 'og:url', content: 'https://rescueapp.es' },
            { hid: 'og_description', property: 'og:description', content: 'Centralización y emparejamiento de la oferta y la demanda de recursos sanitarios' },
            { hid: 'og_description', property: 'og:description', content: 'Centralización y emparejamiento de la oferta y la demanda de recursos sanitarios' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    env: {
        linkedin: 'https://www.linkedin.com/company/rescue-app/',
        instagram: 'https://www.instagram.com/rescue_app/',
        email: 'http://info@rescueapp.es/'
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/styles.scss',
        '@/assets/scss/bundle.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/typeform.js', mode: 'client' }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
    },
    /*
    ** Build configuration
    */
    build: {
    /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    }
}
