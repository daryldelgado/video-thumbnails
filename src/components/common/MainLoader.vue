<script lang="ts">
import { useGlobalEventsStore } from '@/pinia/stores/globalEvents'

export default {
  data () {
    return {
        globalEventsStore: useGlobalEventsStore()
    }
  },

  mounted: () => {
    console.log('Component mounted')
  },
}
</script>

<template>
    <div id="mainLoader" :class="{ 'show': globalEventsStore.getMainLoader }">
        <div class="lds-dual-ring"></div>
    </div>    
</template>

<style lang="scss">
@import '../../assets/styles/common';

#mainLoader {
    width: 0px;
    height: 0px;
    top: 0;
    left: 0;
    position: fixed;
    padding: 0px;
    margin: 0 auto;
    z-index: 999;
    background: rgb(66 66 66 / 80%);

    &.show {
        width: 100%;
        height: 100%;

        .lds-dual-ring {
            width: 80px;
            height: 80px;
        }
    }

    .lds-dual-ring {
        position: absolute;
        width: 0px;
        height: 0px;
        margin: 0 auto;
        top: calc(50% - 80px);
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 50px;
        height: 50px;
        margin: 8px;
        border-radius: 50%;
        border: 4px solid #4e3877;
        border-color: #47ff5f transparent #47ff5f transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>



