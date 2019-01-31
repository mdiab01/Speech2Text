import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: string;
  rate: number;
  locale: string;

  constructor(public navCtrl: NavController, private textToSpeech: TextToSpeech, private plt: Platform, private tts: TextToSpeech) {
    this.text = '';
    this.rate = 1;
    this.locale = 'en-US';
  }

  playText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}