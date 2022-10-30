<template>
  <div>
    <form @submit.prevent="createGroup">
      <input type="text" placeholder="Group name" v-model="newGroup.title" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { groupService } from "../../services/group-service";
export default {
  data() {
    return {
      newGroup: null
    };
  },
  methods: {
    createGroup() {
      this.$emit("createGroup", this.newGroup);
      this.getEmptyGroup()
    },
    getEmptyGroup() {
      this.newGroup = groupService.getEmptyGroup();
    },
  },
  created() {
    this.getEmptyGroup();
  },
};
</script>
