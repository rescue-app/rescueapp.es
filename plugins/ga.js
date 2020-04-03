import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

export default ({ app }) => {
    const enabled = app.$cookies.consent && Array.isArray(app.$cookies.enabledList) && app.$cookies.enabledList.includes('google-analytics')
    Vue.use(vueAnalytics, {
        id: 'UA-162736581-1',
        disabled: !enabled,
        debug: {
            enabled: false,
            trace: true,
            sendHitTask: true
        }
    })
}
