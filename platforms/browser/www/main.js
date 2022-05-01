(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



const routes = [
    {
        path: '',
        redirectTo: 'sing-in',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 63879)).then(m => m.AccountPageModule)
    },
    {
        path: 'add-beneficiary',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_add-beneficiary_add-beneficiary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-beneficiary/add-beneficiary.module */ 86166)).then(m => m.AddBeneficiaryPageModule)
    },
    {
        path: 'faqs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_faqs_faqs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./faqs/faqs.module */ 86484)).then(m => m.FaqsPageModule)
    },
    {
        path: 'fund-transfer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fund-transfer_fund-transfer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fund-transfer/fund-transfer.module */ 38550)).then(m => m.FundTransferPageModule)
    },
    {
        path: 'fund-transfer-options',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fund-transfer-options_fund-transfer-options_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fund-transfer-options/fund-transfer-options.module */ 12705)).then(m => m.FundTransferOptionsPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'loan',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_loan_loan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./loan/loan.module */ 59175)).then(m => m.LoanPageModule)
    },
    {
        path: 'nearby-bank',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nearby-bank_nearby-bank_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nearby-bank/nearby-bank.module */ 60314)).then(m => m.NearbyBankPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'sing-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sing-in_sing-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sing-in/sing-in.module */ 21553)).then(m => m.SingInPageModule)
    },
    {
        path: 'statement',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_statement_statement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./statement/statement.module */ 48925)).then(m => m.StatementPageModule)
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./support/support.module */ 96758)).then(m => m.SupportPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-conditions/terms-conditions.module */ 61401)).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'thumb-impression',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_thumb-impression_thumb-impression_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./thumb-impression/thumb-impression.module */ 63344)).then(m => m.ThumbImpressionPageModule)
    },
    {
        path: 'transactions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transactions_transactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transactions/transactions.module */ 65528)).then(m => m.TransactionsPageModule)
    },
    {
        path: 'transfered-successfully',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transfered-successfully_transfered-successfully_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transfered-successfully/transfered-successfully.module */ 2951)).then(m => m.TransferedSuccessfullyPageModule)
    },
    {
        path: 'upload-deposite',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_upload-deposite_upload-deposite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./upload-deposite/upload-deposite.module */ 88183)).then(m => m.UploadDepositePageModule)
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_verification_verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verification/verification.module */ 4243)).then(m => m.VerificationPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-up_sign-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/sign-up.module */ 73982)).then(m => m.SignUpPageModule)
    },
    {
        path: 'list-of-deposites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_list-of-deposites_list-of-deposites_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./list-of-deposites/list-of-deposites.module */ 53130)).then(m => m.ListOfDepositesPageModule)
    },
    {
        path: 'loan-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_loan-info_loan-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./loan-info/loan-info.module */ 37545)).then(m => m.LoanInfoPageModule)
    },
    {
        path: 'imps',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_imps_imps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./imps/imps.module */ 95329)).then(m => m.ImpsPageModule)
    },
    {
        path: 'loan-statement',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_loan-statement_loan-statement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./loan-statement/loan-statement.module */ 827)).then(m => m.LoanStatementPageModule)
    },
    {
        path: 'change-language',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_change-language_change-language_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-language/change-language.module */ 76169)).then(m => m.ChangeLanguagePageModule)
    },
    {
        path: 'vt-popup',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./vt-popup/vt-popup.module */ 14758)).then(m => m.VtPopupPageModule)
    },
    {
        path: 'buyappalert',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./buyappalert/buyappalert.module */ 48615)).then(m => m.BuyappalertPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'stats',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_stats_stats_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stats/stats.module */ 49188)).then(m => m.StatsPageModule)
    },
    {
        path: 'zones',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_zones_zones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zones/zones.module */ 94138)).then(m => m.ZonesPageModule)
    },
    {
        path: 'zones/details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./zones/details/details.module */ 64844)).then(m => m.DetailsPageModule)
    },
    {
        path: 'localites',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_localites_localites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./localites/localites.module */ 9629)).then(m => m.LocalitesPageModule)
    },
    {
        path: 'localites/details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./localites/details/details.module */ 8059)).then(m => m.DetailsPageModule)
    },
    {
        path: 'contacts',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 6808)).then(m => m.ContactsPageModule)
    },
    {
        path: 'contacts/details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contacts_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/details/details.module */ 19088)).then(m => m.DetailsPageModule)
    },
    {
        path: 'deposits',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_deposits_deposits_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./deposits/deposits.module */ 16587)).then(m => m.DepositsPageModule)
    },
    {
        path: 'deposits/pending',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_deposits_pending_pending_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./deposits/pending/pending.module */ 61304)).then(m => m.PendingPageModule)
    },
    {
        path: 'withdrawals',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_withdrawals_withdrawals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./withdrawals/withdrawals.module */ 76695)).then(m => m.WithdrawalsPageModule)
    },
    {
        path: 'settings/generals',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_generals_generals_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/generals/generals.module */ 29634)).then(m => m.GeneralsPageModule)
    },
    {
        path: 'settings/server',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_server_server_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/server/server.module */ 66132)).then(m => m.ServerPageModule)
    },
    {
        path: 'more',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_more_more_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./more/more.module */ 36436)).then(m => m.MorePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vt-popup/vt-popup.page */ 45866);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 64883);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _models_contants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/contants.models */ 64879);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/myevent.services */ 30069);












let AppComponent = class AppComponent {
    constructor(config, platform, navCtrl, splashScreen, statusBar, modalController, translate, myEvent) {
        this.config = config;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.modalController = modalController;
        this.translate = translate;
        this.myEvent = myEvent;
        this.rtlSide = "left";
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(value => {
            this.navCtrl.navigateRoot(['./']);
            this.globalize(value);
        });
    }
    initializeApp() {
        if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(_models_contants_models__WEBPACK_IMPORTED_MODULE_6__.Constants.KEY_IS_DEMO_MODE)) {
            window.localStorage.setItem(_models_contants_models__WEBPACK_IMPORTED_MODULE_6__.Constants.KEY_IS_DEMO_MODE, "true");
            this.language();
            setTimeout(() => this.presentModal(), 30000);
        }
        else {
            this.navCtrl.navigateRoot(['./']);
        }
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            let defaultLang = window.localStorage.getItem(_models_contants_models__WEBPACK_IMPORTED_MODULE_6__.Constants.KEY_DEFAULT_LANGUAGE);
            this.globalize(defaultLang);
        });
    }
    globalize(languagePriority) {
        this.translate.setDefaultLang("en");
        let defaultLangCode = this.config.availableLanguages[0].code;
        this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    }
    setDirectionAccordingly(lang) {
        switch (lang) {
            case 'ar': {
                this.rtlSide = "rtl";
                break;
            }
            default: {
                this.rtlSide = "ltr";
                break;
            }
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_3__.VtPopupPage,
            });
            return yield modal.present();
        });
    }
    language() {
        this.navCtrl.navigateRoot(['./change-language']);
    }
};
AppComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG,] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen },
    { type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_7__.MyEvent }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 49670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_CONFIG": () => (/* binding */ APP_CONFIG),
/* harmony export */   "BaseAppConfig": () => (/* binding */ BaseAppConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

let APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("app.config");
const BaseAppConfig = {
    availableLanguages: [{
            code: 'en',
            name: 'English'
        }, {
            code: 'fr',
            name: 'Français'
        }],
    demoMode: false
};


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 64883);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vt-popup/vt-popup.module */ 14758);
/* harmony import */ var _buyappalert_buyappalert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyappalert/buyappalert.module */ 48615);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ 49670);















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
    constructor() {
    }
};
AppModule.ctorParameters = () => [];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_2__.VtPopupPageModule,
            _buyappalert_buyappalert_module__WEBPACK_IMPORTED_MODULE_3__.BuyappalertPageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
                }
            })
        ],
        providers: [
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _app_config__WEBPACK_IMPORTED_MODULE_6__.APP_CONFIG, useValue: _app_config__WEBPACK_IMPORTED_MODULE_6__.BaseAppConfig },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 22618:
/*!***********************************************************!*\
  !*** ./src/app/buyappalert/buyappalert-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyappalertPageRoutingModule": () => (/* binding */ BuyappalertPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyappalert.page */ 31344);




const routes = [
    {
        path: '',
        component: _buyappalert_page__WEBPACK_IMPORTED_MODULE_0__.BuyappalertPage
    }
];
let BuyappalertPageRoutingModule = class BuyappalertPageRoutingModule {
};
BuyappalertPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyappalertPageRoutingModule);



/***/ }),

/***/ 48615:
/*!***************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyappalertPageModule": () => (/* binding */ BuyappalertPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyappalert-routing.module */ 22618);
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyappalert.page */ 31344);







let BuyappalertPageModule = class BuyappalertPageModule {
};
BuyappalertPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyappalertPageRoutingModule
        ],
        declarations: [_buyappalert_page__WEBPACK_IMPORTED_MODULE_1__.BuyappalertPage]
    })
], BuyappalertPageModule);



/***/ }),

/***/ 31344:
/*!*************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyappalertPage": () => (/* binding */ BuyappalertPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _buyappalert_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyappalert.page.html?ngResource */ 59186);
/* harmony import */ var _buyappalert_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyappalert.page.scss?ngResource */ 50101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);






let BuyappalertPage = class BuyappalertPage {
    constructor(modalController, http) {
        this.modalController = modalController;
        this.http = http;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    buyAppAction() {
        this.modalController.dismiss();
        window.open("http://bit.ly/cc_OpusBanking", '_system', 'location=no');
    }
    navWhatsapp() {
        let projectName = "OpusBanking";
        this.http.get("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName + "&source=ionic_template", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        }).subscribe(res => {
            window.open(res['link'], '_system', 'location=no');
        }, err => { });
        this.dismiss();
    }
};
BuyappalertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
BuyappalertPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-buyappalert',
        template: _buyappalert_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buyappalert_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuyappalertPage);



/***/ }),

/***/ 19656:
/*!*****************************************************!*\
  !*** ./src/app/vt-popup/vt-popup-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPageRoutingModule": () => (/* binding */ VtPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup.page */ 45866);




const routes = [
    {
        path: '',
        component: _vt_popup_page__WEBPACK_IMPORTED_MODULE_0__.VtPopupPage
    }
];
let VtPopupPageRoutingModule = class VtPopupPageRoutingModule {
};
VtPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VtPopupPageRoutingModule);



/***/ }),

/***/ 14758:
/*!*********************************************!*\
  !*** ./src/app/vt-popup/vt-popup.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPageModule": () => (/* binding */ VtPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup-routing.module */ 19656);
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vt-popup.page */ 45866);







let VtPopupPageModule = class VtPopupPageModule {
};
VtPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.VtPopupPageRoutingModule
        ],
        declarations: [_vt_popup_page__WEBPACK_IMPORTED_MODULE_1__.VtPopupPage]
    })
], VtPopupPageModule);



/***/ }),

/***/ 45866:
/*!*******************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPage": () => (/* binding */ VtPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vt_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup.page.html?ngResource */ 66455);
/* harmony import */ var _vt_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vt-popup.page.scss?ngResource */ 4591);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let VtPopupPage = class VtPopupPage {
    constructor(navCtrl, modalCtrl, modalController, http, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.email_Id = '';
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    onSubscribe() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
            return this.presentToast('Please provide your Email.');
        }
        this.presentLoading('Sending...');
        let req = {
            "email": this.email_Id,
            "source": "opus_application_opusbanking"
        };
        this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe((res) => {
            this.presentToast('Submitted successfully.');
            this.modalController.dismiss();
            this.dismissLoading();
        });
    }
    presentToast(body, position, duration) {
        this.toastController.create({
            message: body,
            duration: (duration && duration > 0) ? duration : 2000,
            position: (position && (position == "top" || position == "middle")) ? position : 'bottom'
        }).then(toast => toast.present());
    }
    presentLoading(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({ message: body }).then(overlay => {
                overlay.present().then(() => {
                    if (!this.isLoading) {
                        try {
                            overlay.dismiss().then(() => console.log('loading aborted'));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                });
            });
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            try {
                return yield this.loadingController.dismiss();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
};
VtPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
VtPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-vt-popup',
        template: _vt_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vt_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VtPopupPage);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 64879:
/*!***************************************!*\
  !*** ./src/models/contants.models.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
}
Constants.KEY_DEFAULT_LANGUAGE = 'opusbanking_dl';
Constants.KEY_DARK_MODE = 'opusbanking_dark_mode';
Constants.KEY_IS_DEMO_MODE = 'opusbanking_is_demo_mode';
Constants.THEME_MODE_DARK = "theme_dark";
Constants.THEME_MODE_LIGHT = "theme_light";
Constants.DEFAULT_API_HOSTNAME = "http://192.168.0.171:8001/";
Constants.DEFAULT_USSD_SHORTCODE = "*144*4*1*1*";
Constants.API_HOSTNAME_KEY = "api_hostname";
Constants.USSD_SHORTCODE_KEY = "ussd_shortcode";
Constants.USER_PROFILE_KEY = "user_profile_key";
Constants.DEFAULT_USER_PROFILE = '{ "name": "SPASS TELECOM", "picture": "assets/imgs/logo.png", "login" : "spass" ,"password" : "0000","phone" : "+226 76 67 88 68"}';
Constants.DEFAULT_DIAL_MODE = 'select';
Constants.DIAL_MODE_KEY = 'dial_mode';


/***/ }),

/***/ 30069:
/*!******************************************!*\
  !*** ./src/services/myevent.services.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyEvent": () => (/* binding */ MyEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);


 // For rxjs 6
let MyEvent = class MyEvent {
    constructor() {
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getLanguageObservable() {
        return this.selectedLanguage.asObservable();
    }
    setLanguageData(data) {
        this.selectedLanguage.next(data);
    }
};
MyEvent.ctorParameters = () => [];
MyEvent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MyEvent);



/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsaUdBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUQ7QUFHQTtFQUNDLDBCQUFBO0VBQ0EsbUdBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBRkQ7QUFLQTtFQUNDLDBCQUFBO0VBQ0EseUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBSkQ7QUFPQTtFQUNDLDBCQUFBO0VBQ0EsNkZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FBTkQ7QUFTQTtFQUNDLDBCQUFBO0VBQ0EsNkdBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FBUkQ7QUFXQTtFQUNDLDBCQUFBO0VBQ0EsaUdBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FBVkQ7QUFhQTs7Ozs7Ozs7Ozs7OztFQWFDLGdDQUFBO0VBQ0EsMEJBQUE7QUFYRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbiosXG5ib2R5LFxuaHRtbCxcbnAsXG5zcGFuLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuc3Ryb25nLFxubGkge1xuXHQtLWlvbi1mb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG5cdC8vbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 50101:
/*!**************************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".clear_button {\n  background: #14990A;\n  padding: 15px 24px;\n}\n.clear_button ion-icon {\n  color: #fff;\n  font-size: 1.65rem !important;\n}\n.container {\n  padding: 51px 34px;\n}\n.container h2 {\n  margin: 0;\n  font-size: 1.55rem;\n  font-weight: 600;\n  letter-spacing: 0;\n  padding-bottom: 12px;\n}\n.container p {\n  margin: 0;\n  font-size: 0.87rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  padding-bottom: 32px;\n}\n.container .button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 50px;\n  height: 58px;\n  padding: 0 18px;\n  box-shadow: 0 5px 9px -2px rgba(0, 0, 0, 0.3);\n}\n.container .button .icon_box {\n  min-width: 45px;\n}\n.container .button .icon_box img {\n  width: 35px;\n  display: block;\n}\n.container .button h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  letter-spacing: 0;\n}\n.container .button h3 strong {\n  font-weight: 700;\n}\n.container.no_backend {\n  background: #14990A;\n}\n.container.no_backend h2 {\n  color: #fff;\n}\n.container.no_backend p {\n  color: #fff;\n}\n.container.no_backend .button {\n  background: #fff;\n  color: #000000;\n}\n.container.complete_backend {\n  background: #FFFFFF;\n}\n.container.complete_backend h2 {\n  color: #000000;\n}\n.container.complete_backend p {\n  color: #7F7F7F;\n}\n.container.complete_backend .button {\n  background: #14990A;\n  color: #FFFFFF;\n}\n.container.complete_backend .button .icon_box img {\n  width: 33px;\n}\n.container.complete_backend .button h3 {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWFwcGFsZXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFGWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBSWhCO0FBRFE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdaO0FBRlk7RUFDSSxnQkFBQTtBQUloQjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtBQUdaO0FBRFE7RUFDSSxXQUFBO0FBR1o7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUdaO0FBQUk7RUFDSSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxjQUFBO0FBR1o7QUFEUTtFQUNJLGNBQUE7QUFHWjtBQURRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBR1o7QUFEZ0I7RUFDSSxXQUFBO0FBR3BCO0FBQVk7RUFDSSxnQkFBQTtBQUVoQiIsImZpbGUiOiJidXlhcHBhbGVydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUxcHggMzRweDtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDlweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm5vX2JhY2tlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuY29tcGxldGVfYmFja2VuZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 4591:
/*!********************************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: rgba(0, 0, 0, 0.66) !important;\n  border-radius: 0px !important;\n}\n\n.cloes_btn {\n  padding: 25px;\n}\n\n.cloes_btn ion-icon {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: calc(100% - 53px);\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0;\n  background: none;\n  overflow: hidden;\n  box-shadow: none;\n  padding: 0 0 3px 0;\n}\n\nion-card::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 113px);\n  background: #fff;\n  border-radius: 5px;\n}\n\nion-card .img_box {\n  position: relative;\n  z-index: 99;\n  margin: auto;\n  width: 100%;\n  max-width: 275px;\n  min-height: 275px;\n}\n\nion-card .img_box img {\n  display: block;\n  margin: 0 auto;\n}\n\nion-card .text_box {\n  position: relative;\n  z-index: 99;\n  width: 100%;\n  padding: 0 25px;\n  top: -23px;\n}\n\nion-card .text_box h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n  letter-spacing: 0;\n  padding-bottom: 18px;\n}\n\nion-card .text_box p {\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 19px;\n  color: #000;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-card ion-list {\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\nion-card ion-list ion-item {\n  background: #f5f5f5;\n  padding: 0 17px;\n  width: calc(100% - 0px);\n  min-height: unset !important;\n  margin: 0 auto;\n  --background: none;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\nion-card ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  font-weight: 500 !important;\n  color: #000;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0px !important;\n  --placeholder-color: #b3b3b3 !important;\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --padding: 0 !important;\n  min-height: 45px;\n}\n\nion-card ion-list button[ion-button] {\n  margin: 0;\n  background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  height: 46px;\n  border-radius: 5px;\n  text-transform: unset;\n  font-size: 1.4rem;\n  box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n\nion-card ion-list .button.btn {\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.53px !important;\n  height: 46px;\n  --background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  color: #fff;\n  margin: 0;\n  text-transform: unset !important;\n  --box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ0LXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFEUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBR1o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUdaOztBQURRO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdaOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUVSOztBQURRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR1o7O0FBRlk7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUloQjs7QUFBWTtFQUNJLFNBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtBQUVoQjs7QUFFWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0RBQUE7QUFBaEIiLCJmaWxlIjoidnQtcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY2KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCFpbXBvcnRhbnQ7XG59XG5cbi5jbG9lc19idG4ge1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuXG5pb24tY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUzcHgpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDAgM3B4IDA7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExM3B4KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuaW1nX2JveCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMjc1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3NXB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50ZXh0X2JveCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICAgIHRvcDogLTIzcHg7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IzYjNiMyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAmW2lvbi1idXR0b25dIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1ODM5ZCAwJSwgI2VlMmQ1YSA3MCUpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAmLmJ0biB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNTgzOWQgMCUsICNlZTJkNWEgNzAlKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwIDEycHggMThweCAtMXB4IHJnYmEoMjM4LCA0NSwgOTAsIDAuMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app [dir]=\"rtlSide\">\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>";

/***/ }),

/***/ 59186:
/*!**************************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n    <div class=\"clear_button\">\n        <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n    <div class=\"container no_backend\">\n        <h2>Buy this <br> Template Now</h2>\n        <p>IONIC template only, No Backend.</p>\n        <div class=\"button\" (click)=\"buyAppAction()\">\n            <div class=\"icon_box\">\n                <img src=\"assets/imgs/ic_codecanyon.png\">\n            </div>\n            <h3>Get it on <strong>Codecanoyon</strong></h3>\n        </div>\n    </div>\n\n    <div class=\"container complete_backend\">\n        <h2>Buy this App with <br>Complete Backend </h2>\n        <p>Full App solution with complete Backend.</p>\n        <div class=\"button\" (click)=\"navWhatsapp()\">\n            <div class=\"icon_box\">\n                <img src=\"assets/imgs/ic_whatsapp.png\">\n            </div>\n            <h3>Message on <strong>WhatsApp</strong></h3>\n        </div>\n    </div>\n</ion-content>";

/***/ }),

/***/ 66455:
/*!********************************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n    <div class=\"cloes_btn ion-text-end\">\n        <ion-icon name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n\n    <ion-card>\n        <div class=\"img_box\">\n            <img src=\"assets/imgs/vt_popup_img.png\">\n        </div>\n\n        <div class=\"text_box\">\n            <h2>Stay in touch.</h2>\n            <p>Stay connected for Future <br>updates and new products.</p>\n        </div>\n        <ion-list lines=\"none\">\n\n            <ion-item lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"Enter your email address\" [(ngModel)]=\"email_Id\"></ion-input>\n            </ion-item>\n\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"onSubscribe()\">\n                Subscribe Now\n            </ion-button>\n\n        </ion-list>\n    </ion-card>\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map