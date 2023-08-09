import { Component, EventEmitter, Output } from '@angular/core';

import { products } from '../products';
import { User } from '../shared/user.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  searchText = '';
  searchResults?: User[];

  constructor(private http: HttpClient) {}

  searchClicked() {
    this.http
      .get<{ items: User[] }>('https://api.github.com/search/users', {
        params: { q: this.searchText },
      })
      .subscribe((res) => {
        this.searchResults = res.items;
      });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/