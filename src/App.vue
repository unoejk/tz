<script setup="">
    // components
    import MainPageWrapper from './components/_MainPageWrapper/MainPageWrapper.vue'
    import Add from './components/Add.vue'
    import List from './components/List.vue'

    // pinia
    import {useConnector} from "./stores/connector";
    // reactive pinia
    import {storeToRefs} from 'pinia'
    const {isList}=storeToRefs(useConnector())

</script>

<template>
    <MainPageWrapper>
        <Add v-if="!isList"/>
        <List v-if="isList"/>
    </MainPageWrapper>
</template>

<style lang="scss" scoped></style>