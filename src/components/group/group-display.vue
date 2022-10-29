<template>
  <section class="group-display">
    <group-list
      @removeGroup="removeGroup"
      @editGroup="editGroup"
      :groups="groupStore.groups"
    />
    <groupCreate :newGroup="newGroup" @createGroup="createGroup" />
  </section>
  <section class="group-edit">
    <div v-if="groupEditId">
      <input type="text" :value="groupEditTitle" @keyup="updateGroup($event)" />
      <button @click="groupEditId = false">X</button>
    </div>
  </section>
</template>

<script>
import { useGroupStore } from "../../stores/group.store";
import groupList from "./group-list.vue";
import groupCreate from "./group-create.vue";
export default {
  setup() {
    const groupStore = useGroupStore();
    return { groupStore };
  },
  data() {
    return {
      newGroup: null,
      groupEditId: null,
    };
  },
  components: {
    groupList,
    groupCreate,
  },
  methods: {
    async createGroup(group) {
      try {
        await this.groupStore.createGroup(group);
      } catch (error) {
        console.log(error);
      }
    },
    editGroup(id) {
      this.groupEditId = id;
    },
    removeGroup(id) {
      this.groupStore.removeGroup(id);
    },
    async updateGroup(ev) {
      try {
        await this.groupStore.updateGroup(
          ev.target.value,
          "title",
          this.groupEditId
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    groupEditTitle() {
      const group = this.groupStore.groups.find(
        (group) => this.groupEditId === group._id
      );
      return group.title;
    },
  },
};
</script>
