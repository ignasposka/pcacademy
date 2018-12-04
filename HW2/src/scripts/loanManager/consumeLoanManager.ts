import LoanManager from "./loanManager";
import ConsumeLoan from "../loans/consumeLoan";

export default class ConsumeLoanManager extends LoanManager {

    protected getResults(): { result: number; amount: number; } {
        const formElements = (<HTMLFormElement>document.getElementById('consume-loan')).elements;

        const amount = parseFloat(formElements['amount'].value);
        const timeInMonths = formElements['time'].value;
        const purpose = formElements['purpose'].selectedIndex;

        const consumeLoan = new ConsumeLoan(amount, timeInMonths, purpose);
        const result = consumeLoan.calculateMontlyPayment();

        return { result, amount };
    }

}