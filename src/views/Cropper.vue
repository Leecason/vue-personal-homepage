<template>
  <div class="cropper">
    <div class="lee-panel">
      <div class="heading">
        <span class="success-text">Cropper</span>
        <span class="large-text">Github <a class="primary-text" href="https://github.com/dai-siki/vue-image-crop-upload">here</a></span>
      </div>
      <div class="content">
        <div class="cropper-toggle">
          <el-button type="primary" @click="toggleShow">Click Me</el-button>
          <my-upload field="img"
                     @crop-success="cropSuccess"
                     @crop-upload-success="cropUploadSuccess"
                     @crop-upload-fail="cropUploadFail"
                     v-model="show"
                     :width="300"
                     :height="300"
                     url="/upload"
                     :params="params"
                     :headers="headers"
                     img-format="png"></my-upload>
        </div>
        <div class="cropper-result">
          <h1>result</h1>
          <img :src="imgDataUrl" v-if="imgDataUrl"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  import myUpload from 'vue-image-crop-upload';
  export default {
    name: 'Cropper',
    components: {
      'my-upload': myUpload
    },
    data() {
      return {
        show: false,
        params: {
          token: '',
          name: 'avatar'
        },
        headers: {
          smail: '*_~'
        },
        imgDataUrl: ''
      }
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      },
      cropSuccess(imgDataUrl, field){
        this.imgDataUrl = imgDataUrl;
      },
      cropUploadSuccess(jsonData, field){
      },
      cropUploadFail(status, field){
      }
    }
  }
</script>
