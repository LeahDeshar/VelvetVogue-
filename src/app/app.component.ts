import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './layout/category/category.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './layout/card/card.component';
import { TodoService } from './services/todo.service';
import { ClothesService } from './services/clothes.service';
interface Clothes {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}
export interface ClothesResponse {
  items: Clothes[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    CategoryComponent,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'VelvetVogue';
  inputValue: string = '';
  data: any;
  clothes: Clothes[] = [];

  constructor(
    private todoService: TodoService,
    private clothService: ClothesService
  ) {}
  ngOnInit() {
    this.fetchClothes();
    // this.todoService;
  }

  fetchData() {
    this.todoService.fetch().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  fetchClothes() {
    this.clothService.fetchData().subscribe((data: ClothesResponse) => {
      this.clothes = data.items;
      console.log('clothes', this.clothes);
    });

    // subscribe(
    //   (data) => {
    //     this.clothes = data;
    //     console.log('clothes', this.clothes);
    //   },
    //   (error) => {
    //     // Handle error if necessary
    //     console.error('Error fetching clothes:', error);
    //   }
    // );
  }
  onInputChange() {}

  receivedData: string = '';

  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }
}
