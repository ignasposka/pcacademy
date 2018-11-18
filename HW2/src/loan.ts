export default abstract class Loan {

    protected amount: number;
    protected timeInMonths: number;
    protected interestRate: number;

    constructor(amount: number, timeInMonths: number){
        this.amount = amount;
        this.timeInMonths = timeInMonths;
    }

    public abstract calculateMontlyPayment():number
}