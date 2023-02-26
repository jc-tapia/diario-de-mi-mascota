import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  onReturnTo(){
    console.log("clic en el botton de ingresar")
    this.navController.navigateForward('welcome');
  }
  clickGoToHome(){
    console.log("clic en el botton de ingresar")
    this.navController.navigateForward('home');
  }

}
