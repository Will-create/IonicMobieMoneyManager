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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.map {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.map img {\n  width: 100%;\n  height: 100%;\n}\n\n.near_me {\n  position: absolute;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n}\n\n.near_me ion-icon {\n  color: var(--white);\n  font-size: 0.9rem;\n  margin: 0 auto;\n}\n\n.near_me.atm {\n  background: var(--secondary);\n}\n\n.near_me.bank {\n  background: var(--primary);\n}\n\n.my_location {\n  position: absolute;\n  z-index: 99;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  overflow: hidden;\n  text-align: center;\n}\n\n.my_location::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ff5e39;\n  opacity: 0.4;\n}\n\n.my_location ion-icon {\n  color: #ff5e39;\n  font-size: 0.95rem;\n  line-height: 22px;\n  margin: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lYXJieS1iYW5rLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcbmVhcmJ5LWJhbmtcXG5lYXJieS1iYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FESUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNERDs7QURHQztFQUNDLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREY7O0FESUM7RUFDQyw0QkFBQTtBQ0ZGOztBREtDO0VBQ0MsMEJBQUE7QUNIRjs7QURPQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSkQ7O0FETUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0M7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDTEYiLCJmaWxlIjoibmVhcmJ5LWJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG5cdHRvcDogLTNweDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLm5lYXJfbWUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cdHotaW5kZXg6IDk5O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0aW9uLWljb24ge1xyXG5cdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcblxyXG5cdCYuYXRtIHtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSksXHJcblx0fVxyXG5cclxuXHQmLmJhbmsge1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSksXHJcblx0fVxyXG59XHJcblxyXG4ubXlfbG9jYXRpb24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiA5OTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0d2lkdGg6IDIycHg7XHJcblx0aGVpZ2h0OiAyMnB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHQmOjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmY1ZTM5O1xyXG5cdFx0b3BhY2l0eTogLjQ7XHJcblx0fVxyXG5cclxuXHRpb24taWNvbiB7XHJcblx0XHRjb2xvcjogI2ZmNWUzOTtcclxuXHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblxyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5lYXJfbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5lYXJfbWUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubmVhcl9tZS5hdG0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLm5lYXJfbWUuYmFuayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubXlfbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teV9sb2NhdGlvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZjVlMzk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5teV9sb2NhdGlvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmY1ZTM5O1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 77834:
/*!**************************************************************!*\
  !*** ./src/app/nearby-bank/nearby-bank.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t\t<ion-title>{{'nearby_bank_atm' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"map\">\r\n\t\t<img src=\"assets/imgs/map.png\">\r\n\t</div>\r\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"right: 10%; top: 11%\">\r\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\r\n\t</div>\r\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"right: 40%; top: 41%\">\r\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\r\n\t</div>\r\n\t<div class=\"near_me atm ion-text-center animate__animated animate__zoomIn\"  style=\"left: 10%; top: 60%\">\r\n\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\r\n\t</div>\r\n\t<div class=\"near_me bank ion-text-center animate__animated animate__zoomIn\"  style=\"left: 30%; top: 30%\">\r\n\t\t<ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\r\n\t</div>\r\n\t<div class=\"near_me bank ion-text-cente animate__animated animate__zoomInr\"  style=\"left: 40%; top:80%\">\r\n\t\t<ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\r\n\t</div>\r\n\t<div class=\"my_location animate__animated animate__zoomIn\" style=\"top: 62%; right: 38%;\">\r\n\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\r\n\t</div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_nearby-bank_nearby-bank_module_ts.js.map