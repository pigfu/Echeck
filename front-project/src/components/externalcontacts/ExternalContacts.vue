<template>

  <div class="external-split">
    <Split v-model="split1" mode="vertical">
      <div slot="top" class="external-split-top">

        <Input v-model="name" type="text" size="center" style="width: 200px;float: left;margin-right: 5px" ><span slot="prepend">姓名：</span></Input>
        <Input v-model="company" type="text" size="center" style="width: 200px;float: left;margin-right: 5px" ><span slot="prepend">公司：</span></Input>
        <Button type="primary" size="center" icon="ios-search" @click="getData" style="float:left">搜索</Button><br/>
      </div>
      <div slot="bottom" class="external-split-bottom">
        <div class='table-header'>
          <Row :gutter="8" type="flex" justify="start">
            <i-col >
              <Button type="primary" size="center"  @click="tableNewRow">新增</Button>
            </i-col>
            <i-col >
              <Button type="primary" size="center" @click="handleEdit(data_list[currentIndex],currentIndex)" >编辑</Button>
            </i-col>
            <i-col >
              <Button type="primary" size="center" @click="handleSave(currentIndex)" >保存</Button>
            </i-col>
            <i-col >
              <Button type="primary" size="center"  @click="refresh">刷新</Button>
            </i-col>
            <i-col >
              <Button type="primary" size="center" @click="search" >授权</Button>
            </i-col>
<!--            <i-col >-->
<!--              <Input type="text" v-model="count" />-->
<!--            </i-col>-->
          </Row>
        </div>
        <Table border highlight-row disabled-hover :columns="columns" :data="data_list" ref="selection" height="480" size="small" @on-select="selectRow" @on-row-click="currentRow">
          <template slot-scope="{ row, index }" slot="name">
            <Input type="text" v-model="editName" v-if="editIndex === index" />
            <span v-else>{{ row.name }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="age">
            <Input type="text" v-model="editAge" v-if="editIndex === index" />
            <span v-else>{{ row.age }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="address">
            <Input type="text" v-model="editAddress" v-if="editIndex === index" />
            <span v-else>{{ row.address }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="date">
            <Input type="text" v-model="editDate" v-if="editIndex === index" />
            <span v-else>{{ row.date }}</span>
          </template>
          <template slot-scope="{ row, index}" slot="action" v-if="editIndex !== index">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看详情</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
          </template>
        </Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
             <Page :total="total" :page-size="20" :page-size-opts="[20, 35, 50]"  show-elevator show-sizer @on-change="changePage"/>
          </div>
        </div>
      </div>
    </Split>
  </div>


</template>
<script>
    export default {
        data () {
            return {
                modal: false,
                split1:'80px',
                value1:12346,
                total:200,
                name:'',
                company:'',
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'index',
                        align: 'center',
                        title: '序号',
                        width: 80

                    },
                    {
                      title: '姓名',
                      key: 'name',
                      align: 'center',
                      sortable: true,
                      slot: 'name'
                    },
                    {
                        align: 'center',
                        title: '职位',
                        key: 'age',
                        sortable: true,
                        slot: 'age'
                    },
                    {
                        align: 'center',
                        title: '公司',
                        key: 'address',
                        tooltip:true,
                        sortable: true,
                        slot: 'address'
                    },
                    {
                        align: 'center',
                        title: '联系方式',
                        key: 'date',
                        sortable: true,
                        slot: 'date'
                    },
                    {
                        align: 'center',
                        width:150,
                        title: '操作',
                        key: 'operation',
                        slot: 'action'

                    }
                ],
                data_list: [],
                currentIndex : -1,//当前列
                editIndex: -1,  // 当前聚焦的输入框的行数
                saveData : '',//保存数据
                saveFlag : 0,//保存数据
                modifyData : '',//修改数据
                modifyFlag : 0,//修改数据
                editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
                editAge: '',  // 第二列输入框
                editAddress: '',  // 第四列输入框
                editDate: '',  // 第四列输入框
            }
        },
        //在这里调用ajax请求方法
        created () {
            this.getData();
        },
        methods: {
            getData: function(){
                //发送get请求
                this.axios.get('contacts',{
                    params: {
                        name: this.name,
                        company: this.company
                    }
                    })
                    .then((res) => {
                        if(res.data.code == 1){
                            this.data_list =  res.data.data;

                        }else{
                            this.$router.push('/main');
                        }
                    })
                    .catch((err) => {
                        this.$Notice.error({
                            title: err
                        });
                    });
            },
            //展示数据
            show (index) {
                this.$Modal.info({
                    title: '人员信息',
                    content: `姓名：${this.data_list[index].name}<br>年龄：${this.data_list[index].age}<br>地址：${this.data_list[index].address}`
                })
            },
            //删除数据
            remove (index) {
                if(this.saveFlag == 1 || this.modifyFlag == 1 ){
                    this.$Notice.error({
                        title: '请先保存新增或修改的数据'
                    });
                    return;
                }
                this.$Modal.confirm({
                    title: '删除确认',
                    onOk: () => {
                        this.data_list.splice(index, 1);
                    }
                })

            },
            //新增数据
            tableNewRow:function () {
                let new_data = {
                  name:'',
                  age:'' ,
                  address:'',
                  date:'',
                };
                if(this.saveFlag == 1){
                  this.$Notice.error({
                      title: '请先保存新增数据'
                  });
                  return;
                }
                this.currentIndex = 0;
                this.editName = '';
                this.editAge = '';
                this.editDate = '';
                this.editAddress = '';
                this.editIndex = 0;
                this.saveFlag++;
                this.data_list.unshift(new_data);
            },
            //编辑数据
            handleEdit (row, index) {

               this.editName = row.name;
               this.editAge = row.age;
               this.editAddress = row.address;
               this.editDate = row.date;
               this.editIndex = index;
               this.modifyFlag++;
            },
            //处理保存
            handleSave (index) {
                if(this.saveFlag == 0 && this.modifyFlag == 0){
                    return;
                }
               this.data_list[index].name = this.editName;
               this.data_list[index].age = this.editAge;
               this.data_list[index].date = this.editDate;
               this.data_list[index].address = this.editAddress;
               this.editIndex = -1;
               if(this.data_list[index].id){
                 this.edit(index);
               }else{
                 this.save(index);
               }
            },
            //保存新增数据
            save (index) {
               this.saveFlag--;
            },
            //保存修改数据
            edit (index) {
               this.modifyFlag--;
            },
            //刷新
            refresh () {
              this.editIndex = -1;
              if(this.saveFlag == 1){
                  this.saveFlag--;
              }
              if(this.modifyFlag == 1){
                  this.modifyFlag--;
              }
              this.getData();
            },
            //获取当前选中行
            selectRow:function (selection,row) {
              alert(row.name);
            },
            //获取当前选中行
            currentRow:function (row,index) {
              if(this.saveFlag == 1){
                return;
              }
              if(this.modifyFlag == 1){
                return;
              }
              this.currentIndex = index;
              return;
            },
            //页数跳转
            changePage:function () {
                let new_data = {
                    name: 'dollaer',
                    age: 18,
                    address: '关东升 ',
                    date: '2016-10-03'
                };
                this.data_list.unshift(new_data);
            }
        }

    }
</script>
<style>
  .table-header{
    background: #F0F0F0;
    padding: 0 1px;
    height: 30px;
    line-height:29px;
    color: #000000;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .external-split{
    min-height:700px;
    height:400px;
    width:99%;
    border: 1px solid #dcdee2;
  }
  /*中间的过度的横线*/
  .link-top {
    width: 100%;
    height: 2px;
    border-top: solid #ACC0D8 1px;
  }
  .external-split-top{
    padding: 10px;
  }
  .external-split-bottom{
    padding: 10px;
  }
</style>
