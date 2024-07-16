<script lang="ts">
import { useGlobalEventsStore } from '@/pinia/stores/globalEvents'

export default {
  data () {
    return {
      previewDialogStore: useGlobalEventsStore(),
      previewDialog: useGlobalEventsStore().previewDialog
    }
  },

  mounted: () => {
    console.log('Component mounted')
  },
}
</script>

<template>
    <div id="previewDialog" :class="{ 'show': previewDialogStore.previewDialog.isVisible }">
        <div class="box">
            <div @click="previewDialogStore.hidePreviewDialog()" class="close-icon"></div>
            
            <div class="video-container" v-if="previewDialogStore.previewDialog && previewDialogStore.previewDialog.data">
                <video
                    :controls="true"
                    :autoplay="true"
                    :muted="true"
                    :loop="false"
                    style="width: 100%">
                    <source :src="previewDialogStore.previewDialog.data.videoSrc" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div class="details">

            </div>
        </div>
    </div>
</template>

<style lang="scss">
#previewDialog {
    width: 0px;
    height: 0px;
    top: 0;
    left: 0;
    position: fixed;
    padding: 0px;
    margin: 0 auto;
    z-index: 999;
    background: rgb(66 66 66 / 60%);
    align-items: center;
    justify-content: center;
    display: none;

    &.show {
        width: 100%;
        height: 100%;
        display: flex;
        
        .box {
            min-height: 400px;
            min-width: 350px;
        }
    }

    .box {
        padding: 15px;
        border: 1px solid #eee;
        border-radius: 5px;
        background-color: #fff;
        height: 80%;
        width: 70%;
        position: relative;
        box-shadow: 1px 0px 14px 0px rgba(0,0,0,0.13);
        -webkit-box-shadow: 1px 0px 14px 0px rgba(0,0,0,0.13);
        -moz-box-shadow: 1px 0px 14px 0px rgba(0,0,0,0.13);

        &.error {
            .title {
                color: #e74949;
            }
        }

        .close-icon {
            position: absolute;
            right: 10px;
            top: 25px;
            height: 32px;
            width: 32px;
            cursor: pointer;

            &:after {
                display: inline-block;
                content: "\00d7"; /* This will render the 'X' */
                font-size: 60px;
                line-height: 0;
                color: #444141;
                font-weight: 400;
            }
        }

        .video-container {
            width: 60%;
            height: 100%;
            position: relative;

            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .title {
            text-align: left;
            min-height: 20px;
            font-weight: 400;
            font-size: 26px;
            padding: 16px 0px;
            text-align: center;
            color: #53a944;
        }

        .content {
            p {
                font-weight: 400;
                font-size: 15px;
            }
        }
    }
}
</style>
