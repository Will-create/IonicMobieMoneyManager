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
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../account/account.module */ 63879)).then(m => m.AccountPageModule)
                    }
                ]
            },
            {
                path: 'agents',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_stats_stats_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../stats/stats.module */ 49188)).then(m => m.StatsPageModule)
                    }
                ]
            },
            {
                path: 'contacts',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../contacts/contacts.module */ 6808)).then(m => m.ContactsPageModule)
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

module.exports = "ion-tab-bar {\n  --background: #df6706 !important;\n  --animate-duration: .4s!important;\n}\nion-tab-bar ion-tab-button {\n  position: relative;\n  transition: all 0.4s;\n}\nion-tab-bar ion-tab-button ion-icon {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n  color: var(--white);\n}\nion-tab-bar ion-tab-button ion-label {\n  color: var(--white);\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 0.55rem;\n  padding: 0;\n  margin: 0;\n}\nion-tab-bar ion-tab-button.tab-selected ion-icon {\n  color: #4DD9FF;\n}\nion-tab-bar ion-tab-button.tab-selected ion-label {\n  color: #4DD9FF;\n  font-size: 12 px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGdDQUFBO0VBQ0EsaUNBQUE7QUNDRjtBREFFO0VBQ0Msa0JBQUE7RUFDQSxvQkFBQTtBQ0VIO0FEQUc7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRUo7QURDRztFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDSjtBRElJO0VBQ0MsY0FBQTtBQ0ZMO0FESUk7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUNGTCIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlx0aW9uLXRhYi1iYXIge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjZGY2NzA2ICFpbXBvcnRhbnQ7XHJcblx0XHQtLWFuaW1hdGUtZHVyYXRpb246IC40cyFpbXBvcnRhbnQ7XHJcblx0XHRpb24tdGFiLWJ1dHRvbiB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC40cztcclxuXHJcblx0XHRcdGlvbi1pY29uIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0d2lkdGg6IDMwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMC41NXJlbTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCYudGFiLXNlbGVjdGVkIHtcclxuXHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzRERDlGRjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLWxhYmVse1xyXG5cdFx0XHRcdFx0Y29sb3IgOiM0REQ5RkY7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEyXHRweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbiIsImlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZGY2NzA2ICFpbXBvcnRhbnQ7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzIWltcG9ydGFudDtcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDAuNTVyZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiAjNEREOUZGO1xufVxuaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNEREOUZGO1xuICBmb250LXNpemU6IDEyIHB4O1xufSJdfQ== */";

/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\r\n\t<ion-tab-bar class=\"animate__animated animate__fadeInUp\" slot=\"bottom\">\r\n\t\t<ion-tab-button tab=\"home\">\r\n\t\t\t<ion-icon name=\"home-outline\"></ion-icon>\r\n\t\t\t<ion-label>Accueil</ion-label>\r\n\t\t</ion-tab-button>\r\n\t\t<ion-tab-button tab=\"contacts\">\r\n\t\t\t<ion-icon name=\"people-outline\"></ion-icon>\r\n\t\t\t<ion-label>Contacts</ion-label>\r\n\t\t</ion-tab-button>\r\n\t\t<ion-tab-button tab=\"agents\">\r\n\t\t\t<ion-icon name=\"radio-outline\"></ion-icon>\r\n\t\t\t<ion-label>Agents</ion-label>\r\n\t\t</ion-tab-button>\r\n\t\t<ion-tab-button tab=\"settings\">\r\n\t\t\t\t<ion-icon name=\"cog-outline\"></ion-icon>\r\n\t\t\t\t<ion-label>Parametres</ion-label>\r\n\t\t</ion-tab-button>\r\n\t</ion-tab-bar>\r\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map