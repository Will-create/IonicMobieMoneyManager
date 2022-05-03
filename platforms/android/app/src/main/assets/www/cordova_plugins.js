cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-sms-receive.SMSReceive",
      "file": "plugins/cordova-plugin-sms-receive/www/SMSReceive.js",
      "pluginId": "cordova-plugin-sms-receive",
      "clobbers": [
        "window.SMSReceive"
      ]
    },
    {
      "id": "cordova-plugin-sms-retriever-manager.AndroidSmsRetriever",
      "file": "plugins/cordova-plugin-sms-retriever-manager/www/smsRetriever.js",
      "pluginId": "cordova-plugin-sms-retriever-manager",
      "clobbers": [
        "cordova.plugins.smsRetriever"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "mx.ferreyra.callnumber.CallNumber",
      "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
      "pluginId": "mx.ferreyra.callnumber",
      "clobbers": [
        "call"
      ]
    },
    {
      "id": "ng.neiel.cordova.plugins.ussd.ussd",
      "file": "plugins/ng.neiel.cordova.plugins.ussd/www/ussd.js",
      "pluginId": "ng.neiel.cordova.plugins.ussd",
      "clobbers": [
        "ussd"
      ]
    }
  ];
  module.exports.metadata = {
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
  };
});