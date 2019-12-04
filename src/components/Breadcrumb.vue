<template>
    <div id="breadcrumb-container">
        <p>You are here: <span class="breadcrumb-position">{{ position }}</span></p>
    </div>
</template>

<script>
    export default {
        data() {
            return { position: 'start' };
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/sass/_variables.scss';
    .breadcrumb-container p {
        margin: 0;
    }

    .breadcrumb-position {
        font-weight: 800;
        color: white;
        background-color: $blue;
        padding: 0.25em;
    }
</style>