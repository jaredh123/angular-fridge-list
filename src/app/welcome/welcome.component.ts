import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { Item } from '../item.model';
import { ItemService } from '../Item.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ItemService]
})

export class WelcomeComponent implements OnInit {
  itemsId: number = null;
  itemsToDisplay
  items: FirebaseListObservable<any[]>

  constructor(private route: ActivatedRoute, private location: Location, private itemService: ItemService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemsId = urlParameters['id'];
    });
    this.items = this.itemService.getItems();
    this.itemsToDisplay = this.itemService.getItemById(this.itemsId);
    console.log(this.itemsToDisplay)
  }

  submitForm(title: string) {
    var newItem: Item = new Item (title);
    this.itemService.addItem(newItem);
    console.log(newItem);
  }

  beginDeletingItem(itemToDelete) {
    if (confirm("are you sure you want to delete this item from the inventory?")) {
      this.itemService.deleteItem(itemToDelete);
    }
  }
}
