<template>
  <div class="blog-detail">
    <div class="left">
      <img src="~@/assets/images/blog-detail.png" alt />
      <span class="label">{{data.label}}</span>
    </div>
    <div class="right">
      <!-- <router-link to="/log" tag="h2" @click="go2detail">{{data.title}}</router-link> -->
      <h2 @click="go2detail">{{data.title}}</h2>
      <article>{{data.content}}</article>
      <div class="info">
        <icon icon='date' class="date" :value='data.date' />
        <icon icon='comment' class="comment" :value='comment' />
        <icon icon='read' class="read" :value='read' />
        <icon icon='praise' class="praise" :value='praise' />
        <a class="view-detail">查看全文</a>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon';
export default {
  components: {
    "icon": Icon
  },
  props: {
    data: Object
  },
  methods: {
    go2detail: function(e) {
      console.log({ router: this.$router });
      console.log({ route: this.$route });
      console.log({ e });
      console.log({ this: this });
      this.$router.push({ path: `/main/log/${this.data.uuid}` });
    }
  },
  computed: {
    comment: function() {
      return `${this.data.comment}条`;
    },
    read: function() {
      return `${this.data.read}次`;
    },
    praise: function() {
      return `${this.data.praise}人`;
    }
  },
  data() {
    return {
      date: "",
      time: ""
    };
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/style/mixin.less";
.blog-detail {
  width: 100%;
  height: 200px;
  margin: 8px 0;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 2px;
  .border();
  // transition: transform 0.2s ease-in, box-shadow 0.2s ease-in;
  transition: all .2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 15px 32px 0px @button-color;
    & .view-detail {
      display: inline-block;
    }
  }

  .left {
    position: relative;
    width: 200px;
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;

    img {
      position: absolute;
      width: 200px;
      height: 100%;
      transition: all 1s;

      &:hover {
        transform: scale(1.4);
      }
    }

    .label {
      position: absolute;
      padding: 4px 12px;
      color: @title-color;
      .background-opacity-color(0.6);
    }
  }

  .right {
    padding: 4px 0;
    flex-grow: 1;
    margin-left: 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
      font-weight: normal;
      color: @title-color;
      font-size: 18px;
      margin: 0;
      flex-shrink: 0;
      cursor: pointer;

      &:hover {
        color: @hover-color;
      }
    }
    article {
      overflow: hidden;
      height: auto;
      flex-grow: 1;
      margin: 10px 0;
      line-height: 24px;
      letter-spacing: 0.8px;
      padding-left: 4px;
      transition: all .2s;
    }
    .info {
      height: 24px;
      line-height: 24px;
      flex-shrink: 0;

      span {
        margin-right: 16px;
        color: @tip-color;
        // cursor: pointer;
        // &:hover {
        //     color: @hover-color;
        // }
        &::before {
          margin-right: 4px;
        }
      }
    }
    .data {
      white-space: nowrap;
    }
  }

  .view-detail {
    display: none;
    position: relative;
    float: right;
    margin: -4px -16px 0 0;
    padding: 4px 12px;
    background-color: @background-color-1;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      height: 0px;
      width: 0px;
      top: 0;
      right: -16px;
      border-top: solid 16px transparent;
      border-left: solid 16px @background-color-1;
      border-bottom: solid 16px transparent;
    }

    &:hover {
      color: @hover-color;
    }
  }
}

@media (max-width: 768px) {
  .blog-detail .right .comment,
  .blog-detail .right .read,
  .blog-detail .right .praise {
    display: none;
  }
}

@media (max-width: 576px) {
  .blog-detail {
    height: 120px;
    transition: all .2s;
  }
  .blog-detail .view-detail {
    display: none !important;
  }
  .blog-detail .left {
    width: 100px;
  }
  .blog-detail .right article {
    height: 0;
    flex-grow: 0;
    transition: all .2s;
  }
}
</style>


