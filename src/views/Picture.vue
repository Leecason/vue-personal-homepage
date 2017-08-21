<template>
  <div class="pictures">
    <el-row :gutter="10">
      <el-col :sm="24" :md="12">
        <el-carousel :interval="3000" type="card" height="300px">
          <el-carousel-item v-for="item in pictures" :key="item.id">
            <img :src="item.url" width="100%" height="100%"/>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :sm="24" :md="12">
        <el-carousel :interval="5000" arrow="hover">
          <el-carousel-item v-for="item in pictures" :key="item.id">
            <img :src="item.url" width="100%" height="100%"/>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="12" :md="6" v-for="card in 8" :key="card">
        <picture-card></picture-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="javascript">
  import PictureCard from '@/components/pictureCard.vue'
  export default{
    name: 'Picture',
    components: {
      'picture-card': PictureCard
    },
    data() {
      return {
        pictures: [
          {
            name: 'In Snow',
            url: require('@/assets/img/picture1.jpg')
          },
          {
            name: 'Storm',
            url: require('@/assets/img/picture2.jpg')
          },
          {
            name: 'Little Door Gods',
            url: require('@/assets/img/picture3.jpg')
          },
          {
            name: 'Lesser Panda',
            url: require('@/assets/img/picture4.jpg')
          },
          {
            name: 'Immortal',
            url: require('@/assets/img/picture5.jpg')
          }
        ]
      }
    }
  }
</script>
