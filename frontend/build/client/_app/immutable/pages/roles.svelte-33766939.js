import{S as L,i as j,s as A,w as f,x as $,y as i,f as p,t as m,B as c,o as B,a as k,c as E,b as h,h as v,Q as R,Y as S,Z as D,r as M,u as U}from"../chunks/index-f831fcd5.js";import{G as F,j as I,R as T,C as w,B as G}from"../chunks/autocomplete-92be2335.js";import{E as J}from"../chunks/EditableDatatable-30d45017.js";import{T as O}from"../chunks/TextInput-b96bf048.js";import"../chunks/index-c5ea608b.js";import"../chunks/ChevronDown-4ddb42be.js";import"../chunks/Close-76fb22ca.js";import"../chunks/EditOff-8afe7c05.js";function P(u){let e,n,t;function l(s){u[8](s)}let a={placeholder:"new role's full name"};return u[2]!==void 0&&(a.value=u[2]),e=new O({props:a}),R.push(()=>S(e,"value",l)),{c(){f(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,o){i(e,s,o),t=!0},p(s,o){const r={};!n&&o&4&&(n=!0,r.value=s[2],D(()=>n=!1)),e.$set(r)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){c(e,s)}}}function q(u){let e,n,t;function l(s){u[9](s)}let a={placeholder:"new role's short name"};return u[3]!==void 0&&(a.value=u[3]),e=new O({props:a}),R.push(()=>S(e,"value",l)),{c(){f(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,o){i(e,s,o),t=!0},p(s,o){const r={};!n&&o&8&&(n=!0,r.value=s[3],D(()=>n=!1)),e.$set(r)},i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){c(e,s)}}}function z(u){let e;return{c(){e=M("Submit")},l(n){e=U(n,"Submit")},m(n,t){h(n,e,t)},d(n){n&&v(e)}}}function H(u){let e,n;return e=new G({props:{size:"small",kind:"primary",$$slots:{default:[z]},$$scope:{ctx:u}}}),e.$on("click",u[6]),{c(){f(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,l){i(e,t,l),n=!0},p(t,l){const a={};l&4096&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function Q(u){let e,n,t,l,a,s;return e=new w({props:{$$slots:{default:[P]},$$scope:{ctx:u}}}),t=new w({props:{$$slots:{default:[q]},$$scope:{ctx:u}}}),a=new w({props:{$$slots:{default:[H]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment),n=k(),f(t.$$.fragment),l=k(),f(a.$$.fragment)},l(o){$(e.$$.fragment,o),n=E(o),$(t.$$.fragment,o),l=E(o),$(a.$$.fragment,o)},m(o,r){i(e,o,r),h(o,n,r),i(t,o,r),h(o,l,r),i(a,o,r),s=!0},p(o,r){const _={};r&4100&&(_.$$scope={dirty:r,ctx:o}),e.$set(_);const d={};r&4104&&(d.$$scope={dirty:r,ctx:o}),t.$set(d);const b={};r&4096&&(b.$$scope={dirty:r,ctx:o}),a.$set(b)},i(o){s||(p(e.$$.fragment,o),p(t.$$.fragment,o),p(a.$$.fragment,o),s=!0)},o(o){m(e.$$.fragment,o),m(t.$$.fragment,o),m(a.$$.fragment,o),s=!1},d(o){c(e,o),o&&v(n),c(t,o),o&&v(l),c(a,o)}}}function V(u){let e,n,t,l;function a(r){u[10](r)}function s(r){u[11](r)}let o={headers:[{key:"id",value:"ID"},{key:"name",value:"FULL ROLE'S NAME"},{key:"short_name",value:"SHORT ROLE'S NAME"},{key:"is_active",value:"IS ACTIVE"}],rows:u[0],columnsToEdit:u[5],onUpdate:u[7]};return u[1]!==void 0&&(o.selectedRowIds=u[1]),u[4]!==void 0&&(o.upData=u[4]),e=new J({props:o}),R.push(()=>S(e,"selectedRowIds",a)),R.push(()=>S(e,"upData",s)),{c(){f(e.$$.fragment)},l(r){$(e.$$.fragment,r)},m(r,_){i(e,r,_),l=!0},p(r,_){const d={};_&1&&(d.rows=r[0]),!n&&_&2&&(n=!0,d.selectedRowIds=r[1],D(()=>n=!1)),!t&&_&16&&(t=!0,d.upData=r[4],D(()=>t=!1)),e.$set(d)},i(r){l||(p(e.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),l=!1},d(r){c(e,r)}}}function Y(u){let e,n;return e=new w({props:{$$slots:{default:[V]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,l){i(e,t,l),n=!0},p(t,l){const a={};l&4115&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function Z(u){let e,n,t,l;return e=new T({props:{$$slots:{default:[Q]},$$scope:{ctx:u}}}),t=new T({props:{$$slots:{default:[Y]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment),n=k(),f(t.$$.fragment)},l(a){$(e.$$.fragment,a),n=E(a),$(t.$$.fragment,a)},m(a,s){i(e,a,s),h(a,n,s),i(t,a,s),l=!0},p(a,s){const o={};s&4108&&(o.$$scope={dirty:s,ctx:a}),e.$set(o);const r={};s&4115&&(r.$$scope={dirty:s,ctx:a}),t.$set(r)},i(a){l||(p(e.$$.fragment,a),p(t.$$.fragment,a),l=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),l=!1},d(a){c(e,a),a&&v(n),c(t,a)}}}function K(u){let e,n;return e=new F({props:{$$slots:{default:[Z]},$$scope:{ctx:u}}}),{c(){f(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,l){i(e,t,l),n=!0},p(t,[l]){const a={};l&4127&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function W(u,e,n){let t=[{}],l=[],a,s,o=["name","short_name","is_active"],r=[];B(async()=>{n(0,t=await I())});async function _(){await fetch("http://localhost:8002/api/roles/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:a,short_name:s,is_active:!0,created_at:Date.now(),updated_at:Date.now()})}),n(0,t=await I())}async function d(){await fetch("http://localhost:8002/api/roles/bulk_update",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)}),n(0,t=await I()),n(4,r=[]),n(1,l=[])}function b(g){a=g,n(2,a)}function C(g){s=g,n(3,s)}function N(g){l=g,n(1,l)}function y(g){r=g,n(4,r)}return[t,l,a,s,r,o,_,d,b,C,N,y]}class re extends L{constructor(e){super(),j(this,e,W,K,A,{})}}export{re as default};
