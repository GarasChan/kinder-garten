<template>
    <a class='tool-detail' :title='data.title'>
        <div class="icon">
            <i class="kg-icon-date"></i>
        </div>
        <div class="info">
            <h2 class="title">{{data.title}}</h2>
            <p class="desc">{{data.description}}</p>
        </div>
    </a>
</template>
<script>
export default {
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
@import '~@/assets/styles/less/mixin.less';
.tool-detail {
    width: 250px;
    height: 300px;
    margin: 4px;
    padding: 0 24px;
    border-radius: 4px;
    .border();
    cursor: pointer;
    transition: transform .2s ease-in, box-shadow .2s ease-in;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 15px 32px 0px @button-color;
    }

    .icon {
        height: 120px;
        line-height: 120px;
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
        }
        .desc {
            // color: @tip-color;
        }
    }
}
</style>


