<template>
    <div>
        <MainHero />
        <WhatWeDo />
        <ValuesContainer />
        <MapFrenaLaCurva />
        <Manifest />
        <Contact />
    </div>
</template>

<script>
import MainHero from '@/components/mainHero'
import WhatWeDo from '@/components/whatWeDo'
import ValuesContainer from '@/components/valuesContainer'
import MapFrenaLaCurva from '@/components/mapFrenaLaCurva'
import Manifest from '@/components/manifest'
import Contact from '@/components/contact'
export default {
    components: {
        MainHero,
        WhatWeDo,
        ValuesContainer,
        MapFrenaLaCurva,
        Manifest,
        Contact
    }
}
</script>
