import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'vex-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.getProducts().subscribe((data: any) => {
        this.products = data;
      })
  }
}
