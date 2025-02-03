import { Component, OnInit } from '@angular/core';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { Product } from '../../../core/models/product.model'
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'vex-product-list',
  standalone: true,
  imports: [
    VexPageLayoutComponent,
    VexPageLayoutContentDirective,
    VexPageLayoutHeaderDirective
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error cargando productos:', err)
    });
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id).subscribe({
      next: () => this.loadProducts(),
      error: (err) => console.error('Error eliminando producto:', err)
    });
  }

}
