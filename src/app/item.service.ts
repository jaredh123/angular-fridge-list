import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.items = database.list('items');
  }

  getItems() {
    return this.items;
  }

  addItem(newItem: Item) {
  console.log(newItem);
  this.items.push(newItem);
  }

  getItemById(itemId: number) {
    return this.database.object('items/' + itemId);
  }

  deleteItem(localItemToDelete) {
    var itemEntryInFirebase = this.getItemById(localItemToDelete.$key);
    itemEntryInFirebase.remove();
  }
}
