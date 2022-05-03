"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_imps_imps_module_ts"],{

/***/ 9968:
/*!*********************************************!*\
  !*** ./src/app/imps/imps-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpsPageRoutingModule": () => (/* binding */ ImpsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _imps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imps.page */ 4630);




const routes = [
    {
        path: '',
        component: _imps_page__WEBPACK_IMPORTED_MODULE_0__.ImpsPage
    }
];
let ImpsPageRoutingModule = class ImpsPageRoutingModule {
};
ImpsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImpsPageRoutingModule);



/***/ }),

/***/ 95329:
/*!*************************************!*\
  !*** ./src/app/imps/imps.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpsPageModule": () => (/* binding */ ImpsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _imps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imps-routing.module */ 9968);
/* harmony import */ var _imps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imps.page */ 4630);








let ImpsPageModule = class ImpsPageModule {
};
ImpsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _imps_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImpsPageRoutingModule
        ],
        declarations: [_imps_page__WEBPACK_IMPORTED_MODULE_1__.ImpsPage]
    })
], ImpsPageModule);



/***/ }),

/***/ 4630:
/*!***********************************!*\
  !*** ./src/app/imps/imps.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpsPage": () => (/* binding */ ImpsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _imps_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imps.page.html?ngResource */ 87490);
/* harmony import */ var _imps_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imps.page.scss?ngResource */ 24227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ImpsPage = class ImpsPage {
    constructor(route) {
        this.route = route;
        this.from_account = "1";
        this.account_holder_name = "1";
    }
    ngOnInit() {
    }
    transfered_successfully() {
        this.route.navigate(['./transfered-successfully']);
    }
};
ImpsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ImpsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-imps',
        template: _imps_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_imps_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImpsPage);



/***/ }),

/***/ 24227:
/*!************************************************!*\
  !*** ./src/app/imps/imps.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title h2 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 17px 0;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcHMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxpbXBzXFxpbXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FSO0FEQ1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDWjtBRElBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER1E7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0RaO0FERVk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FDQWhCO0FER1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRFo7QURHZ0I7RUFDSSxpREFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0RwQjtBREtnQjtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNIcEI7QURVQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtBQ1BKIiwiZmlsZSI6ImltcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE3cHggMDtcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgICAgICAgICAgJi5pdGVtLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5pdGVtLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDIge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxN3B4IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBoMiBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLmZvcm0gaW9uLWxpc3QgaDIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS1zZWxlY3QgaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDAgMThweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLml0ZW0taW5wdXQgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 87490:
/*!************************************************!*\
  !*** ./src/app/imps/imps.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h2>\r\n                {{'imps' | translate}}\r\n                <small>{{'quick_transfer_mode' | translate}}</small>\r\n            </h2>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div class=\"form\">\r\n        <ion-list lines=\"none\">\r\n            <h2 class=\"animate__animated animate__fadeInUp\">{{'from_account' | translate}}</h2>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-select mode=\"md\" [(ngModel)]=\"from_account\" interface=\"action-sheet\">\r\n                    <ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\r\n                    <ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\r\n                    <ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <h2 class=\"animate__animated animate__fadeInUp\">{{'account_holder_name' | translate}}</h2>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-select [(ngModel)]=\"account_holder_name\" interface=\"action-sheet\" mode=\"md\">\r\n                    <ion-select-option value=\"1\">ABC PVT.LTD</ion-select-option>\r\n                    <ion-select-option value=\"2\">Sam Smith</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'account_number' | translate}}</h2>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"text\" placeholder=\"1245 8547 9654 1241\"></ion-input>\r\n            </ion-item>\r\n\r\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'bank_name' | translate}}</h2>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"text\" placeholder=\"HXDC Bank Of India\"></ion-input>\r\n            </ion-item>\r\n\r\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'ifsc_code' | translate}}</h2>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"text\" placeholder=\"HXDC000012121\"></ion-input>\r\n            </ion-item>\r\n\r\n            <h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'enter_amount' | translate}} <span class=\"end\">100 500 1000 2000</span></h2>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"number\" placeholder=\"0.00\"></ion-input>\r\n            </ion-item>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n    <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"transfered_successfully()\">{{'transfer_now' | translate}}</ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_imps_imps_module_ts.js.map