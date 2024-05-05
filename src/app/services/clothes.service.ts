import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

interface Clothes {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}
interface ClothesResponse {
  items: Clothes[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private readonly apiUrl = 'http://localhost:3000/clothes';
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<ClothesResponse> {
    return this.httpClient.get<ClothesResponse>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = `Error fetching clothes: ${error.message}`;
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
