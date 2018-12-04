import Loan from "./loan";
import { ConsumeLoanType } from './consumeLoanType';

export default class ConsumeLoan extends Loan {

    constructor(amount: number, timeInMonths: number, purpose: ConsumeLoanType) {
        super(amount, timeInMonths, ConsumeLoan.getInterestRate(purpose))
    }

    private static getInterestRate(purpose: ConsumeLoanType): number {
        switch (purpose) {
            case ConsumeLoanType.Car:
                return parseFloat(process.env.CAR_INTEREST_RATE);
            case ConsumeLoanType.AccomodationReconstruction:
                return parseFloat(process.env.RECONSTRUCTION_INTEREST_RATE);
            case ConsumeLoanType.Education:
                return parseFloat(process.env.EDUCATION_INTEREST_RATE);
            default:
                break;
        }
    }

}