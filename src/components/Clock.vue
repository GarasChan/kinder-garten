<template>
    <div class='clock'>
        <p class="time">{{ time }}</p>
        <p class="date">{{ date }}</p>
    </div>
</template>
<script>
import { clearInterval } from 'timers';
const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let timer = null;
export default {
    data() {
        return {
            date: '',
            time: ''
        }
    },
    created(){
        timer = setInterval(this.updateTime, 1000);
        this.updateTime();
    },
    beforeDestory() {
        timer && clearInterval(timer);
    },
    methods: {
        updateTime() {
            let cd = new Date(),
                year = this.zeroPadding(cd.getFullYear(), 4),
                mon = this.zeroPadding(cd.getMonth() + 1, 2),
                day = this.zeroPadding(cd.getDate(), 2),
                week = weeks[cd.getDay()],
                hour = this.zeroPadding(cd.getHours(), 2),
                min = this.zeroPadding(cd.getMinutes(), 2),
                sec = this.zeroPadding(cd.getSeconds(), 2);

            this.date = `${year}-${mon}-${day} ${week}`;
            this.time = `${hour}:${min}:${sec}`;
        },

        zeroPadding(num, digit) {
            let zero = '';
            for(let i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    }
}
</script>
<style lang="less" scoped>
@import '~@/assets/styles/less/mixin.less';
.clock {
    padding: 8px;
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    text-shadow: 0 0 4px #5298fc;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #2b2b2b;

    .time {
        letter-spacing: 0.05em;
        font-size: 36px;
        padding: 6px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 14px;
        padding: 6px 0;
    }
}
</style>