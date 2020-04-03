<template>
    <div>
        <ul>
            <li v-for="(logo, index) in images" :key="index">
                <img :src="require(`@/assets/images/partners/${logo.name}`)" alt="">
            </li>
            <!--  Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens!  -->
            <li></li>
        </ul>
        <div>
            <img src="@/assets/images/collaborators/porpouri.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            images: []
        }
    },

    mounted () {
        this.importAll(require.context('~/assets/images/partners/', true))
    },

    methods: {
        importAll (r) {
            r.keys().forEach(key => (this.images.push({ name: key.substring(2) })))
        }
    }
}
</script>

<style scoped>
ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
li {
    max-width: 7em;
}
</style>
