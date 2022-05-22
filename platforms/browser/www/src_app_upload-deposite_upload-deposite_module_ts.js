"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_upload-deposite_upload-deposite_module_ts"],{

/***/ 37005:
/*!*******************************************************************!*\
  !*** ./src/app/upload-deposite/upload-deposite-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDepositePageRoutingModule": () => (/* binding */ UploadDepositePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _upload_deposite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-deposite.page */ 80677);




const routes = [
    {
        path: '',
        component: _upload_deposite_page__WEBPACK_IMPORTED_MODULE_0__.UploadDepositePage
    }
];
let UploadDepositePageRoutingModule = class UploadDepositePageRoutingModule {
};
UploadDepositePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadDepositePageRoutingModule);



/***/ }),

/***/ 88183:
/*!***********************************************************!*\
  !*** ./src/app/upload-deposite/upload-deposite.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDepositePageModule": () => (/* binding */ UploadDepositePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _upload_deposite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-deposite-routing.module */ 37005);
/* harmony import */ var _upload_deposite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-deposite.page */ 80677);








let UploadDepositePageModule = class UploadDepositePageModule {
};
UploadDepositePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _upload_deposite_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadDepositePageRoutingModule
        ],
        declarations: [_upload_deposite_page__WEBPACK_IMPORTED_MODULE_1__.UploadDepositePage]
    })
], UploadDepositePageModule);



/***/ }),

/***/ 80677:
/*!*********************************************************!*\
  !*** ./src/app/upload-deposite/upload-deposite.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDepositePage": () => (/* binding */ UploadDepositePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _upload_deposite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-deposite.page.html?ngResource */ 48919);
/* harmony import */ var _upload_deposite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-deposite.page.scss?ngResource */ 64231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let UploadDepositePage = class UploadDepositePage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    transfered_successfully() {
        this.route.navigate(['./transfered-successfully']);
    }
};
UploadDepositePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
UploadDepositePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-upload-deposite',
        template: _upload_deposite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upload_deposite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UploadDepositePage);



/***/ }),

/***/ 64231:
/*!**********************************************************************!*\
  !*** ./src/app/upload-deposite/upload-deposite.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.img_container {\n  background: var(--primary);\n  padding-top: 20px;\n  padding-bottom: 10px;\n  display: block;\n  overflow: hidden;\n}\n\n.img_container ion-card {\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  background: var(--secondary);\n  border-radius: 10px;\n  margin-bottom: 13px;\n  box-shadow: none;\n  height: 125px;\n  overflow: hidden;\n  position: relative;\n}\n\n.img_container ion-card .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.img_container ion-card p {\n  color: var(--white);\n  position: relative;\n  z-index: 99;\n  font-size: 0.7rem;\n  margin: 0;\n  padding: 5px 13px 9px 11px;\n  font-weight: 400;\n}\n\n.img_container ion-card p span {\n  color: var(--red_color);\n  font-weight: 500;\n}\n\n.img_container ion-card ion-icon {\n  color: var(--secondary);\n  background: var(--white);\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 60px;\n  text-align: center;\n  height: 60px;\n  line-height: 60px;\n  font-size: 2rem;\n}\n\n.form {\n  width: calc(100% - 30px);\n  padding-top: 21px;\n}\n\n.form ion-list h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 8px;\n}\n\n.form ion-list ion-item {\n  background: var(--white);\n  margin-bottom: 19px;\n}\n\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-black);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0;\n}\n\nion-footer {\n  padding: 10px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1kZXBvc2l0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdJO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURSOztBQUdRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFo7O0FBSVE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFGWjs7QUFJWTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGaEI7O0FBTVE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUpaOztBQVdBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVdRO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVRaOztBQWFRO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBQVhaOztBQWNnQjtFQUNJLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFacEI7O0FBb0JBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FBakJKIiwiZmlsZSI6InVwbG9hZC1kZXBvc2l0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5pbWdfY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEzcHggOXB4IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLmZvcm0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBwYWRkaW5nLXRvcDogMjFweDtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcblxuICAgICAgICAgICAgJi5pdGVtLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 48919:
/*!**********************************************************************!*\
  !*** ./src/app/upload-deposite/upload-deposite.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'make_a_deposite' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n\t<div class=\"img_container\">\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\n\t\t\t<p class=\"d-flex\">{{'front_side' | translate}} <span class=\"end\">{{'delete' | translate}}</span></p>\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<img src=\"assets/imgs/cheque_book.jpg\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</ion-card>\n\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\n\t\t\t<p class=\"d-flex\">{{'back_side' | translate}} <span class=\"end\"></span></p>\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<!--\t\t\t\t<img src=\"assets/imgs/cheque_book.jpg\" class=\"crop_img\">-->\n\t\t\t</div>\n\t\t\t<ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n\t\t</ion-card>\n\t</div>\n\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" interface=\"action-sheet\"  placeholder=\"{{'select_account' | translate}}\">\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'amount' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" placeholder=\"0.00\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"transfered_successfully()\">{{'transfer_now' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_upload-deposite_upload-deposite_module_ts.js.map