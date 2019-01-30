import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  matches: String[];
  isRecording = false;
  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition,private plt: Platform, private cd: ChangeDetectorRef) {

  }

  isIos() {
    return this.plt.is('ios');
  }

}