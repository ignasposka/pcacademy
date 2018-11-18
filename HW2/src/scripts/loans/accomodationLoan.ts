import Loan from "./loan";

export default class AccomodationLoan extends Loan {

    monthlySalary: number
    childrenQuantity: number
    salaryCoef: number
    maxLoanAmount:number

    constructor(amount: number, timeInMonths: number, monthlySalary: number, childrenQuantity: number) {
        super(amount, timeInMonths, parseFloat(process.env.ACCOMODATION_LOAN_INTEREST_RATE))
        this.monthlySalary = monthlySalary;
        this.childrenQuantity = childrenQuantity;
        this.salaryCoef = parseFloat(process.env.ACCOMODATION_LOAN_SALARY_COEF);
        this.maxLoanAmount = this.monthlySalary * this.salaryCoef;
    }

    public static updateMaxLoanAmount(e: Event) {
        const maxLoanInput = <HTMLInputElement>document.getElementById('max-amount-result');
        const loanAmountInput = <HTMLInputElement>document.getElementById('accomodation-loan-amount');

        const salaryCoef = parseFloat(process.env.ACCOMODATION_LOAN_SALARY_COEF);
        const salary = parseFloat((<HTMLInputElement>e.target).value);
        const maxLoanAmount = salary * salaryCoef;
        maxLoanInput.value = (maxLoanAmount).toString();
        loanAmountInput.max = maxLoanAmount.toString();
    }
}