import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { Response } from '../../interfaces/response';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  lastPage: number;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.referesh();
  }

  referesh(currentPage = 1) {
    this.productsService.all(currentPage).subscribe((res: Response) => {
      this.products = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

  delete(id: number) {
    this.productsService.delete(id).subscribe((res) => {
      this.products = this.products.filter((el) => el.id !== id);
    });
  }
}
