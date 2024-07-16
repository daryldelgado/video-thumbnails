import { defineStore } from 'pinia';
import { useGlobalEventsStore } from '@/pinia/stores/globalEvents';
import { VIDEO_THUMBNAILS_DATA } from '@/globals/sampleData';
import _ from 'lodash';

interface State {
  thumbnails: any[];
}

export const getDataStore = defineStore({
  id: 'getData',
  state: (): State => ({
    thumbnails: []
  }),

  getters: {
    getThumbnails(state): any[] {
      return state.thumbnails;
    }
  },

  actions: {
    /**
     * A sample logic to get data. Added 1 second timeout for demonstration that data is fetching using Axios
     */
    setThumbnails() {
      const globalEvents = useGlobalEventsStore();
      globalEvents.showMainLoader();
      const that = this;

      setTimeout(() => {
        that.thumbnails = VIDEO_THUMBNAILS_DATA;
        globalEvents.hideMainLoader();
      }, 1000);
    }
  }
});
