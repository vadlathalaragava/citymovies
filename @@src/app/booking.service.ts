import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class BookingService {
  private bookingUrl = 'http://localhost:3000/api/movies/'

  constructor(private http: HttpClient) { }

  movies = [];

getRemoteBookings(): Observable<[]>{
  return this.http.get<[]>(this.bookingUrl); 		
}

addRemoteBooking(customer):Observable<any>{
  return this.http.post(this.bookingUrl,customer);
}

deleteRemoteBooking(movie): Observable<[]>{
  return this.http.delete<[]>(this.bookingUrl+'/'+movie.id);
}
getMovies(){
  return this.movies;
}

updateRemoteMovie(movie):Observable<any>{
  return this.http.put(this.bookingUrl + "/"+movie.id,movie);
}

getRemoteMovieById(id):Observable<any>{
 return this.http.get<[]>(this.bookingUrl + "/"+id);
}
}
