"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_terms-conditions_terms-conditions_module_ts"],{

/***/ 20811:
/*!*********************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageRoutingModule": () => (/* binding */ TermsConditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.page */ 87071);




const routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPage
    }
];
let TermsConditionsPageRoutingModule = class TermsConditionsPageRoutingModule {
};
TermsConditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsConditionsPageRoutingModule);



/***/ }),

/***/ 61401:
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageModule": () => (/* binding */ TermsConditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions-routing.module */ 20811);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page */ 87071);








let TermsConditionsPageModule = class TermsConditionsPageModule {
};
TermsConditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPageRoutingModule
        ],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsPage]
    })
], TermsConditionsPageModule);



/***/ }),

/***/ 87071:
/*!***********************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPage": () => (/* binding */ TermsConditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _terms_conditions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.page.html?ngResource */ 18176);
/* harmony import */ var _terms_conditions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page.scss?ngResource */ 24930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TermsConditionsPage = class TermsConditionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsConditionsPage.ctorParameters = () => [];
TermsConditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-conditions',
        template: _terms_conditions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_terms_conditions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsConditionsPage);



/***/ }),

/***/ 24930:
/*!************************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.container {\n  width: calc(100% - 43px);\n  margin: 0 auto;\n  padding-top: 22px;\n}\n\n.container p {\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 20px;\n  line-height: 27px;\n}\n\n.container h2 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUFJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUFJO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVSIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 18176:
/*!************************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'terms_conditions' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"container\">\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n\t\t</p>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\t\t</p>\n\n\t\t<h2 class=\"animate__animated animate__fadeInUp\">Terms of Use</h2>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n\t\t</p>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tMaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\t\t</p>\n\t\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n\t\t</p>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tMaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\t\t</p>\n\t\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n\t\t</p>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tMaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\t\t</p>\n\t\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n\t\t</p>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tMaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\t\t</p>\n\t\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n\t\t</p>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tMaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\t\t</p>\n\t\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n\t\t</p>\n\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tMaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\t\t</p>\n\t</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_terms-conditions_terms-conditions_module_ts.js.map