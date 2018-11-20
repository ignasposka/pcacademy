import FastCredit from './loans/fastCredit';
import AccomodationLoan from './loans/accomodationLoan';
import ConsumeLoan from './loans/consumeLoan';

export default class Calculator {

    public static fastCreditMonthlyPaymentCalculation(e: Event): void {
        e.preventDefault();
        const form = <HTMLFormElement>document.getElementById('fast-credit');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const resultInput = (<HTMLInputElement>document.getElementById('result'));
        const amountResultInput = (<HTMLInputElement>document.getElementById('amount-result'));
        
        const formElements = (<HTMLFormElement>document.getElementById('fast-credit')).elements;

        const amount = formElements['amount'].value;
        const timeInMonths = formElements['time'].value;

        const fastCredit = new FastCredit(amount, timeInMonths);
        const result = fastCredit.calculateMontlyPayment();
        resultInput.value = result.toString();
        amountResultInput.value = amount.toString();
    }

    public static accomodationLoanCalculation(e: Event): void {
        e.preventDefault();
        const form = <HTMLFormElement>document.getElementById('accomodation-loan');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const resultInput = (<HTMLInputElement>document.getElementById('result'));
        const amountResultInput = (<HTMLInputElement>document.getElementById('amount-result'));

        const formElements = (<HTMLFormElement>document.getElementById('accomodation-loan')).elements;

        const amount = formElements['amount'].value;
        const timeInMonths = formElements['time'].value;

        const accomodationLoan = new AccomodationLoan(amount, timeInMonths);
        const result = accomodationLoan.calculateMontlyPayment();
        resultInput.value = result.toString();
        amountResultInput.value = amount.toString();
    }

    public static consumeLoanCalculation(e:Event):void {
        e.preventDefault();
        const form = <HTMLFormElement>document.getElementById('consume-loan');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const resultInput = (<HTMLInputElement>document.getElementById('result'));
        const amountResultInput = (<HTMLInputElement>document.getElementById('amount-result'));

        const formElements = (<HTMLFormElement>document.getElementById('consume-loan')).elements;


        const amount = formElements['amount'].value;
        const timeInMonths = formElements['time'].value;
        const purpose = formElements['purpose'].selectedIndex;

        const consumeLoan = new ConsumeLoan(amount, timeInMonths, purpose);
        const result = consumeLoan.calculateMontlyPayment();
        resultInput.value = result.toString();
        amountResultInput.value = amount.toString();
    }
}