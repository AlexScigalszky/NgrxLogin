import { Component, Input } from "@angular/core";

@Component({
  selector: "bc-book-authors",
  template: `
    <h5 mat-subheader>Written By:</h5>
    <span> Hello Word</span>
  `,
  styles: [
    `
      h5 {
        margin-bottom: 5px;
      }
    `
  ]
})
export class HomeComponent {}
