import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-website-edit',
  templateUrl: './ang-website-edit.component.html',
  styleUrls: ['./ang-website-edit.component.css']
})
export class AngWebsiteEditComponent {

  @Input() childSelectedItem: Item;
  @Output() clickedDone = new EventEmitter();
  finishedEditing() {
    this.clickedDone.emit();
  }


}
