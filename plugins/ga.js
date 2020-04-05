import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

export default (ctx, inject) => {
    const enabled = ctx.app.$cookies.consent && Array.isArray(ctx.app.$cookies.enabledList) && ctx.app.$cookies.enabledList.includes('google-analytics')
    Vue.use(vueAnalytics, {
        id: 'UA-162736581-1',
        disabled: !enabled,
        debug: {
            enabled: false,
            trace: true,
            sendHitTask: true
        },
        router: ctx.app.router
    })
    ctx.$ga = Vue.$ga
    inject('ga', Vue.$ga)
}
