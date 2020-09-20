(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-learn-nums-learn-nums-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-nums/learn-nums.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-nums/learn-nums.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLearnNumsLearnNumsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">  \n      <ion-menu-button color=\"dark\"></ion-menu-button>   \n    </ion-buttons>\n    <ion-title>learn-nums</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <teacher></teacher>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-nums/teacher/teacher.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-nums/teacher/teacher.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLearnNumsTeacherTeacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  <ion-button name=\"say\" (click)=\"say(question)\"><ion-icon name=\"megaphone\"></ion-icon><span *ngIf=\"wrongAnswer\">{{question}}</span></ion-button>\n\n  <ion-button [disabled]=\"wrongAnswer\" name=\"hint\" (click)=\"showHint()\">{{hint}}</ion-button>\n\n  <ion-input #numberInput [disabled]=\"wrongAnswer\" (ionChange)=\"inputChanged($event.detail.value)\" autofocus=\"true\" type=\"number\" inputmode=\"numeric\" [(ngModel)]=\"answer\"></ion-input>\n\n  <ion-button [disabled]=\"answerIsEmpty\" name=\"check\" (click)=\"checkAnswer()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n  </ion-button>\n\n  <ion-button *ngIf=\"wrongAnswer\" color=\"danger\" name=\"sayAnswer\" (click)=\"say(answer)\"><ion-icon name=\"megaphone\"></ion-icon></ion-button>\n</p>\n";
      /***/
    },

    /***/
    "./src/app/pages/learn-nums/learn-nums-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/learn-nums/learn-nums-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: LearnNumsPageRoutingModule */

    /***/
    function srcAppPagesLearnNumsLearnNumsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearnNumsPageRoutingModule", function () {
        return LearnNumsPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _learn_nums_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./learn-nums.page */
      "./src/app/pages/learn-nums/learn-nums.page.ts");

      var routes = [{
        path: '',
        component: _learn_nums_page__WEBPACK_IMPORTED_MODULE_3__["LearnNumsPage"]
      }];

      var LearnNumsPageRoutingModule = function LearnNumsPageRoutingModule() {
        _classCallCheck(this, LearnNumsPageRoutingModule);
      };

      LearnNumsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LearnNumsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/learn-nums/learn-nums.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/learn-nums/learn-nums.module.ts ***!
      \*******************************************************/

    /*! exports provided: LearnNumsPageModule */

    /***/
    function srcAppPagesLearnNumsLearnNumsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearnNumsPageModule", function () {
        return LearnNumsPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _learn_nums_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./learn-nums-routing.module */
      "./src/app/pages/learn-nums/learn-nums-routing.module.ts");
      /* harmony import */


      var _learn_nums_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./learn-nums.page */
      "./src/app/pages/learn-nums/learn-nums.page.ts");
      /* harmony import */


      var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./teacher/teacher.component */
      "./src/app/pages/learn-nums/teacher/teacher.component.ts");
      /* harmony import */


      var _components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components.module */
      "./src/app/pages/components.module.ts");

      var LearnNumsPageModule = function LearnNumsPageModule() {
        _classCallCheck(this, LearnNumsPageModule);
      };

      LearnNumsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _learn_nums_routing_module__WEBPACK_IMPORTED_MODULE_5__["LearnNumsPageRoutingModule"]],
        declarations: [_learn_nums_page__WEBPACK_IMPORTED_MODULE_6__["LearnNumsPage"], _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_7__["TeacherComponent"]]
      })], LearnNumsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/learn-nums/learn-nums.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/learn-nums/learn-nums.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLearnNumsLearnNumsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuLW51bXMvbGVhcm4tbnVtcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/learn-nums/learn-nums.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/learn-nums/learn-nums.page.ts ***!
      \*****************************************************/

    /*! exports provided: LearnNumsPage */

    /***/
    function srcAppPagesLearnNumsLearnNumsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LearnNumsPage", function () {
        return LearnNumsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LearnNumsPage = /*#__PURE__*/function () {
        function LearnNumsPage() {
          _classCallCheck(this, LearnNumsPage);
        }

        _createClass(LearnNumsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LearnNumsPage;
      }();

      LearnNumsPage.ctorParameters = function () {
        return [];
      };

      LearnNumsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-nums',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./learn-nums.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-nums/learn-nums.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./learn-nums.page.scss */
        "./src/app/pages/learn-nums/learn-nums.page.scss"))["default"]]
      })], LearnNumsPage);
      /***/
    },

    /***/
    "./src/app/pages/learn-nums/teacher/teacher.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/learn-nums/teacher/teacher.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLearnNumsTeacherTeacherComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-input {\n  --background: #DDDDDD;\n  width: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm4tbnVtcy90ZWFjaGVyL3RlYWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuLW51bXMvdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICAtLWJhY2tncm91bmQ6ICNEREREREQ7XG4gICAgd2lkdGg6IDEwZW07XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/learn-nums/teacher/teacher.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/learn-nums/teacher/teacher.component.ts ***!
      \***************************************************************/

    /*! exports provided: TeacherComponent */

    /***/
    function srcAppPagesLearnNumsTeacherTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherComponent", function () {
        return TeacherComponent;
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


      var src_app_services_core_probdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/core/probdb.service */
      "./src/app/services/core/probdb.service.ts");
      /* harmony import */


      var src_app_services_core_answer_checker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/core/answer-checker.service */
      "./src/app/services/core/answer-checker.service.ts");
      /* harmony import */


      var src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/speech.service */
      "./src/app/services/speech.service.ts");
      /* harmony import */


      var src_app_services_hint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/hint.service */
      "./src/app/services/hint.service.ts");

      var TeacherComponent = /*#__PURE__*/function () {
        function TeacherComponent(probdbService, answerChecker, speechService, hintService) {
          _classCallCheck(this, TeacherComponent);

          this.probdbService = probdbService;
          this.answerChecker = answerChecker;
          this.speechService = speechService;
          this.hintService = hintService;
          this.wrongAnswer = true;
          this.answerIsEmpty = true;
          this.hint = '';
        }

        _createClass(TeacherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newQuestion();
          }
        }, {
          key: "newQuestion",
          value: function newQuestion() {
            var _this = this;

            var digits = this.probdbService.getNumberToAsk();
            this.question = digits.join('');
            this.answer = '';
            this.wrongAnswer = false;
            this.say(this.question);
            this.hintManager = this.hintService.newHint(this.question);
            this.hint = this.hintManager.getHint();
            setTimeout(function () {
              return _this.numberInput.setFocus();
            }, 0);
          }
        }, {
          key: "checkAnswer",
          value: function checkAnswer() {
            var _this2 = this;

            if (this.wrongAnswer) {
              this.newQuestion();
              return;
            }

            var checked = this.answerChecker.check(this.question, '' + this.answer);
            checked.bads.forEach(function (c) {
              return _this2.probdbService.bad(c.exp, c.digit);
            });
            checked.goods.forEach(function (c) {
              return _this2.probdbService.good(c.exp, c.digit);
            });
            this.wrongAnswer = checked.bads.length > 0;

            if (!this.wrongAnswer) {
              this.newQuestion();
            }
          }
        }, {
          key: "inputChanged",
          value: function inputChanged(value) {
            this.answerIsEmpty = !value || value == '';
          }
        }, {
          key: "say",
          value: function say(what) {
            this.speechService.say(what);
          }
        }, {
          key: "showHint",
          value: function showHint() {
            this.hint = this.hintManager.nextHint();
          }
        }]);

        return TeacherComponent;
      }();

      TeacherComponent.ctorParameters = function () {
        return [{
          type: src_app_services_core_probdb_service__WEBPACK_IMPORTED_MODULE_2__["ProbdbService"]
        }, {
          type: src_app_services_core_answer_checker_service__WEBPACK_IMPORTED_MODULE_3__["AnswerCheckerService"]
        }, {
          type: src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_4__["ASpeech"]
        }, {
          type: src_app_services_hint_service__WEBPACK_IMPORTED_MODULE_5__["HintService"]
        }];
      };

      TeacherComponent.propDecorators = {
        numberInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['numberInput']
        }]
      };
      TeacherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'teacher',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./teacher.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/learn-nums/teacher/teacher.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./teacher.component.scss */
        "./src/app/pages/learn-nums/teacher/teacher.component.scss"))["default"]]
      })], TeacherComponent);
      /***/
    },

    /***/
    "./src/app/services/core/answer-checker.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/services/core/answer-checker.service.ts ***!
      \*********************************************************/

    /*! exports provided: AnswerCheckerService */

    /***/
    function srcAppServicesCoreAnswerCheckerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswerCheckerService", function () {
        return AnswerCheckerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AnswerCheckerService = /*#__PURE__*/function () {
        function AnswerCheckerService() {
          _classCallCheck(this, AnswerCheckerService);
        }

        _createClass(AnswerCheckerService, [{
          key: "check",
          value: function check(question, answer) {
            if (answer.length == question.length) {
              return this.checkSameLength(question, answer);
            } else if (answer.length < question.length) {
              return this.checkDifferentLength(question, answer);
            } else {
              return this.checkDifferentLength(answer, question);
            }
          }
        }, {
          key: "checkDifferentLength",
          value: function checkDifferentLength(longer, shorter) {
            var checked = this.checkSameLength(longer.substr(-shorter.length), shorter);
            var badAnswer = longer.substring(0, longer.length - shorter.length);
            var bads = badAnswer.split('').map(function (c, i) {
              return {
                digit: +c,
                exp: longer.length - i - 1
              };
            });
            checked.bads = checked.bads.concat(bads);
            return checked;
          }
        }, {
          key: "checkSameLength",
          value: function checkSameLength(question, answer) {
            var _ref;

            var maxExponent = question.length - 1;
            var qas = question.split('').map(function (c, i) {
              return {
                q: +c,
                a: +answer[i],
                exponent: maxExponent - i
              };
            });
            var goods = qas.filter(function (qa) {
              return qa.a == qa.q;
            }).map(function (qa) {
              return {
                digit: qa.a,
                exp: qa.exponent
              };
            });
            var badPairs = qas.filter(function (qa) {
              return qa.a != qa.q;
            }).map(function (qa) {
              return [{
                digit: qa.a,
                exp: qa.exponent
              }, {
                digit: qa.q,
                exp: qa.exponent
              }];
            });

            var bads = (_ref = []).concat.apply(_ref, _toConsumableArray(badPairs)); //flattening


            return {
              goods: goods,
              bads: bads
            };
          }
        }]);

        return AnswerCheckerService;
      }();

      AnswerCheckerService.ctorParameters = function () {
        return [];
      };

      AnswerCheckerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AnswerCheckerService);
      /***/
    },

    /***/
    "./src/app/services/hint.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/hint.service.ts ***!
      \******************************************/

    /*! exports provided: HintManager, HintService */

    /***/
    function srcAppServicesHintServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HintManager", function () {
        return HintManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HintService", function () {
        return HintService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HintManager = function HintManager() {
        _classCallCheck(this, HintManager);
      };

      var HintService = /*#__PURE__*/function () {
        function HintService() {
          _classCallCheck(this, HintService);
        }

        _createClass(HintService, [{
          key: "newHint",
          value: function newHint(question) {
            var hintIndexesIndex = 0;
            var hintIndexes = this.indexesInRandomOrder(question.length);
            var hint = Array(question.length).fill('?');
            return {
              getHint: function getHint() {
                return hint.join('');
              },
              nextHint: function nextHint() {
                hint = Array(question.length).fill('?');
                var hintIndex = hintIndexes[hintIndexesIndex];
                hintIndexesIndex = hintIndexesIndex >= hintIndexes.length - 1 ? 0 : hintIndexesIndex + 1;
                hint[hintIndex] = question[hintIndex];
                return hint.join('');
              }
            };
          }
        }, {
          key: "indexesInRandomOrder",
          value: function indexesInRandomOrder(n) {
            return Array(n).fill(0).map(function (v, i) {
              return i;
            }).map(function (i) {
              return [Math.random(), i];
            }).sort().map(function (i) {
              return i[1];
            });
          }
        }]);

        return HintService;
      }();

      HintService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HintService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-learn-nums-learn-nums-module-es5.js.map