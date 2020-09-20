(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">  \n      <ion-menu-button color=\"dark\"></ion-menu-button>   \n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header>Speech settings</ion-header>\n  <speech-settings></speech-settings>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/speech-settings/speech-settings.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/speech-settings/speech-settings.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  <ion-label>Language</ion-label>\n  <ion-select [(ngModel)]=\"voiceName\">\n    <ion-select-option *ngFor=\"let name of voiceNames\" [value]=\"name\">{{name}}</ion-select-option>\n  </ion-select>\n  <ion-label>Pitch</ion-label>\n  <ion-range min=\"0\" max=\"100\" step=\"10\" ticks=\"10\" [(ngModel)]=\"pitch\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"musical-note\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"musical-notes\"></ion-icon>\n  </ion-range>\n\n  <ion-range min=\"0\" max=\"100\" step=\"10\" ticks=\"10\" [(ngModel)]=\"rate\">\n    <span slot=\"start\">slow</span>\n    <span slot=\"end\">fast</span>\n  </ion-range>\n\n  <ion-range min=\"0\" max=\"100\" step=\"10\" ticks=\"10\" [(ngModel)]=\"volume\">\n    <span slot=\"start\">quiet</span>\n    <span slot=\"end\">loud</span>\n  </ion-range>\n\n</p>\n");

/***/ }),

/***/ "./src/app/pages/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
/* harmony import */ var _speech_settings_speech_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speech-settings/speech-settings.component */ "./src/app/pages/settings/speech-settings/speech-settings.component.ts");








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"], _speech_settings_speech_settings_component__WEBPACK_IMPORTED_MODULE_7__["SpeechSettingsComponent"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SettingsPage = class SettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPage.ctorParameters = () => [];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ }),

/***/ "./src/app/pages/settings/speech-settings/speech-settings.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/settings/speech-settings/speech-settings.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NwZWVjaC1zZXR0aW5ncy9zcGVlY2gtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/settings/speech-settings/speech-settings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/settings/speech-settings/speech-settings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SpeechSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSettingsComponent", function() { return SpeechSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/speech.service */ "./src/app/services/speech.service.ts");



let SpeechSettingsComponent = class SpeechSettingsComponent {
    constructor(speechService) {
        this.speechService = speechService;
        this.speechConfig = { pitch: 0, rate: 0, volume: 0 };
        this.voiceNames = [];
        this.voiceName$ = this.speechService.$languageNames.subscribe(names => this.voiceNames = names);
    }
    set voiceName(name) {
        this.speechConfig.voiceName = name;
        this.speechService.setConfig(this.speechConfig);
    }
    set pitch(p) {
        this.speechConfig.pitch = p;
        this.speechService.setConfig(this.speechConfig);
    }
    set rate(r) {
        this.speechConfig.rate = r;
        this.speechService.setConfig(this.speechConfig);
    }
    set volume(v) {
        this.speechConfig.volume = v;
        this.speechService.setConfig(this.speechConfig);
    }
    get pitch() {
        return this.speechConfig.pitch;
    }
    get rate() {
        return this.speechConfig.rate;
    }
    get volume() {
        return this.speechConfig.volume;
    }
    get voiceName() {
        return this.speechConfig.voiceName;
    }
    ngOnInit() {
        this.speechConfig = this.speechService.getConfig();
    }
    ngOnDestroy() {
        this.voiceName$.unsubscribe();
    }
};
SpeechSettingsComponent.ctorParameters = () => [
    { type: src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_2__["ASpeech"] }
];
SpeechSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'speech-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./speech-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/speech-settings/speech-settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./speech-settings.component.scss */ "./src/app/pages/settings/speech-settings/speech-settings.component.scss")).default]
    })
], SpeechSettingsComponent);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map