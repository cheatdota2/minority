(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{479:function(t,e,r){var content=r(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("67721d5b",content,!0,{sourceMap:!1})},498:function(t,e,r){"use strict";var n=r(479);r.n(n).a},499:function(t,e,r){(t.exports=r(40)(!1)).push([t.i,"form[data-v-3a5a57ff]{margin-top:8px;max-width:240px;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}form[data-v-3a5a57ff],section[data-v-3a5a57ff]{width:100%;display:-webkit-box;display:flex}section[data-v-3a5a57ff]{-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}p.errors[data-v-3a5a57ff]{margin:28px 0;text-align:center}p.errors span[data-v-3a5a57ff]{display:block;color:#ed1c24;font-size:16px}a[data-v-3a5a57ff],span[data-v-3a5a57ff]{font-size:14px}span[data-v-3a5a57ff]{color:#c1bbc9}",""])},540:function(t,e,r){"use strict";r.r(e);r(42);var n=r(8),o=r(0),c=r(71),l={name:"register",layout:"authorize",head:function(){return{title:"Minority - создать аккаунт",meta:[{hid:"description",name:"description",content:"Создайте аккаунт чтобы получить доступ к лучшему читу на рынке"}]}},data:function(){return{form:{login:"",email:"",password:""},statuses:{login:null,email:null,password:null},loading:!1,errors:[]}},mounted:function(){},methods:Object(o.a)({handle:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var data,e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=5,this.$recaptcha("register");case 5:this.form.recaptachaToken=t.sent;case 6:return data=this.form,t.next=9,this.register(data);case 9:if(!0===(e=t.sent).status)this.$axios.setToken(e.access_token,"Bearer"),this.$router.push(this.localePath("profile"));else{for(r in this.errors=[],this.statuses)e.errors.hasOwnProperty(r)?this.statuses[r]="error":this.statuses[r]="success",e.errors[r]&&this.errors.push(e.errors[r][0]);this.loading=!1}t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),console.error(t.t0),this.loading=!1;case 17:case"end":return t.stop()}},t,this,[[1,13]])}));return function(){return t.apply(this,arguments)}}()},Object(c.b)("user",["register"]))},f=(r(498),r(23)),component=Object(f.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",{staticClass:"minority-heading"},[t._v(t._s(t.$t("register.headline")))]),t._v(" "),r("h3",{staticClass:"minority-subheading"},[t._v(t._s(t.$t("register.desc")))]),t._v(" "),t.errors.length?r("p",{staticClass:"errors"},t._l(t.errors,function(e,n){return r("span",{key:n},[t._v(t._s(e))])}),0):t._e(),t._v(" "),r("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.handle(e)}}},[r("minority-input",{attrs:{icon:"/icons/person-icon.svg",placeholder:t.$t("register.form.login"),"suffix-icon":t.statuses.login,type:"text"},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}}),t._v(" "),r("minority-input",{attrs:{icon:"/icons/mail-icon.svg",placeholder:t.$t("register.form.email"),"suffix-icon":t.statuses.email,type:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("minority-input",{attrs:{icon:"/icons/secure-icon.svg",placeholder:t.$t("register.form.password"),"suffix-icon":t.statuses.password,type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),r("span",{staticStyle:{"text-align":"center"}},[t._v("\n      "+t._s(t.$t("register.toc"))+" "),r("a",{staticClass:"default-link",staticStyle:{display:"block"},attrs:{href:"/legal.pdf"}},[t._v(t._s(t.$t("register.toc_link")))])]),t._v(" "),r("minority-button",{staticStyle:{margin:"16px 0"},attrs:{loading:t.loading,wide:"",type:"submit"}},[t._v("\n      "+t._s(t.$t("register.form.submit"))+"\n    ")])],1),t._v(" "),r("span",[t._v("\n    "+t._s(t.$t("register.back"))+"\n    "),r("n-link",{staticClass:"default-link",attrs:{to:t.localePath("auth")}},[t._v(t._s(t.$t("register.back_link")))])],1)])},[],!1,null,"3a5a57ff",null);e.default=component.exports}}]);