import { Component } from '@angular/core';

@Component({
  selector: 'sprk-flag-docs',
  template: `<div class="drizzle-o-ContentGrouping" sprkCenteredColumn>
      <h2 class="drizzle-b-h2">
        Flags
      </h2>

      <sprk-flag>
        <img
          media-slot
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.com/spark-logo-mark.svg"
        />
        <p body-slot>
          Lorem ipsum dolor. Sit amet pede. Tempus donec et.
          Suspendisse id inventore integer eum non enim diam habitant.
        </p>
      </sprk-flag>

      <h2 class="drizzle-b-h2">
        Flag - Reversed
      </h2>
      <sprk-flag
        [isReversed]="true"
      >
        <img
          media-slot
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.com/spark-logo-mark.svg"
        />
        <p body-slot>
          Lorem ipsum dolor. Sit amet pede. Tempus donec et.
          Suspendisse id inventore integer eum non enim diam habitant.
        </p>
      </sprk-flag>

      <h2 class="drizzle-b-h2">
        Flag - Stacked
      </h2>
      <sprk-flag
        [isStacked]="true"
      >
        <img
          media-slot
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.com/spark-logo-mark.svg"
        />
        <p body-slot>
          Lorem ipsum dolor. Sit amet pede. Tempus donec et.
          Suspendisse id inventore integer eum non enim diam habitant.
        </p>
      </sprk-flag>
    </div>
  `
})
export class FlagDocsComponent {
  constructor() {}
}