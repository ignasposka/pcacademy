import FastCredit from './loans/fastCredit';
import AccomodationLoan from './loans/accomodationLoan';

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
        
        const amount = parseInt((<HTMLInputElement>document.getElementById('fast-credit-amount')).value);
        const timeInMonths = parseInt((<HTMLInputElement>document.getElementById('fast-credit-time')).value);

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

        const amount = parseFloat((<HTMLInputElement>document.getElementById('accomodation-loan-amount')).value);
        const timeInMonths = parseInt((<HTMLInputElement>document.getElementById('accomodation-loan-time')).value);
        const monthlySalary = parseFloat((<HTMLInputElement>document.getElementById('accomodation-loan-salary')).value);
        const childrenQuantity = parseInt((<HTMLInputElement>document.getElementById('accomodation-loan-children-quantity')).value);

        const accomodationLoan = new AccomodationLoan(amount, timeInMonths, monthlySalary, childrenQuantity);
        const result = accomodationLoan.calculateMontlyPayment();
        resultInput.value = result.toString();
        amountResultInput.value = amount.toString();
    }
}