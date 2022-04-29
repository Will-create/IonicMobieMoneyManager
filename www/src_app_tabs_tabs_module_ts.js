"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'transactions',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transactions_transactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../transactions/transactions.module */ 65528)).then(m => m.TransactionsPageModule)
                    }
                ]
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../account/account.module */ 63879)).then(m => m.AccountPageModule)
                    }
                ]
            },
            {
                path: 'stats',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_stats_stats_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../stats/stats.module */ 49188)).then(m => m.StatsPageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 94710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 94710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar {\n  --background: #df6706 !important;\n  --animate-duration: .4s!important;\n}\nion-tab-bar ion-tab-button {\n  position: relative;\n  transition: all 0.4s;\n}\nion-tab-bar ion-tab-button ion-icon {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n  color: var(--white);\n}\nion-tab-bar ion-tab-button ion-label {\n  color: var(--white);\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 0.55rem;\n  padding: 0;\n  margin: 0;\n}\nion-tab-bar ion-tab-button.tab-selected ion-icon {\n  color: #4DD9FF;\n}\nion-tab-bar ion-tab-button.tab-selected ion-label {\n  color: #4DD9FF;\n  font-size: 12 px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsZ0NBQUE7RUFDQSxpQ0FBQTtBQUNGO0FBQUU7RUFDQyxrQkFBQTtFQUNBLG9CQUFBO0FBRUg7QUFBRztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNHO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNKO0FBSUk7RUFDQyxjQUFBO0FBRkw7QUFJSTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQUZMIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHRpb24tdGFiLWJhciB7XG5cdFx0LS1iYWNrZ3JvdW5kOiAjZGY2NzA2ICFpbXBvcnRhbnQ7XG5cdFx0LS1hbmltYXRlLWR1cmF0aW9uOiAuNHMhaW1wb3J0YW50O1xuXHRcdGlvbi10YWItYnV0dG9uIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHM7XG5cblx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdH1cblxuXHRcdFx0aW9uLWxhYmVsIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMC41NXJlbTtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHR9XG5cblx0XHRcdCYudGFiLXNlbGVjdGVkIHtcblx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdGNvbG9yOiAjNEREOUZGO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlvbi1sYWJlbHtcblx0XHRcdFx0XHRjb2xvciA6IzRERDlGRjtcblx0XHRcdFx0XHRmb250LXNpemU6IDEyXHRweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuIl19 */";

/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n\t<ion-tab-bar class=\"animate__animated animate__fadeInUp\" slot=\"bottom\">\n\t\t<ion-tab-button tab=\"home\">\n\t\t\t<ion-icon name=\"home-outline\"></ion-icon>\n\t\t\t<ion-label>{{'home' | translate}}</ion-label>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"transactions\">\n\t\t\t<ion-icon name=\"swap-vertical-outline\"></ion-icon>\n\t\t\t<ion-label>{{'transactions' | translate}}</ion-label>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"account\">\n\t\t\t<ion-icon name=\"person-outline\"></ion-icon>\n\t\t\t<ion-label>{{'account' | translate}}</ion-label>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"settings\">\n\t\t\t\t<ion-icon name=\"cog-outline\"></ion-icon>\n\t\t\t\t<ion-label>{{'settings' | translate}}</ion-label>\n\t\t</ion-tab-button>\n\t\t\n\t</ion-tab-bar>\n\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map