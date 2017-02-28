<template src="./temp.html">

</template>
<script>
 export default {
    name:"Info",
    data(){
      return {
        ruleForm:{
          name:"",
          resource:"",
          date1:"",
          date2:""
        },
        rules:{
          name:[
            { required: true, message: '姓名不能为空', trigger: 'change' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          resource:[
            {required:true,message: '请选择性别', trigger: 'change'}
          ]
        }
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>
<style src="./style.css"></style>

