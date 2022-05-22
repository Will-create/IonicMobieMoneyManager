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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  padding-bottom: 6px;\n  overflow: hidden;\n}\n\n.banner ion-card {\n  background: url('item_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 10px;\n  padding: 15px 15px 10px 15px;\n  margin: 0 auto;\n  margin-bottom: 13px;\n  width: calc(100% - 25px);\n}\n\n.banner ion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.3;\n}\n\n.banner ion-card ion-row {\n  margin: 0 -5px;\n  align-items: flex-end;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 99;\n}\n\n.banner ion-card ion-row ion-col h3 {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 7px;\n  color: var(--text-light);\n}\n\n.banner ion-card ion-row ion-col h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  color: var(--white);\n}\n\n.banner ion-card ion-row ion-col h2 sub {\n  font-weight: 400;\n  font-size: 0.7rem;\n}\n\n.banner ion-card ion-row ion-col h4 {\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list {\n  margin: 0;\n  background: none;\n  padding: none;\n  padding: 0;\n}\n\nion-list h2 {\n  width: calc(100% - 31px);\n  margin: 19px auto 13px auto;\n  font-size: 0.8rem;\n  color: var(--text-light);\n}\n\nion-list ion-item {\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  margin-bottom: 8px;\n  --background: var(--transparent);\n  background: url('banner_bg.png');\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .img_box {\n  width: 123px;\n  min-width: 123px;\n  height: 113px;\n  margin: 0;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  position: relative;\n  z-index: 99;\n}\n\nion-list ion-item .item_inner .text-box {\n  width: 100%;\n  padding: 0 16px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  width: 100%;\n  color: var(--white);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--white);\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n  margin: 0;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin: 0 -10px;\n}\n\nion-list ion-item .item_inner h4 span {\n  background: var(--secondary);\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 3px;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 8px;\n  margin: 0 10px;\n  min-width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQywwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFDQztFQUNDLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBQ0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0g7O0FBR0U7RUFDQyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURIOztBQUtJO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBSEw7O0FBTUk7RUFDQyxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFKTDs7QUFNSztFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUFKTjs7QUFRSTtFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFOTDs7QUFhQTtFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBVkQ7O0FBWUM7RUFDQyx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQVZGOztBQWFDO0VBQ0MsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFhRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBWEg7O0FBY0U7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWkg7O0FBY0c7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQVpKOztBQWVHO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWdCRztFQUNDLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWtCRztFQUNDLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWhCSjs7QUFrQkk7RUFDQyw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWhCTCIsImZpbGUiOiJsb2FuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHR0b3A6IC0zcHg7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYW5uZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0cGFkZGluZy1ib3R0b206IDZweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRpb24tY2FyZCB7XG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pdGVtX2JnLnBuZycpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuXG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZDogIzAwMDtcblx0XHRcdG9wYWNpdHk6IC4zO1xuXG5cdFx0fVxuXG5cdFx0aW9uLXJvdyB7XG5cdFx0XHRtYXJnaW46IDAgLTVweDtcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogOTk7XG5cblx0XHRcdGlvbi1jb2wge1xuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXG5cdFx0XHRcdFx0c3ViIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuN3JlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuaW9uLWxpc3Qge1xuXHRtYXJnaW46IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHBhZGRpbmc6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG5cblx0aDIge1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMXB4KTtcblx0XHRtYXJnaW46IDE5cHggYXV0byAxM3B4IGF1dG87XG5cdFx0Zm9udC1zaXplOiAwLjhyZW07XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHR9XG5cblx0aW9uLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iYW5uZXJfYmcucG5nJyk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XG5cblx0XHQuaW1nX2JveCB7XG5cdFx0XHR3aWR0aDogMTIzcHg7XG5cdFx0XHRtaW4td2lkdGg6IDEyM3B4O1xuXHRcdFx0aGVpZ2h0OiAxMTNweDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cblx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogOTk7XG5cblx0XHRcdC50ZXh0LWJveCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAwIDE2cHhcblx0XHRcdH1cblxuXHRcdFx0aDIge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRmb250LXNpemU6IDEuMjVyZW07XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHR9XG5cblx0XHRcdGgzIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0XHRcdH1cblxuXHRcdFx0aDQge1xuXHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRmb250LXNpemU6IDAuNnJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuXHRcdFx0XHRtYXJnaW46IDAgLTEwcHg7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRmb250LXNpemU6IC43cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjVweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDhweDtcblx0XHRcdFx0XHRtYXJnaW46IDAgMTBweDtcblx0XHRcdFx0XHRtaW4td2lkdGg6IDcwcHg7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdfQ== */";

/***/ }),

/***/ 89347:
/*!************************************************!*\
  !*** ./src/app/loan/loan.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'loans' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<div class=\"banner\">\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\" (click)=\"loan_statement()\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Home Loan</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">1124 2541 2574</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 200000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 1000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\n\t\t<ion-card class=\"animate__animated animate__fadeInUp\" (click)=\"loan_statement()\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Personal Loan</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">8754 1414 2541</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 80000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 700<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\t</div>\n\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'loan_offers_available' | translate}}</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"loan_info()\">\n\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\n\t\t\t\t\t<img src=\"assets/imgs/img_travel.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-box\">\n\t\t\t\t\t<h3>Travel for</h3>\n\t\t\t\t\t<h2>discover yourself !</h2>\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"loan_info()\">\n\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\n\t\t\t\t\t<img src=\"assets/imgs/img_study.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-box\">\n\t\t\t\t\t<h3>Get a Lowest interest rate</h3>\n\t\t\t\t\t<h2>Education Loan</h2>\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_loan_loan_module_ts.js.map