import Loan from "./loan";

export default class AccomodationLoan extends Loan {


    constructor(amount: number, timeInMonths: number) {
        super(amount, timeInMonths, parseFloat(process.env.ACCOMODATION_LOAN_INTEREST_RATE))
    }

    public static updateMaxLoanAmount(e: Event) {
        const maxLoanInput = <HTMLInputElement>document.getElementById('max-amount-result');
        const loanAmountInput = <HTMLInputElement>document.getElementById('accomodation-loan-amount');

        const salaryCoef = parseFloat(process.env.ACCOMODATION_LOAN_SALARY_COEF);
        const salary = parseFloat((<HTMLInputElement>e.target).value);
        const maxLoanAmount = (salary * salaryCoef).toFixed(2);
        maxLoanInput.value = maxLoanAmount.toString();
        loanAmountInput.max = maxLoanAmount.toString();
    }
}