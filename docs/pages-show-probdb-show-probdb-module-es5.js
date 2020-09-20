(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-show-probdb-show-probdb-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/show-probdb.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/show-probdb.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesShowProbdbShowProbdbPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">  \n      <ion-menu-button color=\"dark\"></ion-menu-button>   \n    </ion-buttons>\n    <ion-title>Show probabilities</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n  <ion-label>Selected probability database</ion-label>\n  <ion-select [(value)]=\"selectedDbName\">\n    <ion-select-option *ngFor=\"let dbName of dbNames\" [value]=\"dbName\">{{dbName}}</ion-select-option>\n  </ion-select>\n</ion-item>\n</ion-list>\n<probdb-map [probabilities]=\"probdb\"></probdb-map>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/show-probdb/show-probdb-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/show-probdb/show-probdb-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ShowProbdbPageRoutingModule */

    /***/
    function srcAppPagesShowProbdbShowProbdbRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowProbdbPageRoutingModule", function () {
        return ShowProbdbPageRoutingModule;
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


      var _show_probdb_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./show-probdb.page */
      "./src/app/pages/show-probdb/show-probdb.page.ts");

      var routes = [{
        path: '',
        component: _show_probdb_page__WEBPACK_IMPORTED_MODULE_3__["ShowProbdbPage"]
      }];

      var ShowProbdbPageRoutingModule = function ShowProbdbPageRoutingModule() {
        _classCallCheck(this, ShowProbdbPageRoutingModule);
      };

      ShowProbdbPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShowProbdbPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/show-probdb/show-probdb.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/show-probdb/show-probdb.module.ts ***!
      \*********************************************************/

    /*! exports provided: ShowProbdbPageModule */

    /***/
    function srcAppPagesShowProbdbShowProbdbModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowProbdbPageModule", function () {
        return ShowProbdbPageModule;
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


      var _show_probdb_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./show-probdb-routing.module */
      "./src/app/pages/show-probdb/show-probdb-routing.module.ts");
      /* harmony import */


      var _show_probdb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./show-probdb.page */
      "./src/app/pages/show-probdb/show-probdb.page.ts");
      /* harmony import */


      var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components.module */
      "./src/app/pages/components.module.ts");

      var ShowProbdbPageModule = function ShowProbdbPageModule() {
        _classCallCheck(this, ShowProbdbPageModule);
      };

      ShowProbdbPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _show_probdb_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowProbdbPageRoutingModule"]],
        declarations: [_show_probdb_page__WEBPACK_IMPORTED_MODULE_6__["ShowProbdbPage"]]
      })], ShowProbdbPageModule);
      /***/
    },

    /***/
    "./src/app/pages/show-probdb/show-probdb.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/show-probdb/show-probdb.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesShowProbdbShowProbdbPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3ctcHJvYmRiL3Nob3ctcHJvYmRiLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/show-probdb/show-probdb.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/show-probdb/show-probdb.page.ts ***!
      \*******************************************************/

    /*! exports provided: ShowProbdbPage */

    /***/
    function srcAppPagesShowProbdbShowProbdbPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowProbdbPage", function () {
        return ShowProbdbPage;
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

      var ShowProbdbPage = /*#__PURE__*/function () {
        function ShowProbdbPage(probdbService) {
          _classCallCheck(this, ShowProbdbPage);

          this.probdbService = probdbService;
          this.dbNames = [];
          this.probdb = [[]];
        }

        _createClass(ShowProbdbPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dbNames = this.probdbService.getNames();
            this.selectedDbName = this.probdbService.getName();
            this.probdb = this.probdbService.getProbabilities();
          }
        }, {
          key: "selectedDbName",
          set: function set(name) {
            this.probdbService.setActive(name);
            this.probdb = this.probdbService.getProbabilities();
          },
          get: function get() {
            return this.probdbService.getName();
          }
        }]);

        return ShowProbdbPage;
      }();

      ShowProbdbPage.ctorParameters = function () {
        return [{
          type: src_app_services_core_probdb_service__WEBPACK_IMPORTED_MODULE_2__["ProbdbService"]
        }];
      };

      ShowProbdbPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-probdb',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./show-probdb.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-probdb/show-probdb.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./show-probdb.page.scss */
        "./src/app/pages/show-probdb/show-probdb.page.scss"))["default"]]
      })], ShowProbdbPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-show-probdb-show-probdb-module-es5.js.map