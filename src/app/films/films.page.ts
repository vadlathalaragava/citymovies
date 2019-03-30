import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  testClick(){
    this.router.navigate(['/tabs/tab1']);
  }
}
