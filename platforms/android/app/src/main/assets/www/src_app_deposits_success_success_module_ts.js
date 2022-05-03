"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_deposits_success_success_module_ts"],{

/***/ 38430:
/*!************************************************************!*\
  !*** ./src/app/deposits/success/success-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageRoutingModule": () => (/* binding */ SuccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.page */ 81945);




const routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_0__.SuccessPage
    }
];
let SuccessPageRoutingModule = class SuccessPageRoutingModule {
};
SuccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuccessPageRoutingModule);



/***/ }),

/***/ 56987:
/*!****************************************************!*\
  !*** ./src/app/deposits/success/success.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageModule": () => (/* binding */ SuccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-routing.module */ 38430);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page */ 81945);








let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _success_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuccessPageRoutingModule
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_1__.SuccessPage]
    })
], SuccessPageModule);



/***/ }),

/***/ 81945:
/*!**************************************************!*\
  !*** ./src/app/deposits/success/success.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPage": () => (/* binding */ SuccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _success_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.page.html?ngResource */ 7220);
/* harmony import */ var _success_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page.scss?ngResource */ 11576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SuccessPage = class SuccessPage {
    constructor() { }
    ngOnInit() {
    }
    tabs() {
    }
};
SuccessPage.ctorParameters = () => [];
SuccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-success',
        template: _success_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_success_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SuccessPage);



/***/ }),

/***/ 11576:
/*!***************************************************************!*\
  !*** ./src/app/deposits/success/success.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  display: block;\n  padding: 0 15px !important;\n}\n\nion-list {\n  background: none;\n  padding: 0;\n  position: relative;\n  z-index: 999;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\nion-list::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  height: calc(100% - 40px);\n  background: var(--white);\n  border-radius: 10px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);\n  z-index: 9;\n}\n\nion-list .list_header {\n  position: relative;\n  z-index: 999;\n}\n\nion-list .list_header ion-icon {\n  color: var(--white);\n  font-size: 2.5rem;\n  border-radius: 50%;\n  background: var(--secondary);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  display: block;\n  margin: 0 auto;\n}\n\nion-list .list_header h1 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 35px 0 35px 0;\n}\n\nion-list ion-item {\n  margin: 0 auto;\n  padding: 0;\n  width: calc(100% - 70px);\n  margin-bottom: 25px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  z-index: 999;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner ion-row {\n  margin: 0 -5px;\n}\n\nion-list ion-item .item_inner ion-row ion-col {\n  padding: 0 5px;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  margin: 0;\n  font-weight: 400;\n  margin-bottom: 6px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 0.97rem;\n}\n\nion-list p {\n  margin: 0 auto;\n  width: calc(100% - 70px);\n  position: relative;\n  z-index: 99;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  padding-bottom: 10px;\n}\n\nion-list::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90px;\n  background: var(--primary);\n}\n\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n\nion-footer ion-row {\n  margin: 0 -5px;\n}\n\nion-footer ion-row ion-col .button.btn.send_more {\n  --background: #dfeaf2 !important;\n  color: var(--text-black) !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcZGVwb3NpdHNcXHN1Y2Nlc3NcXHN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRFI7O0FER1E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RaOztBRElRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRlo7O0FETUk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNKUjs7QURNUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDSlo7O0FETVk7RUFDSSxjQUFBO0FDSmhCOztBRE1nQjtFQUNJLGNBQUE7QUNKcEI7O0FEUVk7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNOaEI7O0FEU1k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BoQjs7QURjSTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1pSOztBRGVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDYlI7O0FEa0JBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FDZko7O0FEaUJJO0VBQ0ksY0FBQTtBQ2ZSOztBRG1CZ0I7RUFDSSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUNqQnBCIiwiZmlsZSI6InN1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0X2hlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDAgMzVweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG5cclxuICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45N3JlbTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xyXG5cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIG1hcmdpbjogMCAtNXB4O1xyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgLmJ1dHRvbi5idG4ge1xyXG4gICAgICAgICAgICAgICAgJi5zZW5kX21vcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2RmZWFmMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tbGlzdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB6LWluZGV4OiA5O1xufVxuaW9uLWxpc3QgLmxpc3RfaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24tbGlzdCAubGlzdF9oZWFkZXIgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWxpc3QgLmxpc3RfaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMzVweCAwIDM1cHggMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45N3JlbTtcbn1cbmlvbi1saXN0IHAge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1saXN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cge1xuICBtYXJnaW46IDAgLTVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIC5idXR0b24uYnRuLnNlbmRfbW9yZSB7XG4gIC0tYmFja2dyb3VuZDogI2RmZWFmMiAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";

/***/ }),

/***/ 7220:
/*!***************************************************************!*\
  !*** ./src/app/deposits/success/success.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-title>{{'done' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n  <ion-list lines=\"none\">\r\n      <div class=\"list_header ion-text-center animate__animated animate__fadeInUp\">\r\n          <ion-icon class=\"zmdi zmdi-check-all animate__animated animate__zoomIn\"></ion-icon>\r\n          <h1>{{'transfered_successfull' | translate}} !!</h1>\r\n      </div>\r\n      <ion-item class=\"animate__animated animate__fadeInUp\">\r\n          <div class=\"item_inner\">\r\n              <h3>{{'transfered_to' | translate}}</h3>\r\n              <h2>Emilli Willimoson</h2>\r\n          </div>\r\n      </ion-item>\r\n      <ion-item class=\"animate__animated animate__fadeInUp\">\r\n          <div class=\"item_inner\">\r\n              <h3>{{'from' | translate}}</h3>\r\n              <h2>SB 1241 2145 2142 1145</h2>\r\n          </div>\r\n      </ion-item>\r\n      <ion-item class=\"animate__animated animate__fadeInUp\">\r\n          <div class=\"item_inner\">\r\n              <ion-row>\r\n                  <ion-col size=\"6\">\r\n                      <h3>{{'amount_transfered' | translate}}</h3>\r\n                      <h2>$ 550<sub>.00</sub></h2>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                      <h3>{{'payment_mode' | translate}}</h3>\r\n                      <h2>IMPS</h2>\r\n                  </ion-col>\r\n              </ion-row>\r\n          </div>\r\n      </ion-item>\r\n      <ion-item class=\"animate__animated animate__fadeInUp\">\r\n          <div class=\"item_inner\">\r\n              <h3>{{'remark' | translate}}</h3>\r\n              <h2>Send for Home Rent.</h2>\r\n          </div>\r\n      </ion-item>\r\n      <p class=\"animate__animated animate__fadeInUp\">{{'sent_on' | translate}} 15 June, 2019 11:49 am</p>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n  <ion-row>\r\n      <ion-col size=\"6\">\r\n          <ion-button size=\"large\" shape=\"block\" class=\"btn send_more\" (click)=\"tabs()\">{{'send_more' | translate}}</ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n          <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"tabs()\">{{'back_to_home' | translate}}</ion-button>\r\n      </ion-col>\r\n  </ion-row>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_deposits_success_success_module_ts.js.map