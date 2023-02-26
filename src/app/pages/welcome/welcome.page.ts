import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }
  onPushLogin(){
    console.log("clic en el botton de ingresar")
    this.navController.navigateForward('login');
  }
  onPushRegister(){
    console.log("clic en el botton de registrarse")
    this.navController.navigateForward('register');
  }
}
