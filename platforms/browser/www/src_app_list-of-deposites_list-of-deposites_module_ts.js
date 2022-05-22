"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_list-of-deposites_list-of-deposites_module_ts"],{

/***/ 68682:
/*!***********************************************************************!*\
  !*** ./src/app/list-of-deposites/list-of-deposites-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOfDepositesPageRoutingModule": () => (/* binding */ ListOfDepositesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_of_deposites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-of-deposites.page */ 64027);




const routes = [
    {
        path: '',
        component: _list_of_deposites_page__WEBPACK_IMPORTED_MODULE_0__.ListOfDepositesPage
    }
];
let ListOfDepositesPageRoutingModule = class ListOfDepositesPageRoutingModule {
};
ListOfDepositesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListOfDepositesPageRoutingModule);



/***/ }),

/***/ 53130:
/*!***************************************************************!*\
  !*** ./src/app/list-of-deposites/list-of-deposites.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOfDepositesPageModule": () => (/* binding */ ListOfDepositesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _list_of_deposites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-of-deposites-routing.module */ 68682);
/* harmony import */ var _list_of_deposites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-of-deposites.page */ 64027);








let ListOfDepositesPageModule = class ListOfDepositesPageModule {
};
ListOfDepositesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _list_of_deposites_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListOfDepositesPageRoutingModule
        ],
        declarations: [_list_of_deposites_page__WEBPACK_IMPORTED_MODULE_1__.ListOfDepositesPage]
    })
], ListOfDepositesPageModule);



/***/ }),

/***/ 64027:
/*!*************************************************************!*\
  !*** ./src/app/list-of-deposites/list-of-deposites.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOfDepositesPage": () => (/* binding */ ListOfDepositesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_of_deposites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-of-deposites.page.html?ngResource */ 97367);
/* harmony import */ var _list_of_deposites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-of-deposites.page.scss?ngResource */ 22997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ListOfDepositesPage = class ListOfDepositesPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    upload_deposite() {
        this.route.navigate(['./upload-deposite']);
    }
};
ListOfDepositesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ListOfDepositesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-list-of-deposites',
        template: _list_of_deposites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_of_deposites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListOfDepositesPage);



/***/ }),

/***/ 22997:
/*!**************************************************************************!*\
  !*** ./src/app/list-of-deposites/list-of-deposites.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: var(--bg-color);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\nion-header .button.btn {\n  width: calc(100% - 22px);\n  margin: 0 auto !important;\n  margin-top: 11px !important;\n  font-size: 1rem !important;\n}\nion-header .button.btn ion-icon {\n  font-size: 1.1rem;\n}\nion-list {\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  margin-top: 12px;\n  background: none;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 18px;\n  padding-top: 5px;\n}\nion-list ion-item {\n  padding: 9px 12px 5px 12px;\n  box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.5);\n  margin-bottom: 13px;\n  border-radius: 10px;\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item ion-row {\n  margin-bottom: 3px;\n}\nion-list ion-item ion-row ion-col h4 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\nion-list ion-item ion-row ion-col h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 5px;\n}\nion-list ion-item ion-row ion-col h5 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\nion-list ion-item.panding ion-row ion-col h5 {\n  color: var(--secondary);\n}\nion-list ion-item.deposited ion-row ion-col h5 {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb2YtZGVwb3NpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUFBO0FBQ0Q7QUFDQztFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUM7RUFDQyx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQUFGO0FBRUU7RUFDQyxpQkFBQTtBQUFIO0FBTUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSEQ7QUFLQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQztFQUNDLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1FO0VBQ0MsV0FBQTtBQUpIO0FBT0U7RUFDQyxrQkFBQTtBQUxIO0FBUUk7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQU5MO0FBVUk7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFSTDtBQVdJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQVRMO0FBY0U7RUFDQyx1QkFBQTtBQVpIO0FBZUU7RUFDQyx1QkFBQTtBQWJIIiwiZmlsZSI6Imxpc3Qtb2YtZGVwb3NpdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG5cblx0aW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcblx0XHRwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0XHR0b3A6IC0zcHg7XG5cdFx0bGVmdDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuYnV0dG9uLmJ0biB7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xuXHRcdG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXRvcDogMTFweCAhaW1wb3J0YW50O1xuXHRcdGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuXG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XG5cdFx0fVxuXG5cdH1cbn1cblxuaW9uLWxpc3Qge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXG5cdGgyIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdGZvbnQtc2l6ZTogMC43NXJlbTtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHBhZGRpbmctYm90dG9tOiAxOHB4O1xuXHRcdHBhZGRpbmctdG9wOiA1cHg7XG5cdH1cblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogOXB4IDEycHggNXB4IDEycHg7XG5cdFx0Ym94LXNoYWRvdzogMCAycHggNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XG5cblx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cblx0XHRpb24tcm93IHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDNweDtcblxuXHRcdFx0aW9uLWNvbCB7XG5cdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjc1cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGg1IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLnBhbmRpbmcgaW9uLXJvdyBpb24tY29sIGg1IHtcblx0XHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuXHRcdH1cblxuXHRcdCYuZGVwb3NpdGVkIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG5cdFx0XHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 97367:
/*!**************************************************************************!*\
  !*** ./src/app/list-of-deposites/list-of-deposites.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Travel Loan</ion-title>\n\t</ion-toolbar>\n\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"upload_deposite()\">\n\t\t<ion-icon class=\"zmdi zmdi-camera\" slot=\"start\"></ion-icon>\n\t\t{{'upload_deposite' | translate}}\n\t</ion-button>\n</ion-header>\n\n<ion-content fullscreen class=\"bg_color\">\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'pending_deposites' | translate}}</h2>\n\t\t<ion-item class=\"panding animate__animated animate__fadeInUp\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'pending' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"panding animate__animated animate__fadeInUp\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'pending' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\n\t\t<h2>{{'past_deposited' | translate}}</h2>\n\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_list-of-deposites_list-of-deposites_module_ts.js.map