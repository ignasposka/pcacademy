export default abstract class Loan {

    private amount: number;
    private timeInMonths: number;

    constructor(amount: number, timeInMonths: number){
        this.amount = amount;
        this.timeInMonths = timeInMonths;
    }

    public abstract calculateMontlyPayment():number
}