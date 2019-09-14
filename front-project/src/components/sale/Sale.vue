<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <Icon type="md-snow" size="35" color="#66B3FF" />
<!--                        <h3>易云</h3>-->
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            <router-link to="/sale/productSale">产品介绍</router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            <router-link to="/sale/industryApplication">行业应用</router-link>
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            <router-link to="/sale/price">价格</router-link>
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            <router-link to="/sale/helpDocument">帮助文档</router-link>
                        </MenuItem>

                    </div>
                    <div class="layout-login">
                      <template>
                      <div v-if="loginflag == 1">
                        <div style="float:left">
                          <Icon type="ios-swap" color="white" size="18" />
                          <router-link target="_self" to="/main">我的</router-link>
                        </div>
                        <div style="float:right">

                          <Avatar icon="ios-person" style="float:left;top:12px;"/>
                          <!--                        <router-link target="_self" to="/login">登录</router-link>-->
                          <Dropdown @on-click="turn_login">
                            <a href="javascript:void(0)">
                              <span>{{ username }}</span>
                              <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                              <DropdownItem name="accountDetails" >账户详情</DropdownItem>
                              <DropdownItem name="companyInformation">企业信息</DropdownItem>
                              <DropdownItem name="exit" divided>安全退出</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                      <div v-else>
                        <div style="float:right">
                            <Avatar icon="ios-person"/>
                            <router-link target="_self" to="/login">登录</router-link>
                        </div>
                      </div>
                     </template>
                    </div>

                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '650px'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">2019-2023 &copy; Cloud Data</Footer>
        </Layout>
    </div>
</template>
<script>
    //import Router from 'vue-router';
    //const router = new Router();
    //router.push('/sale');
    export default {
         data () {
             return {
                 loginflag:'',
                 username:''
             }
          },
         created () {
            this.isLogin();
         },
         methods: {
             isLogin() {
                 //发送get请求
                 this.axios.get('islogin')
                     .then((res) => {
                         if (res.data.code == 1) {
                             this.username = res.data.data.username;
                             this.loginflag = res.data.data.loginflag;
                         } else {
                             this.$router.push('/sale/productSale');
                         }
                     })
                     .catch((err) => {
                         this.$Notice.error({
                             title: err
                         });
                     });
             },
             turn_login: function(name){
                 if(name == 'exit'){
                     this.exit();
                 }
             },
             //退出
             exit () {
                 //发送get请求
                 this.axios.get('exit')
                     .then((res) => {
                         if(res.data.code == 1){
                             this.$cookie.delete('username');
                             this.$cookie.delete('loginflag');
                             //this.$router.push('/');
                             window.location.reload();
                         }else{
                             this.$Notice.error({
                                 title: '退出失败，请重试！'
                             });
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
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        /*background:  #5b6270;*/
        /*border-radius: 3px;*/
        float: left;
        position: relative;
        top: 1px;
        left: -60px;
        /*text-align: center;*/
    }
    .layout-nav{
        width: 580px;
        height:60px;
        margin: 0 auto;
        margin-right: 300px;
    }
    .layout-login{
        width: 300px;
        height:58px;
        float: right;
        position: relative;
        top: -60px;
        right: 20px;
    }
    .layout-login-click{
        float:right;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
