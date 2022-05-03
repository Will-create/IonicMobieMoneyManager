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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 25px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXHN0YXRlbWVudFxcc3RhdGVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVDO0VBQ0MsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdFO0VBQ0MsV0FBQTtBQ0RIOztBREdHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDREo7O0FESUc7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRko7O0FES0s7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNITiIsImZpbGUiOiJzdGF0ZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG5cdHRvcDogLTNweDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcclxuXHRtYXJnaW46IDAgYXV0bzsgXHJcblx0cGFkZGluZzogMDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRmb250LXNpemU6IC44NXJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcblxyXG5cdGlvbi1pdGVtIHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuXHJcblx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0aDMge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoNCB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblxyXG5cdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0Ji5lbmQge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45NXJlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXJlZF9jb2xvcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQgc3Bhbi5lbmQge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xufSJdfQ== */";

/***/ }),

/***/ 7858:
/*!**********************************************************!*\
  !*** ./src/app/statement/statement.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'statement' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'recent_transactios' | translate}}</h2>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\r\n\t\t<h2>{{'yesterday_transactios' | translate}}</h2>\r\n\r\n\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"list_of_deposites()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3>EMI Debited</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">12 June, 2019 <span class=\"end\">$ 1000.00</span></h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t</ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_statement_statement_module_ts.js.map