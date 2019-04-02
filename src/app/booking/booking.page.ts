import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import  MovieService  from '../movie.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  movies={
    customer_id:0,
    tickets:0,
    movie_id:0,
    movie_name:'',
    movie_time:'',
    theatre:'',
    screen:'',
    city:'',
    movie_date:'',
    date:'',
    amount:0,
    ticket_price:0
  };
  constructor(private router:Router,private route:ActivatedRoute,private movieService:MovieService) { }
  movie:any;
  id:number;
  private sub:any;
  data={
    tickets:0
  }
  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.movieService.getRemoteMovieById(this.id).subscribe((movie)=>{
        console.log(movie);
        this.movie= movie;
      })
    })
  }

  amount=this.data.tickets*50
  addBooking(movie,t){
    console.log(movie,t);
    this.movies={
    customer_id:2,
    tickets:t,
    movie_id:movie.id,
    movie_name:movie.name,
    movie_time:'12:50',
    theatre:'Cinepolis Meenakshi Mall',
    screen:'Screen 2',
    city:'Bangalore',
    movie_date:'2019-05-07',
    date:'2019-03-27',
    amount:this.amount,
    ticket_price:50
    }
    console.log('data sent====>',this.addBooking)
    this.movieService.addBooking(this.movies).subscribe((e)=>{console.log(JSON.stringify(e));
    this.router.navigate(['/payment'])
    });

  // updateTextArea(){
  //   this.router.navigate(['/payment']);
  // }

  // goback(){
  //   this.router.navigate(['/tabs/tab1']);
  // }
}
}
