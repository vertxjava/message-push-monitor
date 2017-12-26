<template>
   <div class="layout">
        <Menu mode="horizontal" theme="dark" active-key="1">
            <div class="layout-logo">
                微服务监控平台
            </div>
            <div class="layout-nav">
                <router-link to="/services">
                    <Menu-item key="1">
                        <Icon type="ios-recording"></Icon>
                        服务列表
                    </Menu-item>
                </router-link>
                <router-link to="/deviceInfo">
                    <Menu-item key="2">
                        <Icon type="ios-keypad"></Icon>
                        设备信息上报
                    </Menu-item>
                </router-link>
                <Menu-item key="3">
                    <Icon type="ios-analytics"></Icon>
                    日志监控
                </Menu-item>
                <Menu-item key="4">
                    <Icon type="ios-paper"></Icon>
                    流量监控
                </Menu-item>
            </div>
        </Menu>
        <div class="layout-content">
           <router-view></router-view>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: auto;
        height: 30px;
        margin-top:15px;
        margin-left:20px;
        line-height: 30px;
        border-radius: 3px;
        float: left;
        text-align: left;
        color:#ffffff;
        font-size: 24px;
    }
    .layout-nav{
        width: auto;
        margin-left: 20px;
        float: right;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 500px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
