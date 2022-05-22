import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Constants } from "./contants.models";
export class USER {
    name : string ;
    picture : string;
    login : string ; 
    password : string ;
    phone : string ;
}
export class Helper {
    static httpOptions = {
        Headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    static http : HttpClient;
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
    // Set USSD USSD SHORT CODE
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
    // Set USSD USSD SHORT CODE
    static setUserProfile(user){
        window.localStorage.setItem(Constants.USER_PROFILE_KEY,user);
    }
    // GET USSD SHORT CODE
    static getUserProfile(){
        var user = window.localStorage.getItem(Constants.USER_PROFILE_KEY);
        if(!user)
            user = Constants.DEFAULT_USER_PROFILE;
        return JSON.parse(user);
    }

    // SET DIAL MODE 
    static setDialMode(mode){
        window.localStorage.setItem(Constants.DIAL_MODE_KEY,mode);
    }

    // GET DIAL MODE 
    static getDialMode(){
        let dialmode = window.localStorage.getItem(Constants.DIAL_MODE_KEY);
        if(!dialmode){
            dialmode = Constants.DEFAULT_DIAL_MODE;
        }
        return dialmode;
    }
    static checkTransactionExist(table,transid,callback){
        let options = { method : 'GET', headers :{'Content-Type':'application/json'}}
  fetch(this.getApiHostname()+'api/mobile/transactions/service?table='+table+'&transid='+transid,options).then(res=>{
        let response = res.json();
        console.log('From server',response)
            callback(response['value']);
        });
         
    };

    static isDefaultUser(){
        let user = this.getUserProfile();
        console.log(user);
        if(user['login']=='spass' && user['password']=='0000'){
            return true;
        }else {
            return false;
        }
    }
}