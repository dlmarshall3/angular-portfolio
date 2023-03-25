import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailApi = 'https://mailthis.to/davidmarshalldev';

  constructor(private http: HttpClient) { }

  public sendEmail(input: any){
    return this.http.post(this.emailApi, input, {responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if(response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
