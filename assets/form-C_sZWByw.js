import{a9 as de,bU as Ze,aB as We,bB as Je,N as C,P as N,M as re,a8 as Te,d as Be,U as De,V as xe,bX as He,r as Y,a6 as ke,a1 as A,bh as _e,a as F,by as Re,bG as Ue,bY as Xe,Q as pe,a7 as be,as as Ee,al as Qe,i as et,X as U,Y as tt,T as rt,bx as nt,bK as Ae,$ as M,bZ as it}from"./index-O_mq6SJ5.js";function at(n,e,t){var r;const i=de(n,null);if(i===null)return;const a=(r=Ze())===null||r===void 0?void 0:r.proxy;We(t,s),s(t.value),Je(()=>{s(void 0,t.value)});function s(d,l){if(!i)return;const m=i[e];l!==void 0&&o(m,l),d!==void 0&&f(m,d)}function o(d,l){d[l]||(d[l]=[]),d[l].splice(d[l].findIndex(m=>m===a),1)}function f(d,l){d[l]||(d[l]=[]),~d[l].findIndex(m=>m===a)||d[l].push(a)}}const st=C("form",[N("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[C("form-item",{width:"auto",marginRight:"18px"},[re("&:last-child",{marginRight:0})])])]),ue=Te("n-form"),Ye=Te("n-form-item-insts");var ot=function(n,e,t,r){function i(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function o(l){try{d(r.next(l))}catch(m){s(m)}}function f(l){try{d(r.throw(l))}catch(m){s(m)}}function d(l){l.done?a(l.value):i(l.value).then(o,f)}d((r=r.apply(n,e||[])).next())})};const ft=Object.assign(Object.assign({},xe.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>{n.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),Xt=Be({name:"Form",props:ft,setup(n){const{mergedClsPrefixRef:e}=De(n);xe("Form","-form",st,He,n,e);const t={},r=Y(void 0),i=f=>{const d=r.value;(d===void 0||f>=d)&&(r.value=f)};function a(f){return ot(this,arguments,void 0,function*(d,l=()=>!0){return yield new Promise((m,b)=>{const k=[];for(const c of _e(t)){const g=t[c];for(const p of g)p.path&&k.push(p.internalValidate(null,l))}Promise.all(k).then(c=>{const g=c.some(q=>!q.valid),p=[],u=[];c.forEach(q=>{var h,y;!((h=q.errors)===null||h===void 0)&&h.length&&p.push(q.errors),!((y=q.warnings)===null||y===void 0)&&y.length&&u.push(q.warnings)}),d&&d(p.length?p:void 0,{warnings:u.length?u:void 0}),g?b(p.length?p:void 0):m({warnings:u.length?u:void 0})})})})}function s(){for(const f of _e(t)){const d=t[f];for(const l of d)l.restoreValidation()}}return ke(ue,{props:n,maxChildLabelWidthRef:r,deriveMaxChildLabelWidth:i}),ke(Ye,{formItems:t}),Object.assign({validate:a,restoreValidation:s},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:n}=this;return A("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Z.apply(this,arguments)}function lt(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,le(n,e)}function Fe(n){return Fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fe(n)}function le(n,e){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},le(n,e)}function dt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function we(n,e,t){return dt()?we=Reflect.construct.bind():we=function(i,a,s){var o=[null];o.push.apply(o,a);var f=Function.bind.apply(i,o),d=new f;return s&&le(d,s.prototype),d},we.apply(null,arguments)}function ut(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function Pe(n){var e=typeof Map=="function"?new Map:void 0;return Pe=function(r){if(r===null||!ut(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return we(r,arguments,Fe(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),le(i,r)},Pe(n)}var ct=/%[sdj%]/g,mt=function(){};function Se(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function I(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=0,a=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var s=n.replace(ct,function(o){if(o==="%%")return"%";if(i>=a)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return s}return n}function gt(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function _(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||gt(e)&&typeof n=="string"&&!n)}function ht(n,e,t){var r=[],i=0,a=n.length;function s(o){r.push.apply(r,o||[]),i++,i===a&&t(r)}n.forEach(function(o){e(o,s)})}function je(n,e,t){var r=0,i=n.length;function a(s){if(s&&s.length){t(s);return}var o=r;r=r+1,o<i?e(n[o],a):t([])}a([])}function vt(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var Me=function(n){lt(e,n);function e(t,r){var i;return i=n.call(this,"Async Validation Error")||this,i.errors=t,i.fields=r,i}return e}(Pe(Error));function pt(n,e,t,r,i){if(e.first){var a=new Promise(function(b,k){var c=function(u){return r(u),u.length?k(new Me(u,Se(u))):b(i)},g=vt(n);je(g,t,c)});return a.catch(function(b){return b}),a}var s=e.firstFields===!0?Object.keys(n):e.firstFields||[],o=Object.keys(n),f=o.length,d=0,l=[],m=new Promise(function(b,k){var c=function(p){if(l.push.apply(l,p),d++,d===f)return r(l),l.length?k(new Me(l,Se(l))):b(i)};o.length||(r(l),b(i)),o.forEach(function(g){var p=n[g];s.indexOf(g)!==-1?je(p,t,c):ht(p,t,c)})});return m.catch(function(b){return b}),m}function bt(n){return!!(n&&n.message!==void 0)}function yt(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function Ie(n,e){return function(t){var r;return n.fullFields?r=yt(e,n.fullFields):r=e[t.field||n.fullField],bt(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function Ve(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=Z({},n[t],r):n[t]=r}}return n}var Ge=function(e,t,r,i,a,s){e.required&&(!r.hasOwnProperty(e.field)||_(t,s||e.type))&&i.push(I(a.messages.required,e.fullField))},wt=function(e,t,r,i,a){(/^\s+$/.test(t)||t==="")&&i.push(I(a.messages.whitespace,e.fullField))},ye,xt=function(){if(ye)return ye;var n="[a-fA-F\\d:]",e=function(y){return y&&y.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+t+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+t+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+t+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+t+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+t+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+t+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+t+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),s=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),f=function(y){return y&&y.exact?a:new RegExp("(?:"+e(y)+t+e(y)+")|(?:"+e(y)+i+e(y)+")","g")};f.v4=function(h){return h&&h.exact?s:new RegExp(""+e(h)+t+e(h),"g")},f.v6=function(h){return h&&h.exact?o:new RegExp(""+e(h)+i+e(h),"g")};var d="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",m=f.v4().source,b=f.v6().source,k="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",c="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",p="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',q="(?:"+d+"|www\\.)"+l+"(?:localhost|"+m+"|"+b+"|"+k+c+g+")"+p+u;return ye=new RegExp("(?:^"+q+"$)","i"),ye},Le={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},oe={integer:function(e){return oe.number(e)&&parseInt(e,10)===e},float:function(e){return oe.number(e)&&!oe.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!oe.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Le.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(xt())},hex:function(e){return typeof e=="string"&&!!e.match(Le.hex)}},Rt=function(e,t,r,i,a){if(e.required&&t===void 0){Ge(e,t,r,i,a);return}var s=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;s.indexOf(o)>-1?oe[o](t)||i.push(I(a.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(I(a.messages.types[o],e.fullField,e.type))},qt=function(e,t,r,i,a){var s=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",d=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=t,m=null,b=typeof t=="number",k=typeof t=="string",c=Array.isArray(t);if(b?m="number":k?m="string":c&&(m="array"),!m)return!1;c&&(l=t.length),k&&(l=t.replace(d,"_").length),s?l!==e.len&&i.push(I(a.messages[m].len,e.fullField,e.len)):o&&!f&&l<e.min?i.push(I(a.messages[m].min,e.fullField,e.min)):f&&!o&&l>e.max?i.push(I(a.messages[m].max,e.fullField,e.max)):o&&f&&(l<e.min||l>e.max)&&i.push(I(a.messages[m].range,e.fullField,e.min,e.max))},te="enum",kt=function(e,t,r,i,a){e[te]=Array.isArray(e[te])?e[te]:[],e[te].indexOf(t)===-1&&i.push(I(a.messages[te],e.fullField,e[te].join(", ")))},_t=function(e,t,r,i,a){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(I(a.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var s=new RegExp(e.pattern);s.test(t)||i.push(I(a.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},v={required:Ge,whitespace:wt,type:Rt,range:qt,enum:kt,pattern:_t},Ft=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t,"string")&&!e.required)return r();v.required(e,t,i,s,a,"string"),_(t,"string")||(v.type(e,t,i,s,a),v.range(e,t,i,s,a),v.pattern(e,t,i,s,a),e.whitespace===!0&&v.whitespace(e,t,i,s,a))}r(s)},Pt=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a),t!==void 0&&v.type(e,t,i,s,a)}r(s)},St=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),_(t)&&!e.required)return r();v.required(e,t,i,s,a),t!==void 0&&(v.type(e,t,i,s,a),v.range(e,t,i,s,a))}r(s)},Ot=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a),t!==void 0&&v.type(e,t,i,s,a)}r(s)},$t=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a),_(t)||v.type(e,t,i,s,a)}r(s)},Et=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a),t!==void 0&&(v.type(e,t,i,s,a),v.range(e,t,i,s,a))}r(s)},At=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a),t!==void 0&&(v.type(e,t,i,s,a),v.range(e,t,i,s,a))}r(s)},jt=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return r();v.required(e,t,i,s,a,"array"),t!=null&&(v.type(e,t,i,s,a),v.range(e,t,i,s,a))}r(s)},Mt=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a),t!==void 0&&v.type(e,t,i,s,a)}r(s)},It="enum",Vt=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a),t!==void 0&&v[It](e,t,i,s,a)}r(s)},Lt=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t,"string")&&!e.required)return r();v.required(e,t,i,s,a),_(t,"string")||v.pattern(e,t,i,s,a)}r(s)},zt=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t,"date")&&!e.required)return r();if(v.required(e,t,i,s,a),!_(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),v.type(e,f,i,s,a),f&&v.range(e,f.getTime(),i,s,a)}}r(s)},Nt=function(e,t,r,i,a){var s=[],o=Array.isArray(t)?"array":typeof t;v.required(e,t,i,s,a,o),r(s)},qe=function(e,t,r,i,a){var s=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(_(t,s)&&!e.required)return r();v.required(e,t,i,o,a,s),_(t,s)||v.type(e,t,i,o,a)}r(o)},Ct=function(e,t,r,i,a){var s=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(_(t)&&!e.required)return r();v.required(e,t,i,s,a)}r(s)},fe={string:Ft,method:Pt,number:St,boolean:Ot,regexp:$t,integer:Et,float:At,array:jt,object:Mt,enum:Vt,pattern:Lt,date:zt,url:qe,hex:qe,email:qe,required:Nt,any:Ct};function Oe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var $e=Oe(),ne=function(){function n(t){this.rules=null,this._messages=$e,this.define(t)}var e=n.prototype;return e.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(a){var s=r[a];i.rules[a]=Array.isArray(s)?s:[s]})},e.messages=function(r){return r&&(this._messages=Ve(Oe(),r)),this._messages},e.validate=function(r,i,a){var s=this;i===void 0&&(i={}),a===void 0&&(a=function(){});var o=r,f=i,d=a;if(typeof f=="function"&&(d=f,f={}),!this.rules||Object.keys(this.rules).length===0)return d&&d(null,o),Promise.resolve(o);function l(g){var p=[],u={};function q(y){if(Array.isArray(y)){var S;p=(S=p).concat.apply(S,y)}else p.push(y)}for(var h=0;h<g.length;h++)q(g[h]);p.length?(u=Se(p),d(p,u)):d(null,o)}if(f.messages){var m=this.messages();m===$e&&(m=Oe()),Ve(m,f.messages),f.messages=m}else f.messages=this.messages();var b={},k=f.keys||Object.keys(this.rules);k.forEach(function(g){var p=s.rules[g],u=o[g];p.forEach(function(q){var h=q;typeof h.transform=="function"&&(o===r&&(o=Z({},o)),u=o[g]=h.transform(u)),typeof h=="function"?h={validator:h}:h=Z({},h),h.validator=s.getValidationMethod(h),h.validator&&(h.field=g,h.fullField=h.fullField||g,h.type=s.getType(h),b[g]=b[g]||[],b[g].push({rule:h,value:u,source:o,field:g}))})});var c={};return pt(b,f,function(g,p){var u=g.rule,q=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");q=q&&(u.required||!u.required&&g.value),u.field=g.field;function h(P,W){return Z({},W,{fullField:u.fullField+"."+P,fullFields:u.fullFields?[].concat(u.fullFields,[P]):[P]})}function y(P){P===void 0&&(P=[]);var W=Array.isArray(P)?P:[P];!f.suppressWarning&&W.length&&n.warning("async-validator:",W),W.length&&u.message!==void 0&&(W=[].concat(u.message));var z=W.map(Ie(u,o));if(f.first&&z.length)return c[u.field]=1,p(z);if(!q)p(z);else{if(u.required&&!g.value)return u.message!==void 0?z=[].concat(u.message).map(Ie(u,o)):f.error&&(z=[f.error(u,I(f.messages.required,u.field))]),p(z);var G={};u.defaultField&&Object.keys(g.value).map(function(O){G[O]=u.defaultField}),G=Z({},G,g.rule.fields);var ie={};Object.keys(G).forEach(function(O){var V=G[O],w=Array.isArray(V)?V:[V];ie[O]=w.map(h.bind(null,O))});var ae=new n(ie);ae.messages(f.messages),g.rule.options&&(g.rule.options.messages=f.messages,g.rule.options.error=f.error),ae.validate(g.value,g.rule.options||f,function(O){var V=[];z&&z.length&&V.push.apply(V,z),O&&O.length&&V.push.apply(V,O),p(V.length?V:null)})}}var S;if(u.asyncValidator)S=u.asyncValidator(u,g.value,y,g.source,f);else if(u.validator){try{S=u.validator(u,g.value,y,g.source,f)}catch(P){console.error==null||console.error(P),f.suppressValidatorError||setTimeout(function(){throw P},0),y(P.message)}S===!0?y():S===!1?y(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):S instanceof Array?y(S):S instanceof Error&&y(S.message)}S&&S.then&&S.then(function(){return y()},function(P){return y(P)})},function(g){l(g)},o)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!fe.hasOwnProperty(r.type))throw new Error(I("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),a=i.indexOf("message");return a!==-1&&i.splice(a,1),i.length===1&&i[0]==="required"?fe.required:fe[this.getType(r)]||void 0},n}();ne.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");fe[e]=t};ne.warning=mt;ne.messages=$e;ne.validators=fe;function Wt(n){const e=de(ue,null);return{mergedSize:F(()=>n.size!==void 0?n.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function Tt(n){const e=de(ue,null),t=F(()=>{const{labelPlacement:c}=n;return c!==void 0?c:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),r=F(()=>t.value==="left"&&(n.labelWidth==="auto"||(e==null?void 0:e.props.labelWidth)==="auto")),i=F(()=>{if(t.value==="top")return;const{labelWidth:c}=n;if(c!==void 0&&c!=="auto")return Re(c);if(r.value){const g=e==null?void 0:e.maxChildLabelWidthRef.value;return g!==void 0?Re(g):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return Re(e.props.labelWidth)}),a=F(()=>{const{labelAlign:c}=n;if(c)return c;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),s=F(()=>{var c;return[(c=n.labelProps)===null||c===void 0?void 0:c.style,n.labelStyle,{width:i.value}]}),o=F(()=>{const{showRequireMark:c}=n;return c!==void 0?c:e==null?void 0:e.props.showRequireMark}),f=F(()=>{const{requireMarkPlacement:c}=n;return c!==void 0?c:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),d=Y(!1),l=Y(!1),m=F(()=>{const{validationStatus:c}=n;if(c!==void 0)return c;if(d.value)return"error";if(l.value)return"warning"}),b=F(()=>{const{showFeedback:c}=n;return c!==void 0?c:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),k=F(()=>{const{showLabel:c}=n;return c!==void 0?c:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:d,validationWarned:l,mergedLabelStyle:s,mergedLabelPlacement:t,mergedLabelAlign:a,mergedShowRequireMark:o,mergedRequireMarkPlacement:f,mergedValidationStatus:m,mergedShowFeedback:b,mergedShowLabel:k,isAutoLabelWidth:r}}function Bt(n){const e=de(ue,null),t=F(()=>{const{rulePath:s}=n;if(s!==void 0)return s;const{path:o}=n;if(o!==void 0)return o}),r=F(()=>{const s=[],{rule:o}=n;if(o!==void 0&&(Array.isArray(o)?s.push(...o):s.push(o)),e){const{rules:f}=e.props,{value:d}=t;if(f!==void 0&&d!==void 0){const l=Ue(f,d);l!==void 0&&(Array.isArray(l)?s.push(...l):s.push(l))}}return s}),i=F(()=>r.value.some(s=>s.required)),a=F(()=>i.value||n.required);return{mergedRules:r,mergedRequired:a}}const{cubicBezierEaseInOut:ze}=Xe;function Dt({name:n="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:r=".3s",enterCubicBezier:i=ze,leaveCubicBezier:a=ze}={}){return[re(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),re(`&.${n}-transition-enter-to, &.${n}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),re(`&.${n}-transition-leave-active`,{transition:`opacity ${r} ${a}, transform ${r} ${a}`}),re(`&.${n}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const Ht=C("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[C("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[pe("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),pe("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),C("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),N("auto-label-width",[C("form-item-label","white-space: nowrap;")]),N("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `,[C("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[N("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),N("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),N("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),N("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),pe("text",`
 grid-area: text; 
 `),pe("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),N("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[N("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),C("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),C("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),C("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[re("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),C("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[N("warning",{color:"var(--n-feedback-text-color-warning)"}),N("error",{color:"var(--n-feedback-text-color-error)"}),Dt({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Ne=function(n,e,t,r){function i(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function o(l){try{d(r.next(l))}catch(m){s(m)}}function f(l){try{d(r.throw(l))}catch(m){s(m)}}function d(l){l.done?a(l.value):i(l.value).then(o,f)}d((r=r.apply(n,e||[])).next())})};const Ke=Object.assign(Object.assign({},xe.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,feedbackClass:String,feedbackStyle:[String,Object],showLabel:{type:Boolean,default:void 0},labelProps:Object}),Qt=_e(Ke);function Ce(n,e){return(...t)=>{try{const r=n(...t);return!e&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r!=null&&r.then?r:(r===void 0||Ae("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use ${e?"`Promise`":"`boolean`, `Error` or `Promise`"} typed value instead.`),!0)}catch(r){Ae("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const er=Be({name:"FormItem",props:Ke,setup(n){at(Ye,"formItems",be(n,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=De(n),r=de(ue,null),i=Wt(n),a=Tt(n),{validationErrored:s,validationWarned:o}=a,{mergedRequired:f,mergedRules:d}=Bt(n),{mergedSize:l}=i,{mergedLabelPlacement:m,mergedLabelAlign:b,mergedRequireMarkPlacement:k}=a,c=Y([]),g=Y(Ee()),p=r?be(r.props,"disabled"):Y(!1),u=xe("Form","-form-item",Ht,He,n,e);We(be(n,"path"),()=>{n.ignorePathChange||q()});function q(){c.value=[],s.value=!1,o.value=!1,n.feedback&&(g.value=Ee())}const h=(...w)=>Ne(this,[...w],void 0,function*(j=null,T=()=>!0,$={suppressWarning:!0}){const{path:B}=n;$?$.first||($.first=n.first):$={};const{value:K}=d,J=r?Ue(r.props.model,B||""):void 0,X={},Q={},D=(j?K.filter(x=>Array.isArray(x.trigger)?x.trigger.includes(j):x.trigger===j):K).filter(T).map((x,E)=>{const R=Object.assign({},x);if(R.validator&&(R.validator=Ce(R.validator,!1)),R.asyncValidator&&(R.asyncValidator=Ce(R.asyncValidator,!0)),R.renderMessage){const ve=`__renderMessage__${E}`;Q[ve]=R.message,R.message=ve,X[ve]=R.renderMessage}return R}),H=D.filter(x=>x.level!=="warning"),ce=D.filter(x=>x.level==="warning"),L={valid:!0,errors:void 0,warnings:void 0};if(!D.length)return L;const ee=B??"__n_no_path__",me=new ne({[ee]:H}),ge=new ne({[ee]:ce}),{validateMessages:se}=(r==null?void 0:r.props)||{};se&&(me.messages(se),ge.messages(se));const he=x=>{c.value=x.map(E=>{const R=(E==null?void 0:E.message)||"";return{key:R,render:()=>R.startsWith("__renderMessage__")?X[R]():R}}),x.forEach(E=>{var R;!((R=E.message)===null||R===void 0)&&R.startsWith("__renderMessage__")&&(E.message=Q[E.message])})};if(H.length){const x=yield new Promise(E=>{me.validate({[ee]:J},$,E)});x!=null&&x.length&&(L.valid=!1,L.errors=x,he(x))}if(ce.length&&!L.errors){const x=yield new Promise(E=>{ge.validate({[ee]:J},$,E)});x!=null&&x.length&&(he(x),L.warnings=x)}return!L.errors&&!L.warnings?q():(s.value=!!L.errors,o.value=!!L.warnings),L});function y(){h("blur")}function S(){h("change")}function P(){h("focus")}function W(){h("input")}function z(w,j){return Ne(this,void 0,void 0,function*(){let T,$,B,K;return typeof w=="string"?(T=w,$=j):w!==null&&typeof w=="object"&&(T=w.trigger,$=w.callback,B=w.shouldRuleBeApplied,K=w.options),yield new Promise((J,X)=>{h(T,B,K).then(({valid:Q,errors:D,warnings:H})=>{Q?($&&$(void 0,{warnings:H}),J({warnings:H})):($&&$(D,{warnings:H}),X(D))})})})}ke(Qe,{path:be(n,"path"),disabled:p,mergedSize:i.mergedSize,mergedValidationStatus:a.mergedValidationStatus,restoreValidation:q,handleContentBlur:y,handleContentChange:S,handleContentFocus:P,handleContentInput:W});const G={validate:z,restoreValidation:q,internalValidate:h},ie=Y(null);et(()=>{if(!a.isAutoLabelWidth.value)return;const w=ie.value;if(w!==null){const j=w.style.whiteSpace;w.style.whiteSpace="nowrap",w.style.width="",r==null||r.deriveMaxChildLabelWidth(Number(getComputedStyle(w).width.slice(0,-2))),w.style.whiteSpace=j}});const ae=F(()=>{var w;const{value:j}=l,{value:T}=m,$=T==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:B},self:{labelTextColor:K,asteriskColor:J,lineHeight:X,feedbackTextColor:Q,feedbackTextColorWarning:D,feedbackTextColorError:H,feedbackPadding:ce,labelFontWeight:L,[U("labelHeight",j)]:ee,[U("blankHeight",j)]:me,[U("feedbackFontSize",j)]:ge,[U("feedbackHeight",j)]:se,[U("labelPadding",$)]:he,[U("labelTextAlign",$)]:x,[U(U("labelFontSize",T),j)]:E}}=u.value;let R=(w=b.value)!==null&&w!==void 0?w:x;return T==="top"&&(R=R==="right"?"flex-end":"flex-start"),{"--n-bezier":B,"--n-line-height":X,"--n-blank-height":me,"--n-label-font-size":E,"--n-label-text-align":R,"--n-label-height":ee,"--n-label-padding":he,"--n-label-font-weight":L,"--n-asterisk-color":J,"--n-label-text-color":K,"--n-feedback-padding":ce,"--n-feedback-font-size":ge,"--n-feedback-height":se,"--n-feedback-text-color":Q,"--n-feedback-text-color-warning":D,"--n-feedback-text-color-error":H}}),O=t?tt("form-item",F(()=>{var w;return`${l.value[0]}${m.value[0]}${((w=b.value)===null||w===void 0?void 0:w[0])||""}`}),ae,n):void 0,V=F(()=>m.value==="left"&&k.value==="left"&&b.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:ie,mergedClsPrefix:e,mergedRequired:f,feedbackId:g,renderExplains:c,reverseColSpace:V},a),i),G),{cssVars:t?void 0:ae,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender})},render(){const{$slots:n,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:r,mergedRequireMarkPlacement:i,onRender:a}=this,s=r!==void 0?r:this.mergedRequired;a==null||a();const o=()=>{const f=this.$slots.label?this.$slots.label():this.label;if(!f)return null;const d=A("span",{class:`${e}-form-item-label__text`},f),l=s?A("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?" *":"* "):i==="right-hanging"&&A("span",{class:`${e}-form-item-label__asterisk-placeholder`}," *"),{labelProps:m}=this;return A("label",Object.assign({},m,{class:[m==null?void 0:m.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[l,d]:[d,l])};return A("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&o(),A("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},n),this.mergedShowFeedback?A("div",{key:this.feedbackId,style:this.feedbackStyle,class:[`${e}-form-item-feedback-wrapper`,this.feedbackClass]},A(rt,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:f}=this;return nt(n.feedback,d=>{var l;const{feedback:m}=this,b=d||m?A("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},d||m):this.renderExplains.length?(l=this.renderExplains)===null||l===void 0?void 0:l.map(({key:k,render:c})=>A("div",{key:k,class:`${e}-form-item-feedback__line`},c())):null;return b?f==="warning"?A("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},b):f==="error"?A("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},b):f==="success"?A("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},b):A("div",{key:"controlled-default",class:`${e}-form-item-feedback`},b):null})}})):null)}}),Ut=/^[\u4E00-\u9FA5a-zA-Z0-9_-]{4,16}$/,Yt=/^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$/,Gt=/^\w{6,18}$/,Kt=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,Zt=/^\d{6}$/;function tr(){const n={userName:{pattern:Ut,message:M("form.userName.invalid"),trigger:"change"},phone:{pattern:Yt,message:M("form.phone.invalid"),trigger:"change"},pwd:{pattern:Gt,message:M("form.pwd.invalid"),trigger:"change"},code:{pattern:Zt,message:M("form.code.invalid"),trigger:"change"},email:{pattern:Kt,message:M("form.email.invalid"),trigger:"change"}},e={userName:[r(M("form.userName.required")),n.userName],phone:[r(M("form.phone.required")),n.phone],pwd:[r(M("form.pwd.required")),n.pwd],code:[r(M("form.code.required")),n.code],email:[r(M("form.email.required")),n.email]},t=r(M("form.required"));function r(a){return{required:!0,message:a}}function i(a){return[{required:!0,message:M("form.confirmPwd.required")},{asyncValidator:(o,f)=>f.trim()!==""&&f!==it(a)?Promise.reject(o.message):Promise.resolve(),message:M("form.confirmPwd.invalid"),trigger:"input"}]}return{patternRules:n,formRules:e,defaultRequiredRule:t,createRequiredRule:r,createConfirmPwdRule:i}}function rr(){const n=Y(null);async function e(){var r;await((r=n.value)==null?void 0:r.validate())}async function t(){var r;(r=n.value)==null||r.restoreValidation()}return{formRef:n,validate:e,restoreValidation:t}}export{Yt as R,er as _,tr as a,Xt as b,Qt as c,Ke as f,rr as u};