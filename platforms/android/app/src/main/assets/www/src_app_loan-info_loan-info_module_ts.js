"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loan-info_loan-info_module_ts"],{

/***/ 8963:
/*!*******************************************************!*\
  !*** ./src/app/loan-info/loan-info-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanInfoPageRoutingModule": () => (/* binding */ LoanInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-info.page */ 63159);




const routes = [
    {
        path: '',
        component: _loan_info_page__WEBPACK_IMPORTED_MODULE_0__.LoanInfoPage
    }
];
let LoanInfoPageRoutingModule = class LoanInfoPageRoutingModule {
};
LoanInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanInfoPageRoutingModule);



/***/ }),

/***/ 37545:
/*!***********************************************!*\
  !*** ./src/app/loan-info/loan-info.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanInfoPageModule": () => (/* binding */ LoanInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-info-routing.module */ 8963);
/* harmony import */ var _loan_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-info.page */ 63159);








let LoanInfoPageModule = class LoanInfoPageModule {
};
LoanInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _loan_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanInfoPageRoutingModule
        ],
        declarations: [_loan_info_page__WEBPACK_IMPORTED_MODULE_1__.LoanInfoPage]
    })
], LoanInfoPageModule);



/***/ }),

/***/ 63159:
/*!*********************************************!*\
  !*** ./src/app/loan-info/loan-info.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanInfoPage": () => (/* binding */ LoanInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-info.page.html?ngResource */ 67282);
/* harmony import */ var _loan_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-info.page.scss?ngResource */ 68496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LoanInfoPage = class LoanInfoPage {
    constructor() { }
    ngOnInit() {
    }
};
LoanInfoPage.ctorParameters = () => [];
LoanInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loan-info',
        template: _loan_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanInfoPage);



/***/ }),

/***/ 68496:
/*!**********************************************************!*\
  !*** ./src/app/loan-info/loan-info.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\nion-header ion-list {\n  margin: 0;\n  background: none;\n  padding: none;\n  padding: 0;\n}\nion-header ion-list ion-item {\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  --background: var(--transparent);\n  background: url('banner_bg.png');\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\nion-header ion-list ion-item .img_box {\n  width: 123px;\n  min-width: 123px;\n  height: 113px;\n  margin: 0;\n}\nion-header ion-list ion-item .item_inner {\n  padding: 0;\n  position: relative;\n  z-index: 99;\n}\nion-header ion-list ion-item .item_inner .text-box {\n  width: 100%;\n  padding: 0 16px;\n}\nion-header ion-list ion-item .item_inner h2 {\n  margin: 0;\n  width: 100%;\n  color: var(--white);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n  font-weight: 400;\n}\nion-header ion-list ion-item .item_inner h3 {\n  color: var(--white);\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n  margin: 0;\n  font-weight: 400;\n}\nion-header ion-list ion-item .item_inner h4 {\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin: 0 -10px;\n}\nion-header ion-list ion-item .item_inner h4 span {\n  background: var(--secondary);\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 3px;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 8px;\n  margin: 0 10px;\n  min-width: 70px;\n}\n.about {\n  padding: 20px 20px 7px 20px;\n  background: var(--white);\n}\n.about p {\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 15px;\n  font-weight: 400;\n  line-height: 19px;\n}\n.form {\n  width: calc(100% - 30px);\n  padding-top: 21px;\n}\n.form ion-list h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 8px;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  margin-bottom: 19px;\n}\nion-footer {\n  padding: 10px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4taW5mby5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXGxvYW4taW5mb1xcbG9hbi1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RSO0FER1E7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREdZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNEaEI7QURJWTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNGaEI7QURJZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0ZwQjtBREtnQjtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIcEI7QURNZ0I7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNKcEI7QURRZ0I7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNOcEI7QURRb0I7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ054QjtBRGVBO0VBQ0ksMkJBQUE7RUFDQSx3QkFBQTtBQ1pKO0FEY0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNaUjtBRGdCQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUNiSjtBRGdCUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNkWjtBRGtCUTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNoQlo7QURxQkE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7QUNsQkoiLCJmaWxlIjoibG9hbi1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2Jhbm5lcl9iZy5wbmcnKTtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjNweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dC1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggN3B4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgcGFkZGluZy10b3A6IDIxcHg7XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWhlYWRlciBpb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iYW5uZXJfYmcucG5nXCIpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24taGVhZGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pbWdfYm94IHtcbiAgd2lkdGg6IDEyM3B4O1xuICBtaW4td2lkdGg6IDEyM3B4O1xuICBoZWlnaHQ6IDExM3B4O1xuICBtYXJnaW46IDA7XG59XG5pb24taGVhZGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbmlvbi1oZWFkZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbmlvbi1oZWFkZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24taGVhZGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWhlYWRlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIG1hcmdpbjogMCAtMTBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuXG4uYWJvdXQge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggN3B4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbi5hYm91dCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgcGFkZGluZy10b3A6IDIxcHg7XG59XG4uZm9ybSBpb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 67282:
/*!**********************************************************!*\
  !*** ./src/app/loan-info/loan-info.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Travel Loan</ion-title>\r\n\t</ion-toolbar>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\r\n\t\t\t\t\t<img src=\"assets/imgs/img_travel.png\" class=\"crop_img\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-box\">\r\n\t\t\t\t\t<h3>Travel for</h3>\r\n\t\t\t\t\t<h2>discover yourself !</h2>\r\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n\t<div class=\"about\">\r\n\t\t<p class=\"animate__animated animate__fadeInUp\">\r\n\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\r\n\t\t</p>\r\n\t\t<p class=\"animate__animated animate__fadeInUp\">\r\n\t\t\tIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'phone_number' | translate}}</h2>\r\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n\t\t\t\t<ion-input type=\"number\" placeholder=\"{{'enter_your_phone_number' | translate}}\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'your_message' | translate}}</h2>\r\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{'enter_your_message' | translate}}\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n\r\n \r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\">{{'i_am_interested' | translate}}</ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_loan-info_loan-info_module_ts.js.map