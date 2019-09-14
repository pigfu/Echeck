<template>
    <Card style="width:500px;margin-left:auto;margin-right:auto;background:#eee;">
        <div style="width:60%;margin-left:auto;margin-right:auto;">
            <Input v-model="value1" placeholder="邮箱或手机号" size="large"><span slot="prepend">账号：</span></Input><br><br>
            <Input v-model="value2" placeholder="" size="large"><span slot="prepend">密码：</span></Input><br><br>
            <Input v-model="value2" placeholder="" size="large"><span slot="prepend">确认密码：</span></Input><br><br>
            <Button type="success" long>注册</Button><br><br>
            <div style="float:left;margin-left: 8px">
                <router-link to="/login/">登录</router-link>
            </div>
            <div style="float:right;margin-right: 8px">
                <router-link to="/login/register">忘记密码</router-link>
            </div>
            <br><br>
        </div>
    </Card>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: ''
            }
        }
    }
</script>