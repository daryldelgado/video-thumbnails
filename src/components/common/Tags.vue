<script lang="ts">
import { TAGS_DATA } from '@/globals/sampleData'

export default {
  name: 'tags',
  props: {
    resetSelection: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  watch: {
    resetSelection (isNewValResetSelection: Boolean) {
      if (isNewValResetSelection) {
        this.selectedTag = ''
      }
    }
  },
  data () {
    return {
      tags: TAGS_DATA,
      selectedTag: '' as string
    };
  },
  mounted() {},
  methods: {
    handleClickTag (tagVal: string) {
      if (this.selectedTag !== tagVal) {
        this.selectedTag = tagVal
      } else {
        this.selectedTag = ''
      }

      this.$emit('tag-clicked', tagVal)
    }
  }
}
</script>

<template>
    <div class="flex flex-wrap gap-2">
        <div v-for="(tag, index) in tags" :key="index"
            @click="handleClickTag(tag)"
            :class="[
                'inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-200 text-black cursor-pointer font-bold',
                {'bg-gray-600 text-white': selectedTag == tag}]">
            {{ tag }}
        </div>
    </div>
</template>

