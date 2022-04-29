"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_faqs_faqs_module_ts"],{

/***/ 60156:
/*!*********************************************!*\
  !*** ./src/app/faqs/faqs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageRoutingModule": () => (/* binding */ FaqsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page */ 90);




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_0__.FaqsPage
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ 86484:
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageModule": () => (/* binding */ FaqsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs-routing.module */ 60156);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page */ 90);








let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqsPageRoutingModule
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_1__.FaqsPage]
    })
], FaqsPageModule);



/***/ }),

/***/ 90:
/*!***********************************!*\
  !*** ./src/app/faqs/faqs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPage": () => (/* binding */ FaqsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _faqs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page.html?ngResource */ 15790);
/* harmony import */ var _faqs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page.scss?ngResource */ 15778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FaqsPage = class FaqsPage {
    constructor() { }
    ngOnInit() {
    }
    reset() {
        this.faqExpand1 = false;
        this.faqExpand2 = false;
        this.faqExpand3 = false;
        this.faqExpand4 = false;
        this.faqExpand5 = false;
        this.faqExpand6 = false;
        this.faqExpand7 = false;
    }
    faqExpandToggle1() {
        this.reset();
        this.faqExpand1 = !this.faqExpand1;
    }
    faqExpandToggle2() {
        this.reset();
        this.faqExpand2 = !this.faqExpand2;
    }
    faqExpandToggle3() {
        this.reset();
        this.faqExpand3 = !this.faqExpand3;
    }
    faqExpandToggle4() {
        this.reset();
        this.faqExpand4 = !this.faqExpand4;
    }
    faqExpandToggle5() {
        this.reset();
        this.faqExpand5 = !this.faqExpand5;
    }
    faqExpandToggle6() {
        this.reset();
        this.faqExpand6 = !this.faqExpand6;
    }
    faqExpandToggle7() {
        this.reset();
        this.faqExpand7 = !this.faqExpand7;
    }
};
FaqsPage.ctorParameters = () => [];
FaqsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-faqs',
        template: _faqs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faqs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqsPage);



/***/ }),

/***/ 15778:
/*!************************************************!*\
  !*** ./src/app/faqs/faqs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding-top: 25px;\n  background: none;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 8px;\n  margin-bottom: 11px;\n  transition: all 0.3s ease-in-out;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner h2 {\n  font-size: 1rem;\n  margin: 0;\n  font-weight: 500;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\nion-list ion-item .item_inner p {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  display: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0;\n  transition: all 0.3s ease-in-out;\n}\n\nion-list ion-item .item_inner p:first-of-type {\n  display: block !important;\n}\n\nion-list ion-item.active {\n  padding-bottom: 0;\n  transition: all 0.3s ease-in-out;\n}\n\nion-list ion-item.active .item_inner p {\n  color: var(--text-black);\n  white-space: normal;\n  display: block !important;\n  overflow: visible;\n  font-size: 0.95rem;\n  font-weight: 400;\n  line-height: 27px;\n  margin-bottom: 17px;\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQUk7RUFDSSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFUjs7QUFEUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBR1o7O0FBRlk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJaEI7O0FBRlk7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBSWhCOztBQUhnQjtFQUNJLHlCQUFBO0FBS3BCOztBQURRO0VBQ0ksaUJBQUE7RUFFQSxnQ0FBQTtBQUVaOztBQURZO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBR2hCIiwiZmlsZSI6ImZhcXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIC8vdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTY2NjcsIDEuMTY2NjcsIDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLml0ZW1faW5uZXIgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 15790:
/*!************************************************!*\
  !*** ./src/app/faqs/faqs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'faqs' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand1 ? 'active' : '' \" (click)=\"faqExpandToggle1()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>How to transfer fund?</h2>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand2 ? 'active' : '' \" (click)=\"faqExpandToggle2()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>How to change mPin & Thumb impression? </h2>\n\t\t\t\t<p>Simply go to account and then click on change mPin</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand3 ? 'active' : '' \" (click)=\"faqExpandToggle3()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>How to found nearby Banks & ATMs?</h2>\n\t\t\t\t<p>Found nearest Banks & ATMs available</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand4 ? 'active' : '' \" (click)=\"faqExpandToggle4()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>How to Deposite Cheque?</h2>\n\t\t\t\t<p>Go to Banking Section and click on deposite tab</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand5 ? 'active' : '' \" (click)=\"faqExpandToggle5()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>How to check my trabsactions?</h2>\n\t\t\t\t<p>Simply go to account and then click on trabsactions...</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand6 ? 'active' : '' \" (click)=\"faqExpandToggle6()\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>How to apply for a loan?</h2>\n\t\t\t\t<p>Go to Loan section and fil up a from. Our team will...</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_faqs_faqs_module_ts.js.map