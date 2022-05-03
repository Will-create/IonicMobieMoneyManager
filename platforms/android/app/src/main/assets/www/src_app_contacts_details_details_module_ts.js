"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contacts_details_details_module_ts"],{

/***/ 20622:
/*!************************************************************!*\
  !*** ./src/app/contacts/details/details-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 95550);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 19088:
/*!****************************************************!*\
  !*** ./src/app/contacts/details/details.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 20622);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 95550);








let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 95550:
/*!**************************************************!*\
  !*** ./src/app/contacts/details/details.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page.html?ngResource */ 97390);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 11372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let DetailsPage = class DetailsPage {
    constructor(router) {
        this.router = router;
        this.contact = {};
        this.numbers = [];
        if (this.router.getCurrentNavigation().extras.state) {
            let state = this.router.getCurrentNavigation().extras.state;
            this.contact = state.contact;
            this.numbers = state.numbers;
        }
    }
    ngOnInit() {
    }
    callNumber(number) {
    }
    deposit(number) {
        let extras = {
            state: {
                number: number
            }
        };
        this.router.navigate(['deposits/shortforms'], extras);
    }
    withdraw(number) {
        let extras = {
            state: {
                number: number
            }
        };
        this.router.navigate(['withdrawals/shortforms'], extras);
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-details',
        template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsPage);



/***/ }),

/***/ 11372:
/*!***************************************************************!*\
  !*** ./src/app/contacts/details/details.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  margin-top: 12px;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 18px;\n  padding-top: 5px;\n}\n\nion-list ion-item {\n  padding: 9px 12px 5px 12px;\n  box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.5);\n  margin-bottom: 13px;\n  border-radius: 10px;\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item ion-row {\n  margin-bottom: 3px;\n}\n\nion-list ion-item ion-row ion-col h4 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list ion-item ion-row ion-col h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 5px;\n}\n\nion-list ion-item ion-row ion-col h5 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\n\nion-list ion-item.panding ion-row ion-col h5 {\n  color: var(--secondary);\n}\n\nion-list ion-item.deposited ion-row ion-col h5 {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcY29udGFjdHNcXGRldGFpbHNcXGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQVI7O0FESUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREQ7O0FER0M7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElDO0VBQ0MsMEJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRElFO0VBQ0MsV0FBQTtBQ0ZIOztBREtFO0VBQ0Msa0JBQUE7QUNISDs7QURNSTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDSkw7O0FEUUk7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNOTDs7QURTSTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNQTDs7QURZRTtFQUNDLHVCQUFBO0FDVkg7O0FEYUU7RUFDQyx1QkFBQTtBQ1hIIiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogLTNweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG5cdGgyIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMThweDtcclxuXHRcdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0fVxyXG5cclxuXHRpb24taXRlbSB7XHJcblx0XHRwYWRkaW5nOiA5cHggMTJweCA1cHggMTJweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMnB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuXHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLXJvdyB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDNweDtcclxuXHJcblx0XHRcdGlvbi1jb2wge1xyXG5cdFx0XHRcdGg0IHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjc1cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGg1IHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5wYW5kaW5nIGlvbi1yb3cgaW9uLWNvbCBoNSB7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuZGVwb3NpdGVkIGlvbi1yb3cgaW9uLWNvbCBoNSB7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiA5cHggMTJweCA1cHggMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tcm93IGlvbi1jb2wgaDMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tcm93IGlvbi1jb2wgaDUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnBhbmRpbmcgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5pb24tbGlzdCBpb24taXRlbS5kZXBvc2l0ZWQgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59Il19 */";

/***/ }),

/***/ 97390:
/*!***************************************************************!*\
  !*** ./src/app/contacts/details/details.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{contact.name}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content fullscreen class=\"bg_color\">\r\n  <ion-list lines=\"none\">\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'name' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{contact.name}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phone' | translate}}</h3>\r\n\t\t\t\t\t\t<h4> <a href=\"tel:{{contact.phone}}\">{{contact.phone}}</a></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n        <ion-row>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'email' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{contact.email}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'localite' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{contact.localitename}}<sub></sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n        <ion-row>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'whatsapp' | translate}}</h3>\r\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phonewhatsapp}}\">{{contact.phonewhatsapp}}</a></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phonemoov' | translate}}</h3>\r\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phonemoovexpress}}\">{{contact.phonemoovexpress}}</a></h4>\r\n\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n        <ion-row>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phoneflash' | translate}}</h3>\r\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phoneflash}}\">{{contact.phoneflash}}</a></h4>\r\n\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phonesapsap' | translate}}</h3>\r\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phonesapsap}}\">{{contact.phonesapsap}}</a></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'numbers' | translate}}</h2>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<ion-row *ngFor=\"let number of numbers\">\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'number' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{number.number}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'agentcode' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{number.agentcode}}<sub></sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t    <h2>{{'actions' | translate}}</h2>\r\n\r\n        <ion-row *ngFor=\"let number of numbers\">\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n            <ion-button size=\"small\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"deposit(number)\">Envoyer</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n            <ion-button size=\"small\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"withdraw(number)\">Recevoir</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n      \r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_contacts_details_details_module_ts.js.map