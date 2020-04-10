import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-link-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">External Links</h2>

      <a sprkLink href="https://www.google.com" class="sprk-u-mrm"
        >https://www.google.com</a>
      <a sprkLink href="http://www.google.com">http://www.google.com</a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Same Page Links</h2>

      <a
        sprkLink
        href="/links#info"
        class="sprk-u-mrm"
      >
        Jump Link
      </a>
      <a
        sprkLink
        href="/buttons#foo"
        aria-label="foo"
      >
        Jump Link With Page
      </a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link with no href provided</h2>

      <a sprkLink>No href provided.</a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link Using External Input</h2>

      <a sprkLink href="tel:+123456789"> Spark </a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link Using tel</h2>

      <a sprkLink href="tel:+123456789"> Tel Link </a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link Using mailto</h2>

      <a sprkLink href="mailto:example@example.com"> mailto Link </a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link</h2>

      <a
        sprkLink
        href="/alerts"
        idString="link-1"
        analyticsString="object.action.event"
      >
        This is a standard Spark Link!
      </a>

      <p>
        Here is a
        <a
          sprkLink
          href="/alerts"
          idString="link-1"
          analyticsString="object.action.event"
        >
          link
        </a>
        in the middle of a line
      </p>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Simple Link</h2>

      <a
        sprkLink
        variant="simple"
        href="/alerts"
        idString="link-2"
        analyticsString="object.action.event"
      >
        Hello, World.
      </a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Additional Classes</h2>

      <a
        sprkLink
        class="sprk-u-mbm"
        href="/buttons"
        idString="link-3"
        analyticsString="object.action.event"
      >
        Link with Margin Bottom class
      </a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Disabled Link</h2>

      <a
        sprkLink
        [isDisabled]="true"
        href="/buttons"
        idString="link-4"
        analyticsString="object.action.event"
      >
        This is a Spark Disabled Link
      </a>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Icon With Text Link</h2>

      <a
        sprkLink
        variant="icon"
        href="/icons"
        idString="link-5"
        analyticsString="object.action.event"
      >
        <sprk-icon
          iconType="communication"
          additionalClasses="sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-u-mrs"
        ></sprk-icon>

        Message Us
      </a>
    </div>
    <a id="info">Hi, I'm info!</a>
  `,
  styles: ['']
})
export class LinkDocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
