cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/src/browser/BackgroundModeProxy.js",
        "id": "cordova-plugin-background-mode.BackgroundMode.Proxy",
        "pluginId": "cordova-plugin-background-mode",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sms-receive/www/SMSReceive.js",
        "id": "cordova-plugin-sms-receive.SMSReceive",
        "pluginId": "cordova-plugin-sms-receive",
        "clobbers": [
            "window.SMSReceive"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sms-retriever-manager/www/smsRetriever.js",
        "id": "cordova-plugin-sms-retriever-manager.AndroidSmsRetriever",
        "pluginId": "cordova-plugin-sms-retriever-manager",
        "clobbers": [
            "cordova.plugins.smsRetriever"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
        "id": "mx.ferreyra.callnumber.CallNumber",
        "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/ng.neiel.cordova.plugins.ussd/www/ussd.js",
        "id": "ng.neiel.cordova.plugins.ussd.ussd",
        "pluginId": "ng.neiel.cordova.plugins.ussd",
        "clobbers": [
            "ussd"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-background-mode": "0.7.3",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-sms-receive": "1.0.2",
    "cordova-plugin-sms-retriever-manager": "1.0.3",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-vibration": "3.1.1",
    "mx.ferreyra.callnumber": "0.0.2",
    "ng.neiel.cordova.plugins.ussd": "0.7.0"
}
// BOTTOM OF METADATA
});