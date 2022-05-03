"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_distributors_sendings_sendings_module_ts"],{

/***/ 30854:
/*!******************************************************************!*\
  !*** ./src/app/distributors/sendings/sendings-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsPageRoutingModule": () => (/* binding */ SendingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sendings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings.page */ 14756);




const routes = [
    {
        path: '',
        component: _sendings_page__WEBPACK_IMPORTED_MODULE_0__.SendingsPage
    }
];
let SendingsPageRoutingModule = class SendingsPageRoutingModule {
};
SendingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendingsPageRoutingModule);



/***/ }),

/***/ 78578:
/*!**********************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsPageModule": () => (/* binding */ SendingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sendings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings-routing.module */ 30854);
/* harmony import */ var _sendings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendings.page */ 14756);







let SendingsPageModule = class SendingsPageModule {
};
SendingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sendings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendingsPageRoutingModule
        ],
        declarations: [_sendings_page__WEBPACK_IMPORTED_MODULE_1__.SendingsPage]
    })
], SendingsPageModule);



/***/ }),

/***/ 14756:
/*!********************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsPage": () => (/* binding */ SendingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sendings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings.page.html?ngResource */ 45913);
/* harmony import */ var _sendings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendings.page.scss?ngResource */ 17593);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);







let SendingsPage = class SendingsPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.pendings_count = 0;
        if (this.router.getCurrentNavigation().extras.state) {
            this.distributor = this.router.getCurrentNavigation().extras.state;
        }
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.http.get(this.baseUrl + 'api/mobile/distributors/sent?dist=' + this.distributor.number, this.httpOptions).subscribe(list => {
            console.log(list);
            this.pendings = list;
        });
    }
    ngOnInit() {
    }
};
SendingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
SendingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sendings',
        template: _sendings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sendings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendingsPage);



/***/ }),

/***/ 17593:
/*!*********************************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 25px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmRpbmdzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXGRpc3RyaWJ1dG9yc1xcc2VuZGluZ3NcXHNlbmRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVDO0VBQ0MsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdFO0VBQ0MsV0FBQTtBQ0RIOztBREdHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDREo7O0FESUc7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRko7O0FES0s7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNITiIsImZpbGUiOiJzZW5kaW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcblx0dG9wOiAtM3B4O1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xyXG5cdG1hcmdpbjogMCBhdXRvOyBcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG5cdGgyIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdGZvbnQtc2l6ZTogLjg1cmVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG5cclxuXHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA2cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGg0IHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHJcblx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHQmLmVuZCB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCBzcGFuLmVuZCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXJlZF9jb2xvcik7XG59Il19 */";

/***/ }),

/***/ 45913:
/*!*********************************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Transferts envoyes | {{ distributor.number }}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>Transferts envoyes</h2>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let pending of pendings\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h3 class=\"d-flex\"> <h4 class=\"d-flex\">Envoye au : </h4>{{ pending.tonumber }}</h3>\r\n\t\t\t\t<h4 class=\"d-flex\">{{ pending.datecreated }}<span class=\"end\">{{pending.amount}} Fcfa</span></h4><br>\r\n\t\t\t\t<h3 class=\"d-flex\">SMS </h3>\r\n\t\t\t\t<h4 class=\"d-flex\">{{ pending.sms }} </h4>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t</ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_distributors_sendings_sendings_module_ts.js.map