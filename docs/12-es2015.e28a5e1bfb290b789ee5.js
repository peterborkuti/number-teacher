(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yPrK:function(e,n,t){"use strict";t.r(n),t.d(n,"SettingsPageModule",(function(){return m}));var o=t("ofXK"),i=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),r=t("fXoL"),b=t("XNiG"),a=t("1G5W"),u=t("Zjgs");function h(e,n){if(1&e&&(r.Kb(0,"ion-select-option",9),r.gc(1),r.Jb()),2&e){const e=n.$implicit;r.Zb("value",e),r.xb(1),r.hc(e)}}let l=(()=>{class e{constructor(e){this.speechService=e,this.unsubscribe=new b.a,this.speechConfig={pitch:0,rate:0,volume:0,voiceName:""},this.speechService.watchSpeechConfig().pipe(Object(a.a)(this.unsubscribe)).subscribe(e=>{this.speechConfig=e})}set voiceName(e){this.speechConfig.voiceName=e,this.setCommon()}set pitch(e){this.speechConfig.pitch=e,this.setCommon()}set rate(e){this.speechConfig.rate=e,this.setCommon()}set volume(e){this.speechConfig.volume=e,this.setCommon()}setCommon(){this.speechService.setConfig(this.speechConfig),this.speechService.say("123")}get pitch(){return this.speechConfig.pitch}get rate(){return this.speechConfig.rate}get volume(){return this.speechConfig.volume}get voiceName(){return this.speechConfig.voiceName}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}}return e.\u0275fac=function(n){return new(n||e)(r.Hb(u.a))},e.\u0275cmp=r.Bb({type:e,selectors:[["speech-settings"]],decls:13,vars:7,consts:[[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["min","0","max","100","step","1","ticks","10","pin","",3,"ngModel","ngModelChange"],["size","small","slot","start","name","musical-note"],["slot","end","name","musical-notes"],["slot","start","name","play-outline"],["slot","end","name","play-forward-outline"],["slot","start","name","volume-low-outline"],["slot","end","name","volume-high-outline"],[3,"value"]],template:function(e,n){1&e&&(r.Kb(0,"p"),r.Kb(1,"ion-select",0),r.Sb("ngModelChange",(function(e){return n.voiceName=e})),r.fc(2,h,2,2,"ion-select-option",1),r.Vb(3,"async"),r.Jb(),r.Kb(4,"ion-range",2),r.Sb("ngModelChange",(function(e){return n.pitch=e})),r.Ib(5,"ion-icon",3),r.Ib(6,"ion-icon",4),r.Jb(),r.Kb(7,"ion-range",2),r.Sb("ngModelChange",(function(e){return n.rate=e})),r.Ib(8,"ion-icon",5),r.Ib(9,"ion-icon",6),r.Jb(),r.Kb(10,"ion-range",2),r.Sb("ngModelChange",(function(e){return n.volume=e})),r.Ib(11,"ion-icon",7),r.Ib(12,"ion-icon",8),r.Jb(),r.Jb()),2&e&&(r.xb(1),r.Zb("ngModel",n.voiceName),r.xb(1),r.Zb("ngForOf",r.Wb(3,5,n.speechService.watchLanguageNames())),r.xb(2),r.Zb("ngModel",n.pitch),r.xb(3),r.Zb("ngModel",n.rate),r.xb(3),r.Zb("ngModel",n.volume))},directives:[s.q,s.A,i.d,i.e,o.i,s.o,s.h,s.r],pipes:[o.b],styles:[""]}),e})();const p=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-settings"]],decls:10,vars:0,consts:[["slot","start"],["color","dark"],["name","settings"]],template:function(e,n){1&e&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar"),r.Kb(2,"ion-buttons",0),r.Ib(3,"ion-menu-button",1),r.Ib(4,"ion-back-button"),r.Jb(),r.Kb(5,"ion-title"),r.Ib(6,"ion-icon",2),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"ion-content"),r.Ib(8,"ion-header"),r.Ib(9,"speech-settings"),r.Jb())},directives:[s.g,s.t,s.e,s.m,s.b,s.c,s.s,s.h,s.f,l],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(n){return new(n||e)},imports:[[c.i.forChild(p)],c.i]}),e})(),m=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(n){return new(n||e)},imports:[[o.c,i.a,s.u,g]]}),e})()}}]);