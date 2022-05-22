import { Injectable } from '@angular/core';
import {LoadingController} from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  constructor(public loadingController : LoadingController) {

   }
   simpleLoader(){
     this.loadingController.create({
       message : "chargement...",
       mode : "ios",
       cssClass : "customLoader"
     }).then(response =>{
       response.present();
     });
   }


   // dismiss the loader
   dismissLoader(){
     this.loadingController.dismiss().then(response=>{
       console.log("Loader is dismissed",response);
     }).catch(error=>{
       console.log("error dismissing loader",error)
     })
   }


   autoLoader(duration?){
     this.loadingController.create({
       message : "Chargement...",
       mode : "ios",
       cssClass : "customLoader",
       duration : duration || 2000 
     }).then(response=>{
       response.present();
       response.onDidDismiss().then(response=>{
         console.log("the loader has auto dismissed")
       })
     })
   }


  customLoader(){
    this.loadingController.create({
      message : "Chargement...",
      duration : 4000,
      cssClass : "customLoader",
      backdropDismiss : true
    }).then(response=>{
      response.present();

    })
  }
}
