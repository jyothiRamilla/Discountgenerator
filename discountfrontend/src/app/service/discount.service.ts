import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {catchError, map } from 'rxjs/operators';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DiscountService {
  discountUrl="http://localhost:4000/api/discount";
  headers = new HttpHeaders().set('Content-Type','application/json'); 
  constructor(private http: HttpClient) { }

  createDiscount(data): Observable<any>{
    console.log(this.discountUrl)
    let url = `${this.discountUrl}/create`;
    return this.http.post(url,data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }
  getDiscounts() {
    return this.http.get(`${this.discountUrl}`);
  }
  
  // Get Discount
  getDiscount(id): Observable<any> {
    let url = `${this.discountUrl}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update Discount
  updateDiscount(id, data): Observable<any> {
    let url = `${this.discountUrl}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete Discount
  deleteDiscount(id): Observable<any> {
    let url = `${this.discountUrl}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}
