<template>
  <div id="zixunform">
    <el-dialog title="请你留言" :visible.sync="dialogFormVisible" width="25%">
      <div class="info">
        优肯国际篮球俱乐部
        <br>4006817400
      </div>
      <hr>
      <div class="formData">
        <el-form :model="form" ref="ruleForm" :rules="rules">
          <el-form-item label="活动名称：" prop="content">
            <el-input type="textarea" v-model="form.content" rows="2" resize="none" placeholder="请在此输入留言内容，我们会尽快与您联系。(必填)"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="form.name" ></el-input>
          </el-form-item>
          <el-form-item label="电话："  prop="tel">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="年龄：">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="地址：">
            <el-input v-model="form.addr"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" class="btnZixun" @click="send('ruleForm')">发送</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        tel: "",
        age: "",
        addr: "",
        content: ""
      },
      rules: {
         content: [
           { required: true, message: '请输入活动名称', trigger: 'blur' },
         ],
         tel:[
           { required: true, message: '请输入联系电话', trigger: 'blur' },
         ]
      }
    };
  },
  methods: {
    showPage() {
      this.dialogFormVisible = true;
    },
    send(formName){
       this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible=false
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>
<style lang="less">
#zixunform {
  .el-dialog__header {
    padding: 10px 20px;
    line-height: 30px;
    background-color: #00aef3;
    color: #fff;
  }
  .el-form-item {
    margin-bottom: 8px;
  }
  .el-dialog__body {
    padding: 0;
  }
  .info {
    padding: 15px 20px;
  }
  .formData{
    padding: 0 20px;
  }
  .btnZixun{
    width: 100%;
  }
}
</style>