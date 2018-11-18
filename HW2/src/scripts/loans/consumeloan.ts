import Loan from "./loan";

export default class ConsumeLoan extends Loan {

    // constructor(amount: number, timeInMonths: number){
    //     super(amount, timeInMonths, )
    // }

    public calculateMontlyPayment(): number {
        throw new Error("Method not implemented.");
    }
}