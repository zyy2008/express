(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe23679c"],{2017:function(e,s,t){"use strict";t("ed55")},"2d56":function(e,s,t){"use strict";t("6b9d")},5778:function(e,s,t){},"6b9d":function(e,s,t){},"9ed6":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("Login Form")])]),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(s){e.capsTooltip=s},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(s){e.capsTooltip=!1}},nativeOn:{keyup:[function(s){return e.checkCapslock(s)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}]},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),t("div",{staticClass:"button"},[t("el-button",{attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("Login")]),t("el-button",{nativeOn:{click:function(s){s.preventDefault(),e.dialogFormVisible=!0}}},[e._v("Registered")])],1),t("div",{staticStyle:{position:"relative"}},[t("div",{staticClass:"tips"},[t("span",[e._v("Username : demo")]),t("span",[e._v("Password : 123456")])])])],1),t("el-dialog",{attrs:{title:"Register an account",visible:e.dialogFormVisible,width:"600px","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":""},on:{"update:visible":function(s){e.dialogFormVisible=s},close:e.handleClose}},[t("el-form",{ref:"register",staticClass:"register",attrs:{model:e.form,"label-width":"200px",rules:e.reginRules}},[t("el-form-item",{attrs:{label:"UserName",prop:"username"}},[t("el-input",{attrs:{placeholder:"Please enter user name"},model:{value:e.form.username,callback:function(s){e.$set(e.form,"username",s)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"Password",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"Please enter password"},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}})],1),t("el-form-item",{attrs:{label:"Password Confirmation",prop:"password_confirm"}},[t("el-input",{attrs:{placeholder:"Please enter confirm password",type:"password"},model:{value:e.form.password_confirm,callback:function(s){e.$set(e.form,"password_confirm",s)},expression:"form.password_confirm"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(s){e.dialogFormVisible=!1}}},[e._v("cancel")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("ok")])],1)],1)],1)},r=[],n=(t("1784"),t("fe8a"),t("61f7"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(s){return e.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v(" WeChat ")]),t("div",{staticClass:"sign-btn",on:{click:function(s){return e.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v(" QQ ")])])}),a=[],i={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")}}},l=i,c=(t("d9fb"),t("c701")),u=Object(c["a"])(l,n,a,!1,null,"7309fbbb",null),d=u.exports,p=t("c24f"),m={name:"Login",components:{SocialSign:d},data:function(){var e=this,s=function(e,s,t){""==s?t(new Error("Please enter the correct user name")):t()},t=function(e,s,t){s.length<6?t(new Error("The password can not be less than 6 digits")):t()},o=function(e,s,t){s.length<6?t(new Error("Please enter at least six passwords")):t()},r=function(e,s,t){""==s?t(new Error("please enter user name")):t()},n=function(s,t,o){t!=e.form.password||""==e.form.password?o(new Error("Please keep the same password")):o()};return{dialogFormVisible:!1,form:{username:"",password:"",password_confirm:""},loginForm:{username:"demo",password:"123456"},reginRules:{username:[{required:!0,trigger:"blur",validator:r}],password:[{required:!0,trigger:"blur",validator:o}],password_confirm:[{required:!0,trigger:"blur",validator:n}]},loginRules:{username:[{required:!0,trigger:"blur",validator:s}],password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var s=e.query;s&&(this.redirect=s.redirect,this.otherQuery=this.getOtherQuery(s))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{handleClose:function(){this.$refs["register"].resetFields()},handleSubmit:function(){var e=this;this.$refs["register"].validate((function(s){if(!s)return console.log("error submit!!"),!1;Object(p["c"])(e.form).then((function(s){"ok"==s.status?(e.$notify({message:"registration success",type:"success"}),e.dialogFormVisible=!1):e.$notify({message:s.message,type:"warning"})}))}))},checkCapslock:function(e){var s=e.key;this.capsTooltip=s&&1===s.length&&s>="A"&&s<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(s,t){return"redirect"!==t&&(s[t]=e[t]),s}),{})}}},f=m,g=(t("2017"),t("2d56"),Object(c["a"])(f,o,r,!1,null,"9c09caf8",null));s["default"]=g.exports},d9fb:function(e,s,t){"use strict";t("5778")},ed55:function(e,s,t){}}]);