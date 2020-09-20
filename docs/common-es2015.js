(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/probdb-map/probdb-map.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/probdb-map/probdb-map.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Probabilities</p>\n<table border=\"1\">\n  <tr>\n    <th></th><th *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\">{{n}}</th>\n  </tr>\n  <tr *ngFor=\"let row of probabilities;let rowIndex = index\">\n    <th>{{rowIndex}}</th><td *ngFor=\"let cell of row\">{{cell}}</td>\n  </tr>\n</table>\n\n");

/***/ }),

/***/ "./src/app/pages/components.module.ts":
/*!********************************************!*\
  !*** ./src/app/pages/components.module.ts ***!
  \********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _show_probdb_probdb_map_probdb_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-probdb/probdb-map/probdb-map.component */ "./src/app/pages/show-probdb/probdb-map/probdb-map.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_show_probdb_probdb_map_probdb_map_component__WEBPACK_IMPORTED_MODULE_2__["ProbdbMapComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        exports: [_show_probdb_probdb_map_probdb_map_component__WEBPACK_IMPORTED_MODULE_2__["ProbdbMapComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/pages/show-probdb/probdb-map/probdb-map.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/show-probdb/probdb-map/probdb-map.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3ctcHJvYmRiL3Byb2JkYi1tYXAvcHJvYmRiLW1hcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/show-probdb/probdb-map/probdb-map.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/show-probdb/probdb-map/probdb-map.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProbdbMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProbdbMapComponent", function() { return ProbdbMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProbdbMapComponent = class ProbdbMapComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProbdbMapComponent.ctorParameters = () => [];
ProbdbMapComponent.propDecorators = {
    probabilities: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ProbdbMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'probdb-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./probdb-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/probdb-map/probdb-map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./probdb-map.component.scss */ "./src/app/pages/show-probdb/probdb-map/probdb-map.component.scss")).default]
    })
], ProbdbMapComponent);



/***/ }),

/***/ "./src/app/services/core/prob-db.ts":
/*!******************************************!*\
  !*** ./src/app/services/core/prob-db.ts ***!
  \******************************************/
/*! exports provided: ProbDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProbDB", function() { return ProbDB; });
class ProbDB {
    constructor(name) {
        this.name = 'Default';
        this.id = '' + Date.now();
        this.probabilities = [[]];
        this.name = name ? name : 'Default';
    }
}


/***/ }),

/***/ "./src/app/services/core/prob-modifier.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/core/prob-modifier.service.ts ***!
  \********************************************************/
/*! exports provided: ProbModifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProbModifierService", function() { return ProbModifierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProbModifierService = class ProbModifierService {
    constructor() {
        this.DIGITS_NUM = 10;
    }
    getDefault(maxExponent) {
        if (maxExponent < 0)
            maxExponent = 0;
        maxExponent = Math.floor(maxExponent);
        const N = (maxExponent + 1) * this.DIGITS_NUM;
        const defaultProb = 1.0 / N;
        return Array(maxExponent + 1).fill(1)
            .map(() => Array(this.DIGITS_NUM).fill(defaultProb).map(i => i));
    }
    good(prob) {
        let newProb = 1;
        if (prob !== undefined && (prob >= 0 && prob < 1)) {
            newProb = prob / 2.0;
        }
        return newProb;
    }
    bad(prob) {
        let newProb = 1;
        if (prob !== undefined && (prob >= 0 && prob < 1)) {
            newProb = prob + (1.0 - prob) / 2.0;
        }
        return newProb;
    }
};
ProbModifierService.ctorParameters = () => [];
ProbModifierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProbModifierService);



/***/ }),

/***/ "./src/app/services/core/probdb.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/core/probdb.service.ts ***!
  \*************************************************/
/*! exports provided: ProbdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProbdbService", function() { return ProbdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _prob_modifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prob-modifier.service */ "./src/app/services/core/prob-modifier.service.ts");




let ProbdbService = class ProbdbService {
    constructor(probModifier, storage) {
        this.probModifier = probModifier;
        this.storage = storage;
        this.setActive('Default');
    }
    reset(nameOfDB) {
        this.storage.reset(nameOfDB, this.probModifier.getDefault(3));
    }
    setActive(nameOfDB) {
        this.storage.setActive(nameOfDB);
    }
    getName() {
        return this.storage.getName();
    }
    getNames() {
        return this.storage.getNames();
    }
    getProbabilities() {
        return this.storage.getProbabilities();
    }
    /**
     * Returns with the number which digits should be asked
     * The number contains all not-leading-zeroes exponents
     *
     * If it contains only zeroes, it will return the last digit
     */
    getNumberToAsk() {
        let digits = this.getProbabilities().map(exp => this.getMaxIndex(exp)).reverse();
        console.log('Raw question:', digits.join(''));
        while (digits.length > 1 && digits[0] == 0) {
            digits = digits.slice(1);
        }
        return digits;
    }
    getMaxIndex(arr, delta = 0.01) {
        let maxValue = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }
        const maxIndexes = arr.map((v, i) => ({ value: v, index: i })).filter(vi => Math.abs(vi.value - maxValue) < delta).map(vi => vi.index);
        return maxIndexes[Math.floor(Math.random() * maxIndexes.length)];
    }
    bad(exp, digit) {
        this.storage.setProb(exp, digit, this.probModifier.bad(this.storage.getProb(exp, digit)));
    }
    good(exp, digit) {
        this.storage.setProb(exp, digit, this.probModifier.bad(this.storage.getProb(exp, digit)));
    }
};
ProbdbService.ctorParameters = () => [
    { type: _prob_modifier_service__WEBPACK_IMPORTED_MODULE_3__["ProbModifierService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
ProbdbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProbdbService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_prob_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/prob-db */ "./src/app/services/core/prob-db.ts");



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.probdbs = [];
        //this.probdbs = this.loadAll();
    }
    reset(nameOfDB, probabilities) {
        const db = this.getOrCreate(nameOfDB);
        db.probabilities = JSON.parse(JSON.stringify(probabilities));
    }
    getOrCreate(nameOfDB = 'Default') {
        let db = this.getDB(nameOfDB);
        if (!db) {
            db = this.probdbs[this.probdbs.push(new _core_prob_db__WEBPACK_IMPORTED_MODULE_2__["ProbDB"](nameOfDB)) - 1];
            this.save(db);
        }
        ;
        return db;
    }
    setActive(nameOfDB) {
        this.active = this.getOrCreate(nameOfDB);
    }
    getName() {
        return this.active ? this.active.name : '';
    }
    getNames() {
        return this.probdbs.map(db => db.name);
    }
    getProbabilities() {
        // deep copy
        return JSON.parse(JSON.stringify(this.active.probabilities));
    }
    setProb(exp, digit, probability) {
        if (!this.existsProb(exp, digit)) {
            console.error(`Digit:${digit} or exponent:${exp} out of range`);
            return;
        }
        this.active.probabilities[exp][digit] = probability;
    }
    existsProb(exp, digit) {
        return !!this.active.probabilities[exp] && !!this.active.probabilities[exp][digit];
    }
    getProb(exp, digit) {
        return this.active.probabilities[exp][digit];
    }
    /**
     * returns with a ProbDB if its name is equal to nameOfDB else undefined
     * @param nameOfDB name of ProbDB database
     */
    getDB(nameOfDB) {
        let dbs = this.probdbs.filter(pdb => pdb.name == nameOfDB);
        return dbs.length === 0 ? undefined : dbs[0];
    }
    save(probDB) {
    }
    load(nameOfDB) {
        return null;
    }
    loadAll() {
        return [];
    }
};
StorageService.ctorParameters = () => [
    { type: Storage }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map