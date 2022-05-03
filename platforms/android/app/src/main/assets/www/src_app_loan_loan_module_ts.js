"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loan_loan_module_ts"],{

/***/ 82863:
/*!*********************************************!*\
  !*** ./src/app/loan/loan-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanPageRoutingModule": () => (/* binding */ LoanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan.page */ 17353);




const routes = [
    {
        path: '',
        component: _loan_page__WEBPACK_IMPORTED_MODULE_0__.LoanPage
    }
];
let LoanPageRoutingModule = class LoanPageRoutingModule {
};
LoanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanPageRoutingModule);



/***/ }),

/***/ 59175:
/*!*************************************!*\
  !*** ./src/app/loan/loan.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanPageModule": () => (/* binding */ LoanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-routing.module */ 82863);
/* harmony import */ var _loan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan.page */ 17353);








let LoanPageModule = class LoanPageModule {
};
LoanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _loan_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanPageRoutingModule
        ],
        declarations: [_loan_page__WEBPACK_IMPORTED_MODULE_1__.LoanPage]
    })
], LoanPageModule);



/***/ }),

/***/ 17353:
/*!***********************************!*\
  !*** ./src/app/loan/loan.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanPage": () => (/* binding */ LoanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan.page.html?ngResource */ 89347);
/* harmony import */ var _loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan.page.scss?ngResource */ 83307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let LoanPage = class LoanPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    loan_statement() {
        this.route.navigate(['./loan-statement']);
    }
    loan_info() {
        this.route.navigate(['./loan-info']);
    }
};
LoanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loan',
        template: _loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanPage);



/***/ }),

/***/ 83307:
/*!************************************************!*\
  !*** ./src/app/loan/loan.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  padding-bottom: 6px;\n  overflow: hidden;\n}\n\n.banner ion-card {\n  background: url('item_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 10px;\n  padding: 15px 15px 10px 15px;\n  margin: 0 auto;\n  margin-bottom: 13px;\n  width: calc(100% - 25px);\n}\n\n.banner ion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.3;\n}\n\n.banner ion-card ion-row {\n  margin: 0 -5px;\n  align-items: flex-end;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 99;\n}\n\n.banner ion-card ion-row ion-col h3 {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 7px;\n  color: var(--text-light);\n}\n\n.banner ion-card ion-row ion-col h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  color: var(--white);\n}\n\n.banner ion-card ion-row ion-col h2 sub {\n  font-weight: 400;\n  font-size: 0.7rem;\n}\n\n.banner ion-card ion-row ion-col h4 {\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list {\n  margin: 0;\n  background: none;\n  padding: none;\n  padding: 0;\n}\n\nion-list h2 {\n  width: calc(100% - 31px);\n  margin: 19px auto 13px auto;\n  font-size: 0.8rem;\n  color: var(--text-light);\n}\n\nion-list ion-item {\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  margin-bottom: 8px;\n  --background: var(--transparent);\n  background: url('banner_bg.png');\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .img_box {\n  width: 123px;\n  min-width: 123px;\n  height: 113px;\n  margin: 0;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  position: relative;\n  z-index: 99;\n}\n\nion-list ion-item .item_inner .text-box {\n  width: 100%;\n  padding: 0 16px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  width: 100%;\n  color: var(--white);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--white);\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n  margin: 0;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin: 0 -10px;\n}\n\nion-list ion-item .item_inner h4 span {\n  background: var(--secondary);\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 3px;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 8px;\n  margin: 0 10px;\n  min-width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxsb2FuXFxsb2FuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NIOztBREdFO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNESDs7QURLSTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0hMOztBRE1JO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSkw7O0FETUs7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDSk47O0FEUUk7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDTkw7O0FEYUE7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ1ZEOztBRFlDO0VBQ0Msd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNWRjs7QURhQztFQUNDLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDWEY7O0FEYUU7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ1hIOztBRGNFO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1pIOztBRGNHO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUNaSjs7QURlRztFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURnQkc7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURrQkc7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNoQko7O0FEa0JJO0VBQ0MsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNoQkwiLCJmaWxlIjoibG9hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcblx0dG9wOiAtM3B4O1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdGlvbi1jYXJkIHtcclxuXHRcdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaXRlbV9iZy5wbmcnKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcblxyXG5cdFx0Jjo6YmVmb3JlIHtcclxuXHRcdFx0Y29udGVudDogJyc7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdFx0XHRvcGFjaXR5OiAuMztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLXJvdyB7XHJcblx0XHRcdG1hcmdpbjogMCAtNXB4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cclxuXHRcdFx0aW9uLWNvbCB7XHJcblxyXG5cdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblxyXG5cdFx0XHRcdFx0c3ViIHtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRoNCB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuXHRtYXJnaW46IDA7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRwYWRkaW5nOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcblxyXG5cdGgyIHtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMXB4KTtcclxuXHRcdG1hcmdpbjogMTlweCBhdXRvIDEzcHggYXV0bztcclxuXHRcdGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdH1cclxuXHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2Jhbm5lcl9iZy5wbmcnKTtcclxuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG5cdFx0LmltZ19ib3gge1xyXG5cdFx0XHR3aWR0aDogMTIzcHg7XHJcblx0XHRcdG1pbi13aWR0aDogMTIzcHg7XHJcblx0XHRcdGhlaWdodDogMTEzcHg7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHJcblx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblxyXG5cdFx0XHQudGV4dC1ib3gge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMTZweFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMiB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDMge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoNCB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRcdFx0XHRmb250LXNpemU6IDAuNnJlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuXHRcdFx0XHRtYXJnaW46IDAgLTEwcHg7XHJcblxyXG5cdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjdyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyNXB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI1cHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDhweDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCAxMHB4O1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiA3MHB4O1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmFubmVyIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaXRlbV9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbn1cbi5iYW5uZXIgaW9uLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvcGFjaXR5OiAwLjM7XG59XG4uYmFubmVyIGlvbi1jYXJkIGlvbi1yb3cge1xuICBtYXJnaW46IDAgLTVweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbi5iYW5uZXIgaW9uLWNhcmQgaW9uLXJvdyBpb24tY29sIGgzIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG4uYmFubmVyIGlvbi1jYXJkIGlvbi1yb3cgaW9uLWNvbCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5iYW5uZXIgaW9uLWNhcmQgaW9uLXJvdyBpb24tY29sIGgyIHN1YiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuLmJhbm5lciBpb24tY2FyZCBpb24tcm93IGlvbi1jb2wgaDQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWxpc3QgaDIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzFweCk7XG4gIG1hcmdpbjogMTlweCBhdXRvIDEzcHggYXV0bztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iYW5uZXJfYmcucG5nXCIpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMjNweDtcbiAgbWluLXdpZHRoOiAxMjNweDtcbiAgaGVpZ2h0OiAxMTNweDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIG1hcmdpbjogMCAtMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIG1pbi13aWR0aDogNzBweDtcbn0iXX0= */";

/***/ }),

/***/ 89347:
/*!************************************************!*\
  !*** ./src/app/loan/loan.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'loans' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<div class=\"banner\">\r\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\" (click)=\"loan_statement()\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"7\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Home Loan</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">1124 2541 2574</h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"5\">\r\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"7\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 200000<sub>.00</sub></h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"5\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 1000<sub>.00</sub></h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-card>\r\n\r\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\" (click)=\"loan_statement()\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"7\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Personal Loan</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">8754 1414 2541</h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"5\">\r\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"7\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 80000<sub>.00</sub></h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"5\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 700<sub>.00</sub></h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-card>\r\n\t</div>\r\n\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'loan_offers_available' | translate}}</h2>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"loan_info()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\r\n\t\t\t\t\t<img src=\"assets/imgs/img_travel.png\" class=\"crop_img\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-box\">\r\n\t\t\t\t\t<h3>Travel for</h3>\r\n\t\t\t\t\t<h2>discover yourself !</h2>\r\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"loan_info()\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\r\n\t\t\t\t\t<img src=\"assets/imgs/img_study.png\" class=\"crop_img\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-box\">\r\n\t\t\t\t\t<h3>Get a Lowest interest rate</h3>\r\n\t\t\t\t\t<h2>Education Loan</h2>\r\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_loan_loan_module_ts.js.map