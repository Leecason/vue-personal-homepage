<template>
  <div class="cropper">
    <div class="lee-panel">
      <div class="heading">
        <span class="success-text">Cropper</span>
        <span class="large-text">Github <a class="primary-text" href="https://github.com/xyxiao001/vue-cropper">here</a></span>
      </div>
      <div class="content">
        <div class="cropper-wrapper">
          <vue-cropper :img='cropperOptions.img'
                        :outputSize='cropperOptions.size'
                        :outputType='cropperOptions.outputType'
                        :info='true'
                        :full='cropperOptions.full'
                        :canScale='cropperOptions.canScale'
                        :autoCrop='cropperOptions.autoCrop'
                        :autoCropWidth='cropperOptions.autoCropWidth'
                        :autoCropHeight='cropperOptions.autoCropHeight'
                        :canMove='cropperOptions.canMove'
                        :canMoveBox='cropperOptions.canMoveBox'
                        :fixedBox='cropperOptions.fixedBox'
                        :original='cropperOptions.original'
                        :fixed='cropperOptions.fixed'
                        @realTime='realTime'
                        ref='cropper'>
          </vue-cropper>
          <div class="cropper-buttons">
            <el-button type="primary" @click='changeImg'>ChangeImg</el-button>
            <label class='el-button el-button--primary'>
              <input type='file' accept="image/png, image/jpeg, image/gif, image/jpg" hidden @change='uploadImg'/>
              <span>Upload</span>
            </label>
            <el-button type="primary" @click='changeScale(1)'>+</el-button>
            <el-button type="primary" @click='changeScale(-1)'>-</el-button>
            <el-button type="primary" @click='rotateLeft'>RotateLeft</el-button>
            <el-button type="primary" @click='rotateRight'>RotateRight</el-button>
            <el-button type="primary" @click='download'>Download</el-button>
          </div>
          <div class="cropper-switches">
            <div class="switch-item">
              <span>上传图片是否显示原始宽高(针对大图 可以铺满)</span>
              <el-switch
                v-model="cropperOptions.original">
              </el-switch>
            </div>
            <div class="switch-item">
              <span>能否拖动图片</span>
              <el-switch
                v-model="cropperOptions.canMove">
              </el-switch>
            </div>
            <div class="switch-item">
              <span>能否拖动截图框</span>
              <el-switch
                v-model="cropperOptions.canMoveBox">
              </el-switch>
            </div>
            <div class="switch-item">
              <span>是否输出原图比例的截图</span>
              <el-switch
                v-model="cropperOptions.full">
              </el-switch>
            </div>
            <div class="switch-item">
              <span>输出图片格式</span>
              <el-radio-group v-model="cropperOptions.outputType">
                <el-radio label='webp'>webp</el-radio>
                <el-radio label='png'>png</el-radio>
                <el-radio label='jpeg'>jpg</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
        <h1>result</h1>
        <div class="cropper-result"
             :style="{
               'width': preview.w + 'px',
               'height': preview.h + 'px',
               'overflow': 'hidden',
               'margin': '5px'}">
          <div :style="preview.div">
            <img :src="preview.url" :style="preview.img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="javascript">
  import vueCropper from 'vue-cropper';
  export default {
    name: 'Cropper',
    components: {
      'vue-cropper': vueCropper
    },
    data() {
      return {
        imgList: [
          {
            url: require('@/assets/img/picture1.jpg')
          },
          {
            url: require('@/assets/img/picture2.jpg')
          },
          {
            url: require('@/assets/img/picture3.jpg')
          },
          {
            url: require('@/assets/img/picture4.jpg')
          },
          {
            url: require('@/assets/img/picture5.jpg')
          }
        ],
        cropperOptions: {
          img: '',
          size: 1,
          full: false,
          canScale: true,
          autoCrop: true,
          outputType: 'png',
          canMove: true,
          autoCropWidth: 300,
          autoCropHeight: 250,
          fixed: false,
          fixedBox: false,
          original: false,
          canMoveBox: false
        },
        preview: {}
      }
    },
    mounted() {
      this.changeImg();
    },
    methods: {
      changeImg() {
        this.cropperOptions.img = this.imgList[~~(Math.random() * this.imgList.length)].url
      },
      uploadImg(event) {
        var file = event.target.files[0]
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(event.target.value)) {
          this.$message({
            showClose: true,
            message: '图片类型必须是.gif,jpeg,jpg,png,bmp中的一种',
            type: 'error'
          });
          return false
        }

        var reader = new FileReader()
        reader.onload = (e) => {
          let data;
          if (typeof e.target.result === 'object') {
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          } else {
            data = e.target.result
          }
          this.cropperOptions.img = data
        }

        reader.readAsArrayBuffer(file)
      },
      changeScale(num) {
        this.$refs.cropper.changeScale(num)
      },
      rotateLeft() {
        this.$refs.cropper.rotateLeft()
      },
      rotateRight() {
        this.$refs.cropper.rotateRight()
      },
      download(type) {
        var aLink = document.createElement('a')
        aLink.download = 'demo'

        var _download = (data) => {
          aLink.href = data;
          aLink.click();
        }

        if (type === 'blob') {
          this.$refs.cropper.getCropBlob(_download)
        } else {
          this.$refs.cropper.getCropData(_download)
        }
      },
      realTime(data) {
        this.preview = data;
      }
    }
  }
</script>
