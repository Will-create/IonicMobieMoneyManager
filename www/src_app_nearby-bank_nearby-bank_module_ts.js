"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nearby-bank_nearby-bank_module_ts"],{

/***/ 1530:
/*!***********************************************************!*\
  !*** ./src/app/nearby-bank/nearby-bank-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NearbyBankPageRoutingModule": () => (/* binding */ NearbyBankPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _nearby_bank_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nearby-bank.page */ 20971);




const routes = [
    {
        path: '',
        component: _nearby_bank_page__WEBPACK_IMPORTED_MODULE_0__.NearbyBankPage
    }
];
let NearbyBankPageRoutingModule = class NearbyBankPageRoutingModule {
};
NearbyBankPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NearbyBankPageRoutingModule);



/***/ }),

/***/ 60314:
/*!***************************************************!*\
  !*** ./src/app/nearby-bank/nearby-bank.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NearbyBankPageModule": () => (/* binding */ NearbyBankPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _nearby_bank_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nearby-bank-routing.module */ 1530);
/* harmony import */ var _nearby_bank_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nearby-bank.page */ 20971);








let NearbyBankPageModule = class NearbyBankPageModule {
};
NearbyBankPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _nearby_bank_routing_module__WEBPACK_IMPORTED_MODULE_0__.NearbyBankPageRoutingModule
        ],
        declarations: [_nearby_bank_page__WEBPACK_IMPORTED_MODULE_1__.NearbyBankPage]
    })
], NearbyBankPageModule);



/***/ }),

/***/ 20971:
/*!*************************************************!*\
  !*** ./src/app/nearby-bank/nearby-bank.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NearbyBankPage": () => (/* binding */ NearbyBankPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _nearby_bank_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nearby-bank.page.html?ngResource */ 77834);
/* harmony import */ var _nearby_bank_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nearby-bank.page.scss?ngResource */ 98320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NearbyBankPage = class NearbyBankPage {
    constructor() { }
    ngOnInit() {
    }
};
NearbyBankPage.ctorParameters = () => [];
NearbyBankPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nearby-bank',
        template: _nearby_bank_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nearby_bank_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NearbyBankPage);



/***/ }),

/***/ 98320:
/*!**************************************************************!*\
  !*** ./src/app/nearby-bank/nearby-bank.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.map {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.map img {\n  width: 100%;\n  height: 100%;\n}\n\n.near_me {\n  position: absolute;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n}\n\n.near_me ion-icon {\n  color: var(--white);\n  font-size: 0.9rem;\n  margin: 0 auto;\n}\n\n.near_me.atm {\n  background: var(--secondary);\n}\n\n.near_me.bank {\n  background: var(--primary);\n}\n\n.my_location {\n  position: absolute;\n  z-index: 99;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  overflow: hidden;\n  text-align: center;\n}\n\n.my_location::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ff5e39;\n  opacity: 0.4;\n}\n\n.my_location ion-icon {\n  color: #ff5e39;\n  font-size: 0.95rem;\n  line-height: 22px;\n  margin: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lYXJieS1iYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERDs7QUFHQztFQUNDLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUM7RUFDQyw0QkFBQTtBQUZGOztBQUtDO0VBQ0MsMEJBQUE7QUFIRjs7QUFPQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSkQ7O0FBTUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0M7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBTEYiLCJmaWxlIjoibmVhcmJ5LWJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuXHRwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdHRvcDogLTNweDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hcCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cbn1cblxuLm5lYXJfbWUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0d2lkdGg6IDI0cHg7XG5cdGhlaWdodDogMjRweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdHotaW5kZXg6IDk5O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGlvbi1pY29uIHtcblx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdGZvbnQtc2l6ZTogLjlyZW07XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHQmLmF0bSB7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KSxcblx0fVxuXG5cdCYuYmFuayB7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSksXG5cdH1cbn1cblxuLm15X2xvY2F0aW9uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiA5OTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR3aWR0aDogMjJweDtcblx0aGVpZ2h0OiAyMnB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0Jjo6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNmZjVlMzk7XG5cdFx0b3BhY2l0eTogLjQ7XG5cdH1cblxuXHRpb24taWNvbiB7XG5cdFx0Y29sb3I6ICNmZjVlMzk7XG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGhlaWdodDogMTAwJTtcblxuXHR9XG59Il19 */";

/***/ }),

/***/ 77834:
/*!**************************************************************!*\
  !*** ./src/app/nearby-bank/nearby-bank.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t\t<ion-title>{{'nearby_bank_atm' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"map\">\n\t\t<img src=\"assets/imgs/map.png\">\n\t</div>\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"right: 10%; top: 11%\">\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t</div>\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"right: 40%; top: 41%\">\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t</div>\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"left: 10%; top: 60%\">\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t</div>\n\t<div class=\"near_me bank ion-text-center animate__animated animate__zoomIn\"  style=\"left: 30%; top: 30%\">\n\t\t<ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n\t</div>\n\t<div class=\"near_me bank ion-text-cente animate__animated animate__zoomInr\"  style=\"left: 40%; top:80%\">\n\t\t<ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n\t</div>\n\t<div class=\"my_location animate__animated animate__zoomIn\" style=\"top: 62%; right: 38%;\">\n\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_nearby-bank_nearby-bank_module_ts.js.map