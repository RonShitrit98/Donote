<template>
  <h1 v-if="!isEditing" class="title-display" @click="isEditing = !isEditing">
    {{ title }}
  </h1>
  <input
    @change="
      $emit('changed', $event.target.value);
      isEditing = false;
    "
    v-else
    type="text"
    v-model="title"
  />
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      isEditing: false,
    };
  },
};
</script>
