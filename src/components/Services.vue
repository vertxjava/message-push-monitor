<template>
    <i-table :columns="columns" :data="data">
    </i-table>
</template>

<script>
    export default {
        name: 'services',
        data() {
            return {
                columns: [
                    {
                        title: '服务名称',
                        key: 'name',
                        width:160
                    },
                    {
                        title: '注册ID',
                        key: 'registration',
                        width:300
                    }
                    ,
                    {
                        title: '类型',
                        key: 'type',
                        width:160
                    },
                    
                    {
                        title: 'location',
                        render:(h,{row})=>{
                            var str = "";
                            if(row.location.host == undefined){
                                str = row.location.servers;
                            }else{
                                str = row.location.host+":"+row.location.port
                            }
                            return str;
                        }
                    },
                    {
                        title: '状态',
                        key: 'status'
                    }
                ],
                data: []
            }
        },
        mounted: function() {
            var _this = this;
            this.$nextTick(function() {
                this.$http.get("http://localhost:8001/discovery").then(
                        response => {
                            _this.data = response.data;
                            console.log(response.data);
                        },
                        error => {
                        }
                    );
            });
        }
    }
</script>

<style>

</style>
