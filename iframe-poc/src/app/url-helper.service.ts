import { Injectable } from '@angular/core';
// import { ResponseContentType, Http, RequestOptions, Headers } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';



@Injectable()
export class UrlHelperService {

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Bearer my-auth-token',
          responseType: 'Blob'
        })
    };

    constructor(private http: HttpClient) {
    }

    get(url: string): Observable<any> {
        return new Observable((observer: Subscriber<any>) => {
            let objectUrl: string = null;

            this.http
                .get(url, this.httpOptions)
                .subscribe((m: any) => {
                    objectUrl = URL.createObjectURL(m.blob());
                    observer.next(objectUrl);
                });

            return () => {
                if (objectUrl) {
                    URL.revokeObjectURL(objectUrl);
                    objectUrl = null;
                }
            };
        });
    }
}
