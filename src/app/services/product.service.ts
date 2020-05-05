import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../api';
import { IProduct } from '../core/interfaces/product';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get(environment.backEndHost + Api.products.getAllProducts)
      .pipe(map(
        (response: IProduct[]) => response,
      ));
  }
  
}
