import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from 'src/app/services/share-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];

  password ='';


  constructor(private route:Router,private share:ShareServiceService) {
    this.share.print()
   }

  ngOnInit(): void {
  }

}
