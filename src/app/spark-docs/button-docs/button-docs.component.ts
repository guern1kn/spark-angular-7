import { Component, OnInit } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark';

@Component({
  selector: 'sprk-button-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Primary Buttons</h2>
      <button sprkButton>Hello, Spark Button</button>
      <button disabled sprkButton>Hello, World.</button>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Secondary Buttons</h2>
      <button class="sprk-c-Button--secondary" sprkButton>Hello, World.</button>
      <button disabled class="sprk-c-Button--secondary" sprkButton>
        Hello, World.
      </button>
    </div>
    <div class="drizzle-o-ContentGrouping" id="foo">
      <h2 class="drizzle-b-h2">Tertiary Buttons</h2>
      <button class="sprk-c-Button--tertiary" sprkButton>Hello, World.</button>
      <button disabled class="sprk-c-Button--tertiary" sprkButton>
        Hello, World.
      </button>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Spinner Buttons</h2>
      <button
        variant="secondary"
        sprkButton
        [isSpinning]="true"
      >
        Button
      </button>
    </div>
  `
})
export class ButtonDocsComponent implements OnInit {
  constructor() {}

  isSpinning = false;

  ngOnInit() {}

  checkSpinner(event): void {
      event.target.isSpinning = !event.target.isSpinning;
    // if (!this.isSpinning) {
    //   setSpinning(event.target, {});
    //   this.isSpinning = true;
    // }
  }
}
