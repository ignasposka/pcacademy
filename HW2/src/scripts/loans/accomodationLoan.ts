import Loan from "./loan";

export default class AccomodationLoan extends Loan {

    monthlySalary:number
    childrenQuantity: number
    salaryCoef: number

    constructor(amount: number, timeInMonths:number, monthlySalary: number, childrenQuantity: number){
        super(amount, timeInMonths, parseFloat(process.env.ACCOMODATION_LOAN_INTEREST_RATE))
        this.monthlySalary = monthlySalary;
        this.childrenQuantity = childrenQuantity;
        this.salaryCoef = parseFloat(process.env.ACCOMODATION_LOAN_SALARY_COEF);
    }

    public calculateMontlyPayment(): number {
        throw new Error("Method not implemented.");
    }

    public calculateMaxLoan(): number {
        return this.monthlySalary * this.salaryCoef;
    }
}