<template>
    <div></div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        hideHeaders: {
            type: Boolean,
            default: true
        },
        hideFooter: {
            type: Boolean,
            default: true
        },
        opacity: {
            type: Number,
            default: 100
        },
        buttonText: {
            type: String,
            default: undefined
        },
        onSubmit: {
            type: Function,
            default: undefined
        }
    },
    mounted () {
        const options = {
            hideHeaders: this.hideHeaders,
            hideFooter: this.hideFooter,
            opacity: this.opacity,
            buttonText: this.buttonText,
            onSubmit: this.onSubmit
        }
        this.$typeform.makeWidget(this.$el, this.url, options)
    }
}
</script>
