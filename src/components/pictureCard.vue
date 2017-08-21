<template>
  <div class="lee-picture-card">
    <div class="card-actions justify-box">
      <el-button type="primary" size="small" class="edit-button">
        <i class="fa fa-pencil"></i>
      </el-button>
      <el-button type="danger" size="small" class="remove-button">
        <i class="fa fa-times"></i>
      </el-button>
    </div>
    <div class="preview">
      <img :src="url" width="100%" height="100%">
    </div>
    <div class="card-info">
      <span class="large-text">{{ name }}</span>
      <span class="description">{{ description }}</span>
    </div>
    <div class="card-footer justify-between">
      <div class="left">
        <span><i class="fa fa-eye"></i>{{ views }}</span>
        <span><i class="fa fa-comments"></i>{{ comments }}</span>
      </div>
      <el-tag type="primary" size="small">more ></el-tag>
    </div>
  </div>
</template>

<script type="javascript">
  export default{
    name: 'pictureCard',
    props: {
      name: {
        type: String,
        default: 'lijiaxunOuO'
      },
      id: {
        type: String,
        default: '19940722'
      },
      url: {
        type: String,
        default: require('@/assets/img/picture2.jpg')
      },
      description: {
        type: String,
        default: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear"
      },
      views: {
        type: Number,
        default: 0
      },
      comments: {
        type: Number,
        default: 0
      }
    },
    methods: {
    }
  }
</script>
