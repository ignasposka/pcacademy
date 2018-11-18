export default abstract class Loan {

    protected amount: number;
    protected timeInMonths: number;
    protected interestRate: number;

    constructor(amount: number, timeInMonths: number, interestRate: number) {
        this.amount = amount;
        this.timeInMonths = timeInMonths;
        this.interestRate = interestRate;
    }

    public calculateMontlyPayment(): number {
        return this.amount * (1 + this.interestRate) / this.timeInMonths;
    }
}