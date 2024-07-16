<script lang="ts">
import { defineComponent } from 'vue';
import VideoPreview from '@/components/common/VideoPreview.vue';

export default defineComponent({
  name: 'thumbnails',
  props: {
    thumbnails: {
      type: Array as () => Array<any>,
      default: () => []
    }
  },
  components: {
    VideoPreview
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleShowDetails (data: { id: string }) {
      this.$router.push(`item/${data.id}`)
    },
    pauseVideo(ref: string) {
      const videoElement = this.$refs[ref] as HTMLVideoElement | undefined;

      if (videoElement) {
        videoElement.pause();
      }
    }
  }
});
</script>

<template>
  <div class="thumbnails-wrapper row">
    <div class="flex flex-wrap gap-0">
      <div v-for="(card, indx) in thumbnails" :key="indx" class="w-full md:w-1/2 lg:w-1/4">
        <div class="p-3">
          <el-card class="w-full" body-style="padding: 0px">
              <div class="video-container" v-if="card.videoSrc">
                <VideoPreview
                  :data="{
                    ref: card.id,
                    controls: false,
                    autoplay: true,
                    muted: true,
                    loop: true,
                    videoSrc: card.videoSrc
                  }"
                />
              </div>

              <div class="cover">
                <div @click="handleShowDetails(card)" class="show-details">
                  <el-button type="primary" :icon="'TopRight'" size="large" circle />
                </div>
              </div>
          </el-card>
        </div>
      </div>
  </div>
</div>
</template>

<style lang="scss">
.thumbnails-wrapper {
  @apply w-full float-left;

  .el-card {
    @apply relative p-0 w-full h-[500px] rounded-lg mx-auto;

    .video-container {
      @apply w-full h-[500px];

      video {
        @apply w-full h-full object-cover;
      }
    }

    .cover {
      @apply absolute left-0 top-0 w-full h-full cursor-pointer;

      .show-details {
        @apply opacity-0 z-[995] absolute right-[7px] bottom-0 text-white w-[60px] h-[60px] cursor-pointer;
      }
    }

    .cover:hover {
      @apply border-solid border-b-4 border-blue-400;

      .show-details {
        @apply opacity-100;
      }
    }
  }
}
</style>