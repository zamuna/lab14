webpackJsonp([1],{"+h1B":function(n,l,u){"use strict";var t=u("/oeL"),e=u("aR8+"),o=u("wQAS"),r=u("q4dy"),i=u("qbdv"),a=u("fc+i"),s=u("bm2B"),d=u("CPp0"),c=u("OjPh");u.d(l,"a",function(){return _});var _=t.b(e.a,[o.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[r.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,i.a,i.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,a.b,a.c,[i.c]),t.d(6144,t.q,null,[a.b]),t.d(4608,a.d,a.e,[]),t.d(5120,a.f,function(n,l,u,t){return[new a.g(n),new a.h(l),new a.i(u,t)]},[i.c,i.c,i.c,a.d]),t.d(4608,a.j,a.j,[a.f,t.r]),t.d(135680,a.k,a.k,[i.c]),t.d(4608,a.l,a.l,[a.j,a.k]),t.d(6144,t.s,null,[a.l]),t.d(6144,a.m,null,[a.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,a.n,a.n,[i.c]),t.d(4608,a.o,a.o,[i.c]),t.d(4608,s.a,s.a,[]),t.d(4608,s.b,s.b,[]),t.d(4608,d.a,d.a,[]),t.d(4608,d.b,d.c,[]),t.d(5120,d.d,d.e,[]),t.d(4608,d.f,d.f,[d.a,d.b,d.d]),t.d(4608,d.g,d.h,[]),t.d(5120,d.i,d.j,[d.f,d.g]),t.d(4608,c.a,c.a,[d.i]),t.d(512,i.d,i.d,[]),t.d(1024,t.u,a.p,[]),t.d(1024,t.v,function(n,l){return[a.q(n,l)]},[[2,a.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,a.s,a.s,[[3,a.s]]),t.d(512,s.c,s.c,[]),t.d(512,s.d,s.d,[]),t.d(512,d.k,d.k,[]),t.d(512,e.a,e.a,[])])})},0:function(n,l,u){n.exports=u("cDNt")},NhKt:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},OjPh:function(n,l,u){"use strict";var t=u("CPp0"),e=u("Dqrr"),o=(u.n(e),u("5v8a"));u.n(o);u.d(l,"a",function(){return r});var r=function(){function n(n){this.http=n}return n.prototype.getMyData=function(){var n=this.http.get("https://jsonplaceholder.typicode.com/users/1").map(function(n){return n.json()}),l=this.http.get("https://jsonplaceholder.typicode.com/posts?userId=1").map(function(n){return n.json()});return e.Observable.forkJoin([n,l])},n.ctorParameters=function(){return[{type:t.i}]},n}()},"aR8+":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},cDNt:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),o=u("+h1B"),r=u("fc+i");e.a.production&&u.i(t.a)(),u.i(r.a)().bootstrapModuleFactory(o.a)},p5Ee:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,u){"use strict";function t(n){return s._16(0,[(n()(),s._17(0,null,null,1,"div",[["class","form-group text-danger"]],null,null,null,null,null)),(n()(),s._18(null,["\nRequired!!\n    "]))],null,null)}function e(n){return s._16(0,[(n()(),s._17(0,null,null,1,"div",[["class","form-group text-danger"]],null,null,null,null,null)),(n()(),s._18(null,["\n       Required\n     "]))],null,null)}function o(n){return s._16(0,[(n()(),s._17(0,null,null,1,"div",[["class","form-group text-danger"]],null,null,null,null,null)),(n()(),s._18(null,["\n       Minimum length 10!!!\n     "]))],null,null)}function r(n){return s._16(0,[(n()(),s._18(null,["\n"])),(n()(),s._17(0,null,null,68,"div",[["class","jumbotron"]],null,null,null,null,null)),(n()(),s._18(null,["\n  "])),(n()(),s._17(0,null,null,65,"div",[["class","container"]],null,null,null,null,null)),(n()(),s._18(null,["\n  "])),(n()(),s._17(0,null,null,62,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,e=n.component;if("submit"===l){t=!1!==s._19(n,7).onSubmit(u)&&t}if("reset"===l){t=!1!==s._19(n,7).onReset()&&t}if("ngSubmit"===l){t=!1!==e.onSubmit()&&t}return t},null,null)),s._20(16384,null,0,c.e,[],null,null),s._20(540672,null,0,c.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),s._21(2048,null,c.g,null,[c.f]),s._20(16384,null,0,c.h,[c.g],null,null),(n()(),s._18(null,["\n    "])),(n()(),s._17(0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),s._18(null,["\n      "])),(n()(),s._17(0,null,null,1,"label",[["class","control-label"],["for","username"]],null,null,null,null,null)),(n()(),s._18(null,["Name:"])),(n()(),s._18(null,["\n      "])),(n()(),s._17(0,null,null,5,"input",[["class","form-control"],["formControlName","username"],["id","idUsername"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;if("input"===l){t=!1!==s._19(n,17)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==s._19(n,17).onTouched()&&t}if("compositionstart"===l){t=!1!==s._19(n,17)._compositionStart()&&t}if("compositionend"===l){t=!1!==s._19(n,17)._compositionEnd(u.target.value)&&t}if("ngModelChange"===l){t=!1!==(e.user.username=u)&&t}return t},null,null)),s._20(16384,null,0,c.i,[s._0,s.Z,[2,c.j]],null,null),s._21(1024,null,c.k,function(n){return[n]},[c.i]),s._20(671744,null,0,c.l,[[3,c.g],[8,null],[8,null],[2,c.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),s._21(2048,null,c.m,null,[c.l]),s._20(16384,null,0,c.n,[c.m],null,null),(n()(),s._18(null,["\n    "])),(n()(),s._18(null,["\n    "])),(n()(),s._22(16777216,null,null,1,null,t)),s._20(16384,null,0,_.g,[s._2,s._3],{ngIf:[0,"ngIf"]},null),(n()(),s._18(null,["\n    "])),(n()(),s._17(0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),s._18(null,["\n      "])),(n()(),s._17(0,null,null,1,"label",[["for","username"]],null,null,null,null,null)),(n()(),s._18(null,["Email:"])),(n()(),s._18(null,["\n      "])),(n()(),s._17(0,null,null,5,"input",[["class","form-control "],["formControlName","email"],["id","idEmail"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;if("input"===l){t=!1!==s._19(n,33)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==s._19(n,33).onTouched()&&t}if("compositionstart"===l){t=!1!==s._19(n,33)._compositionStart()&&t}if("compositionend"===l){t=!1!==s._19(n,33)._compositionEnd(u.target.value)&&t}if("ngModelChange"===l){t=!1!==(e.user.email=u)&&t}return t},null,null)),s._20(16384,null,0,c.i,[s._0,s.Z,[2,c.j]],null,null),s._21(1024,null,c.k,function(n){return[n]},[c.i]),s._20(671744,null,0,c.l,[[3,c.g],[8,null],[8,null],[2,c.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),s._21(2048,null,c.m,null,[c.l]),s._20(16384,null,0,c.n,[c.m],null,null),(n()(),s._18(null,["\n    "])),(n()(),s._18(null,["\n     "])),(n()(),s._22(16777216,null,null,1,null,e)),s._20(16384,null,0,_.g,[s._2,s._3],{ngIf:[0,"ngIf"]},null),(n()(),s._18(null,["\n    "])),(n()(),s._17(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),s._18(null,["\n      "])),(n()(),s._17(0,null,null,1,"label",[["for","username"]],null,null,null,null,null)),(n()(),s._18(null,["Post:"])),(n()(),s._18(null,["\n      "])),(n()(),s._17(0,null,null,8,"textarea",[["class","form-control"],["formControlName","post"],["id","idPost"],["minlength","10"],["rows","5"]],[[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,e=n.component;if("input"===l){t=!1!==s._19(n,49)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==s._19(n,49).onTouched()&&t}if("compositionstart"===l){t=!1!==s._19(n,49)._compositionStart()&&t}if("compositionend"===l){t=!1!==s._19(n,49)._compositionEnd(u.target.value)&&t}if("ngModelChange"===l){t=!1!==(e.user.post=u)&&t}return t},null,null)),s._20(16384,null,0,c.i,[s._0,s.Z,[2,c.j]],null,null),s._20(540672,null,0,c.o,[],{minlength:[0,"minlength"]},null),s._21(1024,null,c.p,function(n){return[n]},[c.o]),s._21(1024,null,c.k,function(n){return[n]},[c.i]),s._20(671744,null,0,c.l,[[3,c.g],[2,c.p],[8,null],[2,c.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),s._21(2048,null,c.m,null,[c.l]),s._20(16384,null,0,c.n,[c.m],null,null),(n()(),s._18(null,["<br/>\n    Post Here\n   "])),(n()(),s._18(null,["\n    "])),(n()(),s._18(null,["\n    "])),(n()(),s._22(16777216,null,null,1,null,o)),s._20(16384,null,0,_.g,[s._2,s._3],{ngIf:[0,"ngIf"]},null),(n()(),s._18(null,["\n       "])),(n()(),s._17(0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),s._18(null,["Submit"])),(n()(),s._18(null,["\n        "])),(n()(),s._17(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.getData()&&t}return t},null,null)),(n()(),s._18(null,["Get Data"])),(n()(),s._18(null,["\n    "])),(n()(),s._18(null,["\n  "])),(n()(),s._18(null,["\n\n\n   \n  \n"]))],function(n,l){var u=l.component;n(l,7,0,u.myformGrp);n(l,19,0,"username",u.user.username),n(l,25,0,!u.myformGrp.controls.username.valid);n(l,35,0,"email",u.user.email),n(l,41,0,!u.myformGrp.controls.email.valid);n(l,50,0,"10");n(l,53,0,"post",u.user.post),n(l,60,0,!u.myformGrp.controls.post.valid)},function(n,l){var u=l.component;n(l,5,0,s._19(l,9).ngClassUntouched,s._19(l,9).ngClassTouched,s._19(l,9).ngClassPristine,s._19(l,9).ngClassDirty,s._19(l,9).ngClassValid,s._19(l,9).ngClassInvalid,s._19(l,9).ngClassPending),n(l,16,0,s._19(l,21).ngClassUntouched,s._19(l,21).ngClassTouched,s._19(l,21).ngClassPristine,s._19(l,21).ngClassDirty,s._19(l,21).ngClassValid,s._19(l,21).ngClassInvalid,s._19(l,21).ngClassPending),n(l,32,0,s._19(l,37).ngClassUntouched,s._19(l,37).ngClassTouched,s._19(l,37).ngClassPristine,s._19(l,37).ngClassDirty,s._19(l,37).ngClassValid,s._19(l,37).ngClassInvalid,s._19(l,37).ngClassPending),n(l,48,0,s._19(l,50).minlength?s._19(l,50).minlength:null,s._19(l,55).ngClassUntouched,s._19(l,55).ngClassTouched,s._19(l,55).ngClassPristine,s._19(l,55).ngClassDirty,s._19(l,55).ngClassValid,s._19(l,55).ngClassInvalid,s._19(l,55).ngClassPending),n(l,62,0,!u.myformGrp.valid)})}function i(n){return s._16(0,[(n()(),s._17(0,null,null,1,"app-root",[],null,null,null,r,p)),s._20(49152,null,0,d.a,[c.a,m.a],null,null)],null,null)}var a=u("NhKt"),s=u("/oeL"),d=u("wQAS"),c=u("bm2B"),_=u("qbdv"),m=u("OjPh");u.d(l,"a",function(){return f});var g=[a.a],p=s._15({encapsulation:0,styles:g,data:{}}),f=s._23("app-root",d.a,i,{},{},[])},qtrl:function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="qtrl"},wQAS:function(n,l,u){"use strict";var t=u("bm2B"),e=u("OjPh"),o=u("5v8a"),r=(u.n(o),u("RpuY"));u.n(r);u.d(l,"a",function(){return i});var i=function(){function n(n,l){this.formBuilder=n,this.httpService=l,this.title="Form",this.user={uId:"",username:"",email:"",post:""},this.myformGrp=n.group({username:["Zamuna",[t.q.required]],email:["example@a.com",[t.q.required,t.q.email]],post:["Post here",[t.q.minLength]]}),this.myformGrp.statusChanges.subscribe(function(n){return console.log(n)})}return n.prototype.onSubmit=function(){console.log(this.myformGrp)},n.prototype.getData=function(){var n=this;this.httpService.getMyData().subscribe(function(l){n.user.username=l[0].username,n.user.email=l[0].email,n.user.post=l[1][Math.floor(Math.random()*l[1].length)].body,console.log("post"+n.user.post)},function(n){return console.log(n)},function(){return console.log("completed")})},n.ctorParameters=function(){return[{type:t.a},{type:e.a}]},n}()}},[0]);