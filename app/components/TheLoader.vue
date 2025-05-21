<template>
    <div class="loaderContainer" :class="{ 'loaderFullScreen': fullScreen }">
        <div class="loaderWrapper">
            <div class="spinnerContainer">
                <!-- <div class="loader"></div> -->
                 <TheThinking />
            </div>
            <p class="loaderText" v-if="text">{{ text }}</p>
        </div>
        <button v-if="fullScreen && closeButton" @click="$emit('close')" class="closeButton" aria-label="閉じる">
            <span class="closeIcon">×</span>
        </button>
    </div>

    <!-- 例 -->
    <!-- <TheLoader 
  :fullScreen="true" 
  :closeButton="true" 
  text="読み込み中です" 
  @close="handleClose" 
/> -->
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: '読み込み中'
    },
    fullScreen: {
        type: Boolean,
        default: false
    },
    closeButton: {
        type: Boolean,
        default: false
    }
})

defineEmits(['close'])
</script>

<style scoped>
.loaderContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #88888811;
}

.loaderFullScreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 9999;
}

.loaderWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.spinnerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
/* .loader {
    width: 60px;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side, var(--subColor) 90%, #0000);
    background:
        var(--_g) 0% 50%,
        var(--_g) 50% 50%,
        var(--_g) 100% 50%;
    background-size: calc(100%/3) 50%;
    animation: l3 1s infinite linear;
}

@keyframes l3 {
    20% {
        background-position: 0% 0%, 50% 50%, 100% 50%
    }

    40% {
        background-position: 0% 100%, 50% 0%, 100% 50%
    }

    60% {
        background-position: 0% 50%, 50% 100%, 100% 0%
    }

    80% {
        background-position: 0% 50%, 50% 50%, 100% 100%
    }
}

.loaderText {
    color: var(--grayColor100);
    font-size: var(--standardFontSize);
    font-weight: 600;
    margin: 0.5rem 0;
    text-align: center;
} */

/* HTML: <div class="loader"></div> */
.loader {
    width: 60px;
    aspect-ratio: 4;
    --_g: no-repeat radial-gradient(circle closest-side, var(--subColor) 90%, #0000);
    background:
        var(--_g) 0% 50%,
        var(--_g) 50% 50%,
        var(--_g) 100% 50%;
    background-size: calc(100%/3) 100%;
    animation: l7 1s infinite linear;
}

@keyframes l7 {
    33% {
        background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%
    }

    50% {
        background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%
    }

    66% {
        background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%
    }
}

.closeButton {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--grayColor100);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: var(--softShadow);

    &:hover {
        transform: scale(1.05);
        background-color: var(--grayColor200);
    }
}

.closeIcon {
    color: var(--whiteColor100);
    font-size: 24px;
    font-weight: bold;
    line-height: 1;
}
</style>