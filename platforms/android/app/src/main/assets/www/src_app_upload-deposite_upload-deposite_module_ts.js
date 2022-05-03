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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.img_container {\n  background: var(--primary);\n  padding-top: 20px;\n  padding-bottom: 10px;\n  display: block;\n  overflow: hidden;\n}\n\n.img_container ion-card {\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  background: var(--secondary);\n  border-radius: 10px;\n  margin-bottom: 13px;\n  box-shadow: none;\n  height: 125px;\n  overflow: hidden;\n  position: relative;\n}\n\n.img_container ion-card .img_box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.img_container ion-card p {\n  color: var(--white);\n  position: relative;\n  z-index: 99;\n  font-size: 0.7rem;\n  margin: 0;\n  padding: 5px 13px 9px 11px;\n  font-weight: 400;\n}\n\n.img_container ion-card p span {\n  color: var(--red_color);\n  font-weight: 500;\n}\n\n.img_container ion-card ion-icon {\n  color: var(--secondary);\n  background: var(--white);\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 60px;\n  text-align: center;\n  height: 60px;\n  line-height: 60px;\n  font-size: 2rem;\n}\n\n.form {\n  width: calc(100% - 30px);\n  padding-top: 21px;\n}\n\n.form ion-list h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 8px;\n}\n\n.form ion-list ion-item {\n  background: var(--white);\n  margin-bottom: 19px;\n}\n\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-black);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0;\n}\n\nion-footer {\n  padding: 10px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1kZXBvc2l0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXHVwbG9hZC1kZXBvc2l0ZVxcdXBsb2FkLWRlcG9zaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDREo7O0FER0k7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNEWjs7QURJUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0ZaOztBRElZO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQ0ZoQjs7QURNUTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSlo7O0FEV0E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEV1E7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVFo7O0FEYVE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FDWFo7O0FEY2dCO0VBQ0ksaURBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ1pwQjs7QURvQkE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7QUNqQkoiLCJmaWxlIjoidXBsb2FkLWRlcG9zaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWdfY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxM3B4IDlweCAxMXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAyMXB4O1xyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcblxyXG4gICAgICAgICAgICAmLml0ZW0tc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWdfY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nX2NvbnRhaW5lciBpb24tY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogMTI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWdfY29udGFpbmVyIGlvbi1jYXJkIC5pbWdfYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1nX2NvbnRhaW5lciBpb24tY2FyZCBwIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDEzcHggOXB4IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uaW1nX2NvbnRhaW5lciBpb24tY2FyZCBwIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pbWdfY29udGFpbmVyIGlvbi1jYXJkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBwYWRkaW5nLXRvcDogMjFweDtcbn1cbi5mb3JtIGlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS1zZWxlY3QgaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 48919:
/*!**********************************************************************!*\
  !*** ./src/app/upload-deposite/upload-deposite.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'make_a_deposite' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n\t<div class=\"img_container\">\r\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\r\n\t\t\t<p class=\"d-flex\">{{'front_side' | translate}} <span class=\"end\">{{'delete' | translate}}</span></p>\r\n\t\t\t<div class=\"img_box center_img\">\r\n\t\t\t\t<img src=\"assets/imgs/cheque_book.jpg\" class=\"crop_img\">\r\n\t\t\t</div>\r\n\t\t</ion-card>\r\n\r\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\r\n\t\t\t<p class=\"d-flex\">{{'back_side' | translate}} <span class=\"end\"></span></p>\r\n\t\t\t<div class=\"img_box center_img\">\r\n\t\t\t\t<!--\t\t\t\t<img src=\"assets/imgs/cheque_book.jpg\" class=\"crop_img\">-->\r\n\t\t\t</div>\r\n\t\t\t<ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\r\n\t\t</ion-card>\r\n\t</div>\r\n\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h2>\r\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n\t\t\t\t<ion-select mode=\"md\" interface=\"action-sheet\"  placeholder=\"{{'select_account' | translate}}\">\r\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-item>\r\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'amount' | translate}}</h2>\r\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n\t\t\t\t<ion-input type=\"number\" placeholder=\"0.00\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"transfered_successfully()\">{{'transfer_now' | translate}}</ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_upload-deposite_upload-deposite_module_ts.js.map