<template>
    <div class="modal" v-if="showModal">
        <div v-if="showModal" class="modal-content">
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <hr>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <hr>
            <div class="modal-footer">
                <button @click="closeModal">Close</button>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'app-modal',
    props: {
        showModal: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('clicked');
        }
    },
  };
</script>
<style>
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        max-width: 100%;
        height: 400px;
        max-height: 100%;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }
</style>
