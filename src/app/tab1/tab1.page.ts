import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import MovieService from '../movie.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router:Router,private location:Location,private movieService: MovieService,private activatedRoute:ActivatedRoute){}
 

  
  goback(){
    this.location.back();
  }
  movie_date = '';
  movies = this.movieService.getMovies();


  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }
  doLogin(){
    // if(this.data.username == this.data.password){
      this.router.navigate(['/payment']);
    }

  navigateToMovie(){
    this.router.navigate(['/movie']);
  }
  deleteAll(){
    localStorage.clear();
    this.movies = [];
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  deleteMovie(movie){
    this.movieService.deleteRemoteMovie(movie).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
    });
   // this.list = this.customerService.getCustomers();
  }
  
  bookNow(movie){
    this.router.navigate(['/booking/'+ movie.id]);
  }
  goLogin(){
    this.router.navigate(['/login']);
  }
}
