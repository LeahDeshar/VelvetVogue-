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

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.fetchData();
    // this.todoService;
  }

  fetchData() {
    this.todoService.fetch().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  onInputChange() {}

  receivedData: string = '';

  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }
}
