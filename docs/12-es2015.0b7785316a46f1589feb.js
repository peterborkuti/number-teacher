(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yPrK:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsPageModule",(function(){return m}));var o=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),c=n("tyNb"),r=n("fXoL"),a=n("Zjgs"),h=n("68zl");function b(e,t){if(1&e&&(r.Kb(0,"ion-select-option",9),r.ec(1),r.Jb()),2&e){const e=t.$implicit;r.Xb("value",e),r.xb(1),r.fc(e)}}let l=(()=>{class e{constructor(e,t){this.speechService=e,this.storage=t,this.speechConfig={pitch:0,rate:0,volume:0,voiceName:""},this.voiceNames=[],this.voiceName$=this.speechService.$languageNames.subscribe(e=>this.voiceNames=e),this.storage.$loadSpeechConfig().then(e=>{e&&(this.speechConfig=e,this.setCommon())})}set voiceName(e){this.speechConfig.voiceName=e,this.setCommon()}set pitch(e){this.speechConfig.pitch=e,this.setCommon()}set rate(e){this.speechConfig.rate=e,this.setCommon()}set volume(e){this.speechConfig.volume=e,this.setCommon()}setCommon(){this.speechService.setConfig(this.speechConfig),this.storage.saveSpeechConfig(this.speechConfig),this.speechService.say("123")}get pitch(){return this.speechConfig.pitch}get rate(){return this.speechConfig.rate}get volume(){return this.speechConfig.volume}get voiceName(){return this.speechConfig.voiceName}ngOnInit(){this.speechConfig=this.speechService.getConfig()}ngOnDestroy(){this.voiceName$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r.Hb(a.a),r.Hb(h.a))},e.\u0275cmp=r.Bb({type:e,selectors:[["speech-settings"]],decls:12,vars:5,consts:[[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["min","0","max","100","step","1","ticks","10","pin","",3,"ngModel","ngModelChange"],["size","small","slot","start","name","musical-note"],["slot","end","name","musical-notes"],["slot","start","name","play-outline"],["slot","end","name","play-forward-outline"],["slot","start","name","volume-low-outline"],["slot","end","name","volume-high-outline"],[3,"value"]],template:function(e,t){1&e&&(r.Kb(0,"p"),r.Kb(1,"ion-select",0),r.Sb("ngModelChange",(function(e){return t.voiceName=e})),r.dc(2,b,2,2,"ion-select-option",1),r.Jb(),r.Kb(3,"ion-range",2),r.Sb("ngModelChange",(function(e){return t.pitch=e})),r.Ib(4,"ion-icon",3),r.Ib(5,"ion-icon",4),r.Jb(),r.Kb(6,"ion-range",2),r.Sb("ngModelChange",(function(e){return t.rate=e})),r.Ib(7,"ion-icon",5),r.Ib(8,"ion-icon",6),r.Jb(),r.Kb(9,"ion-range",2),r.Sb("ngModelChange",(function(e){return t.volume=e})),r.Ib(10,"ion-icon",7),r.Ib(11,"ion-icon",8),r.Jb(),r.Jb()),2&e&&(r.xb(1),r.Xb("ngModel",t.voiceName),r.xb(1),r.Xb("ngForOf",t.voiceNames),r.xb(1),r.Xb("ngModel",t.pitch),r.xb(3),r.Xb("ngModel",t.rate),r.xb(3),r.Xb("ngModel",t.volume))},directives:[s.r,s.B,i.d,i.e,o.h,s.p,s.h,s.s],styles:[""]}),e})();const g=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-settings"]],decls:10,vars:0,consts:[["slot","start"],["color","dark"],["name","settings"]],template:function(e,t){1&e&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar"),r.Kb(2,"ion-buttons",0),r.Ib(3,"ion-menu-button",1),r.Ib(4,"ion-back-button"),r.Jb(),r.Kb(5,"ion-title"),r.Ib(6,"ion-icon",2),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"ion-content"),r.Ib(8,"ion-header"),r.Ib(9,"speech-settings"),r.Jb())},directives:[s.g,s.u,s.e,s.n,s.b,s.c,s.t,s.h,s.f,l],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(t){return new(t||e)},imports:[[c.i.forChild(g)],c.i]}),e})(),m=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(t){return new(t||e)},imports:[[o.b,i.a,s.v,u]]}),e})()}}]);