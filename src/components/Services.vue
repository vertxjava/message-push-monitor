<template>
    <i-table :columns="columns" :data="data">
    </i-table>
</template>

<script>
    export default {
        name: 'services',
        data() {
            return {
                columns: [{
                        title: '服务名称',
                        key: 'name'
                    },
                    {
                        title: 'host',
                        key: 'location'
                    },
                    {
                        title: 'port',
                        key: 'location'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: 'port',
                        key: 'location'
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
