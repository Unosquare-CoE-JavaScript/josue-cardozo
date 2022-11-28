import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStore(title: string, content: string) {
    const postData: Post = { title, content }
    this.http.post<{ name: string }>(
      'https://caniche-toy-marron.firebaseio.com/post.json',
      postData,
      {
        observe: 'response'
      }
    )
      .subscribe(responseData => {
        console.log(responseData)
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http.get<{ [key: string]: Post }>(
      'https://caniche-toy-marron.firebaseio.com/post.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'hola' }),
        params: searchParams,
        responseType: 'json'
      }
    )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }), catchError(err => {
          return throwError(err);
        }));
  }

  deletePosts() {
    return this.http.delete('https://caniche-toy-marron.firebaseio.com/post.json',
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) { 
        // ...
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
