(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
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
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
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
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/probdb-map/probdb-map.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/probdb-map/probdb-map.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesShowProbdbProbdbMapProbdbMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>Probabilities</p>\n<table border=\"1\">\n  <tr>\n    <th></th><th *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\">{{n}}</th>\n  </tr>\n  <tr *ngFor=\"let row of probabilities;let rowIndex = index\">\n    <th>{{rowIndex}}</th><td *ngFor=\"let cell of row\">{{cell}}</td>\n  </tr>\n</table>\n\n";
      /***/
    },

    /***/
    "./src/app/pages/components.module.ts":
    /*!********************************************!*\
      !*** ./src/app/pages/components.module.ts ***!
      \********************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppPagesComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _show_probdb_probdb_map_probdb_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show-probdb/probdb-map/probdb-map.component */
      "./src/app/pages/show-probdb/probdb-map/probdb-map.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_show_probdb_probdb_map_probdb_map_component__WEBPACK_IMPORTED_MODULE_2__["ProbdbMapComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        exports: [_show_probdb_probdb_map_probdb_map_component__WEBPACK_IMPORTED_MODULE_2__["ProbdbMapComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/pages/show-probdb/probdb-map/probdb-map.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/pages/show-probdb/probdb-map/probdb-map.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesShowProbdbProbdbMapProbdbMapComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3ctcHJvYmRiL3Byb2JkYi1tYXAvcHJvYmRiLW1hcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/show-probdb/probdb-map/probdb-map.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/show-probdb/probdb-map/probdb-map.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ProbdbMapComponent */

    /***/
    function srcAppPagesShowProbdbProbdbMapProbdbMapComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProbdbMapComponent", function () {
        return ProbdbMapComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProbdbMapComponent = /*#__PURE__*/function () {
        function ProbdbMapComponent() {
          _classCallCheck(this, ProbdbMapComponent);
        }

        _createClass(ProbdbMapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProbdbMapComponent;
      }();

      ProbdbMapComponent.ctorParameters = function () {
        return [];
      };

      ProbdbMapComponent.propDecorators = {
        probabilities: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ProbdbMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'probdb-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./probdb-map.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/probdb-map/probdb-map.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./probdb-map.component.scss */
        "./src/app/pages/show-probdb/probdb-map/probdb-map.component.scss"))["default"]]
      })], ProbdbMapComponent);
      /***/
    },

    /***/
    "./src/app/services/core/prob-db.ts":
    /*!******************************************!*\
      !*** ./src/app/services/core/prob-db.ts ***!
      \******************************************/

    /*! exports provided: ProbDB */

    /***/
    function srcAppServicesCoreProbDbTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProbDB", function () {
        return ProbDB;
      });

      var ProbDB = function ProbDB(name) {
        _classCallCheck(this, ProbDB);

        this.name = 'Default';
        this.id = '' + Date.now();
        this.probabilities = [[]];
        this.name = name ? name : 'Default';
      };
      /***/

    },

    /***/
    "./src/app/services/core/prob-modifier.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/services/core/prob-modifier.service.ts ***!
      \********************************************************/

    /*! exports provided: ProbModifierService */

    /***/
    function srcAppServicesCoreProbModifierServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProbModifierService", function () {
        return ProbModifierService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProbModifierService = /*#__PURE__*/function () {
        function ProbModifierService() {
          _classCallCheck(this, ProbModifierService);

          this.DIGITS_NUM = 10;
        }

        _createClass(ProbModifierService, [{
          key: "getDefault",
          value: function getDefault(maxExponent) {
            var _this = this;

            if (maxExponent < 0) maxExponent = 0;
            maxExponent = Math.floor(maxExponent);
            var N = (maxExponent + 1) * this.DIGITS_NUM;
            var defaultProb = 1.0 / N;
            return Array(maxExponent + 1).fill(1).map(function () {
              return Array(_this.DIGITS_NUM).fill(defaultProb).map(function (i) {
                return i;
              });
            });
          }
        }, {
          key: "good",
          value: function good(prob) {
            var newProb = 1;

            if (prob !== undefined && prob >= 0 && prob < 1) {
              newProb = prob / 2.0;
            }

            return newProb;
          }
        }, {
          key: "bad",
          value: function bad(prob) {
            var newProb = 1;

            if (prob !== undefined && prob >= 0 && prob < 1) {
              newProb = prob + (1.0 - prob) / 2.0;
            }

            return newProb;
          }
        }]);

        return ProbModifierService;
      }();

      ProbModifierService.ctorParameters = function () {
        return [];
      };

      ProbModifierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProbModifierService);
      /***/
    },

    /***/
    "./src/app/services/core/probdb.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/core/probdb.service.ts ***!
      \*************************************************/

    /*! exports provided: ProbdbService */

    /***/
    function srcAppServicesCoreProbdbServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProbdbService", function () {
        return ProbdbService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../storage.service */
      "./src/app/services/storage.service.ts");
      /* harmony import */


      var _prob_modifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./prob-modifier.service */
      "./src/app/services/core/prob-modifier.service.ts");

      var ProbdbService = /*#__PURE__*/function () {
        function ProbdbService(probModifier, storage) {
          _classCallCheck(this, ProbdbService);

          this.probModifier = probModifier;
          this.storage = storage;
          this.setActive('Default');
        }

        _createClass(ProbdbService, [{
          key: "reset",
          value: function reset(nameOfDB) {
            this.storage.reset(nameOfDB, this.probModifier.getDefault(3));
          }
        }, {
          key: "setActive",
          value: function setActive(nameOfDB) {
            this.storage.setActive(nameOfDB);
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.storage.getName();
          }
        }, {
          key: "getNames",
          value: function getNames() {
            return this.storage.getNames();
          }
        }, {
          key: "getProbabilities",
          value: function getProbabilities() {
            return this.storage.getProbabilities();
          }
          /**
           * Returns with the number which digits should be asked
           * The number contains all not-leading-zeroes exponents
           *
           * If it contains only zeroes, it will return the last digit
           */

        }, {
          key: "getNumberToAsk",
          value: function getNumberToAsk() {
            var _this2 = this;

            var digits = this.getProbabilities().map(function (exp) {
              return _this2.getMaxIndex(exp);
            }).reverse();
            console.log('Raw question:', digits.join(''));

            while (digits.length > 1 && digits[0] == 0) {
              digits = digits.slice(1);
            }

            return digits;
          }
        }, {
          key: "getMaxIndex",
          value: function getMaxIndex(arr) {
            var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
            var maxValue = -1;

            for (var i = 0; i < arr.length; i++) {
              if (arr[i] > maxValue) {
                maxValue = arr[i];
              }
            }

            var maxIndexes = arr.map(function (v, i) {
              return {
                value: v,
                index: i
              };
            }).filter(function (vi) {
              return Math.abs(vi.value - maxValue) < delta;
            }).map(function (vi) {
              return vi.index;
            });
            return maxIndexes[Math.floor(Math.random() * maxIndexes.length)];
          }
        }, {
          key: "bad",
          value: function bad(exp, digit) {
            this.storage.setProb(exp, digit, this.probModifier.bad(this.storage.getProb(exp, digit)));
          }
        }, {
          key: "good",
          value: function good(exp, digit) {
            this.storage.setProb(exp, digit, this.probModifier.bad(this.storage.getProb(exp, digit)));
          }
        }]);

        return ProbdbService;
      }();

      ProbdbService.ctorParameters = function () {
        return [{
          type: _prob_modifier_service__WEBPACK_IMPORTED_MODULE_3__["ProbModifierService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }];
      };

      ProbdbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProbdbService);
      /***/
    },

    /***/
    "./src/app/services/storage.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_prob_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/prob-db */
      "./src/app/services/core/prob-db.ts");

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this.probdbs = []; //this.probdbs = this.loadAll();
        }

        _createClass(StorageService, [{
          key: "reset",
          value: function reset(nameOfDB, probabilities) {
            var db = this.getOrCreate(nameOfDB);
            db.probabilities = JSON.parse(JSON.stringify(probabilities));
          }
        }, {
          key: "getOrCreate",
          value: function getOrCreate() {
            var nameOfDB = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Default';
            var db = this.getDB(nameOfDB);

            if (!db) {
              db = this.probdbs[this.probdbs.push(new _core_prob_db__WEBPACK_IMPORTED_MODULE_2__["ProbDB"](nameOfDB)) - 1];
              this.save(db);
            }

            ;
            return db;
          }
        }, {
          key: "setActive",
          value: function setActive(nameOfDB) {
            this.active = this.getOrCreate(nameOfDB);
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.active ? this.active.name : '';
          }
        }, {
          key: "getNames",
          value: function getNames() {
            return this.probdbs.map(function (db) {
              return db.name;
            });
          }
        }, {
          key: "getProbabilities",
          value: function getProbabilities() {
            // deep copy
            return JSON.parse(JSON.stringify(this.active.probabilities));
          }
        }, {
          key: "setProb",
          value: function setProb(exp, digit, probability) {
            if (!this.existsProb(exp, digit)) {
              console.error("Digit:".concat(digit, " or exponent:").concat(exp, " out of range"));
              return;
            }

            this.active.probabilities[exp][digit] = probability;
          }
        }, {
          key: "existsProb",
          value: function existsProb(exp, digit) {
            return !!this.active.probabilities[exp] && !!this.active.probabilities[exp][digit];
          }
        }, {
          key: "getProb",
          value: function getProb(exp, digit) {
            return this.active.probabilities[exp][digit];
          }
          /**
           * returns with a ProbDB if its name is equal to nameOfDB else undefined
           * @param nameOfDB name of ProbDB database
           */

        }, {
          key: "getDB",
          value: function getDB(nameOfDB) {
            var dbs = this.probdbs.filter(function (pdb) {
              return pdb.name == nameOfDB;
            });
            return dbs.length === 0 ? undefined : dbs[0];
          }
        }, {
          key: "save",
          value: function save(probDB) {}
        }, {
          key: "load",
          value: function load(nameOfDB) {
            return null;
          }
        }, {
          key: "loadAll",
          value: function loadAll() {
            return [];
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: Storage
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map