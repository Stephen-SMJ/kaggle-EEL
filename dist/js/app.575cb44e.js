(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"03b0":function(t,e,a){t.exports=a.p+"img/ranking.08a89636.jpg"},"08e8":function(t,e,a){t.exports=a.p+"img/smoothl1.a5a84fd2.png"},"14c2":function(t,e,a){t.exports=a.p+"img/deberta.703bbeb4.png"},3288:function(t,e,a){"use strict";a("abec")},4574:function(t,e,a){t.exports=a.p+"img/FocalLoss.27f5a585.png"},5628:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("0fae");var n=a("9e2f"),i=a.n(n),o=a("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("navbar"),e("router-view"),e("end")],1)},r=[],l=function(){var t=this,e=t._self._c;return e("div",[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[e("el-menu-item",{staticClass:"first menu",attrs:{index:"1"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/index"}},[t._v("Home")])],1),e("el-menu-item",{staticClass:"menu",attrs:{index:"2"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/assessment"}},[t._v("Essay Assessment")])],1),e("el-menu-item",{staticClass:"menu",attrs:{index:"3"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/about"}},[t._v("About us")])],1)],1)],1)},c=[],d={name:"navbar",data(){return{activeIndex:"1"}},methods:{handleSelect(t,e){console.log(t,e)}}},u=d,m=(a("6192"),a("2877")),p=Object(m["a"])(u,l,c,!1,null,"486fc237",null),f=p.exports,h=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"footer"}},[e("div",{staticClass:"col-md-12"},[e("span",{staticClass:"center-block"},[t._v("© 2022 AMA563 Project Inc. All Right Reserved")])])])}],v={name:"end"},b=v,y=(a("d750"),Object(m["a"])(b,h,g,!1,null,"06f1d6ea",null)),_=y.exports,x={name:"App",components:{navbar:f,end:_}},w=x,S=(a("bc66"),Object(m["a"])(w,s,r,!1,null,null,null)),C=S.exports,k=a("c5ec"),L=a.n(k),z=(a("7b17"),a("ab8b"),a("3e48"),a("8c4f")),A=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("section",{attrs:{id:"p-words"}},[e("div",{staticClass:"container",staticStyle:{width:"85%"}},[e("div",[e("div",{staticClass:"row",staticStyle:{"text-align":"center"}},[e("h1",{staticStyle:{"margin-top":"20px"}},[t._v("Our Ranking in Public Leaderboard")]),e("div",[e("img",{staticStyle:{margin:"0 auto",width:"90%"},attrs:{src:t.ranking,alt:""}})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow bounceInLeft"},[e("img",{staticStyle:{width:"90%"},attrs:{src:t.dataenhance}})]),e("div",{staticClass:"col-md-6"},[e("h3",[t._v("Back Translation And Random Exchange")]),e("h1",[t._v("Data Augmentation")]),t._m(1),e("el-button",{attrs:{type:"primary",round:""}},[t._v("read more")])],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow bounceInLeft"},[e("h3",[t._v("Pretrained Model")]),e("h1",[t._v("DeBERTaV3")]),t._m(2),e("el-button",{attrs:{type:"primary",round:""}},[t._v("read more")])],1),e("div",{staticClass:"col-md-6 wow bounceInRight"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.deberta}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow bounceInRight"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.mse}}),e("img",{staticStyle:{width:"100%"},attrs:{src:t.smooth}})]),e("div",{staticClass:"col-md-6 wow bounceInLeft"},[e("h3",[t._v("RMSE Loss => SmoothL1 Loss")]),e("h1",[t._v("SmoothL1 Loss")]),t._m(3),e("el-button",{attrs:{type:"primary",round:""}},[t._v("read more")])],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow bounceInLeft"},[e("h3",[t._v("Adam + Weight Dacy")]),e("h1",[t._v("AdamW")]),e("p",{staticStyle:{"text-align":"left","font-size":"17px"}},[t._v("L2 regularization and weight decay regularization are equivalent for standard stochastic gradient descent (when rescaled by the learning rate), but as we demonstrate this is not the case for adaptive gradient algorithms, such as Adam. While common implementations of these algorithms employ L2 regularization (often calling it “weight decay” in what may be misleading due to the inequivalence we expose), we propose a simple modification to recover the original formulation of weight decay regularization by decoupling the weight decay from the optimization steps taken w.r.t. the loss function. ")]),e("el-button",{attrs:{type:"primary",round:""}},[t._v("read more")])],1),e("div",{staticClass:"col-md-6 wow bounceInRight"},[e("img",{staticStyle:{width:"80%"},attrs:{src:t.adamw}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow bounceInLeft"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.COS}})]),e("div",{staticClass:"col-md-6 wow bounceInRight"},[e("h3",[t._v("Warm UP")]),e("h1",[t._v("Cosine Annealing")]),t._m(4),e("el-button",{attrs:{type:"primary",round:""}},[t._v("read more")])],1)])])])])},j=[function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"banner"}},[e("div",{staticClass:"banner",staticStyle:{"text-align":"left"}},[e("h1",[t._v("2022-AMA563-Project")]),e("h2",[t._v("Evaluating language knowledge of ELL students from grades 8-12")]),e("h3",[t._v("Kaggle competition - Feedback Prize - English Language Learning")]),e("h3",[t._v("Our score on Leaderboard: 0.43(public). same with top1 score | ranking 752 out of 2563")])])])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-align":"left","font-size":"17px"}},[t._v("We use two augmentation methods for our data "),e("br"),e("br"),t._v(" The first is random exchange. We randomly exchanged some words with it's synonyms"),e("br"),e("br"),t._v(" The Second is back translation. We translated the sample to French and translated it back to English then. We finally increased the sample from 3910 to 7980. ")])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-align":"left","font-size":"17px"}},[t._v(" a new pre-trained language model, DeBERTaV3, which improves the original DeBERTa model by replacing mask language modeling (MLM) with replaced token detection (RTD), a more sample-efficient pre-training task. "),e("br"),e("br"),t._v(" We have pre-trained DeBERTaV3 using the same settings as DeBERTa to demonstrate its exceptional performance on a wide range of downstream natural language understanding (NLU) tasks. ")])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-align":"left","font-size":"17px"}},[t._v("The function is actually a segmentation function. "),e("br"),e("br"),t._v(" between [-1,1] is the L2 loss, solving L1 is not derivable at 0, and outside the [-1,1] interval is the L1 loss, solving the outlier gradient explosion problem, so it can limit the gradient from two aspects. "),e("br"),e("br"),t._v(" When the error between the predicted value and the true value is too large, the gradient value is not too large. The gradient value is small enough when the error between the predicted and true values is small. ")])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"font-size":"17px","text-align":"left"}},[t._v("Cosine Annealing is a type of learning rate schedule that has the effect of starting with a large learning rate that is relatively rapidly decreased to a minimum value before being increased rapidly again. "),e("br"),e("br"),t._v('The resetting of the learning rate acts like a simulated restart of the learning process and the re-use of good weights as the starting point of the restart is referred to as a "warm restart" in contrast to a "cold restart" where a new set of small random numbers may be used as a starting point. It has a benefit of escaping the local minimizer. ')])}],O=a("bec7"),P=a.n(O),R=a("14c2"),F=a.n(R),I=a("a138"),T=a.n(I),E=a("4574"),M=a.n(E),V=a("71c8"),D=a.n(V),W=a("08e8"),B=a.n(W),U=a("b08f"),H=a.n(U),Y=a("c50a"),$=a.n(Y),q=a("03b0"),G=a.n(q),J={name:"index",data(){return{dataenhance:P.a,deberta:F.a,Loss:M.a,COS:D.a,detect:T.a,mse:B.a,smooth:H.a,adamw:$.a,ranking:G.a}}},N=J,K=(a("3288"),Object(m["a"])(N,A,j,!1,null,"d2befe74",null)),Q=K.exports,X=function(){var t=this,e=t._self._c;return e("div",[e("section",{attrs:{id:"aboutus"}},[e("div",[e("H2",{staticStyle:{margin:"60px 10px 60px 10px"}},[t._v("This project is used to commemorate 5 members of AMA563 2022 class")]),e("div",[e("img",{attrs:{src:t.team,alt:"",width:"50%"}})])],1)]),e("section",{staticStyle:{margin:"50px auto","text-align":"center"},attrs:{id:"contact"}},[e("h1",[t._v("Contact Us")]),e("div",[t._v("or by email: maojun.sun@connect.polyu.hk")]),e("div",{staticStyle:{"text-align":"center",margin:"20px auto",width:"700px"}},[e("el-form",{ref:"form",attrs:{model:t.sizeForm,"label-width":"80px",size:"mini"}},[e("el-form-item",{attrs:{label:"Your name",placeholder:"Your organization name"}},[e("el-input",{model:{value:t.sizeForm.name,callback:function(e){t.$set(t.sizeForm,"name",e)},expression:"sizeForm.name"}})],1),e("el-form-item",{attrs:{label:"Content","aria-placeholder":"Content you want to sent"}},[e("el-input",{attrs:{type:"textarea",rows:8},model:{value:t.sizeForm.content,callback:function(e){t.$set(t.sizeForm,"content",e)},expression:"sizeForm.content"}})],1),e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-button",{attrs:{type:"primary",round:""}},[t._v("Submit")])],1)],1)],1)])])},Z=[],tt=a("f4d1"),et=a.n(tt),at={name:"help",data(){return{team:et.a,sizeForm:{name:"",content:""}}},methods:{onSubmit(){console.log("submit!")}}},nt=at,it=Object(m["a"])(nt,X,Z,!1,null,null,null),ot=it.exports,st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("section",{attrs:{id:"detect"}},[e("h1",[t._v("Essay Assessment")]),e("div",{staticClass:"row",staticStyle:{width:"85%",margin:"20px auto","text-align":"center"}},[e("div",{staticStyle:{"font-size":"20px",margin:"10px"}},[t._v("Please "),e("el-button",{staticStyle:{"font-size":"17px"},attrs:{type:"success",round:""},on:{click:t.fill}},[t._v("input")]),t._v(" your essay.")],1),e("div",{staticStyle:{"font-size":"18px",margin:"20px"}},[t._v("Evaluate your essay in six dimension: Cohesion Syntax Vocabulary Phraseology Grammar Conventions")]),e("div",[e("el-input",{attrs:{type:"textarea",rows:10,placeholder:"English only."},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){return t.Classification(t.textarea)}}},[t._v("Submit")])],1)],1),e("el-dialog",{attrs:{title:"Result",visible:t.cla_dialogVisible,width:"30%"},on:{"update:visible":function(e){t.cla_dialogVisible=e}}},[e("div",{staticClass:"dialog"},[e("div",{staticStyle:{"font-weight":"bolder","font-size":"18px"}},[t._v("Your final result: "+t._s(t._f("percent")(this.final)))]),e("div",{staticStyle:{"text-align":"left","margin-left":"110px","margin-top":"20px","font-weight":"bolder","font-size":"16px"}},[t._v("For Details:")]),e("div",[t._v("Cohesion Score: "+t._s(t._f("percent")(this.cohesion)))]),e("div",[t._v("SyntaxL Score: "+t._s(t._f("percent")(this.syntaxL)))]),e("div",[t._v("Vocabulary Score: "+t._s(t._f("percent")(this.vocabulary)))]),e("div",[t._v("Phraseology Score: "+t._s(t._f("percent")(this.phraseology)))]),e("div",[t._v("Grammar Score: "+t._s(t._f("percent")(this.grammar)))]),e("div",[t._v("Conventions Score: "+t._s(t._f("percent")(this.conventions)))])]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.cla_dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.cla_dialogVisible=!1}}},[t._v("确 定")])],1)])],1)])},rt=[],lt=a("bc3a"),ct=a.n(lt),dt={name:"detect",data(){return{cla_dialogVisible:!1,det_dialogVisible:!1,result:"",final:"",cohesion:"",syntaxL:"",vocabulary:"",phraseology:"",grammar:"",conventions:"",label:"",probability:"",traceSrc:"",textarea:""}},filters:{percent:function(t){var e=parseFloat(t).toFixed(2);return e}},methods:{Classification(t){let e=new FormData;e.append("text",t),console.log(e),ct.a.post("http://47.104.128.125:5000/language_predict",e).then(t=>{console.log("res:",t);var e=t.data;this.final=e["final"],this.cohesion=e["score"][0],this.syntaxL=e["score"][1],this.vocabulary=e["score"][2],this.phraseology=e["score"][3],this.grammar=e["score"][4],this.conventions=e["score"][5],this.cla_dialogVisible=!0})},fill(){this.textarea="Hello, my name is Sun Maojun, and I am a PolyU AMA student. Nice to meet you. I learnt a lot from AMA563, such as the concepts of CDF, pdf and pmf. Recognized a lot of discrete and continuous distributions. Learned about great likelihood estimation. Learned about unbiased estimation, statistics, etc. Wish I could get an A+ in the final!"}}},ut=dt,mt=(a("c4b3"),Object(m["a"])(ut,st,rt,!1,null,"34871f6c",null)),pt=mt.exports;o["default"].use(z["a"]);const ft=[{path:"/",component:Q,meta:{title:"首页"}},{path:"/index",component:Q,meta:{title:"首页"}},{path:"/about",component:ot,meta:{title:"About us"}},{path:"/assessment",component:pt,meta:{title:"assessment"}}],ht=new z["a"]({mode:"hash",routes:ft});var gt=ht;o["default"].use(gt),o["default"].config.productionTip=!1,o["default"].use(i.a),o["default"].use(L.a),new o["default"]({render:t=>t(C),router:gt}).$mount("#app")},6192:function(t,e,a){"use strict";a("6b1c")},"6b1c":function(t,e,a){},"71c8":function(t,e,a){t.exports=a.p+"img/cosine.06b2a2e6.png"},"94f6":function(t,e,a){},a138:function(t,e,a){t.exports=a.p+"img/train_batch0.1bc1b02e.jpg"},abec:function(t,e,a){},b08f:function(t,e,a){t.exports=a.p+"img/loss.d5978507.jpg"},bc66:function(t,e,a){"use strict";a("5628")},bec7:function(t,e,a){t.exports=a.p+"img/data_augmentation.ab45ae10.png"},c4b3:function(t,e,a){"use strict";a("fc37")},c50a:function(t,e,a){t.exports=a.p+"img/adamw2.b5af0fd3.png"},d750:function(t,e,a){"use strict";a("94f6")},f4d1:function(t,e,a){t.exports=a.p+"img/team.a90b7331.png"},fc37:function(t,e,a){}});
//# sourceMappingURL=app.575cb44e.js.map