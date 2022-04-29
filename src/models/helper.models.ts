import { Constants } from "./contants.models";

export class Helper {
    static seThemeMode(status: string) {
        window.localStorage.setItem(Constants.KEY_DARK_MODE, status);
    }
    static getThemeMode(defaultTheme: string) {
        let toReturn = window.localStorage.getItem(Constants.KEY_DARK_MODE);
        if (!toReturn) toReturn = defaultTheme;
        return toReturn;
    }
    // SET API BASE URL OR HOSTNAME
    static setApiHostname(hostname : string){
        window.localStorage.setItem(Constants.API_HOSTNAME_KEY,hostname);
    }

    // GET API BASE URL OR HOSTNAME
    static getApiHostname(){
        var hostname = window.localStorage.getItem(Constants.API_HOSTNAME_KEY);
        if(!hostname)
            hostname = Constants.DEFAULT_API_HOSTNAME;
        return hostname;
    }


    // USSD USSD SHORT CODE
    static setUssdShortcode(shortcode : string){
        window.localStorage.setItem(Constants.USSD_SHORTCODE_KEY,shortcode);
    }

    // GET USSD SHORT CODE
    static getUssdShortcode(){
        var shortcode = window.localStorage.getItem(Constants.USSD_SHORTCODE_KEY);
        if(!shortcode)
            shortcode = Constants.DEFAULT_USSD_SHORTCODE;
        return shortcode;
    }
}