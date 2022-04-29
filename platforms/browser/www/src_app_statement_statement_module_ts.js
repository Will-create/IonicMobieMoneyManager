"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_statement_statement_module_ts"],{

/***/ 84862:
/*!*******************************************************!*\
  !*** ./src/app/statement/statement-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatementPageRoutingModule": () => (/* binding */ StatementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _statement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement.page */ 21333);




const routes = [
    {
        path: '',
        component: _statement_page__WEBPACK_IMPORTED_MODULE_0__.StatementPage
    }
];
let StatementPageRoutingModule = class StatementPageRoutingModule {
};
StatementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StatementPageRoutingModule);



/***/ }),

/***/ 48925:
/*!***********************************************!*\
  !*** ./src/app/statement/statement.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatementPageModule": () => (/* binding */ StatementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _statement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement-routing.module */ 84862);
/* harmony import */ var _statement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement.page */ 21333);








let StatementPageModule = class StatementPageModule {
};
StatementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _statement_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatementPageRoutingModule
        ],
        declarations: [_statement_page__WEBPACK_IMPORTED_MODULE_1__.StatementPage]
    })
], StatementPageModule);



/***/ }),

/***/ 21333:
/*!*********************************************!*\
  !*** ./src/app/statement/statement.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatementPage": () => (/* binding */ StatementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _statement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement.page.html?ngResource */ 7858);
/* harmony import */ var _statement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement.page.scss?ngResource */ 39399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let StatementPage = class StatementPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    list_of_deposites() {
        this.route.navigate(['./list-of-deposites']);
    }
};
StatementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
StatementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-statement',
        template: _statement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_statement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatementPage);



/***/ }),

/***/ 39399:
/*!**********************************************************!*\
  !*** ./src/app/statement/statement.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 25px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFFQTtFQUNDLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUNDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQztFQUNDLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHRTtFQUNDLFdBQUE7QUFESDs7QUFHRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlHO0VBQ0Msd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUtLO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSE4iLCJmaWxlIjoic3RhdGVtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHR0b3A6IC0zcHg7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xuXHRtYXJnaW46IDAgYXV0bzsgXG5cdHBhZGRpbmc6IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0Zm9udC1zaXplOiAuODVyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogMDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XG5cblxuXHRcdC5pdGVtX2lubmVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNnB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoNCB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdCYuZW5kIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59Il19 */";

/***/ }),

/***/ 7858:
/*!**********************************************************!*\
  !*** ./src/app/statement/statement.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'statement' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'recent_transactios' | translate}}</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\n\n\t\t<h2>{{'yesterday_transactios' | translate}}</h2>\n\n\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3>EMI Debited</h3>\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\n\t\t\t</div>\n\t\t</ion-item>\n\n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_statement_statement_module_ts.js.map