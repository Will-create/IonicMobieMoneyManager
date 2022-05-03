"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_fund-transfer-options_fund-transfer-options_module_ts"],{

/***/ 81172:
/*!*******************************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferOptionsPageRoutingModule": () => (/* binding */ FundTransferOptionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer-options.page */ 35650);




const routes = [
    {
        path: '',
        component: _fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_0__.FundTransferOptionsPage
    }
];
let FundTransferOptionsPageRoutingModule = class FundTransferOptionsPageRoutingModule {
};
FundTransferOptionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FundTransferOptionsPageRoutingModule);



/***/ }),

/***/ 12705:
/*!***********************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferOptionsPageModule": () => (/* binding */ FundTransferOptionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fund_transfer_options_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer-options-routing.module */ 81172);
/* harmony import */ var _fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer-options.page */ 35650);








let FundTransferOptionsPageModule = class FundTransferOptionsPageModule {
};
FundTransferOptionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _fund_transfer_options_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundTransferOptionsPageRoutingModule
        ],
        declarations: [_fund_transfer_options_page__WEBPACK_IMPORTED_MODULE_1__.FundTransferOptionsPage]
    })
], FundTransferOptionsPageModule);



/***/ }),

/***/ 35650:
/*!*********************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundTransferOptionsPage": () => (/* binding */ FundTransferOptionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fund_transfer_options_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer-options.page.html?ngResource */ 35366);
/* harmony import */ var _fund_transfer_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer-options.page.scss?ngResource */ 74226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let FundTransferOptionsPage = class FundTransferOptionsPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    fund_transfer() {
        this.route.navigate(['./fund-transfer']);
    }
    imps() {
        this.route.navigate(['./imps']);
    }
};
FundTransferOptionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FundTransferOptionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fund-transfer-options',
        template: _fund_transfer_options_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fund_transfer_options_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FundTransferOptionsPage);



/***/ }),

/***/ 74226:
/*!**********************************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 13px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\nion-list ion-item .icon_box {\n  margin: 0;\n  width: 45px;\n  margin-right: 20px;\n}\nion-list ion-item .text_box {\n  width: 100%;\n}\nion-list ion-item .text_box h2 {\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 1rem;\n}\nion-list ion-item .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmQtdHJhbnNmZXItb3B0aW9ucy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXGZ1bmQtdHJhbnNmZXItb3B0aW9uc1xcZnVuZC10cmFuc2Zlci1vcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0g7QURDRztFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVHO0VBQ0MsV0FBQTtBQ0FKO0FERUk7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBTDtBREdJO0VBQ0Msd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0RMIiwiZmlsZSI6ImZ1bmQtdHJhbnNmZXItb3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdGlvbi1saXN0IHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdG1hcmdpbi10b3A6IDEzcHg7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHJcblx0XHRpb24taXRlbSB7XHJcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcclxuXHRcdFx0cGFkZGluZzogMTVweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCA1cHggNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuXHRcdFx0Lmljb25fYm94IHtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0d2lkdGg6IDQ1cHg7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQudGV4dF9ib3gge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aDMge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0iLCJpb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaWNvbl9ib3gge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAudGV4dF9ib3ggaDMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59Il19 */";

/***/ }),

/***/ 35366:
/*!**********************************************************************************!*\
  !*** ./src/app/fund-transfer-options/fund-transfer-options.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'fund_transfer' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>{{'fund_transfer' | translate}}</h2>\r\n\t\t\t\t<h3>{{'to_other_bank' | translate}}</h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"imps()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>{{'imps' | translate}}</h2>\r\n\t\t\t\t<h3>{{'within_bank' | translate}}</h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>{{'neft' | translate}}</h2>\r\n\t\t\t\t<h3>{{'within_bank' | translate}}</h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>{{'pay' | translate}}</h2>\r\n\t\t\t\t<h3>{{'scan_to_pay' | translate}}</h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"fund_transfer()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<img src=\"assets/imgs/ic_transfer.png\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>{{'rigs' | translate}}</h2>\r\n\t\t\t\t<h3>{{'easiest_mode_of_transfer_money' | translate}}</h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t \r\n\t</ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_fund-transfer-options_fund-transfer-options_module_ts.js.map