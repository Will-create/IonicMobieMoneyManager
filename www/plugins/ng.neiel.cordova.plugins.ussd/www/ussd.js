cordova.define("ng.neiel.cordova.plugins.ussd.ussd", function(require, exports, module) {
/*global cordova, module*/

module.exports = {
    dial: function (ussdCode,SIM, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Ussd", "dial", [ussdCode,SIM]);
    }
};

});
