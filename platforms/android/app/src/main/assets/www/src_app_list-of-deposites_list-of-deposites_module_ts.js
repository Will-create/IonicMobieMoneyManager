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

module.exports = "ion-header {\n  background: var(--bg-color);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\nion-header .button.btn {\n  width: calc(100% - 22px);\n  margin: 0 auto !important;\n  margin-top: 11px !important;\n  font-size: 1rem !important;\n}\nion-header .button.btn ion-icon {\n  font-size: 1.1rem;\n}\nion-list {\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  margin-top: 12px;\n  background: none;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 18px;\n  padding-top: 5px;\n}\nion-list ion-item {\n  padding: 9px 12px 5px 12px;\n  box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.5);\n  margin-bottom: 13px;\n  border-radius: 10px;\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item ion-row {\n  margin-bottom: 3px;\n}\nion-list ion-item ion-row ion-col h4 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\nion-list ion-item ion-row ion-col h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 5px;\n}\nion-list ion-item ion-row ion-col h5 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\nion-list ion-item.panding ion-row ion-col h5 {\n  color: var(--secondary);\n}\nion-list ion-item.deposited ion-row ion-col h5 {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb2YtZGVwb3NpdGVzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcbGlzdC1vZi1kZXBvc2l0ZXNcXGxpc3Qtb2YtZGVwb3NpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUFBO0FDQ0Q7QURDQztFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUM7RUFDQyx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ0FGO0FERUU7RUFDQyxpQkFBQTtBQ0FIO0FETUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEQ7QURLQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDSEY7QURNQztFQUNDLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNKRjtBRE1FO0VBQ0MsV0FBQTtBQ0pIO0FET0U7RUFDQyxrQkFBQTtBQ0xIO0FEUUk7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ05MO0FEVUk7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNSTDtBRFdJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ1RMO0FEY0U7RUFDQyx1QkFBQTtBQ1pIO0FEZUU7RUFDQyx1QkFBQTtBQ2JIIiwiZmlsZSI6Imxpc3Qtb2YtZGVwb3NpdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHJcblx0aW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuXHRcdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcblx0XHR0b3A6IC0zcHg7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uLmJ0biB7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjJweCk7XHJcblx0XHRtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXRvcDogMTFweCAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcblxyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDEycHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxOHB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDVweDtcclxuXHR9XHJcblxyXG5cdGlvbi1pdGVtIHtcclxuXHRcdHBhZGRpbmc6IDlweCAxMnB4IDVweCAxMnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMCAycHggNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG5cdFx0Lml0ZW1faW5uZXIge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHRpb24tcm93IHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogM3B4O1xyXG5cclxuXHRcdFx0aW9uLWNvbCB7XHJcblx0XHRcdFx0aDQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aDMge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuNzVyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aDUge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmLnBhbmRpbmcgaW9uLXJvdyBpb24tY29sIGg1IHtcclxuXHRcdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5kZXBvc2l0ZWQgaW9uLXJvdyBpb24tY29sIGg1IHtcclxuXHRcdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWhlYWRlciAuYnV0dG9uLmJ0biB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTFweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgLmJ1dHRvbi5idG4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogOXB4IDEycHggNXB4IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tcm93IGlvbi1jb2wgaDQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJvdyBpb24tY29sIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG59XG5pb24tbGlzdCBpb24taXRlbS5wYW5kaW5nIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uZGVwb3NpdGVkIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufSJdfQ== */";

/***/ }),

/***/ 97367:
/*!**************************************************************************!*\
  !*** ./src/app/list-of-deposites/list-of-deposites.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Travel Loan</ion-title>\r\n\t</ion-toolbar>\r\n\r\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"upload_deposite()\">\r\n\t\t<ion-icon class=\"zmdi zmdi-camera\" slot=\"start\"></ion-icon>\r\n\t\t{{'upload_deposite' | translate}}\r\n\t</ion-button>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'pending_deposites' | translate}}</h2>\r\n\t\t<ion-item class=\"panding animate__animated animate__fadeInUp\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'pending' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"panding animate__animated animate__fadeInUp\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'pending' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<h2>{{'past_deposited' | translate}}</h2>\r\n\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 11:50 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'deposite_to' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>SB 1124 2541 2574</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>$ 500<sub>.00</sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'uploaded_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>3 june, 2019 10:33 am</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'status' | translate}}</h3>\r\n\t\t\t\t\t\t<h5 class=\"animate__animated animate__fadeInUp\">{{'deposited' | translate}}</h5>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_list-of-deposites_list-of-deposites_module_ts.js.map