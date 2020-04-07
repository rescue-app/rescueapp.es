<template>
    <div>

        <b-row v-for="(chunk, index) in team" :key="`logosChunkTeam${index}`">
            <b-col v-for="(logo) in chunk" :key="logo.filename" class="d-flex align-items-center justify-content-center">
                <a :href="logo.website" target="_blank">
                    <img :src="require(`@/assets/images/team/${logo.filename}`)" :alt="logo.name" :title="logo.name" class="img-responsive p-1">
                </a>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <hr />
                <h6 class="text-center">Partners</h6>
            </b-col>
        </b-row>
        <b-row v-for="(chunk, index) in partners" :key="`logosChunkPartners${index}`">
            <b-col v-for="(logo) in chunk" :key="logo.filename" class="d-flex align-items-center">
                <a :href="logo.website" target="_blank">
                    <img :src="require(`@/assets/images/partners/${logo.filename}`)" :alt="logo.name" :title="logo.name" class="img-responsive p-1">
                </a>
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
                const parts = key.substring(2, key.length - 4).split('|')
                images.push({
                    filename: key.substring(2),
                    position: parts[0],
                    name: parts[1],
                    website: (parts.length === 3) ? `https://${parts[2]}` : undefined
                })
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
