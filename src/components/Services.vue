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
                        title: '注册ID',
                        key: 'registration',
                        width:300
                    },
                    {
                        title: '类型',
                        key: 'type'
                    },
                    {
                        title: '服务名称',
                        key: 'name'
                    },
                    {
                        title: 'host',
                        render:(h,{row})=>{
                            if(row.location.host == undefined){
                                return "--";
                            }
                            return row.location.host;
                        }
                    },
                    {
                        title: 'port',
                        render:(h,{row})=>{
                            if(row.location.host == undefined){
                                return "--";
                            }
                            return row.location.port;
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
                this.$http.get("http://localhost:9000/discovery").then(
                        response => {
                            _this.data = response.data;
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
