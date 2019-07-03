<template>
    <div :class='["user-info", { [className]: className }]'>
        <div class="avator">
            <img src="~@/assets/images/avator.png" alt="">
            <div>
                <p class="name">GarasChan</p>
                <p class="signature">有志不在年高，无志空活百岁</p>
            </div>
        </div>
        <div class="info">
            
        </div>
    </div>
</template>
<script>
export default {
    props: {
        className: String
    }
}
</script>
<style lang="less" scoped>
@import '~@/assets/styles/less/mixin.less';
.user-info {
    width: 220px;
    // height: 400px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px @border-shadow-color;
    // background-color: @background-color-1;
    // .background-color(5);

    .avator {
        position: relative;
        width: 100%;
        height: 175px;
        background-image: url(../assets/images/user-header.jpg);
        background-repeat: no-repeat;
        background-size: 100% 64px;
        border-radius: 4px;
        // .background-opacity-color(.7);
        
        img {
            position: absolute;
            width: 75px;
            height: 75px;
            border: 4px solid @background-color-1;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
        }
        div {
            position: absolute;
            width: 100%;
            bottom: 0;
            text-align: center;
            
            .name {
                margin: 12px 0;
                font-size: 16px;
                font-weight: 600;
                color: @title-color;
            }
            .signature {
                margin: 12px 0;
                font-size: 12px;
                color: @tip-color;
            }
        }
    }
}
</style>


