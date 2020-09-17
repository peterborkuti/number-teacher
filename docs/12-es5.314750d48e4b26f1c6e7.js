!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yPrK:function(n,i,o){"use strict";o.r(i),o.d(i,"SettingsPageModule",(function(){return C}));var s=o("ofXK"),c=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),b=o("fXoL"),u=o("Zjgs");function h(e,n){if(1&e&&(b.Kb(0,"ion-select-option",7),b.bc(1),b.Jb()),2&e){var t=n.$implicit;b.Vb("value",t),b.xb(1),b.cc(t)}}var f,l,g,p,v=((f=function(){function n(t){var i=this;e(this,n),this.speechService=t,this.speechConfig={pitch:0,rate:0,volume:0},this.voiceNames=[],this.voiceName$=this.speechService.$languageNames.subscribe((function(e){return i.voiceNames=e}))}return t(n,[{key:"ngOnInit",value:function(){this.speechConfig=this.speechService.getConfig()}},{key:"ngOnDestroy",value:function(){this.voiceName$.unsubscribe()}},{key:"voiceName",set:function(e){this.speechConfig.voiceName=e,this.speechService.setConfig(this.speechConfig)},get:function(){return this.speechConfig.voiceName}},{key:"pitch",set:function(e){this.speechConfig.pitch=e,this.speechService.setConfig(this.speechConfig)},get:function(){return this.speechConfig.pitch}},{key:"rate",set:function(e){this.speechConfig.rate=e,this.speechService.setConfig(this.speechConfig)},get:function(){return this.speechConfig.rate}},{key:"volume",set:function(e){this.speechConfig.volume=e,this.speechService.setConfig(this.speechConfig)},get:function(){return this.speechConfig.volume}}]),n}()).\u0275fac=function(e){return new(e||f)(b.Hb(u.a))},f.\u0275cmp=b.Bb({type:f,selectors:[["speech-settings"]],decls:20,vars:5,consts:[[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["min","0","max","100","step","10","ticks","10",3,"ngModel","ngModelChange"],["size","small","slot","start","name","musical-note"],["slot","end","name","musical-notes"],["slot","start"],["slot","end"],[3,"value"]],template:function(e,n){1&e&&(b.Kb(0,"p"),b.Kb(1,"ion-label"),b.bc(2,"Language"),b.Jb(),b.Kb(3,"ion-select",0),b.Rb("ngModelChange",(function(e){return n.voiceName=e})),b.ac(4,h,2,2,"ion-select-option",1),b.Jb(),b.Kb(5,"ion-label"),b.bc(6,"Pitch"),b.Jb(),b.Kb(7,"ion-range",2),b.Rb("ngModelChange",(function(e){return n.pitch=e})),b.Ib(8,"ion-icon",3),b.Ib(9,"ion-icon",4),b.Jb(),b.Kb(10,"ion-range",2),b.Rb("ngModelChange",(function(e){return n.rate=e})),b.Kb(11,"span",5),b.bc(12,"slow"),b.Jb(),b.Kb(13,"span",6),b.bc(14,"fast"),b.Jb(),b.Jb(),b.Kb(15,"ion-range",2),b.Rb("ngModelChange",(function(e){return n.volume=e})),b.Kb(16,"span",5),b.bc(17,"quiet"),b.Jb(),b.Kb(18,"span",6),b.bc(19,"loud"),b.Jb(),b.Jb(),b.Jb()),2&e&&(b.xb(3),b.Vb("ngModel",n.voiceName),b.xb(1),b.Vb("ngForOf",n.voiceNames),b.xb(3),b.Vb("ngModel",n.pitch),b.xb(3),b.Vb("ngModel",n.rate),b.xb(5),b.Vb("ngModel",n.volume))},directives:[r.i,r.p,r.z,c.d,c.e,s.h,r.n,r.f,r.q],styles:[""]}),f),m=[{path:"",component:(l=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}(),l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=b.Bb({type:l,selectors:[["app-settings"]],decls:10,vars:0,consts:[["slot","start"],["color","dark"]],template:function(e,n){1&e&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",0),b.Ib(3,"ion-menu-button",1),b.Jb(),b.Kb(4,"ion-title"),b.bc(5,"Settings"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-header"),b.bc(8,"Speech settings"),b.Jb(),b.Ib(9,"speech-settings"),b.Jb())},directives:[r.e,r.s,r.c,r.l,r.r,r.d,v],styles:[""]}),l)}],d=((p=function n(){e(this,n)}).\u0275mod=b.Fb({type:p}),p.\u0275inj=b.Eb({factory:function(e){return new(e||p)},imports:[[a.i.forChild(m)],a.i]}),p),C=((g=function n(){e(this,n)}).\u0275mod=b.Fb({type:g}),g.\u0275inj=b.Eb({factory:function(e){return new(e||g)},imports:[[s.b,c.a,r.t,d]]}),g)}}])}();