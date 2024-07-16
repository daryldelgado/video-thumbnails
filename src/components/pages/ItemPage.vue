<script lang="ts">
  import { defineComponent } from 'vue';
  import VideoPreview from '@/components/common/VideoPreview.vue';
  import { getDataStore } from '@/pinia/stores/getData';

  export default defineComponent({
    name: 'itemDetails',
    components: {
      VideoPreview
    },
    data() {
      return {};
    },
    computed: {
      getItemDetails(): any {
        const id = this.$route.params.id ? this.$route.params.id : 0;
        const dataStore = getDataStore()
        const thumbnailsData = dataStore.thumbnails
        return thumbnailsData.find((i: any) => i.id === id);
      }
    },
    methods: {
      handleClickBackButton(): void {
        this.$router.push('/');
      }
    }
  });
</script>

<template>
    <section class="page-section item-page">
        <div class="container p-[8px] w-[400px]">
            <!-- Back to home page button -->
            <div class="row w-full p-3">
                <el-button @click="handleClickBackButton"
                    plain
                    type="primary"
                    icon="ArrowLeft"
                    class="w-50">
                    {{'Back to Home Page'}}
                </el-button>
            </div>

            <!-- Video container with video preview component -->
            <div v-if="getItemDetails.videoSrc"
                class="video-container w-full m-auto" >
                <videoPreview                    
                    :data="{
                        ref: getItemDetails.id,
                        controls: true,
                        autoplay: true,
                        muted: false,
                        loop: true,
                        videoSrc: getItemDetails.videoSrc
                    }"/>
                
                <!-- Video actions -->
                <div class="p-3">
                    <el-button type="primary" icon="Share" round>Share</el-button>
                    <el-button type="danger" icon="Bell" round>Subscribe</el-button>
                </div>                
            </div>

            <!-- Video Name -->
            <div class="row">
                <div class="w-full">
                    <h3 class="font-bold text-2xl">{{getItemDetails.name}}</h3>
                </div>
            </div>

            <!-- Video Description -->
            <div class="row">
                <div class="w-full text-justify p-2">
                    <p>{{getItemDetails.description}}</p>
                </div>
            </div>
        </div>
    </section>
</template>