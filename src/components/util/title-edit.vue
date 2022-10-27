<template>
  <section class="title-edit">
    <!-- <h1 v-if="!isEditing" class="title-display" @click="editTitle">
      {{ title }}
    </h1> -->
    <input
      :class="['title-edit-input']"
      ref="input"
      @change="
        $emit('changed', $event.target.value);
        isEditing = false;
      "
      v-model="title"
      type="text"
    />
  </section>
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
  methods: {
    editTitle() {
      this.isEditing = !this.isEditing;
      this.$refs.input.focus();
    },
  },
  computed: {
    inputClass() {
      if (!this.isEditing) return "hidden";
    },
  },
};
</script>
