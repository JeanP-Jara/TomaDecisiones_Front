import { Component, OnInit } from '@angular/core';
import { homeServices } from 'src/app/services/home.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [homeServices]
})
export class HomeComponent implements OnInit {

  ruc = "20388021196";

  constructor(
    public homeServices: homeServices
  ) { }

  ngOnInit(): void {
  }

  getUser(){

    let parameter = {
      ruc: this.ruc
    }

    this.homeServices.get(parameter).subscribe(
      result =>{
        try {
          if (result.estado) {
            console.log(result.data);
          }else{
            console.log(result);
            
          }
        } catch (error) {
          console.log(error);
          
        }
      }, error =>{
        console.log(error.error);        
      });

  }

}
