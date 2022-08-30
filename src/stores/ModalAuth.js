import { defineStore } from 'pinia';

export const changeVisibility = defineStore('isVisibleAlert', {
  state: () => ({
    isVisibleAlert: false,
  }),
  getters: {
    getModalVisible: (state) => state.isVisibleAlert,
  },
  actions: {
    changeModalVisibility() {
      this.isVisibleAlert = true;
    },
  },
});
