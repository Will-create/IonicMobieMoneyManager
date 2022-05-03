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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  padding-bottom: 6px;\n  overflow: hidden;\n}\n\n.banner ion-card {\n  background: url('item_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 10px;\n  padding: 15px 15px 10px 15px;\n  margin: 0 auto;\n  margin-bottom: 13px;\n  width: calc(100% - 25px);\n}\n\n.banner ion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.3;\n}\n\n.banner ion-card ion-row {\n  margin: 0 -5px;\n  align-items: flex-end;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 99;\n}\n\n.banner ion-card ion-row ion-col h3 {\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 7px;\n  color: var(--text-light);\n}\n\n.banner ion-card ion-row ion-col h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  color: var(--white);\n}\n\n.banner ion-card ion-row ion-col h2 sub {\n  font-weight: 400;\n  font-size: 0.7rem;\n}\n\n.banner ion-card ion-row ion-col h4 {\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tc3RhdGVtZW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcbG9hbi1zdGF0ZW1lbnRcXGxvYW4tc3RhdGVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NIOztBREdFO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNESDs7QURLSTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0hMOztBRE1JO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSkw7O0FETUs7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDSk47O0FEUUk7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDTkw7O0FEYUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNWRDs7QURZQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUM7RUFDQyxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWEY7O0FEY0U7RUFDQyxXQUFBO0FDWkg7O0FEY0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNaSjs7QURlRztFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNiSjs7QURnQks7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNkTiIsImZpbGUiOiJsb2FuLXN0YXRlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcblx0dG9wOiAtM3B4O1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdGlvbi1jYXJkIHtcclxuXHRcdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaXRlbV9iZy5wbmcnKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcblxyXG5cdFx0Jjo6YmVmb3JlIHtcclxuXHRcdFx0Y29udGVudDogJyc7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdFx0XHRvcGFjaXR5OiAuMztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLXJvdyB7XHJcblx0XHRcdG1hcmdpbjogMCAtNXB4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cclxuXHRcdFx0aW9uLWNvbCB7XHJcblxyXG5cdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblxyXG5cdFx0XHRcdFx0c3ViIHtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRoNCB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XHJcblx0bWFyZ2luOiAwIGF1dG87IFxyXG5cdHBhZGRpbmc6IDA7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0Zm9udC1zaXplOiAuODVyZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0fVxyXG5cclxuXHRpb24taXRlbSB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHJcblxyXG5cdFx0Lml0ZW1faW5uZXIge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdGgzIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDZweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDQge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cclxuXHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdCYuZW5kIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhbm5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJhbm5lciBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2l0ZW1fYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG59XG4uYmFubmVyIGlvbi1jYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4zO1xufVxuLmJhbm5lciBpb24tY2FyZCBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG4uYmFubmVyIGlvbi1jYXJkIGlvbi1yb3cgaW9uLWNvbCBoMyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuLmJhbm5lciBpb24tY2FyZCBpb24tcm93IGlvbi1jb2wgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4uYmFubmVyIGlvbi1jYXJkIGlvbi1yb3cgaW9uLWNvbCBoMiBzdWIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5iYW5uZXIgaW9uLWNhcmQgaW9uLXJvdyBpb24tY29sIGg0IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHNwYW4uZW5kIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcbn0iXX0= */";

/***/ }),

/***/ 63048:
/*!********************************************************************!*\
  !*** ./src/app/loan-statement/loan-statement.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'loan_statement' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n\t<div class=\"banner\">\r\n\t\t<ion-card>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"7\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Home Loan</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">1124 2541 2574</h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"5\">\r\n\t\t\t\t\t<h4 class=\"animate__animated animate__fadeInUp\">{{'view_statement' | translate}}</h4>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"7\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'due_amount' | translate}}</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 200000<sub>.00</sub></h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"5\">\r\n\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'emi' | translate}}</h3>\r\n\t\t\t\t\t<h2 class=\"animate__animated animate__fadeInUp\">$ 1000<sub>.00</sub></h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-card>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'recent_transactios' | translate}}</h2>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\r\n\t\t<h2>{{'yesterday_transactios' | translate}}</h2>\r\n\r\n\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t</ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_loan-statement_loan-statement_module_ts.js.map