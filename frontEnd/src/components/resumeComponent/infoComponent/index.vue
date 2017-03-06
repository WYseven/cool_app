<template src="./temp.html">

</template>
<script>
import Vue from 'vue'
import infoPrompt from '../prompt/InfoPrompt.vue'
import infoShow from '../infoShow/index.vue'
 export default {
    name:"Info",
    components:{
      infoPrompt,
      infoShow
    },
    data(){
      //自定义验证规则
      function validatorPhone(rule, value, callback){
          //console.log(rule, value, callback);
         // callback("ok")
      }
      return {
        ruleForm:{
          user:"leo",
          name:'',
          gender:""
        },
        rules:{
          name:[
            { required: true, message: '姓名不能为空', trigger: 'change' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          gender:[
            {required:false,message: '请选择性别', trigger: 'change'}
          ],
          phone:[
            {required:false,message: '请填写电话号码', trigger: 'change'}
           // {validator:validatorPhone,trigger: 'blur,change'}
          ],
          email:[
            {required:false,message: '请填写邮箱', trigger: 'change'},
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          intention:[
            {required:false,message: '请填写求职意向', trigger: 'change'}
          ]
        }
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch("request-info-save",{
              url:'/api/info/save',
              data:this.ruleForm
            }).then((response)=>{
              console.log(response.data);
            })
            
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

