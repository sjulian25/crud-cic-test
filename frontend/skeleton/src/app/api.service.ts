import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; // Ajusta el puerto de Laravel

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  createProduct(product: any) {
    return this.http.post(`${this.apiUrl}/products`, product);
  }
  // ...métodos para update y delete
}