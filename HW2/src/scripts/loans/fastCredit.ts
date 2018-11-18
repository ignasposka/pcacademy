import Loan from './loan'

export default class FastCredit extends Loan {
    
    constructor(amount:number, timeInMonths: number){
        super(amount, timeInMonths, parseFloat(process.env.FAST_CREDIT_INTEREST_RATE));
    }

    public calculateMontlyPayment(): number {
        return this.amount * (1 + this.interestRate) / this.timeInMonths;
    }

    public static setMaxFastCredit():void {
        const maxLoanInput = <HTMLInputElement>document.getElementById('max-amount-result');
        maxLoanInput.value = process.env.MAX_FAST_CREDIT_AMOUNT;
    }

}