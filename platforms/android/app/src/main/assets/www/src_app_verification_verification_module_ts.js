"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verification_verification_module_ts"],{

/***/ 92534:
/*!*************************************************************!*\
  !*** ./src/app/verification/verification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageRoutingModule": () => (/* binding */ VerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page */ 84925);




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_0__.VerificationPage
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ 4243:
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageModule": () => (/* binding */ VerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-routing.module */ 92534);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page */ 84925);








let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificationPageRoutingModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_1__.VerificationPage]
    })
], VerificationPageModule);



/***/ }),

/***/ 84925:
/*!***************************************************!*\
  !*** ./src/app/verification/verification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPage": () => (/* binding */ VerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page.html?ngResource */ 43012);
/* harmony import */ var _verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page.scss?ngResource */ 28937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let VerificationPage = class VerificationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
VerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-verification',
        template: _verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerificationPage);



/***/ }),

/***/ 28937:
/*!****************************************************************!*\
  !*** ./src/app/verification/verification.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".form {\n  margin-top: 30px;\n}\n.form ion-list {\n  padding-bottom: 8px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n.thumb_impression {\n  padding-top: 30px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXHZlcmlmaWNhdGlvblxcdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURFWTtFQUNJLDhCQUFBO0FDQWhCO0FES0k7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURRQTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDTEo7QURPSTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMUiIsImZpbGUiOiJ2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi50aHVtYl9pbXByZXNzaW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IC45NXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG59IiwiLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmZvcm0gaW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGh1bWJfaW1wcmVzc2lvbiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRodW1iX2ltcHJlc3Npb24gaDIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */";

/***/ }),

/***/ 43012:
/*!****************************************************************!*\
  !*** ./src/app/verification/verification.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'verification' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"form\">\r\n        <h2 class=\"ion-text-center\">\r\n            <span class=\"animate__animated animate__fadeInUp\">{{'enter_otp_send_on' | translate}}</span>\r\n            <br>\r\n            <span class=\"animate__animated animate__fadeInUp\">+1 987 654 3210</span>\r\n        </h2>\r\n        <ion-list lines=\"none\">\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"text\" placeholder=\"{{'enter_otp_code' | translate}}\"></ion-input>\r\n            </ion-item>\r\n            <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"tabs()\">{{'continue' | translate}}</ion-button>\r\n        </ion-list>\r\n    </div>\r\n    <div class=\"thumb_impression ion-text-center animate__animated animate__fadeInUp\">\r\n        <h2>{{'verification_text' | translate}}<br>{{'verification_text_2' | translate}}</h2>\r\n    </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_verification_verification_module_ts.js.map