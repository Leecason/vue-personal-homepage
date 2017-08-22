<template>
  <div class="pictures">
    <el-row :gutter="10">
      <el-col :span="24">
        <div class="lee-panel" style="backgroundColor: transparent;">
          <div class="heading primary-text">Pictures</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="backgroundColor: transparent;">
      <el-col :span="24">
        <el-carousel :interval="3000" type="card" height="300px">
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
        <picture-card :name="card.name" :url="card.url" :description="card.description" :id="card.id" :views="card.views" :comments="card.comments" @remove="removeItem(card)"></picture-card>
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
        card_list: [
          {
            name: 'lijiaxunOuO',
            id: 19940722,
            url: require('@/assets/img/picture_card1.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407221,
            url: require('@/assets/img/picture_card2.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407222,
            url: require('@/assets/img/picture_card3.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407223,
            url: require('@/assets/img/picture_card4.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407224,
            url: require('@/assets/img/picture_card5.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407225,
            url: require('@/assets/img/picture_card1.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407226,
            url: require('@/assets/img/picture_card2.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407227,
            url: require('@/assets/img/picture_card3.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407228,
            url: require('@/assets/img/picture_card4.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 199407229,
            url: require('@/assets/img/picture_card5.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072210,
            url: require('@/assets/img/picture_card1.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072211,
            url: require('@/assets/img/picture_card2.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072212,
            url: require('@/assets/img/picture_card3.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072213,
            url: require('@/assets/img/picture_card4.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072214,
            url: require('@/assets/img/picture_card5.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072215,
            url: require('@/assets/img/picture_card1.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072216,
            url: require('@/assets/img/picture_card2.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072217,
            url: require('@/assets/img/picture_card3.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072218,
            url: require('@/assets/img/picture_card4.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072219,
            url: require('@/assets/img/picture_card5.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072220,
            url: require('@/assets/img/picture_card1.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072221,
            url: require('@/assets/img/picture_card2.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072222,
            url: require('@/assets/img/picture_card3.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
          {
            name: 'lijiaxunOuO',
            id: 1994072223,
            url: require('@/assets/img/picture_card4.jpeg'),
            description: "The sorrowful gust of wind that blew right between you and me, Where did it find the loneliness it carried on the breeze, Looking up at the sky after shedding a stream of tears, I could see for miles of blue,It's never been so clear",
            views: 104,
            comments: 26
          },
        ],
        currentPage: 1,
        perPage: 16
      };
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
      },
      removeItem: function(item) {
        for(let i = 0; i < this.card_list.length; i++) {
          if(this.card_list[i].id === item.id) {
            this.card_list.splice(i, 1);
            return
          }
        }
      }
    }
  }
</script>
