<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <img src="../assets/logo.png" width="50px" height="50px">
                        <span style="color:red;float:right;font-size:20px;">易云</span>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-swap" />
                            <router-link to="/sale/productSale">首页</router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="md-help" />
                            帮助咨询
                        </MenuItem>
                    </div>
                    <div class="layout-login">
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
                </Menu>
            </Header>
            <Layout :style="{padding: '0 2px'}">
<!--                <Breadcrumb :style="{margin: '16px 0',float:left}">-->
<!--                    <BreadcrumbItem>Home</BreadcrumbItem>-->
<!--                    <BreadcrumbItem>Components</BreadcrumbItem>-->
<!--                    <BreadcrumbItem>Layout</BreadcrumbItem>-->
<!--                </Breadcrumb>-->
                <Content :style="{padding: '2px 0', minHeight: '450px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{width:'180px',minWidth:'180px',maxWidth:'180px',background: '#fff'}">
                            <Menu active-name="/main" theme="light" width="180px" :open-names="['1']" @on-select="turn_menu">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-people" size="20" color=""/>
                                        用户管理
                                    </template>
                                    <MenuItem name="/main">组织架构</MenuItem>
                                    <MenuItem name="/main/jurisdiction">权限配置</MenuItem>
                                    <MenuItem name="/main/externalcontacts">外部联系人</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-filing" size="20" />
                                        架构管理
                                    </template>
                                    <MenuItem name="/main/externalcontacts">阶段管理</MenuItem>
                                    <MenuItem name="/main/externalcontacts">控制节点管理</MenuItem>
                                    <MenuItem name="/main/externalcontacts">检查项目管理</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-egg" size="20" />
                                        机型管理
                                    </template>
                                    <MenuItem name="/main/externalcontacts">机型维护</MenuItem>
                                    <Submenu name="3.1">
                                        <template slot="title">机型配置</template>
                                        <MenuItem name="/main/externalcontacts">阶段配置</MenuItem>
                                        <MenuItem name="/main/externalcontacts">控制节点配置</MenuItem>
                                        <MenuItem name="/main/externalcontacts">检查项目配置</MenuItem>
                                    </Submenu>

                                </Submenu>
                                <Submenu name="4">
                                    <template slot="title">
                                        <Icon type="ios-stats" size="18"/>
                                        数据管理
                                    </template>
                                    <MenuItem name="/main/externalcontacts">记录汇总</MenuItem>
                                    <MenuItem name="/main/externalcontacts">不良记录</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '1px', minHeight: '450px', background: '#fff'}">
                            <router-view></router-view>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2019-2023 &copy; Cloud Data</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                username: ''
            }
        },
        created () {
            this.isLogin();
        },
        methods: {
            isLogin () {
                //发送get请求
                this.axios.get('islogin')
                    .then((res) => {
                        if(res.data.code == 1){
                            this.username = res.data.data.username;
                        }else{
                            this.$router.push('/sale/productSale');
                        }
                    })
                    .catch((err) => {
                        this.$Notice.error({
                            title: err
                        });
                    });

            },
            turn_menu: function(name){
                this.$router.push(name);
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
                            this.$router.push('/sale/productSale');
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

            },
            //删除cookie
            // delCookie(name) {
            //      let exp = new Date();
            //      exp.setTime(exp.getTime() - 1);
            //      let cval=getCookie(name);
            //      if(cval!=null){
            //          document.cookie= name + "="+cval+";expires="+exp.toGMTString();
            //      }
            // }
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
        /*background: #5b6270;*/
        /*border-radius: 3px;*/
        float: left;
        position: relative;
        top: 8px;
        left: -50px;
    }
    .layout-login{
        /*width: auto;*/
        min-width: 150px;
        height:59px;
        float: right;
        position: relative;
        top: -60px;
    }
    .layout-nav{
        width: 300px;
        height:60px;
        margin: 0 auto;
        margin-right: 300px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
