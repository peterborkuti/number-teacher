!function(){function n(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);"Object"===i&&n.constructor&&(i=n.constructor.name);if("Map"===i||"Set"===i)return Array.from(n);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function r(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DOAJ:function(e,i,o){"use strict";o.r(i),o.d(i,"LearnNumsPageModule",(function(){return I}));var c,u,s,a,h,f=o("ofXK"),b=o("3Pt+"),l=o("TEn/"),d=o("tyNb"),p=o("fXoL"),g=o("Bcx0"),m=((c=function(){function e(){t(this,e)}return r(e,[{key:"check",value:function(n,e){return e.length==n.length?this.checkSameLength(n,e):e.length<n.length?this.checkDifferentLength(n,e):this.checkDifferentLength(e,n)}},{key:"checkDifferentLength",value:function(n,e){var t=this.checkSameLength(n.substr(-e.length),e),i=n.substring(0,n.length-e.length).split("").map((function(e,t){return{digit:+e,exp:n.length-t-1}}));return t.bads=t.bads.concat(i),t}},{key:"checkSameLength",value:function(e,t){var i,r=e.length-1,o=e.split("").map((function(n,e){return{q:+n,a:+t[e],exponent:r-e}})),c=o.filter((function(n){return n.a==n.q})).map((function(n){return{digit:n.a,exp:n.exponent}})),u=o.filter((function(n){return n.a!=n.q})).map((function(n){return[{digit:n.a,exp:n.exponent},{digit:n.q,exp:n.exponent}]}));return{goods:c,bads:(i=[]).concat.apply(i,n(u))}}}]),e}()).\u0275fac=function(n){return new(n||c)},c.\u0275prov=p.Db({token:c,factory:c.\u0275fac,providedIn:"root"}),c),y=o("Zjgs"),k=((u=function(){function n(e,i,r){t(this,n),this.probdbService=e,this.answerChecker=i,this.speechService=r,this.hint="",this.hintIndexesIndex=0}return r(n,[{key:"ngOnInit",value:function(){this.generateQuestion()}},{key:"generateQuestion",value:function(){var n=this.probdbService.getNumberToAsk();this.question=n.join(""),this.answer="",this.speechService.say(this.question),this.hint="",this.hintIndexesIndex=0,this.hintIndexes=Array(this.question.length).fill(0).map((function(n,e){return e})).map((function(n){return[Math.random(),n]})).sort().map((function(n){return n[1]}))}},{key:"checkAnswer",value:function(){var n=this,e=this.answerChecker.check(this.question,""+this.answer);e.bads.forEach((function(e){return n.probdbService.bad(e.exp,e.digit)})),e.goods.forEach((function(e){return n.probdbService.good(e.exp,e.digit)})),this.generateQuestion()}},{key:"say",value:function(){this.speechService.say(this.question)}},{key:"showHint",value:function(){var n=Array(this.question.length).fill("?"),e=this.hintIndexes[this.hintIndexesIndex];this.hintIndexesIndex=this.hintIndexesIndex>=this.hintIndexes.length-1?0:this.hintIndexesIndex+1,n[e]=this.question[e],this.hint=n.join("")}}]),n}()).\u0275fac=function(n){return new(n||u)(p.Hb(g.a),p.Hb(m),p.Hb(y.a))},u.\u0275cmp=p.Bb({type:u,selectors:[["teacher"]],decls:9,vars:2,consts:[["name","say",3,"click"],["name","megaphone"],["name","hint",3,"click"],["name","help"],["autofocus","true","type","number","inputmode","numeric",3,"ngModel","ngModelChange"],["name","check",3,"click"],["name","checkmark"]],template:function(n,e){1&n&&(p.Kb(0,"p"),p.Kb(1,"ion-button",0),p.Rb("click",(function(){return e.say()})),p.Ib(2,"ion-icon",1),p.Jb(),p.Kb(3,"ion-button",2),p.Rb("click",(function(){return e.showHint()})),p.Ib(4,"ion-icon",3),p.Jb(),p.bc(5),p.Kb(6,"ion-input",4),p.Rb("ngModelChange",(function(n){return e.answer=n})),p.Jb(),p.Kb(7,"ion-button",5),p.Rb("click",(function(){return e.checkAnswer()})),p.Ib(8,"ion-icon",6),p.Jb(),p.Jb()),2&n&&(p.xb(5),p.dc(" ",e.hint," "),p.xb(1),p.Vb("ngModel",e.answer))},directives:[l.b,l.f,l.g,l.w,b.d,b.e],styles:["ion-input[_ngcontent-%COMP%]{--background:#ddd;width:10em}"]}),u),v=[{path:"",component:(s=function(){function n(){t(this,n)}return r(n,[{key:"ngOnInit",value:function(){}}]),n}(),s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=p.Bb({type:s,selectors:[["app-learn-nums"]],decls:8,vars:0,consts:[["slot","start"],["color","dark"]],template:function(n,e){1&n&&(p.Kb(0,"ion-header"),p.Kb(1,"ion-toolbar"),p.Kb(2,"ion-buttons",0),p.Ib(3,"ion-menu-button",1),p.Jb(),p.Kb(4,"ion-title"),p.bc(5,"learn-nums"),p.Jb(),p.Jb(),p.Jb(),p.Kb(6,"ion-content"),p.Ib(7,"teacher"),p.Jb())},directives:[l.e,l.s,l.c,l.l,l.r,l.d,k],styles:[""]}),s)}],w=((a=function n(){t(this,n)}).\u0275mod=p.Fb({type:a}),a.\u0275inj=p.Eb({factory:function(n){return new(n||a)},imports:[[d.i.forChild(v)],d.i]}),a),x=o("mmKz"),I=((h=function n(){t(this,n)}).\u0275mod=p.Fb({type:h}),h.\u0275inj=p.Eb({factory:function(n){return new(n||h)},imports:[[f.b,b.a,l.t,x.a,w]]}),h)}}])}();