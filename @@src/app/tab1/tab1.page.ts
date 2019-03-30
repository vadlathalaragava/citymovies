import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import MovieService from '../movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movie_date = '';
  movies = this.movieService.getMovies();

constructor(private router:Router,private location:Location,private movieService: MovieService){ }
   

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
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
  editMovie(movie){
    console.log("id" + movie.id);
    this.router.navigate(['/edit-movie/'+movie.id]);
     
    
  }




  gotoLogin(){
    this.router.navigate(['/login']);
  }



  
}

 