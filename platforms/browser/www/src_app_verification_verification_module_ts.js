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

module.exports = ".form {\n  margin-top: 30px;\n}\n.form ion-list {\n  padding-bottom: 8px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n.thumb_impression {\n  padding-top: 30px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBRVk7RUFDSSw4QkFBQTtBQUFoQjtBQUtJO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBUUE7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQUxKO0FBT0k7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTFIiLCJmaWxlIjoidmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbn1cblxuLnRodW1iX2ltcHJlc3Npb24ge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 43012:
/*!****************************************************************!*\
  !*** ./src/app/verification/verification.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'verification' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"form\">\n        <h2 class=\"ion-text-center\">\n            <span class=\"animate__animated animate__fadeInUp\">{{'enter_otp_send_on' | translate}}</span>\n            <br>\n            <span class=\"animate__animated animate__fadeInUp\">+1 987 654 3210</span>\n        </h2>\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"{{'enter_otp_code' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"tabs()\">{{'continue' | translate}}</ion-button>\n        </ion-list>\n    </div>\n    <div class=\"thumb_impression ion-text-center animate__animated animate__fadeInUp\">\n        <h2>{{'verification_text' | translate}}<br>{{'verification_text_2' | translate}}</h2>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_verification_verification_module_ts.js.map