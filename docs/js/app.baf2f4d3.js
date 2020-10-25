(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("7b93"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-main",[n("b",[e._v("Diffie–Hellman key exchange")]),n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"g",outlined:"",rules:[e.required]},model:{value:e.g,callback:function(t){e.g=t},expression:"g"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"p",hint:"p must be a prime number",rules:[e.required,e.required_prime],outlined:""},model:{value:e.p,callback:function(t){e.p=t},expression:"p"}})],1)],1),n("v-row",[n("person",{attrs:{name:"Alice",g:e.g,p:e.p,opposite:"Bob",oppP:e.pb},on:{change:e.changeA}}),n("person",{attrs:{name:"Bob",g:e.g,p:e.p,right:"",opposite:"Alice",oppP:e.pa},on:{change:e.changeB}})],1)],1)],1)],1)],1)},o=[],c=n("d4ec"),u=n("bee2"),l=n("262e"),s=n("2caf"),p=n("9ab4"),f=n("60a3"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{attrs:{cols:"6"}},[n("b",[e._v(e._s(e.name))]),n("v-text-field",{attrs:{label:"Secret",hint:"2 <= private key < q",outlined:"",rules:[e.required,e.limit_min,e.limit_max]},model:{value:e.privateKey,callback:function(t){e.privateKey=t},expression:"privateKey"}}),n("vue-mathjax",{attrs:{formula:e.pkeyF}}),e.right||""===e.right?n("v-row",{staticClass:"mx-1 mb-6"},[n("v-icon",{staticClass:"mt-16",attrs:{large:""}},[e._v("mdi-arrow-bottom-left-thick")]),n("v-text-field",{staticClass:"mt-4",attrs:{label:"publicKey",readonly:"",value:e.publicKey,outlined:""}})],1):n("v-row",{staticClass:"mx-1 mb-6"},[n("v-text-field",{staticClass:"mt-4",attrs:{label:"publicKey",readonly:"",value:e.publicKey,outlined:""}}),n("v-icon",{staticClass:"mt-16",attrs:{large:""}},[e._v("mdi-arrow-bottom-right-thick")])],1),n("vue-mathjax",{attrs:{formula:e.keyF}})],1)},v=[],d=(n("99af"),n("a9e3"),function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.privateKey=e.genPrivateKey(),e.required=function(e){return!!e||"secret is required"},e.limit_min=function(e){return e>=2||"secret must be greater than 2"},e.limit_max=function(t){return t<e.p||"The secret must be less than p"},e}return Object(u["a"])(n,[{key:"change",value:function(e){}},{key:"mounted",value:function(){this.change(this.publicKey),MathJax.Hub.Queue(["Typeset",MathJax.Hub])}},{key:"onChangeP",value:function(){this.privateKey=this.genPrivateKey(),this.change(this.publicKey)}},{key:"onChangeG",value:function(){this.privateKey=this.genPrivateKey(),this.change(this.publicKey)}},{key:"genPrivateKey",value:function(){return Math.floor(Math.random()*(this.p-2))+2}},{key:"powOfBigInt",value:function(e,t){for(var n=1n,r=0;r<t;r++)n*=e;return n}},{key:"pkeyF",get:function(){return"\\begin{align} \nPublicKey &= g^ { Secret } \\bmod p \\\\ \n"+"&= ".concat(this.g," ^ {").concat(this.privateKey,"} \\bmod ").concat(this.p," \\\\ \n")+"&=".concat(this.publicKey)+"\\end{align}"}},{key:"keyF",get:function(){return"\\begin{align} \n"+"Key &=".concat(this.opposite,"'sPubKey ^ {Secret} \\bmod p \\\\")+"&= ".concat(this.oppP," ^ {").concat(this.privateKey,"} \\bmod ").concat(this.p," \\\\ \n")+"&=".concat(this.key)+"\\end{align}"}},{key:"publicKey",get:function(){var e=BigInt(this.g),t=BigInt(this.privateKey),n=this.powOfBigInt(e,t),r=n%BigInt(this.p);return Number(r)}},{key:"key",get:function(){var e=BigInt(this.oppP),t=BigInt(this.privateKey),n=this.powOfBigInt(e,t),r=n%BigInt(this.p);return Number(r)}}]),n}(f["d"]));Object(p["a"])([Object(f["c"])({default:!1})],d.prototype,"right",void 0),Object(p["a"])([Object(f["c"])({required:!0})],d.prototype,"name",void 0),Object(p["a"])([Object(f["c"])({required:!0})],d.prototype,"g",void 0),Object(p["a"])([Object(f["c"])({required:!0})],d.prototype,"p",void 0),Object(p["a"])([Object(f["c"])({required:!0})],d.prototype,"opposite",void 0),Object(p["a"])([Object(f["c"])({required:!0})],d.prototype,"oppP",void 0),Object(p["a"])([Object(f["b"])("change")],d.prototype,"change",null),Object(p["a"])([Object(f["e"])("p")],d.prototype,"onChangeP",null),Object(p["a"])([Object(f["e"])("g")],d.prototype,"onChangeG",null),d=Object(p["a"])([f["a"]],d);var h=d,g=h,y=n("2877"),m=n("6544"),O=n.n(m),j=n("62ad"),k=n("132d"),w=n("0fd9"),x=n("8654"),K=Object(y["a"])(g,b,v,!1,null,null,null),P=K.exports;O()(K,{VCol:j["a"],VIcon:k["a"],VRow:w["a"],VTextField:x["a"]});var _=[3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021];function q(e){if(2===e)return!0;for(var t=2;t<Math.sqrt(e);t+=1)if(e%t===0)return!1;return!0}var B=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.g=2,e.p=_[Math.floor(Math.random()*_.length)],e.pa=0,e.pb=0,e.required=function(e){return!!e||"required"},e.required_prime=function(e){return q(e)||"p must be a prime number"},e}return Object(u["a"])(n,[{key:"changeA",value:function(e){this.pa=e}},{key:"changeB",value:function(e){this.pb=e}}]),n}(f["d"]);B=Object(p["a"])([Object(f["a"])({components:{Person:P}})],B);var C=B,M=C,I=(n("5c0b"),n("7496")),V=n("a523"),S=n("f6c4"),A=Object(y["a"])(M,a,o,!1,null,null,null),F=A.exports;O()(A,{VApp:I["a"],VCol:j["a"],VContainer:V["a"],VMain:S["a"],VRow:w["a"],VTextField:x["a"]});var T=n("9483");Object(T["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("5363");var N=n("f309");r["a"].use(N["a"]);var J=new N["a"]({icons:{iconfont:"mdi"}});r["a"].use(i["default"]),r["a"].config.productionTip=!1,new r["a"]({vuetify:J,render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=app.baf2f4d3.js.map