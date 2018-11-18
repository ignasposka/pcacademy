import FastCredit from './loans/fastCredit';

export default class Calculator {

    public static calculateFastCreditMonthlyPayment(e: Event): void {
        e.preventDefault();
        const resultInput = (<HTMLInputElement>document.getElementById('result'));
        const amount = parseInt((<HTMLInputElement>document.getElementById('fast-credit-amount')).value);
        const timeInMonths = parseInt((<HTMLInputElement>document.getElementById('fast-credit-time')).value);

        const fastCredit = new FastCredit(amount, timeInMonths);
        const result = fastCredit.calculateMontlyPayment();
        resultInput.value = result.toString();
    }
}