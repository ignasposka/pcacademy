import LoanManager from "./loanManager";
import FastCredit from "../loans/fastCredit";

export default class FastCreditManager extends LoanManager {

    protected getResults(): { result: number; amount: number; } {
        const formElements = (<HTMLFormElement>document.getElementById('fast-credit')).elements;

        const amount = parseFloat(formElements['amount'].value);
        const timeInMonths = formElements['time'].value;

        const fastCredit = new FastCredit(amount, timeInMonths);
        const result = fastCredit.calculateMontlyPayment();

        return { result, amount: amount };
    }
}