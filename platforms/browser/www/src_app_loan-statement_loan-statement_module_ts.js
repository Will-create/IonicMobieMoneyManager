"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loan-statement_loan-statement_module_ts"],{

/***/ 11968:
/*!*****************************************************************!*\
  !*** ./src/app/loan-statement/loan-statement-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanStatementPageRoutingModule": () => (/* binding */ LoanStatementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_statement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-statement.page */ 59171);




const routes = [
    {
        path: '',
        component: _loan_statement_page__WEBPACK_IMPORTED_MODULE_0__.LoanStatementPage
    }
];
let LoanStatementPageRoutingModule = class LoanStatementPageRoutingModule {
};
LoanStatementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanStatementPageRoutingModule);



/***/ }),

/***/ 827:
/*!*********************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanStatementPageModule": () => (/* binding */ LoanStatementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-statement-routing.module */ 11968);
/* harmony import */ var _loan_statement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-statement.page */ 59171);








let LoanStatementPageModule = class LoanStatementPageModule {
};
LoanStatementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _loan_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanStatementPageRoutingModule
        ],
        declarations: [_loan_statement_page__WEBPACK_IMPORTED_MODULE_1__.LoanStatementPage]
    })
], LoanStatementPageModule);



/***/ }),

/***/ 59171:
/*!*******************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanStatementPage": () => (/* binding */ LoanStatementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_statement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-statement.page.html?ngResource */ 63048);
/* harmony import */ var _loan_statement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-statement.page.scss?ngResource */ 87067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let LoanStatementPage = class LoanStatementPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    list_of_deposites() {
        this.route.navigate(['./list-of-deposites']);
    }
};
LoanStatementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoanStatementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loan-statement',
        template: _loan_statement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_statement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanStatementPage);



/***/ }),

/***/ 87067:
/*!********************************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  padding-bottom: 6px;\n  overflow: hidden;\n}\n\n.banner ion-card {\n  background: url('item_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 10px;\n  padding: 15px 15px 10px 15px;\n  margin: 0 auto;\n  margin-bottom: 13px;\n  width: calc(100% - 25px);\n}\n\n.banner ion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.3;\n}\n\n.banner ion-card ion-row {\n  margin: 0 -5px;\n  align-items: flex-end;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 99;\n}\n\n.banner ion-card ion-row ion-col h3 {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 7px;\n  color: var(--text-light);\n}\n\n.banner ion-card ion-row ion-col h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  color: var(--white);\n}\n\n.banner ion-card ion-row ion-col h2 sub {\n  font-weight: 400;\n  font-size: 0.7rem;\n}\n\n.banner ion-card ion-row ion-col h4 {\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tc3RhdGVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUVBO0VBQ0MsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBQ0M7RUFDQyw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUNFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNIOztBQUdFO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFESDs7QUFLSTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUhMOztBQU1JO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSkw7O0FBTUs7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FBSk47O0FBUUk7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBTkw7O0FBYUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFWRDs7QUFZQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUM7RUFDQyxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWEY7O0FBY0U7RUFDQyxXQUFBO0FBWkg7O0FBY0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFlRztFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFiSjs7QUFnQks7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFkTiIsImZpbGUiOiJsb2FuLXN0YXRlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuXHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0dG9wOiAtM3B4O1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFubmVyIHtcblx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG5cdHBhZGRpbmctYm90dG9tOiA2cHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0aW9uLWNhcmQge1xuXHRcdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaXRlbV9iZy5wbmcnKTtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0cGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRtYXJnaW4tYm90dG9tOiAxM3B4O1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcblxuXHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGJhY2tncm91bmQ6ICMwMDA7XG5cdFx0XHRvcGFjaXR5OiAuMztcblxuXHRcdH1cblxuXHRcdGlvbi1yb3cge1xuXHRcdFx0bWFyZ2luOiAwIC01cHg7XG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDk5O1xuXG5cdFx0XHRpb24tY29sIHtcblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogN3B4O1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjNyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblxuXHRcdFx0XHRcdHN1YiB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDQge1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1saXN0IHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xuXHRtYXJnaW46IDAgYXV0bzsgXG5cdHBhZGRpbmc6IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0Zm9udC1zaXplOiAuODVyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogMDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XG5cblxuXHRcdC5pdGVtX2lubmVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNnB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoNCB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdCYuZW5kIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59XG4iXX0= */";

/***/ }),

/***/ 63048:
/*!********************************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'loan_statement' | translate}}</ion-title>\n\t</ion-toolbar>\n\t<div class=\"banner\">\n\t\t<ion-card>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Home Loan</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">1124 2541 2574</h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 200000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"5\">\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 1000<sub>.00</sub></h2>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-card>\n\t</div>\n</ion-header>\n\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'recent_transactios' | translate}}</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\n\n\t\t<h2>{{'yesterday_transactios' | translate}}</h2>\n\n\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_loan-statement_loan-statement_module_ts.js.map