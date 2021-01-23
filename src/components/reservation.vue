<template>
  <div id="reservation">
    <el-dialog title="免费预约体验课" :visible.sync="dialogFormVisible" width="25%">
      <el-form :model="form" ref="ruleForm">
        <el-form-item label="姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄：">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="form.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="电话：">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="选择场馆：" class="select">
          <el-cascader
            expand-trigger="hover"
            :options="option"
            v-model="form.selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" class="btnRes" @click="send()">立即预约</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { version } from 'punycode';
export default {
  data() {
    return {
      dialogFormVisible:false,
      form: {
        name: "",
        age: "",
        resource: "",
        tel: "",
        selectedOptions:[]
      },
      option:[
        {
          value:"beijing",
          label:"北京",
          children:[
            {
              value:"niaochao",
              label:"鸟巢"
            },
            {
              value:"wukesong",
              label:"五棵松"
            }
          ]
        },
        {
          value:"shanghai",
          label:"上海",
          children:[
            {value:"benchi",
            label:"上海奔驰体育中心"},
            {value:"shangti",
            label:"上海体育馆"}
          ]
        }
      ]
    };
  },
  methods:{
    showRes(){
      this.dialogFormVisible=true
    },
    send(){
      this.dialogFormVisible=false
    },
    handleChange(value){
      console.log(value)
    }
  }
};
</script>
<style lang="less">
#reservation{
  .el-dialog__header{
    padding: 35px;
    text-align: center;
    font-size: 20px;
    color: #333;
    border-bottom: 3px solid #ccc;
  }
  .el-dialog__body{
    padding: 15px 20px;
  }
  .el-dialog__footer{
    padding: 10px 20px 30px;
  }
  .select {
    .el-cascader{
      width: 100%;
    }  
  }
  .btnRes{
    width: 100%;
  }
}
</style>