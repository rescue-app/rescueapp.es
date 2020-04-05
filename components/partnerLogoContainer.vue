<template>
    <div>
        <b-col sm="12">
            <img :src="require(`@/assets/images/samaipata.png`)" class="img-responsive">
        </b-col>
        <b-row v-for="(chunk, index) in team" :key="index">
            <b-col v-for="(logo) in chunk" :key="logo" class="d-flex align-items-center justify-content-center">
                <img :src="require(`@/assets/images/team/${logo}`)" class="img-responsive p-1">
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <hr />
                <h6 class="text-center">Partners</h6>
            </b-col>
        </b-row>
        <b-row v-for="(chunk, index) in partners" :key="index">
            <b-col v-for="(logo) in chunk" :key="logo" class="d-flex align-items-center">
                <img :src="require(`@/assets/images/partners/${logo}`)" class="img-responsive p-1">
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            team: [],
            partners: []
        }
    },

    mounted () {
        this.team = this.getImages(require.context('~/assets/images/team/', true), 4)
        this.partners = this.getImages(require.context('~/assets/images/partners/', true), 6)
    },

    methods: {
        getImages (resource, maxPerRow) {
            const images = []
            resource.keys().forEach((key) => {
                images.push(key.substring(2))
            })
            return this.chunkArray(images, maxPerRow)
        },
        chunkArray (originalArray, chunkSize) {
            const results = []
            while (originalArray.length) {
                results.push(originalArray.splice(0, chunkSize))
            }
            return results
        }
    }
}
</script>
