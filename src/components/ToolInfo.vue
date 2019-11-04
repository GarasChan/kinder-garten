<template>
    <a class='tool-detail' :title='data.title'>
        <icon icon='date' class="icon" />
        <div class="info">
            <h2 class="title">{{data.title}}</h2>
            <p class="desc">{{data.description}}</p>
        </div>
    </a>
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
        
    },
    computed: {
        
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/mixin.less';
.tool-detail {
    display: block;
    // height: 300px;
    margin-top: 12px;
    padding: 48px 24px;
    border-radius: 4px;
    .border();
    cursor: pointer;
    transition: transform .2s ease-in, box-shadow .2s ease-in;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 15px 32px 0px @button-color;
    }

    .icon {
        // height: 120px;
        // line-height: 120px;
        font-size: 64px;
        opacity: .7;
        i {
            color: @active-color;
        }
    }

    .info {
        .title {
            font-weight: normal;
            color: @title-color;
            font-size: 18px;
            line-height: 1.4;
        }
        .desc {
            // color: @tip-color;
        }
    }
}
@media (max-width: 768px) {
  .tool-detail {
    // height: 120px;
    padding: 24px;
    transition: all .2s;

    .info .desc {
        display: none;
    }
  }
}
</style>


