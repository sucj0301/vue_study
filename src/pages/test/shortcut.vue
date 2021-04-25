<template>
    <div>
        <div class="dashboard-workplace-shortcut ivu-text-center">
            <Grid :col="6" :border="false" padding="0px">
                <GridItem v-for="item in data" :key="item.name" class="ivu-mb">
                    <i-link :to="item.link">
                        <Icon :custom="item.icon" :color="item.color" size="24" />
                        <p class="ivu-pt-8">{{ item.name }}</p>
                    </i-link>
                </GridItem>
            </Grid>
            <Divider class="ivu-mt-8 ivu-mb-8" />
        </div>

        <div>
            <h3 style="text-align:center;">当前时间：{{DataNow}}</h3>
        </div>
    </div>
</template>
<script>
    console.log('白屏加载时间==',new Date().getTime() - performance.timing.navigationStart)

    window.onload=function (){
        console.log('首屏加载时间==',new Date().getTime() - performance.timing.navigationStart)
    }
    export default {
        data () {
            return {
                data: [
                    {
                        icon: 'i-icon-demo i-icon-demo-dashboard',
                        name: 'H5新特性',
                        color: '#52c41a',
                        link: '/test/html5'
                    },
                    {
                        icon: 'i-icon-demo i-icon-demo-dashboard',
                        name: 'D3.js',
                        color: '#ef7676',
                        link: '/test/d3js'
                    },
                ],
                DataNow: new Date()
            }
        },
        mounted() {
            console.log('this==',this)
            let _this = this; //声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(function () {
                _this.DataNow = new Date(); //修改数据date
                // console.log('_this==',_this)
            }, 1000);
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
            }
        },
        methods: {

        }
    }
</script>
<style lang="less">
    .dashboard-workplace-shortcut{
        a{
            &:hover{
                color: #2d8cf0;
            }
        }
    }
</style>
