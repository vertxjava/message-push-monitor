<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="_id">
            <Input v-model="formItem._id" placeholder="请输入_id"></Input>
        </FormItem>
        <FormItem label="deviceType" style="text-align:left;">
            <Select v-model="formItem.deviceType">
                        <Option value="Iphone">Iphone</Option>
                        <Option value="Meizu">Meizu</Option>
                        <Option value="Huawei">Huawei</Option>
                        <Option value="Lenovo">Lenovo</Option>
                        <Option value="Zuk">Zuk</Option>
                        <Option value="Moto">Moto</Option>
                        <Option value="Xiaomi">Xiaomi</Option>
                    </Select>
        </FormItem>
        <FormItem label="imei">
            <Input v-model="formItem.imei" placeholder="请输入imei"></Input>
        </FormItem>
        <FormItem style="text-align:left">
            <Button type="primary" @click="handleSubmit('formInline')">上报</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
</template>

<script>
    export default {
        data() {
            return {
                formItem: {
                    _id: '',
                    deviceType: '',
                    imei: ''
                }
            }
        },
        methods: {
            handleSubmit(name) {
                if (this.formItem._id == '') {
                    this.$Message.error('请输入_id');
                    return;
                }
                if (this.formItem.deviceType == '') {
                    this.$Message.error('请选择机型');
                    return;
                }
                if (this.formItem.imei == '') {
                    this.$Message.error('请输入imei');
                    return;
                }
            
                this.$http.post('http://localhost:8001/api/report/deviceInfo', this.formItem).then(response => {
                    this.$Message.success('上报成功');
                }, error => {
                    this.$Message.error('上报失败，状态码：'+error.status);
                });
            }
        }
    }
</script>

<style>

</style>
