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
      <div class="block pagination" style="padding: 10px;text-align: right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[8, 16, 24, 32]"
          :page-size="perPage"
          layout="total, sizes, prev, pager, next"
          :total="card_list.length">
        </el-pagination>
      </div>
      <el-col :sm="12" :md="6" v-for="(card, index) in showCardList" :key="card.id">
        <picture-card :name="card.name + '-' + index" :url="card.url" :description="card.description" :id="card.id" :views="card.views" :comments="card.comments"></picture-card>
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
        ],
        card_list: [],
        currentPage: 1,
        perPage: 16,
        card: {
          name: 'lijiaxunOuO',
          id: '19940722',
          url: require('@/assets/img/picture2.jpg'),
          description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
          views: 104,
          comments: 26
        }
      };
    },
    created() {
      for(let i = 0; i < 24; i++) {
        this.card_list.push(this.card);
      }
    },
    computed: {
      showCardList() {
        return this.card_list.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
      }
    },
    methods: {
      handleSizeChange(val) {
        this.perPage = val
      },
      handleCurrentChange(val) {
        this.currentPage = val
      }
    }
  }
</script>
