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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding-top: 25px;\n  background: none;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 8px;\n  margin-bottom: 11px;\n  transition: all 0.3s ease-in-out;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner h2 {\n  font-size: 1rem;\n  margin: 0;\n  font-weight: 500;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\nion-list ion-item .item_inner p {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  display: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0;\n  transition: all 0.3s ease-in-out;\n}\n\nion-list ion-item .item_inner p:first-of-type {\n  display: block !important;\n}\n\nion-list ion-item.active {\n  padding-bottom: 0;\n  transition: all 0.3s ease-in-out;\n}\n\nion-list ion-item.active .item_inner p {\n  color: var(--text-black);\n  white-space: normal;\n  display: block !important;\n  overflow: visible;\n  font-size: 0.95rem;\n  font-weight: 400;\n  line-height: 27px;\n  margin-bottom: 17px;\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxmYXFzXFxmYXFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREFJO0VBQ0ksVUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRVI7O0FERFE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0daOztBREZZO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDSWhCOztBREZZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0loQjs7QURIZ0I7RUFDSSx5QkFBQTtBQ0twQjs7QUREUTtFQUNJLGlCQUFBO0VBRUEsZ0NBQUE7QUNFWjs7QUREWTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0doQiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIC8vdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTY2NjcsIDEuMTY2NjcsIDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbS5hY3RpdmUge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5pb24tbGlzdCBpb24taXRlbS5hY3RpdmUgLml0ZW1faW5uZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufSJdfQ== */";

/***/ }),

/***/ 15790:
/*!************************************************!*\
  !*** ./src/app/faqs/faqs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'faqs' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand1 ? 'active' : '' \" (click)=\"faqExpandToggle1()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2>Comment effectuer un transfer?</h2>\r\n\t\t\t\t<p>Il suffit de se dirriger vers l'onglet <b>Accueil</b>, puis choissisez <b>Numeros Agents</b> </p>\r\n\t\t\t\t<p>Sur la bare de recherche en haut, vous chercherez le l'agent a qui ou de qui vous recevez un transfert et vous choisissez le bouton 'Envoyer' ou 'Recevoir' selon le cas</p>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand2 ? 'active' : '' \" (click)=\"faqExpandToggle2()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2>Comment Recevoir un transfert?</h2>\r\n\t\t\t\t<p>Simply go to account and then click on change mPin</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand3 ? 'active' : '' \" (click)=\"faqExpandToggle3()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2>Comment Contacter un Agent?</h2>\r\n\t\t\t\t<p>Found nearest Banks & ATMs available</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand4 ? 'active' : '' \" (click)=\"faqExpandToggle4()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2>Comment Faire le point de la journee?</h2>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand5 ? 'active' : '' \" (click)=\"faqExpandToggle5()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2>J'ai perdu la connection au serveur</h2>\r\n\t\t\t\t<p>Simply go to account and then click on transactions...</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand6 ? 'active' : '' \" (click)=\"faqExpandToggle6()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2>Ou trouver l'addresse du serveur ?</h2>\r\n\t\t\t\t<p>Go to Loan section and fil up a from. Our team will...</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_faqs_faqs_module_ts.js.map