<template src="./temp.html">

</template>
<script>
import Vue from 'vue'
import infoPrompt from '../../comm/prompt/InfoPrompt.vue'
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
              //字段不是必填并且没有填写，则可以验证通过
              if(!rule.required && !value){
                callback();
                return;
              }
              if(validator[type].test(value)){
                 callback();
              }else{
                 callback(message);
              }
          }
      }
      return {
        isInfoShow:false,
        isEditorShow:true,
        ruleForm:Object.assign(InfoStaticData.ruleForm,{
          name:'王允123',
          gender:"性别",
          phone:"18612987504",
          email:'18612987504@qq.com',
          intention:"web前端",
          education:"初中",
          graduationTime:'2017/10',
          work:'10',
          originPlace:'北京',
          qq:'2214455245',
          mchat:'2214455245',
          birthday:'1990/11/13',
          companyUrl:''
        }),  //表单字段
        InfoStaticData,
        rules:{
          name:[
            { required: true, message: '姓名不能为空', trigger: 'change' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          gender:[
            {required:false,message: '请选择性别', trigger: 'change'}
          ],
          phone:[
            {required:false,message: '请填写电话号码', trigger: 'change'},
            {validator: validatorFunc('phone','请填写正确的手机号码'),trigger: 'blur,change'}
          ],
          email:[
            {required:false,message: '请填写邮箱', trigger: 'change'},
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          intention:[
            {required:false,message: '请填写求职意向', trigger: 'change'}
          ],
          education:[ //最高学历必填
            {required:false,message: '请填写最高学历',}
          ],
          graduationTime:[ //最高学历必填
            {required:false,message: '请填写毕业时间',}
          ],
          work:[ //最高+学历必填
            {required:false,message: '请填写工作年限',}
          ],
          seat:[ //所在地
            {required:false,message: '请填写所在地',}
          ],
          qq:[
            {required:false},
            {required:false,validator:validatorFunc('qq','请填写正确的qq号码'),trigger: 'blur,change'}
          ],
          companyUrl:[
            {
              required:false,message:"请输入网址",trigger: 'blur,change'
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
        return arr;
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.isInfoShow = true;
            document.body.scrollTop = 0;

            /*setTimeout(()=>{
              this.isInfoShow = true;

            },1000)*/
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
      },
      editorHandle(){
        this.isInfoShow = false;
      }
    }
}
</script>
<style src="./style.css"></style>

