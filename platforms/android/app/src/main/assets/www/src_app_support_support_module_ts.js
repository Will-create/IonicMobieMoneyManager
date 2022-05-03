"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_support_support_module_ts"],{

/***/ 10185:
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 35028);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ 96758:
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 10185);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 35028);








let SupportPageModule = class SupportPageModule {
};
SupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage]
    })
], SupportPageModule);



/***/ }),

/***/ 35028:
/*!*****************************************!*\
  !*** ./src/app/support/support.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page.html?ngResource */ 51303);
/* harmony import */ var _support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page.scss?ngResource */ 52620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SupportPage = class SupportPage {
    constructor() { }
    ngOnInit() {
    }
};
SupportPage.ctorParameters = () => [];
SupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-support',
        template: _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupportPage);



/***/ }),

/***/ 52620:
/*!******************************************************!*\
  !*** ./src/app/support/support.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  height: 160px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.banner h2 span {\n  font-weight: 400;\n}\n\n.form {\n  width: 100%;\n}\n\nion-list {\n  background: none !important;\n  padding: 0;\n  margin: 0;\n  padding-top: 5px;\n}\n\nion-list ion-card {\n  background: var(--white);\n  border-radius: 8px;\n  box-shadow: none;\n  width: calc(100% - 27px);\n  margin: 8px auto;\n  padding: 16px 15px;\n}\n\nion-list ion-card h2 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n  padding-bottom: 13px;\n}\n\nion-list ion-card p {\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin: 0;\n}\n\nion-list ion-card h3 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  padding-bottom: 13px;\n}\n\nion-list ion-card h3 ion-icon {\n  color: var(--secondary);\n  min-width: 30px;\n}\n\nion-list ion-card h3:last-child {\n  padding-bottom: 0;\n}\n\nion-list ion-card h3:first-of-type {\n  padding-top: 5px;\n}\n\nion-list ion-card .item_inner {\n  align-items: flex-start;\n  padding-top: 12px;\n}\n\nion-list ion-card .item_inner ion-icon {\n  margin: 0;\n  color: var(--secondary);\n  min-width: 30px;\n}\n\nion-list ion-card .item_inner ion-item {\n  padding: 0;\n  background: none;\n  border-radius: 0;\n  margin: 0;\n  border-bottom: 1px solid #ccc;\n  width: 100%;\n  --min-height: unset;\n}\n\nion-list ion-card .item_inner ion-item ion-textarea {\n  margin: 0;\n  padding-bottom: 9px;\n}\n\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxzdXBwb3J0XFxzdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ1E7RUFDSSxnQkFBQTtBQ0NaOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDREo7O0FER0k7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURHUTtFQUNJLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0RaOztBRElRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNGWjs7QURLUTtFQUNJLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSFo7O0FES1k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUNIaEI7O0FETVk7RUFDSSxpQkFBQTtBQ0poQjs7QURPWTtFQUNJLGdCQUFBO0FDTGhCOztBRFdRO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtBQ1RaOztBRFdZO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1RoQjs7QURZWTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDVmhCOztBRFlnQjtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQ1ZwQjs7QURtQkE7RUFDSSxrQ0FBQTtBQ2hCSiIsImZpbGUiOiJzdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjdweCk7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE1cHg7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGhlaWdodDogMTYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmJhbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYmFubmVyIGgyIHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLWxpc3QgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI3cHgpO1xuICBtYXJnaW46IDhweCBhdXRvO1xuICBwYWRkaW5nOiAxNnB4IDE1cHg7XG59XG5pb24tbGlzdCBpb24tY2FyZCBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG59XG5pb24tbGlzdCBpb24tY2FyZCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG59XG5pb24tbGlzdCBpb24tY2FyZCBoMyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG5pb24tbGlzdCBpb24tY2FyZCBoMzpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5pb24tbGlzdCBpb24tY2FyZCBoMzpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuaW9uLWxpc3QgaW9uLWNhcmQgLml0ZW1faW5uZXIgaW9uLWljb24ge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG5pb24tbGlzdCBpb24tY2FyZCAuaXRlbV9pbm5lciBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAxMDAlO1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuaW9uLWxpc3QgaW9uLWNhcmQgLml0ZW1faW5uZXIgaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 51303:
/*!******************************************************!*\
  !*** ./src/app/support/support.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'support' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n\t<div class=\"banner\">\r\n\t\t<h2 class=\"ion-text-center animate__animated animate__zoomIn\">{{'app_title' | translate}} <span>{{'app_title_2' | translate}}</span></h2>\r\n\t</div>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\r\n\t\t\t\t<h2>{{'we_are_here' | translate}}</h2>\r\n\t\t\t\t<p>Fragment Park, Near World Trade building, Melbourne, Australia.</p>\r\n\t\t\t</ion-card>\r\n\r\n\t\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\r\n\t\t\t\t<h2>{{'connect_us' | translate}}</h2>\r\n\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon> +1 987 654 3210\r\n\t\t\t\t</h3>\r\n\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon> help@kdemmy.com\r\n\t\t\t\t</h3>\r\n\t\t\t</ion-card>\r\n\r\n\t\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\r\n\t\t\t\t<h2>{{'write_us_directly' | translate}}</h2>\r\n\t\t\t\t<div class=\"d-flex item_inner\">\r\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\r\n\t\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t\t\t<ion-textarea rows=\"1\" placeholder=\"{{'your_message' | translate}}\"></ion-textarea>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-card>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\">{{'submit' | translate}}</ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_support_support_module_ts.js.map