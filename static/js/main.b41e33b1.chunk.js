(this.webpackJsonpadmission=this.webpackJsonpadmission||[]).push([[0],{29:function(e,s,a){},30:function(e,s,a){},59:function(e,s,a){"use strict";a.r(s);var r=a(1),i=a.n(r),c=a(21),t=a.n(c),l=(a(29),a(30),a(6)),n=a(10),j=a.n(n),m=a(24),o=a(4),d=a(5),b=a.p+"static/media/signin-image.6f1c7229.jpg",u=a(0);var p=function(e){var s=Object(r.useState)({jeeroll:"",email:"",pass:"",repass:"",agreeterm:!1}),a=Object(l.a)(s,2),i=a[0],c=a[1];function t(e){var s=e.target,a=s.name,r=s.value;c((function(e){return"agreeterm"!==a?Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},a,r)):Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},a,!e.agreeterm))}))}return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"signup",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"signup-content",children:[Object(u.jsxs)("div",{className:"signup-form",children:[Object(u.jsx)("h2",{className:"form-title",children:"Sign up"}),Object(u.jsxs)("form",{onSubmit:function(e){var s={jeeroll:i.jeeroll,email:i.email,password:i.pass,repassword:i.repass};j.a.post("http://localhost:4000/regiss/add",s),console.log(s),c((function(){return{jeeroll:"",email:"",pass:"",repass:"",agreeterm:!1}})),e.preventDefault()},className:"register-form",id:"register-form",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"jeeroll",children:Object(u.jsx)("i",{className:"zmdi zmdi-account material-icons-name"})}),Object(u.jsx)("input",{required:!0,value:i.jeeroll,onChange:t,type:"text",name:"jeeroll",id:"jeeroll",placeholder:"Your JEE Roll"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"email",children:Object(u.jsx)("i",{className:"zmdi zmdi-email"})}),Object(u.jsx)("input",{required:!0,value:i.email,onChange:t,type:"email",name:"email",id:"email",placeholder:"Your Email"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"pass",children:Object(u.jsx)("i",{className:"zmdi zmdi-lock"})}),Object(u.jsx)("input",{required:!0,value:i.pass,onChange:t,type:"password",name:"pass",id:"pass",placeholder:"Password"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"repass",children:Object(u.jsx)("i",{className:"zmdi zmdi-lock-outline"})}),Object(u.jsx)("input",{required:!0,value:i.repass,onChange:t,type:"password",name:"repass",id:"repass",placeholder:"Repeat your password"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{required:!0,value:i.agreeterm,onChange:t,type:"checkbox",name:"agreeterm",id:"agreeterm",className:"agree-term"}),Object(u.jsxs)("label",{for:"agreeterm",className:"label-agree-term",children:[Object(u.jsx)("span",{children:Object(u.jsx)("span",{})}),"I agree all statements in  ",Object(u.jsx)("a",{href:"#",className:"term-service",children:"Terms of service"})]})]}),Object(u.jsx)("div",{className:"form-group form-button",children:Object(u.jsx)("input",{type:"submit",name:"signup",id:"signup",className:"form-submit",value:"Register"})})]})]}),Object(u.jsxs)("div",{className:"signup-image",children:[Object(u.jsx)("figure",{children:Object(u.jsx)("img",{src:b,alt:"sing up image"})}),Object(u.jsx)("a",{href:"#",onClick:function(s){s.preventDefault(),e.currentView()},className:"signup-image-link",children:"I am already member"})]})]})})})})},O=a.p+"static/media/signup-image.bd994738.jpg";var g=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{class:"sign-in",children:Object(u.jsx)("div",{class:"container",children:Object(u.jsxs)("div",{class:"signin-content",children:[Object(u.jsxs)("div",{class:"signin-image",children:[Object(u.jsx)("figure",{children:Object(u.jsx)("img",{src:O,alt:""})}),Object(u.jsx)("a",{href:"#",onClick:function(s){s.preventDefault(),e.currentView()},class:"signup-image-link",children:"Create an account"})]}),Object(u.jsxs)("div",{class:"signin-form",children:[Object(u.jsx)("h2",{class:"form-title",children:"Sign in"}),Object(u.jsxs)("form",{method:"POST",class:"register-form",id:"login-form",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"email",children:Object(u.jsx)("i",{className:"zmdi zmdi-email"})}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Your Email"})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"your_pass",children:Object(u.jsx)("i",{class:"zmdi zmdi-lock"})}),Object(u.jsx)("input",{type:"password",name:"your_pass",id:"your_pass",placeholder:"Password"})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("input",{type:"checkbox",name:"remember-me",id:"remember-me",class:"agree-term"}),Object(u.jsxs)("label",{for:"remember-me",class:"label-agree-term",children:[Object(u.jsx)("span",{children:Object(u.jsx)("span",{})}),"Remember me"]})]}),Object(u.jsx)("div",{class:"form-group form-button",children:Object(u.jsx)("input",{type:"submit",name:"signin",id:"signin",class:"form-submit",value:"Log in"})})]})]})]})})})})};var x=function(){var e=Object(r.useState)(!0),s=Object(l.a)(e,2),a=s[0],i=s[1];function c(){console.log("will"),i(!a)}return Object(u.jsx)(m.a,{children:a?Object(u.jsx)(p,{currentView:c}):Object(u.jsx)(g,{currentView:c})})};t.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.b41e33b1.chunk.js.map