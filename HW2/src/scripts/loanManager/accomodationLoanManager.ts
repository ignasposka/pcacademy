import LoanManager from "./loanManager";
import AccomodationLoan from "../loans/accomodationLoan";

export default class AccomodationLoanManager extends LoanManager {

    protected getResults(): { result: number; amount: number; } {

        const formElements = (<HTMLFormElement>document.getElementById('accomodation-loan')).elements;

        const amount = parseFloat(formElements['amount'].value);
        const timeInMonths = formElements['time'].value;

        const accomodationLoan = new AccomodationLoan(amount, timeInMonths);
        const result = accomodationLoan.calculateMontlyPayment();

        return { result, amount };
    }

}