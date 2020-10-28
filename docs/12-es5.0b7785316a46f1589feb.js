!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yPrK:function(n,o,i){"use strict";i.r(o),i.d(o,"SettingsPageModule",(function(){return y}));var s=i("ofXK"),c=i("3Pt+"),r=i("TEn/"),a=i("tyNb"),u=i("fXoL"),h=i("Zjgs"),b=i("68zl");function l(e,n){if(1&e&&(u.Kb(0,"ion-select-option",9),u.ec(1),u.Jb()),2&e){var t=n.$implicit;u.Xb("value",t),u.xb(1),u.fc(t)}}var f,g,p,m,v=((f=function(){function n(t,o){var i=this;e(this,n),this.speechService=t,this.storage=o,this.speechConfig={pitch:0,rate:0,volume:0,voiceName:""},this.voiceNames=[],this.voiceName$=this.speechService.$languageNames.subscribe((function(e){return i.voiceNames=e})),this.storage.$loadSpeechConfig().then((function(e){e&&(i.speechConfig=e,i.setCommon())}))}return t(n,[{key:"setCommon",value:function(){this.speechService.setConfig(this.speechConfig),this.storage.saveSpeechConfig(this.speechConfig),this.speechService.say("123")}},{key:"ngOnInit",value:function(){this.speechConfig=this.speechService.getConfig()}},{key:"ngOnDestroy",value:function(){this.voiceName$.unsubscribe()}},{key:"voiceName",set:function(e){this.speechConfig.voiceName=e,this.setCommon()},get:function(){return this.speechConfig.voiceName}},{key:"pitch",set:function(e){this.speechConfig.pitch=e,this.setCommon()},get:function(){return this.speechConfig.pitch}},{key:"rate",set:function(e){this.speechConfig.rate=e,this.setCommon()},get:function(){return this.speechConfig.rate}},{key:"volume",set:function(e){this.speechConfig.volume=e,this.setCommon()},get:function(){return this.speechConfig.volume}}]),n}()).\u0275fac=function(e){return new(e||f)(u.Hb(h.a),u.Hb(b.a))},f.\u0275cmp=u.Bb({type:f,selectors:[["speech-settings"]],decls:12,vars:5,consts:[[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["min","0","max","100","step","1","ticks","10","pin","",3,"ngModel","ngModelChange"],["size","small","slot","start","name","musical-note"],["slot","end","name","musical-notes"],["slot","start","name","play-outline"],["slot","end","name","play-forward-outline"],["slot","start","name","volume-low-outline"],["slot","end","name","volume-high-outline"],[3,"value"]],template:function(e,n){1&e&&(u.Kb(0,"p"),u.Kb(1,"ion-select",0),u.Sb("ngModelChange",(function(e){return n.voiceName=e})),u.dc(2,l,2,2,"ion-select-option",1),u.Jb(),u.Kb(3,"ion-range",2),u.Sb("ngModelChange",(function(e){return n.pitch=e})),u.Ib(4,"ion-icon",3),u.Ib(5,"ion-icon",4),u.Jb(),u.Kb(6,"ion-range",2),u.Sb("ngModelChange",(function(e){return n.rate=e})),u.Ib(7,"ion-icon",5),u.Ib(8,"ion-icon",6),u.Jb(),u.Kb(9,"ion-range",2),u.Sb("ngModelChange",(function(e){return n.volume=e})),u.Ib(10,"ion-icon",7),u.Ib(11,"ion-icon",8),u.Jb(),u.Jb()),2&e&&(u.xb(1),u.Xb("ngModel",n.voiceName),u.xb(1),u.Xb("ngForOf",n.voiceNames),u.xb(1),u.Xb("ngModel",n.pitch),u.xb(3),u.Xb("ngModel",n.rate),u.xb(3),u.Xb("ngModel",n.volume))},directives:[r.r,r.B,c.d,c.e,s.h,r.p,r.h,r.s],styles:[""]}),f),d=[{path:"",component:(g=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}(),g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=u.Bb({type:g,selectors:[["app-settings"]],decls:10,vars:0,consts:[["slot","start"],["color","dark"],["name","settings"]],template:function(e,n){1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar"),u.Kb(2,"ion-buttons",0),u.Ib(3,"ion-menu-button",1),u.Ib(4,"ion-back-button"),u.Jb(),u.Kb(5,"ion-title"),u.Ib(6,"ion-icon",2),u.Jb(),u.Jb(),u.Jb(),u.Kb(7,"ion-content"),u.Ib(8,"ion-header"),u.Ib(9,"speech-settings"),u.Jb())},directives:[r.g,r.u,r.e,r.n,r.b,r.c,r.t,r.h,r.f,v],styles:[""]}),g)}],C=((m=function n(){e(this,n)}).\u0275mod=u.Fb({type:m}),m.\u0275inj=u.Eb({factory:function(e){return new(e||m)},imports:[[a.i.forChild(d)],a.i]}),m),y=((p=function n(){e(this,n)}).\u0275mod=u.Fb({type:p}),p.\u0275inj=u.Eb({factory:function(e){return new(e||p)},imports:[[s.b,c.a,r.v,C]]}),p)}}])}();