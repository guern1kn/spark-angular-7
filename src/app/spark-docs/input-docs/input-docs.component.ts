import { Component } from '@angular/core';

@Component({
  selector: 'sprk-input-docs',
  template: `
  <h2 class="drizzle-b-h2">Checkbox</h2>
  <sprk-selection-container>
    <label sprkLabel>
      Checkbox Group Label
    </label>

    <sprk-selection-item-container>
      <input
        type="checkbox"
        name="checkbox_input"
        [(ngModel)]="checkbox_input1"
        sprkSelectionInput
        #checkboxInput1="ngModel"
        data-id="checkbox-1"
        id="checkbox-1"
        (change)="onSelect($event)"
      >

      <label
        for="checkbox-1"
        sprkSelectionLabel
      >
        Checkbox Item 1
      </label>
    </sprk-selection-item-container>

    <sprk-selection-item-container>
      <input
        type="checkbox"
        name="checkbox_input"
        [(ngModel)]="checkbox_input2"
        sprkSelectionInput
        #checkboxInput2="ngModel"
        data-id="checkbox-2"
        id="checkbox-2"
        (change)="onSelect($event)"
      >

      <label
        for="checkbox-2"
        sprkSelectionLabel
      >
        Checkbox Item 2
      </label>
    </sprk-selection-item-container>

    <sprk-selection-item-container>
      <input
        type="checkbox"
        name="checkbox_input"
        [(ngModel)]="checkbox_input3"
        sprkSelectionInput
        #checkboxInput3="ngModel"
        data-id="checkbox-3"
        id="checkbox-3"
        (change)="onSelect($event)"
      >

      <label
        for="checkbox-3"
        sprkSelectionLabel
      >
        Checkbox Item 3
      </label>
    </sprk-selection-item-container>
  </sprk-selection-container>

  <h2 class="drizzle-b-h2">Date</h2>
  <sprk-input-container>
    <label sprkLabel>Date Input (No Picker)</label>
    <input
      name="date_input"
      type="text"
      placeholder="MM/DD/YYYY"
      [(ngModel)]="date_input"
      #dateInput="ngModel"
      sprkInput
    />
  </sprk-input-container>

  <h2 class="drizzle-b-h2">Date Picker</h2>
  <sprk-icon-input-container>
    <label class="sprk-b-Label--with-icon" sprkLabel>
      Date Input
    </label>
    <sprk-icon
      iconType="calendar"
      additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-DatePicker__icon"
      sprk-input-icon
    ></sprk-icon>
    <input
      name="datepicker_input"
      class="sprk-b-TextInput--has-svg-icon"
      type="text"
      placeholder="MM/DD/YYYY"
      [(ngModel)]="datepicker_input"
      #datepickerInput="ngModel"
      [sprkDatePickerConfig]="dpConfig"
      sprkDatepicker
      sprkInput
    />
  </sprk-icon-input-container>

  <h2 class="drizzle-b-h2">Helper Text</h2>
  <sprk-input-container>
    <label sprkLabel>
      Text Input Label
    </label>
    <input
      sprkInput
      name="text_input"
      type="text"
      [(ngModel)]="text_input"
      #textInput="ngModel"
      data-id="text-input-1"
    >
    <p sprkHelperText>
      Optional helper text, used to clarify the field's intent.
    </p>
  </sprk-input-container>

  <h2 class="drizzle-b-h2">Huge Select</h2>
  <sprk-huge-input-container>
    <select
      id="select-huge-1"
      aria-describedby="select-normal--error-container"
      data-id="select-huge-1"
      data-sprk-input="huge"
      sprkInput
    >
      <option
        value=""
        disabled
        selected
        hidden
      ></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <optgroup label="Grouped Options">
        <option value="g1">Grouped Option 1</option>
        <option value="g2">Grouped Option 2</option>
        <option value="g3">Grouped Option 3</option>
      </optgroup>
    </select>
    <label sprkLabel for="select-huge-1">Huge Select Box Label</label>
    <sprk-icon
      iconType="chevron-down"
      additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
      sprk-select-icon
    ></sprk-icon>
  </sprk-huge-input-container>

  <h2 class="drizzle-b-h2">Huge Text</h2>
  <sprk-huge-input-container>
    <input
      placeholder="Placeholder"
      name="text_input_huge"
      type="text"
      [(ngModel)]="text_input_huge"
      #textInput="ngModel"
      sprkInput
    />
    <label sprkLabel>Huge Text Input</label>
  </sprk-huge-input-container>

  <h2 class="drizzle-b-h2">Monetary</h2>
  <sprk-icon-input-container
    iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon"
  >
    <label class="sprk-b-Label--monetary" sprkLabel>
      Payment
    </label>
    <input
      class="sprk-b-TextInput--has-text-icon"
      name="monetary_input"
      type="text"
      [(ngModel)]="monetary_input"
      #monetaryInput="ngModel"
      sprkInput
    />
  </sprk-icon-input-container>

  <h2 class="drizzle-b-h2">Password</h2>
  <sprk-input-container>
    <label sprkLabel>Password</label>
    <input type="password" name="password_input" sprkInput />
    <sprk-selection-item-container
      additionalClasses="sprk-b-InputContainer__visibility-toggle"
    >
      <input
        type="checkbox"
        sprkSelectionInput
        id="show-password"
      />
      <label for="show-password" sprkSelectionLabel>Show Password</label>
    </sprk-selection-item-container>
  </sprk-input-container>

  <h2 class="drizzle-b-h2">Percentage</h2>
  <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
    <label sprkLabel>Percentage</label>
    <sprk-icon
      iconType="percent"
      additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
      sprk-input-icon
    ></sprk-icon>
    <input
      class="sprk-b-InputContainer__input--has-icon-right"
      name="percentage"
      type="tel"
      sprkInput
    />
  </sprk-icon-input-container>

  <h2 class="drizzle-b-h2">Phone</h2>
  <sprk-input-container>
    <label sprkLabel>Phone Number</label>
    <input
      name="phone_input"
      type="text"
      placeholder="(000) 000-0000"
      [(ngModel)]="phone_input"
      #phoneInput="ngModel"
      sprkInput
    />
  </sprk-input-container>

  <h2 class="drizzle-b-h2">Radio</h2>
  <sprk-selection-container>
    <label sprkLabel>Radio Group Label</label>
    <sprk-selection-item-container>
      <input
        type="radio"
        value="1"
        name="radio_input"
        [(ngModel)]="radio_input"
        sprkSelectionInput
        #radioInput="ngModel"
        data-id="radio-1"
        id="radio-1"
        (change)="onRadioSelect($event)"
      >
      <label
        for="radio-1"
        sprkSelectionLabel
      >
        Item 1
      </label>
    </sprk-selection-item-container>
    <sprk-selection-item-container>
      <input
        type="radio"
        value="2"
        name="radio_input"
        sprkSelectionInput
        [(ngModel)]="radio_input"
        #radioInput="ngModel"
        data-id="radio-2"
        id="radio-2"
        (change)="onRadioSelect($event)"
      >
      <label
        for="radio-2"
        sprkSelectionLabel
      >
        Item 2
      </label>
    </sprk-selection-item-container>
    <sprk-selection-item-container>
      <input
        type="radio"
        value="3"
        name="radio_input"
        sprkSelectionInput
        [(ngModel)]="radio_input"
        #radioInput="ngModel"
        data-id="radio-3"
        id="radio-3"
        (change)="onRadioSelect($event)"
      >
      <label
        for="radio-3"
        sprkSelectionLabel
      >
        Item 3
      </label>
    </sprk-selection-item-container>
  </sprk-selection-container>

  <h2 class="drizzle-b-h2">Search</h2>
  <sprk-icon-input-container>
    <label
      class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
      sprkLabel
    >
      Search
    </label>
    <sprk-icon
      iconType="search"
      additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--stroke-current-color"
      sprk-input-icon
    ></sprk-icon>
    <input
      name="inline_search_input"
      class="sprk-b-TextInput--has-svg-icon"
      type="search"
      placeholder="Search"
      [(ngModel)]="inline_search_input"
      #inlineSearchInput="ngModel"
      data-id="input-search-1"
      sprkInput
    >
  </sprk-icon-input-container>

  <h2 class="drizzle-b-h2">Select</h2>
  <sprk-input-container>
    <select
      class="sprk-b-Select"
      id="select-normal-1"
      aria-describedby="select-normal--error-container"
      data-id="select-1"
      sprkInput
    >
      <option value="none">Please choose...</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <optgroup label="Grouped Options">
        <option value="g1">Grouped Option 1</option>
        <option value="g2">Grouped Option 2</option>
        <option value="g3">Grouped Option 3</option>
      </optgroup>
    </select>
    <sprk-icon
      iconType="chevron-down"
      additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
      sprk-select-icon
    ></sprk-icon>
    <label sprkLabel for="select-normal-1">Select Box Label</label>
  </sprk-input-container>

  <h2 class="drizzle-b-h2">SSN</h2>
  <sprk-input-container>
    <label for="ssn-input" sprkLabel>SSN Input</label>
    <input
      [type]="ssnType"
      placeholder="000-00-0000"
      name="ssn_input"
      [(ngModel)]="ssn_input"
      #ssnInput="ngModel"
      data-id="ssn-1"
      id="ssn-input"
      sprkInput
    >
    <sprk-selection-item-container
      additionalClasses="sprk-b-InputContainer__visibility-toggle"
    >
      <input
        type="checkbox"
        sprkSelectionInput
        (click)="toggleSSNType()"
        data-id="ssn-reveal-3"
        id="show-ssn"
      >
      <label for="show-ssn" sprkSelectionLabel>Show SSN</label>
    </sprk-selection-item-container>
  </sprk-input-container>

  <h2 class="drizzle-b-h2">Text</h2>
  <sprk-input-container>
    <label sprkLabel>Text Input Label</label>
    <input
      name="text_input"
      type="text"
      [(ngModel)]="text_input"
      #textInput="ngModel"
      sprkInput
    />
  </sprk-input-container>

  <h2 class="drizzle-b-h2">Textarea</h2>
  <sprk-textarea-container>
    <label for="textarea-1" sprkLabel>Description</label>
    <textarea
      name="textarea_input"
      id="textarea-1"
      [(ngModel)]="textarea_input"
      #textareaInput="ngModel"
      data-id="textarea-1"
      sprkInput
    ></textarea>
  </sprk-textarea-container>
  `
})
export class InputDocsComponent {
  constructor() {}

  text_input = '';

  text_input_huge = '';

  text_input_huge_disabled = '';

  textarea_input = '';

  search_input = '';

  inline_search_input = '';

  phone_input = '';

  date_input = '';

  radio_input: string;

  checkbox_input1 = false;

  checkbox_input1a = false;

  checkbox_input2 = false;

  checkbox_input3 = false;

  ssn_input: string;

  monetary_input: string;

  datepicker_input: string;

  passwordType = 'password';

  ssnType = 'password';

  form_submitted = false;

  isChecked = false;

  isRadioChecked = false;

  dpConfig = {
    mode: 'dp-below'
  };

  pmimiEligibilityResult = {
    ClientOptions: [
      'Pay down principal by $19,363.52 at 70.00 % LTOV',
      'A home evaluation return without major home improvements value of $277,662.17 at 70.00 % LTOV',
      'A home evaluation return with major home improvements value of $277,662.17 at 70.00 % LTOV',
      'Wait until LTOV reaches 80% on 06/01/2018 and request to have MI removed.',
      'Wait until 10/01/2019 when the MI will automatically be removed.'
    ],
    ClientEligibilityStatus: 'warning',
    ResponseReasons: [
      {
        Title: 'Payment Status',
        Reason: 'This loan is not current.',
        StatusCode: 1,
        Status: 'warning'
      },
      {
        Title: 'Monthly MI Payment Status',
        Reason: 'The monthly mortgage insurance is already paid.',
        StatusCode: 0,
        Status: 'pass'
      },
      {
        Title: 'Client Requested Cancellation - Current Payment History',
        Reason:
          'This client does not have any 30 day late payments within the last 12 months.',
        StatusCode: 0,
        Status: 'pass'
      },
      {
        Title: 'Client Requested Cancellation - Previous Payment History',
        Reason:
          'This client does not have any 60 day late payments within the last 12 months.',
        StatusCode: 0,
        Status: 'pass'
      },
      {
        Title: 'Client Requested Cancellation -LTOV',
        Reason:
          'This loan has a history of 4 years and value of 77.7500% (A minimum of 70% is required).',
        StatusCode: 2,
        Status: 'warning'
      }
    ],
    HomeImprovementQuestions: {
      HomeImprovmentReturnAmount: 277662.17,
      HomeImprovmentReturnPercent: 0.7,
      HomeImprovementsRequired: false,
      RequiredAdditionalPrincipalAmount: 19363.52,
      RequiredEvaluationAmount: 277662.17,
      RequiredPrincipalPercent: 0.7
    }
  };

  togglePasswordType(): void {
    this.passwordType === 'password'
      ? (this.passwordType = 'text')
      : (this.passwordType = 'password');
  }

  toggleSSNType(): void {
    this.ssnType === 'password'
      ? (this.ssnType = 'text')
      : (this.ssnType = 'password');
  }

  onSubmit(event): void {
    this.form_submitted = true;
  }

  onSelect() {
    this.checkbox_input1 === true
      ? (this.isChecked = true)
      : (this.isChecked = false);
  }

  onRadioSelect($event) {
    $event.target.checked === true && this.radio_input === '1'
      ? (this.isRadioChecked = true)
      : (this.isRadioChecked = false);
  }
}
