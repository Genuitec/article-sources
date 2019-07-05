<template>
  <div id="app">
    <h1>Vue Modal Tutorial</h1>
    <button @click="openModal" v-if="!showModal">Open Modal</button>
    <app-modal v-if="showModal" :showModal=showModal @clicked="onChildClick">
      <div slot="header">
        <h3 class="modal-title">
          CodeMix
        </h3>
      </div>
      <div slot="body">
        <p>
          With CodeMix, you can join the modern web movement right from your Eclipse IDE!
        </p>
      </div>
    </app-modal>
  </div>
</template>
<script>
import AppModal from './components/AppModal';
export default {
  components: {
    AppModal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    onChildClick () {
      this.showModal = false;
    }
  },
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>