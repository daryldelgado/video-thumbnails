<script lang="ts">
export default {
  name: 'videoPreview',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {},
  methods: {}
}
</script>

<template>
    <video
      class="w-full h-full bg-cover"
      :ref="data?.id ?? ''"
      :controls="data?.controls ?? false"
      :autoplay="data?.autoplay ?? false"
      :muted="data?.muted ?? false"
      :loop="data?.loop ?? false"
      style="width: 100%">
      <source :src="data.videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
</template>
