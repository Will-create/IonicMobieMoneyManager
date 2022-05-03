"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sing-in_sing-in_module_ts"],{

/***/ 40914:
/*!***************************************************!*\
  !*** ./src/app/sing-in/sing-in-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPageRoutingModule": () => (/* binding */ SingInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in.page */ 26852);




const routes = [
    {
        path: '',
        component: _sing_in_page__WEBPACK_IMPORTED_MODULE_0__.SingInPage
    }
];
let SingInPageRoutingModule = class SingInPageRoutingModule {
};
SingInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingInPageRoutingModule);



/***/ }),

/***/ 21553:
/*!*******************************************!*\
  !*** ./src/app/sing-in/sing-in.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPageModule": () => (/* binding */ SingInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in-routing.module */ 40914);
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sing-in.page */ 26852);








let SingInPageModule = class SingInPageModule {
};
SingInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingInPageRoutingModule
        ],
        declarations: [_sing_in_page__WEBPACK_IMPORTED_MODULE_1__.SingInPage]
    })
], SingInPageModule);



/***/ }),

/***/ 26852:
/*!*****************************************!*\
  !*** ./src/app/sing-in/sing-in.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPage": () => (/* binding */ SingInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sing_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in.page.html?ngResource */ 657);
/* harmony import */ var _sing_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sing-in.page.scss?ngResource */ 36313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);






let SingInPage = class SingInPage {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
    sign_up() {
        this.route.navigate(['./sign-up']);
    }
};
SingInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SingInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sing-in',
        template: _sing_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sing_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingInPage);



/***/ }),

/***/ 36313:
/*!******************************************************!*\
  !*** ./src/app/sing-in/sing-in.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.15rem;\n  font-weight: 400;\n}\n\n.banner {\n  background: var(--primary);\n  height: 160px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.banner h2 span {\n  font-weight: 400;\n}\n\n.form {\n  margin-top: 30px;\n}\n\n.form ion-list {\n  padding-bottom: 8px;\n}\n\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression {\n  padding-top: 40px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression .fingerprint {\n  width: 47px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmctaW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxzaW5nLWluXFxzaW5nLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NEOztBRENDO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0MsZ0JBQUE7QUNDSDs7QURJQTtFQUNDLGdCQUFBO0FDREQ7O0FER0M7RUFDQyxtQkFBQTtBQ0RGOztBREdZO0VBQ0ksOEJBQUE7QUNEaEI7O0FETUM7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FEU0E7RUFDQyxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ05EOztBRFFDO0VBQ0MsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNDO0VBQ0MsV0FBQTtFQUNBLGNBQUE7QUNQRiIsImZpbGUiOiJzaW5nLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDEuMTVyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcblx0aGVpZ2h0OiAxNjBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRmb250LXNpemU6IDEuNnJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG5cdFx0c3BhbiB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZm9ybSB7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxuXHJcblx0aW9uLWxpc3Qge1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRmb250LXNpemU6IC45NXJlbTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLnRodW1iX2ltcHJlc3Npb24ge1xyXG5cdHBhZGRpbmctdG9wOiA0MHB4O1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHJcblx0aDIge1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXNpemU6IC45NXJlbTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cclxuXHQuZmluZ2VycHJpbnQge1xyXG5cdFx0d2lkdGg6IDQ3cHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcblxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uYmFubmVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5iYW5uZXIgaDIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5mb3JtIGlvbi1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cbi5mb3JtIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRodW1iX2ltcHJlc3Npb24ge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aHVtYl9pbXByZXNzaW9uIGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnRodW1iX2ltcHJlc3Npb24gLmZpbmdlcnByaW50IHtcbiAgd2lkdGg6IDQ3cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */";

/***/ }),

/***/ 657:
/*!******************************************************!*\
  !*** ./src/app/sing-in/sing-in.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>\r\n           \r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"bg_color\">\r\n    <div class=\"banner\">\r\n        <h2 class=\"ion-text-center animate__animated animate__zoomIn\">\r\n                 \r\n            <span>OM MANAGER</span> <br>\r\n        </h2>\r\n    </div>\r\n    <div class=\"form\">\r\n        <ion-list lines=\"none\">\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"email\" placeholder=\"Email\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"text\" placeholder=\"Mot de passe\"></ion-input>\r\n            </ion-item>\r\n            <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"tabs()\">Connexion</ion-button>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sing-in_sing-in_module_ts.js.map