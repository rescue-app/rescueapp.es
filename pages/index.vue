<template>
    <div>
        <Menu />
        <MainHero />
        <WhatWeDo />
        <ValuesContainer />
    </div>
</template>

<script>
import Menu from '@/components/menu'
import MainHero from '@/components/mainHero'
import WhatWeDo from '@/components/whatWeDo'
import ValuesContainer from '@/components/valuesContainer'
export default {
    components: {
        Menu,
        MainHero,
        WhatWeDo,
        ValuesContainer
    }
}
</script>
