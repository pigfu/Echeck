<template>
    <Card style="width:500px;margin-left:auto;margin-right:auto;background:#eee;">
        <div style="width:60%;margin-left:auto;margin-right:auto;">
            <Input v-model="username" placeholder="邮箱或手机号" size="large" ><span slot="prepend">账号：</span></Input><br><br>
            <Input v-model="password" type="password" placeholder="" size="large" ><span slot="prepend">密码：</span></Input><br><br>
            <Button @click="login" type="success" long>登录</Button><br><br>
            <div style="float:left;margin-left: 5px">
            <router-link to="/login/register">注册新账号</router-link>
            </div>
            <div style="float:right;margin-right: 5px">
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
                username: '',
                password: ''
            }
        },
        methods: {
            login: function(){
                //发送get请求
                this.axios.get('login',{
                       params: {
                           username: this.username,
                           password: this.password
                       }
                    })
                    .then((res) => {
                        if(res.data.code != 1){
                           this.$Notice.error({
                               title: res.data.msg
                           });
                        }else{
                            this.$router.push('/main');
                        }
                    })
                    .catch((err) => {
                        this.$Notice.error({
                            title: err
                        });
                    });
                }
        }
    }
</script>
