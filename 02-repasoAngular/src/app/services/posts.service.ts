import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( tap((data) => { // operador tap sirve para sacar datos sin que sean modificados y sigue devolviendo el observable
        console.log(data);
      }) );
  }
}
