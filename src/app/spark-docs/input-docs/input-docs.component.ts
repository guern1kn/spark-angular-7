import { Component } from '@angular/core';

@Component({
  selector: 'sprk-input-docs',
  template: `

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

<sprk-flag [isReversed]="true">
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

<sprk-flag [isStacked]="true">
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

<sprk-flag [isStacked]="true" verticalAlignment="middle">
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
    <div sprkCenteredColumn idString="centered-column">
      <div sprkBox>
        <h1 sprkHeading variant="displayTwo" isPageTitle="true">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h1>

        <sprk-divider></sprk-divider>
        <h1 sprkHeading variant="displayOne">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h1>
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
        <sprk-divider></sprk-divider>

        <h2 sprkHeading variant="displayTwo">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h2>
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
        <sprk-divider></sprk-divider>


        <h3 sprkHeading variant="displayThree">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h3>
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
        <sprk-divider></sprk-divider>


        <h4 sprkHeading variant="displayFour">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h4>
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
        <sprk-divider></sprk-divider>


        <h5 sprkHeading variant="displayFive">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h5>
        <sprk-divider></sprk-divider>


        <h6 sprkHeading variant="displaySix">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h6>
        <sprk-divider></sprk-divider>


        <h6 sprkHeading variant="displaySeven">
          The Quick Brown Fox
          Jumps Over the Lazy Dog
        </h6>
        <sprk-divider></sprk-divider>

      </div>
    </div>
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
