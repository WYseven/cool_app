<template src="./temp.html">

</template>
<script>
import Vue from 'vue'
import infoPrompt from '../../prompt/InfoPrompt.vue'
import infoShow from '../infoShow/index.vue'
import infoSocial from '../infoSocial/index.vue'

//引入下拉所需的数据
import InfoStaticData from '../infoStaticData.js'
import validator from '../validator.js'

export default {
    name:"Info",
    components:{
      infoPrompt,
      infoShow,
      infoSocial
    },
    data(){
      function validatorFunc(type,message){
          if(!validator[type]) {
            throw new Error("没有对应的验证规则");
          }
          return function (rule, value, callback){
              if(validator[type].test(value)){
                 callback();
              }else{
                 callback(message);
              }
          }
      }


      return {
        ruleForm:{
          name:'',
          gender:"",
          user:"leo",
          education:"", //最高学历
          graduationTime:'',//毕业时间
          work:'',//工作年限
          seat:'',//所在地
          originPlace:'', //籍贯
          qq:'',
          mchat:'',
          birthday:'',
          url:""
          
        },
        InfoStaticData,
        rules:{
          name:[
            { required: true, message: '姓名不能为空', trigger: 'change' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          gender:[
            {required:true,message: '请选择性别', trigger: 'change'}
          ],
          phone:[
            {required:true,message: '请填写电话号码', trigger: 'change'},
            {validator: validatorFunc('phone','请填写正确的手机号码'),trigger: 'blur,change'}
          ],
          email:[
            {required:true,message: '请填写邮箱', trigger: 'change'},
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          intention:[
            {required:true,message: '请填写求职意向', trigger: 'change'}
          ],
          education:[ //最高学历必填
            {required:true,message: '请填写最高学历',}
          ],
          graduationTime:[ //最高学历必填
            {required:true,message: '请填写毕业时间',}
          ],
          work:[ //最高学历必填
            {required:true,message: '请填写工作年限',}
          ],
          seat:[ //所在地
            {required:true,message: '请填写所在地',}
          ],
          qq:[
            {validator:validatorFunc('qq','请填写正确的qq号码'),trigger: 'blur,change'}
          ],
          url:[
            {
              required:true,message:"请输入网址",trigger: 'blur,change'
            }
          ],
          url2:[
            {
              required:true,message:"请输入网址",trigger: 'blur,change'
            }
          ]
        }
      }
    },
    computed:{
      //计算毕业年限
      graduationTimeed(){
        let currentTime = this.InfoStaticData.graduationTime.currentTime;
        let forwardStep = this.InfoStaticData.graduationTime.forwardStep;
        var arr = [],n=0;
        while(n<=forwardStep){
          arr.push(currentTime-n);
          n++;
        }
        console.log(currentTime);
        return arr;
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validateField('url',function (valid){
            console.log(123);
            console.log(valid);
        });
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            /*this.$store.dispatch("request-info-save",{
              url:'save',
              data:this.ruleForm
            }).then((response)=>{
              console.log(response.data);
            })*/
            
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

