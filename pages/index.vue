<template>
    <div>
        <Menu />
        <MainHero />
        <WhatWeDo />
        <ValuesContainer />
        <Manifest />
        <Contact />
    </div>
</template>

<script>
import Menu from '@/components/menu'
import MainHero from '@/components/mainHero'
import WhatWeDo from '@/components/whatWeDo'
import ValuesContainer from '@/components/valuesContainer'
import Manifest from '@/components/manifest'
import Contact from '@/components/contact'
export default {
    components: {
        Menu,
        MainHero,
        WhatWeDo,
        ValuesContainer,
        Manifest,
        Contact
    }
}
</script>
