import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import  MovieService  from '../movie.service';
declare var RazorpayCheckout:any;
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  my_tickets:'';
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

  // data={
  //   tickets:0
  // }
  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.movieService.getRemoteMovieById(this.id).subscribe((movie)=>{
        console.log(movie);
        this.movie= movie;
      })
    })
  }

 // amount=this.data.tickets*50
  addBooking(){
    var amonutpriseticket:any=this.my_tickets;
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_1DP5mmOlF5G5ag',
     // order_id: 'order_7HtFNLS98dSj8x'
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'pranav@razorpay.com',
        contact: '8879524924',
        name: 'Pranav Gupta'
      },
      theme: {
        color: '#F37254'
      }
    }
    
    var successCallback = function(success) {
      alert('payment_id: ' + success.razorpay_payment_id)
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
      
      this.router.navigate(['/paymentdone']);
    }
    
    var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
    }
    
    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options)
    // console.log(movie,t);
    // this.movies={
    // customer_id:2,
    // tickets:t,
    // movie_id:movie.id,
    // movie_name:movie.name,
    // movie_time:'12:50',
    // theatre:'Cinepolis Meenakshi Mall',
    // screen:'Screen 2',
    // city:'Bangalore',
    // movie_date:'2019-05-07',
    // date:'2019-03-27',
    // amount:this.amount,
    // ticket_price:50
    // }
    // console.log('data sent====>',this.addBooking)
    // this.movieService.addBooking(this.movies).subscribe((e)=>{console.log(JSON.stringify(e));
    // this.router.navigate(['/payment'])
    // });

  // updateTextArea(){
  //   this.router.navigate(['/payment']);
  // }

  
}
goback(){
  this.router.navigate(['/tabs/tab1']);
}

}
