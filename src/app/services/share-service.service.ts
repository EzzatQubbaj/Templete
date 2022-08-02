import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  data={
    name:'Ezzat',
    last:'Qubbaj',
    country:'palestine'
  }
   url="www.google.com"

   isAdmin=false
  constructor() { }

  print(){
    console.log(this.data.name)
    console.log(this.data.last)
    console.log(this.data.country)
    
  }
}
