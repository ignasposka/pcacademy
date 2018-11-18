import Loan from './loan'

export default class FastCredit extends Loan {
    
    constructor(amount:number, timeInMonths: number){
        super(amount, timeInMonths);
        this.interestRate = parseFloat(process.env.FAST_CREDIT_INTEREST_RATE);
    }

    public calculateMontlyPayment(): number {
        return this.amount * (1 + this.interestRate) / this.timeInMonths;
    }

}