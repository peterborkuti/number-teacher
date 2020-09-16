!function(){function t(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function n(n){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=n.apply(e,r);function c(n){t(a,i,o,c,u,"next",n)}function u(n){t(a,i,o,c,u,"throw",n)}c(void 0)}))}}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return u})),e.d(n,"e",(function(){return c}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},u=function(t){r.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},Bcx0:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var o,a,c=function t(n){i(this,t),this.name="Default",this.id=""+Date.now(),this.probabilities=[[]],this.name=n||"Default"},u=e("fXoL"),s=((a=function(){function t(){i(this,t),this.DIGITS_NUM=10}return r(t,[{key:"getDefault",value:function(t){var n=this;t<0&&(t=0);var e=1/(((t=Math.floor(t))+1)*this.DIGITS_NUM);return Array(t+1).fill(1).map((function(){return Array(n.DIGITS_NUM).fill(e).map((function(t){return t}))}))}},{key:"good",value:function(t){var n=1;return t>=0&&t<1&&(n=t/2),n}},{key:"bad",value:function(t){var n=1;return t>=0&&t<1&&(n=t+(1-t)/2),n}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275prov=u.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a),f=((o=function(){function t(n){i(this,t),this.probModifier=n,this.probdbs=[],this.setActive("Default")}return r(t,[{key:"create",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Default",n=this.getDB(t);return n||(n=this.probdbs[this.probdbs.push(new c(t))-1],this.reset(t)),n}},{key:"reset",value:function(t){this.create(t).probabilities=this.probModifier.getDefault(3)}},{key:"setActive",value:function(t){this.active=this.create(t)}},{key:"getName",value:function(){return this.active?this.active.name:""}},{key:"getNames",value:function(){return this.probdbs.map((function(t){return t.name}))}},{key:"getProbabilities",value:function(){return JSON.parse(JSON.stringify(this.active.probabilities))}},{key:"getNumberToAsk",value:function(){var t=this,n=this.active.probabilities.map((function(n){return t.getMaxIndex(n)})).reverse();for(console.log("Raw question:",n.join(""));n.length>1&&0==n[0];)n=n.slice(1);return n}},{key:"getMaxIndex",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01,e=-1,r=0;r<t.length;r++)t[r]>e&&(e=t[r]);var i=t.map((function(t,n){return{value:t,index:n}})).filter((function(t){return Math.abs(t.value-e)<n})).map((function(t){return t.index}));return i[Math.floor(Math.random()*i.length)]}},{key:"bad",value:function(t,n){this.active.probabilities[t]&&this.active.probabilities[t][n]?this.active.probabilities[t][n]=this.probModifier.bad(this.active.probabilities[t][n]):console.error("Digit:".concat(n," or exponent:").concat(t," out of range"))}},{key:"good",value:function(t,n){this.active.probabilities[t]&&this.active.probabilities[t][n]?this.active.probabilities[t][n]=this.probModifier.good(this.active.probabilities[t][n]):console.error("$digit or $exp out of range")}},{key:"getDB",value:function(t){var n=this.probdbs.filter((function(n){return n.name==t}));return 0===n.length?void 0:n[0]}}]),t}()).\u0275fac=function(t){return new(t||o)(u.Nb(s))},o.\u0275prov=u.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o)},NqGI:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o}));var i=function(){var t=n(regeneratorRuntime.mark((function t(n,e,r,i,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),e.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"U/uv":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("sxy2"),i=e("ItpF"),o=e("2c9M"),a=function(t,n){var e,a,c=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),u(o,i)):s()}},u=function(t,n){e=t,a||(a=e);var i=e;Object(r.g)((function(){return i.classList.add("ion-activated")})),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(r.g)((function(){return n.classList.remove("ion-activated")})),t&&a!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return c(t.currentX,t.currentY,o.a)},onMove:function(t){return c(t.currentX,t.currentY,o.b)},onEnd:function(){s(!0),Object(o.e)(),a=void 0}})}},V13g:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var o=e("fXoL"),a=e("ofXK");function c(t,n){if(1&t&&(o.Kb(0,"th"),o.bc(1),o.Jb()),2&t){var e=n.$implicit;o.xb(1),o.cc(e)}}function u(t,n){if(1&t&&(o.Kb(0,"td"),o.bc(1),o.Jb()),2&t){var e=n.$implicit;o.xb(1),o.cc(e)}}function s(t,n){if(1&t&&(o.Kb(0,"tr"),o.Kb(1,"th"),o.bc(2),o.Jb(),o.ac(3,u,2,1,"td",1),o.Jb()),2&t){var e=n.$implicit,r=n.index;o.xb(2),o.cc(r),o.xb(1),o.Vb("ngForOf",e)}}var f=function(){return[0,1,2,3,4,5,6,7,8,9]},l=function(){var t=function(){function t(){i(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Bb({type:t,selectors:[["probdb-map"]],inputs:{probabilities:"probabilities"},decls:7,vars:3,consts:[["border","1"],[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(o.Kb(0,"p"),o.bc(1,"Probabilities"),o.Jb(),o.Kb(2,"table",0),o.Kb(3,"tr"),o.Ib(4,"th"),o.ac(5,c,2,1,"th",1),o.Jb(),o.ac(6,s,4,2,"tr",1),o.Jb()),2&t&&(o.xb(5),o.Vb("ngForOf",o.Wb(2,f)),o.xb(1),o.Vb("ngForOf",n.probabilities))},directives:[a.h],styles:[""]}),t}()},mmKz:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("TEn/"),o=e("ofXK"),a=e("fXoL"),c=function(){var t=function t(){i(this,t)};return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[r.t,o.b]]}),t}()},sPtc:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return u}));var i=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((i=!0,(r="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},c=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=n(regeneratorRuntime.mark((function t(n,e,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||c.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}()}}])}();