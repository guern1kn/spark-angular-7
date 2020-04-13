import { Component } from '@angular/core';

@Component({
  selector: 'sprk-typography-docs',
  template: `
  <div class="drizzle-o-ContentGrouping">
    <h2 class="drizzle-b-h2">Page Title</h2>
    <h1 sprkHeading variant="displayTwo" isPageTitle="true">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h1>

    <h2 class="drizzle-b-h2">Display One</h2>
    <h1 sprkHeading variant="displayOne">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h1>

    <h2 class="drizzle-b-h2">Display Two</h2>
    <h2 sprkHeading variant="displayTwo">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h2>

    <h2 class="drizzle-b-h2">Display Three</h2>
    <h3 sprkHeading variant="displayThree">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h3>

    <h2 class="drizzle-b-h2">Display Four</h2>
    <h4 sprkHeading variant="displayFour">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h4>

    <h2 class="drizzle-b-h2">Display Five</h2>
    <h5 sprkHeading variant="displayFive">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h5>

    <h2 class="drizzle-b-h2">Display Six</h2>
    <h6 sprkHeading variant="displaySix">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h6>

    <h2 class="drizzle-b-h2">Display Seven</h2>
    <h6 sprkHeading variant="displaySeven">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h6>

    <h2 class="drizzle-b-h2">Body One</h2>
    <p sprkText variant="bodyOne">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
      Suspendisse sit amet euismod nibh, eget
      fermentum arcu. Aliquam lacinia, sem eu
      ultricies auctor, velit nunc commodo
      sapien, pharetra maximus augue dui
      eget dui.
    </p>

    <h2 class="drizzle-b-h2">Body Two</h2>
    <p sprkText variant="bodyTwo">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
      Suspendisse sit amet euismod nibh, eget
      fermentum arcu. Aliquam lacinia, sem eu
      ultricies auctor, velit nunc commodo
      sapien, pharetra maximus augue dui
      eget dui.
    </p>

    <h2 class="drizzle-b-h2">Body Three</h2>
    <p sprkText variant="bodyThree">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
      Suspendisse sit amet euismod nibh, eget
      fermentum arcu. Aliquam lacinia, sem eu
      ultricies auctor, velit nunc commodo
      sapien, pharetra maximus augue dui
      eget dui.
    </p>

    <h2 class="drizzle-b-h2">Body Four</h2>
    <p sprkText variant="bodyFour">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
      Suspendisse sit amet euismod nibh, eget
      fermentum arcu. Aliquam lacinia, sem eu
      ultricies auctor, velit nunc commodo
      sapien, pharetra maximus augue dui
      eget dui.
    </p>
  </div>
  `
})
export class TypographyDocsComponent {
  constructor() {}
}