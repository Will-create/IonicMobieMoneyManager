"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_transfered-successfully_transfered-successfully_module_ts"],{

/***/ 9022:
/*!***********************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedSuccessfullyPageRoutingModule": () => (/* binding */ TransferedSuccessfullyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transfered_successfully_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered-successfully.page */ 43063);




const routes = [
    {
        path: '',
        component: _transfered_successfully_page__WEBPACK_IMPORTED_MODULE_0__.TransferedSuccessfullyPage
    }
];
let TransferedSuccessfullyPageRoutingModule = class TransferedSuccessfullyPageRoutingModule {
};
TransferedSuccessfullyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransferedSuccessfullyPageRoutingModule);



/***/ }),

/***/ 2951:
/*!***************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedSuccessfullyPageModule": () => (/* binding */ TransferedSuccessfullyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _transfered_successfully_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered-successfully-routing.module */ 9022);
/* harmony import */ var _transfered_successfully_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfered-successfully.page */ 43063);








let TransferedSuccessfullyPageModule = class TransferedSuccessfullyPageModule {
};
TransferedSuccessfullyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _transfered_successfully_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferedSuccessfullyPageRoutingModule
        ],
        declarations: [_transfered_successfully_page__WEBPACK_IMPORTED_MODULE_1__.TransferedSuccessfullyPage]
    })
], TransferedSuccessfullyPageModule);



/***/ }),

/***/ 43063:
/*!*************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedSuccessfullyPage": () => (/* binding */ TransferedSuccessfullyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transfered_successfully_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered-successfully.page.html?ngResource */ 80603);
/* harmony import */ var _transfered_successfully_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfered-successfully.page.scss?ngResource */ 21617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let TransferedSuccessfullyPage = class TransferedSuccessfullyPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        if (this.router.getCurrentNavigation().extras.state) {
            this.insertion = this.router.getCurrentNavigation().extras.state;
        }
    }
    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
};
TransferedSuccessfullyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TransferedSuccessfullyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-transfered-successfully',
        template: _transfered_successfully_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfered_successfully_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferedSuccessfullyPage);



/***/ }),

/***/ 21617:
/*!**************************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  display: block;\n  padding: 0 15px !important;\n}\n\nion-list {\n  background: none;\n  padding: 0;\n  position: relative;\n  z-index: 999;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\nion-list::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  height: calc(100% - 40px);\n  background: var(--white);\n  border-radius: 10px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);\n  z-index: 9;\n}\n\nion-list .list_header {\n  position: relative;\n  z-index: 999;\n}\n\nion-list .list_header ion-icon {\n  color: var(--white);\n  font-size: 2.5rem;\n  border-radius: 50%;\n  background: var(--secondary);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  display: block;\n  margin: 0 auto;\n}\n\nion-list .list_header h1 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 35px 0 35px 0;\n}\n\nion-list ion-item {\n  margin: 0 auto;\n  padding: 0;\n  width: calc(100% - 70px);\n  margin-bottom: 25px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  z-index: 999;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner ion-row {\n  margin: 0 -5px;\n}\n\nion-list ion-item .item_inner ion-row ion-col {\n  padding: 0 5px;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  margin: 0;\n  font-weight: 400;\n  margin-bottom: 6px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 0.97rem;\n}\n\nion-list p {\n  margin: 0 auto;\n  width: calc(100% - 70px);\n  position: relative;\n  z-index: 99;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  padding-bottom: 10px;\n}\n\nion-list::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90px;\n  background: var(--primary);\n}\n\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n\nion-footer ion-row {\n  margin: 0 -5px;\n}\n\nion-footer ion-row ion-col .button.btn.send_more {\n  --background: #dfeaf2 !important;\n  color: var(--text-black) !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyZWQtc3VjY2Vzc2Z1bGx5LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcdHJhbnNmZXJlZC1zdWNjZXNzZnVsbHlcXHRyYW5zZmVyZWQtc3VjY2Vzc2Z1bGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7QUNBUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0RSOztBREdRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNEWjs7QURJUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0ZaOztBRE1JO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSlI7O0FETVE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0paOztBRE1ZO0VBQ0ksY0FBQTtBQ0poQjs7QURNZ0I7RUFDSSxjQUFBO0FDSnBCOztBRFFZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTmhCOztBRFNZO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNQaEI7O0FEY0k7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNaUjs7QURlSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ2JSOztBRGtCQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtBQ2ZKOztBRGlCSTtFQUNJLGNBQUE7QUNmUjs7QURtQmdCO0VBQ0ksZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDakJwQiIsImZpbGUiOiJ0cmFuc2ZlcmVkLXN1Y2Nlc3NmdWxseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3RfaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDM1cHggMCAzNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk3cmVtO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIC01cHg7XHJcblxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAuYnV0dG9uLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAmLnNlbmRfbW9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZGZlYWYyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1saXN0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHotaW5kZXg6IDk7XG59XG5pb24tbGlzdCAubGlzdF9oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmlvbi1saXN0IC5saXN0X2hlYWRlciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tbGlzdCAubGlzdF9oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAzNXB4IDAgMzVweCAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjk3cmVtO1xufVxuaW9uLWxpc3QgcCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWxpc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uc2VuZF9tb3JlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZGZlYWYyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */";

/***/ }),

/***/ 80603:
/*!**************************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Effectue</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n    <ion-list lines=\"none\">\r\n        <div class=\"list_header ion-text-center animate__animated animate__fadeInUp\">\r\n            <ion-icon class=\"zmdi zmdi-check-all animate__animated animate__zoomIn\"></ion-icon>\r\n            <h1>Operation reussie !!</h1>\r\n        </div>\r\n        <ion-item class=\"animate__animated animate__fadeInUp\">\r\n            <div class=\"item_inner\">\r\n                <h3>Du numero </h3>\r\n                <h2>{{insertion.fromnumber}}</h2>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item class=\"animate__animated animate__fadeInUp\">\r\n            <div class=\"item_inner\">\r\n                <h3>Vers numero </h3>\r\n                <h2>{{insertion.tonumber}}</h2>\r\n            </div>\r\n        </ion-item>\r\n        \r\n        <ion-item class=\"animate__animated animate__fadeInUp\">\r\n            <div class=\"item_inner\">\r\n                <h3>Type</h3>\r\n                <h2>{{insertion.type == 'sending' ? 'Transfert envoye' : 'Transfert recu'}}</h2>\r\n            </div>\r\n        </ion-item>\r\n        <p class=\"animate__animated animate__fadeInUp\">Date {{insertion.datecreated}}</p>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n    <ion-row>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"block\" class=\"btn send_more\" (click)=\"tabs()\">Ok</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_transfered-successfully_transfered-successfully_module_ts.js.map