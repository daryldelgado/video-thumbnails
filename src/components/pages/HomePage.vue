<script lang="ts">
  import { defineComponent } from 'vue';
  import Thumbnails from '@/components/common/Thumbnails.vue';
  import Tags from '@/components/common/Tags.vue';
  import { getDataStore } from '@/pinia/stores/getData';
  import _ from 'lodash';

  export default defineComponent({
    name: 'homePage',
    components: {
      Thumbnails,
      Tags
    },
    data() {
      return {
        filteredByTag: '' as string
      };
    },
    computed: {
      getThumbnailsData(): any[] {
        const dataStore = getDataStore();
        const thumbnailsData = dataStore.thumbnails

        if (!_.isEmpty(this.filteredByTag)) {
          return thumbnailsData.filter((i: any) => i.tags.includes(this.filteredByTag));
        }

        return thumbnailsData;
      }
    },
    mounted() {},
    methods: {
      handleResetTagFilter(): void {
        this.filteredByTag = '';
      },
      handleTagClick(tag: string): void {
        this.filteredByTag = tag;
      }
    }
  });
</script>

<template>
    <section class="page-section text-white mb-0 home-page">
        <div class="container">
            <!-- Project Description -->
            <div class="row">
                <h2 class="col-lg-12 p-3 text-5xl text-gray-600 font-black">
                    Video Thumbnails
                </h2>
                <div class="flex">
                    <div class="col-6 mx-auto">
                        <p class="p-3 text-lg text-gray-600 justify-left text-left">
                          
This Vue 3 application utilizes Tailwind CSS, ElementPlus, and Pinia for state management to display video thumbnails with detailed information, support tag-based filtering, and include subscription and sharing action buttons.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Top Actions -->
            <div class="row p-6">
                <!-- ALL BUTTON. This is to show all thumbnails -->
                <div class="col-2 flex items-center justify-start">
                    <div
                        @click="handleResetTagFilter"
                        :class="[
                        'rounded-full bg-gray-200 w-20 h-20 flex items-center justify-center text-black text-center cursor-pointer font-bold',
                        {'bg-gray-600 text-white': filteredByTag == '' }]">
                        ALL
                    </div>
                </div>

                <!-- TAGS FILTERING. This is to show all thumbnails by selected tag -->
                <div class="col-8 mx-auto pt-3">
                    <Tags
                        @tag-clicked="handleTagClick($event)"
                        :resetSelection="filteredByTag == ''"/>
                </div>

                <!-- UPGRADE TO PRO BUTTON. A Sample butto upgrade to Pro -->
                <div class="col-2 pt-3">
                    <div class="inline-flex items-center justify-center px-3 py-2 rounded-full bg-red-500 text-white cursor-pointer font-medium">
                        Upgrade to Pro
                    </div>
                </div>
            </div>

            <!-- Thumbnail listing -->
            <Thumbnails :thumbnails="getThumbnailsData"></Thumbnails>
        </div>
    </section>
</template>