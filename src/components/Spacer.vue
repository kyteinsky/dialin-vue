<template>
    <div class="spacer" :style="{ height: height }"></div>
</template>

<script>
export default {
    name: 'Spacer',
    props: {
        height: String,
    }
}
</script>
