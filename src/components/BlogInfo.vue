<template>
    <div :class='["blog-detail", { [className]: className }]'>
        <div class="left">
            <img src="~@/assets/images/blog-detail.png" alt="">
            <span class="label">日志</span>
        </div>
        <div class="right">
            <h2>GarasChan的个人博客--日志</h2>
            <article>GarasChan的sChan的个人博客--内容GarasChsChan的个sChan的个人博客--内容GarasChsChan的个人博客--内容GarasChsChan的个人博客--内容GarasChsChan的个人博客--内容GarasCh人博客--内容GarasCh个人博客--内容GarasChan的个人...</article>
            <div class="info">
                <span class="kg-icon-date date">1996年09月24日</span>
                <span class="kg-icon-comment comment">3739条</span>
                <span class="kg-icon-read read">520次</span>
                <span class="kg-icon-praise praise">1314人</span>
                <a class="view-detail">查看全文</a>
            </div>
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
    transition: transform .2s ease-in, box-shadow .2s ease-in;

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
            .background-opacity-color(.6)
        }
    }

    .right {
        padding: 4px 0;
        flex-grow: 1;
        margin-left: 16px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;

        h2 {
            font-weight: normal;
            color: @title-color;
            font-size: 16px;
            flex-shrink: 0;
            cursor: pointer;

            &:hover {
                color: @hover-color;
            }
        }
        article {
            flex-grow: 1;
            margin: 10px 0;
            line-height: 24px;
            letter-spacing: 0.8px;
            padding-left: 4px;
        }
        .info {
            height: 24px;
            line-height: 24px;
            flex-shrink: 0;

            span {
                margin-right: 16px;
                color: @tip-color;
                cursor: pointer;
                &:hover {
                    color: @hover-color;
                }
                &::before {
                    margin-right: 4px;
                }
            }
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
            content: '';
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
</style>


