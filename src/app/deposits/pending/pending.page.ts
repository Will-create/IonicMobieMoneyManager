import { Component, OnInit } from '@angular/core';
import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {
  private SMS : string;
  constructor( private toastCtrl : ToastController) {
    SmsRetriever.getAppHash()
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
   }

  ngOnInit() {
  }
 tabs(){

 }
 start(){
  SmsRetriever.startWatching()
  .then((res: any) => {
    console.log(res);
    this.processSMS(res);
  })
  .catch((error: any) => console.error(error));
 }

 processSMS(data){
   // Design your SMS with App hash so the retriever API can read the SMS without READ_SMS permission
    // Attach the App hash to SMS from your server, Last 11 characters should be the App Hash
    // After that, format the SMS so you can recognize the OTP correctly
    // Here I put the first 6 character as OTP
    const message = data.Message;
    if (message != -1) {
      this.SMS = message.slice(0, 6);
      console.log(this.SMS);
      this.presentToast('Transaction successfull', 'bottom', 600);
    }
 }

 async presentToast(message, position, duration) {
  const toast = await this.toastCtrl.create({
    message: message,
    position: position,
    duration: duration
  });
  toast.present();
}
}
