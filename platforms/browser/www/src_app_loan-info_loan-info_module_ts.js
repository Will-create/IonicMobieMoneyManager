"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loan-info_loan-info_module_ts"],{

/***/ 8963:
/*!*******************************************************!*\
  !*** ./src/app/loan-info/loan-info-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanInfoPageRoutingModule": () => (/* binding */ LoanInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-info.page */ 63159);




const routes = [
    {
        path: '',
        component: _loan_info_page__WEBPACK_IMPORTED_MODULE_0__.LoanInfoPage
    }
];
let LoanInfoPageRoutingModule = class LoanInfoPageRoutingModule {
};
LoanInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanInfoPageRoutingModule);



/***/ }),

/***/ 37545:
/*!***********************************************!*\
  !*** ./src/app/loan-info/loan-info.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanInfoPageModule": () => (/* binding */ LoanInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-info-routing.module */ 8963);
/* harmony import */ var _loan_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-info.page */ 63159);








let LoanInfoPageModule = class LoanInfoPageModule {
};
LoanInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _loan_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanInfoPageRoutingModule
        ],
        declarations: [_loan_info_page__WEBPACK_IMPORTED_MODULE_1__.LoanInfoPage]
    })
], LoanInfoPageModule);



/***/ }),

/***/ 63159:
/*!*********************************************!*\
  !*** ./src/app/loan-info/loan-info.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanInfoPage": () => (/* binding */ LoanInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-info.page.html?ngResource */ 67282);
/* harmony import */ var _loan_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-info.page.scss?ngResource */ 68496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LoanInfoPage = class LoanInfoPage {
    constructor() { }
    ngOnInit() {
    }
};
LoanInfoPage.ctorParameters = () => [];
LoanInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loan-info',
        template: _loan_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanInfoPage);



/***/ }),

/***/ 68496:
/*!**********************************************************!*\
  !*** ./src/app/loan-info/loan-info.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\nion-header ion-list {\n  margin: 0;\n  background: none;\n  padding: none;\n  padding: 0;\n}\nion-header ion-list ion-item {\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  --background: var(--transparent);\n  background: url('banner_bg.png');\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\nion-header ion-list ion-item .img_box {\n  width: 123px;\n  min-width: 123px;\n  height: 113px;\n  margin: 0;\n}\nion-header ion-list ion-item .item_inner {\n  padding: 0;\n  position: relative;\n  z-index: 99;\n}\nion-header ion-list ion-item .item_inner .text-box {\n  width: 100%;\n  padding: 0 16px;\n}\nion-header ion-list ion-item .item_inner h2 {\n  margin: 0;\n  width: 100%;\n  color: var(--white);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n  font-weight: 400;\n}\nion-header ion-list ion-item .item_inner h3 {\n  color: var(--white);\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n  margin: 0;\n  font-weight: 400;\n}\nion-header ion-list ion-item .item_inner h4 {\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin: 0 -10px;\n}\nion-header ion-list ion-item .item_inner h4 span {\n  background: var(--secondary);\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 3px;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 8px;\n  margin: 0 10px;\n  min-width: 70px;\n}\n.about {\n  padding: 20px 20px 7px 20px;\n  background: var(--white);\n}\n.about p {\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 15px;\n  font-weight: 400;\n  line-height: 19px;\n}\n.form {\n  width: calc(100% - 30px);\n  padding-top: 21px;\n}\n.form ion-list h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 8px;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  margin-bottom: 19px;\n}\nion-footer {\n  padding: 10px;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4taW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFEUjtBQUdRO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBRFo7QUFHWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBRGhCO0FBSVk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRmhCO0FBSWdCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFGcEI7QUFLZ0I7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSHBCO0FBTWdCO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSnBCO0FBUWdCO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBTnBCO0FBUW9CO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFOeEI7QUFlQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7QUFaSjtBQWNJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWlI7QUFnQkE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0FBYko7QUFnQlE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZFo7QUFrQlE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FBaEJaO0FBcUJBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FBbEJKIiwiZmlsZSI6ImxvYW4taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvYmFubmVyX2JnLnBuZycpO1xuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcblxuICAgICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjNweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG5cbiAgICAgICAgICAgICAgICAudGV4dC1ib3gge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC0xMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hYm91dCB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDdweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgcGFkZGluZy10b3A6IDIxcHg7XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 67282:
/*!**********************************************************!*\
  !*** ./src/app/loan-info/loan-info.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Travel Loan</ion-title>\n\t</ion-toolbar>\n\t<ion-list lines=\"none\">\n\t\t<ion-item>\n\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t<div class=\"img_box center_img\" slot=\"start\">\n\t\t\t\t\t<img src=\"assets/imgs/img_travel.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-box\">\n\t\t\t\t\t<h3>Travel for</h3>\n\t\t\t\t\t<h2>discover yourself !</h2>\n\t\t\t\t\t<h4 class=\"d-flex\"><span>{{'apply_now' | translate}}</span> {{'instant_loan_at' | translate}}<br>Just 8.90% interest</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n\t<div class=\"about\">\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n\t\t</p>\n\t\t<p class=\"animate__animated animate__fadeInUp\">\n\t\t\tIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n\t\t</p>\n\t</div>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'phone_number' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"number\" placeholder=\"{{'enter_your_phone_number' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<h2 class=\"d-flex animate__animated animate__fadeInUp\">{{'your_message' | translate}}</h2>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" placeholder=\"{{'enter_your_message' | translate}}\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n\n \n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\">{{'i_am_interested' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_loan-info_loan-info_module_ts.js.map