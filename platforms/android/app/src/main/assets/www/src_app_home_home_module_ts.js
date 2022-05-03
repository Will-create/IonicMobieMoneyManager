"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);







let HomePage = class HomePage {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application' })
        };
        this.distributors = [];
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.http.get(this.baseUrl + 'api/mobile/distributors/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0)
                this.distributors = list['items'];
        });
    }
    ngOnInit() {
    }
    statement() {
        this.route.navigate(['./statement']);
    }
    account() {
        this.route.navigate(['./account']);
    }
    zones() {
        this.route.navigate(['./zones']);
    }
    localites() {
        this.route.navigate(['./localites']);
    }
    contacts() {
        this.route.navigate(['./contacts']);
    }
    deposits() {
        this.route.navigate(['./deposits']);
    }
    withdrawals() {
        this.route.navigate(['./withdrawals']);
    }
    stats() {
        this.route.navigate(['./stats']);
    }
    settings() {
        this.route.navigate(['./settings']);
    }
    more() {
        this.route.navigate(['./more']);
    }
    fund_transfer_options() {
        this.route.navigate(['./fund-transfer-options']);
    }
    loan() {
        this.route.navigate(['./loan']);
    }
    list_of_deposites() {
        this.route.navigate(['./list-of-deposites']);
    }
    loan_info() {
        this.route.navigate(['./loan-info']);
    }
    dist(dist) {
        let extras = {
            state: dist
        };
        this.route.navigate(['distributors'], extras);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  text-align: center;\n}\nion-header .banner {\n  position: relative;\n  width: 100%;\n}\nion-header .banner::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 77px;\n  background: var(--primary);\n}\nion-header .banner .scroll_container {\n  white-space: nowrap;\n  height: 162px;\n  overflow: hidden;\n  overflow-x: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\nion-header .banner .scroll_container::-webkit-scrollbar {\n  display: none;\n}\nion-header .banner .scroll_container .item_scroll {\n  display: inline-block;\n  background: url('item_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: var(--white);\n  border-radius: 10px;\n  margin: 0 4px;\n  padding: 18px;\n  padding-bottom: 15px;\n  width: 252px;\n  position: relative;\n  overflow: hidden;\n}\nion-header .banner .scroll_container .item_scroll::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.4;\n}\nion-header .banner .scroll_container .item_scroll:first-child {\n  margin-left: 10px;\n}\nion-header .banner .scroll_container .item_scroll:last-child {\n  margin-right: 10px;\n}\nion-header .banner .scroll_container .item_scroll h3 {\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 7px;\n  color: #8c8c8c;\n  position: relative;\n  z-index: 99;\n}\nion-header .banner .scroll_container .item_scroll h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 500;\n  margin-bottom: 10px;\n  letter-spacing: 0.5px;\n  position: relative;\n  color: #8c8c8c;\n  z-index: 99;\n}\nion-header .banner .scroll_container .item_scroll h4 {\n  background: var(--primary);\n  text-align: center;\n  margin: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n  width: fit-content;\n  font-size: 0.8rem;\n  font-weight: 400;\n  border-radius: 6px;\n  height: 36px;\n  line-height: 35px;\n  letter-spacing: 0.5px;\n  color: #8c8c8c;\n  padding: 0 13px;\n  position: relative;\n  z-index: 99;\n  margin-bottom: 20px;\n  min-width: 125px;\n}\nion-header .banner .scroll_container .item_scroll h5 {\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--primary);\n  position: relative;\n  z-index: 99;\n}\n.home_menu {\n  padding: 13px 0 20px 0;\n}\n.home_menu ion-row ion-col {\n  position: relative;\n}\n.home_menu ion-row ion-col .menu_item {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  padding: 13px 0 13px 0;\n  color: var(--text-light);\n}\n.home_menu ion-row ion-col .menu_item .icon_box {\n  display: block;\n  width: 43px;\n  margin: 0 auto;\n  margin-bottom: 7px;\n  font-size: 20px;\n  color: var(--text-light);\n}\n.home_menu ion-row ion-col .menu_item ion-icon {\n  font-size: 35px;\n  color: var(--text-light);\n}\n.home_menu ion-row ion-col .menu_item p {\n  margin: 0;\n  font-weight: 700;\n  font-size: 0.8rem;\n  letter-spacing: 0;\n  color: var(--text-light);\n}\n.home_menu ion-row ion-col .menu_item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 50px;\n  height: 1px;\n  margin: auto;\n  background: #e3e3e3;\n}\n.home_menu ion-row ion-col:nth-child(7)::before, .home_menu ion-row ion-col:nth-child(8)::before, .home_menu ion-row ion-col:nth-child(9)::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 55px;\n  height: 1px;\n  margin: auto;\n  background: #d6d6d6;\n}\n.home_menu ion-row ion-col:nth-child(1)::after, .home_menu ion-row ion-col:nth-child(2)::after, .home_menu ion-row ion-col:nth-child(4)::after, .home_menu ion-row ion-col:nth-child(5)::after, .home_menu ion-row ion-col:nth-child(7)::after, .home_menu ion-row ion-col:nth-child(8)::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  margin: auto 0;\n  right: 0;\n  width: 1px;\n  height: 55px;\n  background: #e3e3e3;\n}\nion-list {\n  margin: 0;\n  background: none;\n  padding: none;\n}\nion-list ion-item {\n  padding: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  margin-bottom: 8px;\n  --background: var(--transparent);\n  background: url('banner_bg.png');\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\nion-list ion-item .img_box {\n  width: 123px;\n  min-width: 123px;\n  height: 113px;\n  margin: 0;\n}\nion-list ion-item .item_inner {\n  padding: 0;\n  position: relative;\n  z-index: 99;\n}\nion-list ion-item .item_inner .text-box {\n  width: 100%;\n  padding: 0 16px;\n}\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  width: 100%;\n  color: var(--white);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n  font-weight: 400;\n}\nion-list ion-item .item_inner h3 {\n  color: var(--white);\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n  margin: 0;\n  font-weight: 400;\n}\nion-list ion-item .item_inner h4 {\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin: 0 -10px;\n}\nion-list ion-item .item_inner h4 span {\n  background: var(--secondary);\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 3px;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 8px;\n  margin: 0 10px;\n  min-width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0NaO0FEQ1E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0FDRWhCO0FEQVk7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDR3BCO0FERGdCO0VBQ0ksaUJBQUE7QUNHcEI7QUREZ0I7RUFDSSxrQkFBQTtBQ0dwQjtBRERnQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR3BCO0FERGdCO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0dwQjtBRERnQjtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHcEI7QUREZ0I7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBR0Esa0JBQUE7RUFDQSxXQUFBO0FDQ3BCO0FETUE7RUFDSSxzQkFBQTtBQ0hKO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FESVk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNGaEI7QURHZ0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0RwQjtBRElnQjtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQ0ZwQjtBREtnQjtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0hwQjtBREtnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSHBCO0FEU2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNQcEI7QURnQmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNkcEI7QURxQkE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDbEJKO0FEbUJJO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNqQlI7QURrQlE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ2hCWjtBRGtCUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNoQlo7QURpQlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ2ZoQjtBRGlCWTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNmaEI7QURpQlk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNmaEI7QURpQlk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNmaEI7QURnQmdCO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNkcEIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zY3JvbGxfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjJweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbV9zY3JvbGwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pdGVtX2JnLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUycHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhjOGM4YztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhjOGM4YztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmhvbWVfbWVudSB7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDAgMjBweCAwO1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLm1lbnVfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDAgMTNweCAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgLmljb25fYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNyksXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDgpLFxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5KSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSxcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpLFxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg1KSxcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNyksXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcGFkZGluZzogbm9uZTtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvYmFubmVyX2JnLnBuZycpO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEyM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgLnRleHQtYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24taGVhZGVyIC5iYW5uZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3N3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2Nyb2xsX2NvbnRhaW5lciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMTYycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgLnNjcm9sbF9jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2Nyb2xsX2NvbnRhaW5lciAuaXRlbV9zY3JvbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2l0ZW1fYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDAgNHB4O1xuICBwYWRkaW5nOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDI1MnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24taGVhZGVyIC5iYW5uZXIgLnNjcm9sbF9jb250YWluZXIgLml0ZW1fc2Nyb2xsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5zY3JvbGxfY29udGFpbmVyIC5pdGVtX3Njcm9sbDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5zY3JvbGxfY29udGFpbmVyIC5pdGVtX3Njcm9sbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5zY3JvbGxfY29udGFpbmVyIC5pdGVtX3Njcm9sbCBoMyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5zY3JvbGxfY29udGFpbmVyIC5pdGVtX3Njcm9sbCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzhjOGM4YztcbiAgei1pbmRleDogOTk7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgLnNjcm9sbF9jb250YWluZXIgLml0ZW1fc2Nyb2xsIGg0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgcGFkZGluZzogMCAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtaW4td2lkdGg6IDEyNXB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5zY3JvbGxfY29udGFpbmVyIC5pdGVtX3Njcm9sbCBoNSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmhvbWVfbWVudSB7XG4gIHBhZGRpbmc6IDEzcHggMCAyMHB4IDA7XG59XG4uaG9tZV9tZW51IGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lX21lbnUgaW9uLXJvdyBpb24tY29sIC5tZW51X2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxM3B4IDAgMTNweCAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG4uaG9tZV9tZW51IGlvbi1yb3cgaW9uLWNvbCAubWVudV9pdGVtIC5pY29uX2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDNweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG4uaG9tZV9tZW51IGlvbi1yb3cgaW9uLWNvbCAubWVudV9pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG4uaG9tZV9tZW51IGlvbi1yb3cgaW9uLWNvbCAubWVudV9pdGVtIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2wgLm1lbnVfaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogI2UzZTNlMztcbn1cbi5ob21lX21lbnUgaW9uLXJvdyBpb24tY29sOm50aC1jaGlsZCg3KTo6YmVmb3JlLCAuaG9tZV9tZW51IGlvbi1yb3cgaW9uLWNvbDpudGgtY2hpbGQoOCk6OmJlZm9yZSwgLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDkpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZDZkNmQ2O1xufVxuLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDEpOjphZnRlciwgLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDIpOjphZnRlciwgLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDQpOjphZnRlciwgLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDUpOjphZnRlciwgLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDcpOjphZnRlciwgLmhvbWVfbWVudSBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDgpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogYXV0byAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogbm9uZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iYW5uZXJfYmcucG5nXCIpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMjNweDtcbiAgbWluLXdpZHRoOiAxMjNweDtcbiAgaGVpZ2h0OiAxMTNweDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIG1hcmdpbjogMCAtMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIG1pbi13aWR0aDogNzBweDtcbn0iXX0= */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title><span>OM Manager</span></ion-title>\r\n    </ion-toolbar>\r\n    <div class=\"banner\">\r\n        <div class=\"scroll_container\">\r\n            <div class=\"item_scroll animate__animated animate__zoomIn\"  *ngFor=\"let distributor of distributors\" (click)=\"dist(distributor)\">\r\n                <h3 class=\"animate__animated animate__fadeInUp\">{{ distributor.ismother ? 'Distributeur Mere'  : 'Distributeur'}}</h3>\r\n                <h2 class=\"animate__animated animate__fadeInUp\">{{distributor.number}}</h2>\r\n                <h5 class=\"animate__animated animate__fadeInUp\">  {{distributor.balance}} XOF</h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n<ion-content>\r\n    <div class=\"home_menu\">\r\n        <ion-row>\r\n            <ion-col class=\"animate__animated animate__fadeInUp\" size=\"4\" (click)=\"zones()\">\r\n                <div class=\"menu_item ion-text-center\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon name=\"earth-outline\"></ion-icon>\r\n                    </div>\r\n                    <p>Zones</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col class=\"animate__animated animate__fadeInUp\" size=\"4\" (click)=\"localites()\">\r\n                <div class=\"menu_item ion-text-center\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon name=\"location-outline\"></ion-icon>\r\n                    </div>\r\n                    <p>Localités</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col class=\"animate__animated animate__fadeInUp\" size=\"4\" (click)=\"contacts()\">\r\n                <div class=\"menu_item ion-text-center\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon name=\"people-outline\"></ion-icon>\r\n                    </div>\r\n                    <p>Contacts</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col class=\"animate__animated animate__fadeInUp\" size=\"4\" (click)=\"stats()\">\r\n                <div class=\"menu_item ion-text-center\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon name=\"radio-outline\"></ion-icon>\r\n                    </div>\r\n                    <p>Numeros <br> Agents</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col class=\"animate__animated animate__fadeInUp\" size=\"4\" (click)=\"account()\">\r\n                <div class=\"menu_item ion-text-center\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon name=\"person-outline\"></ion-icon>\r\n                    </div>\r\n                    <p>Compte</p>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col class=\"animate__animated animate__fadeInUp\" size=\"4\" (click)=\"settings()\">\r\n                <div class=\"menu_item ion-text-center\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon name=\"cog-outline\"></ion-icon>\r\n                    </div>\r\n                    <p>Paramètres</p>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n    </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map