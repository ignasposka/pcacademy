import Loan from "./loan";

export default class ConsumeLoan extends Loan {

    constructor(amount: number, timeInMonths: number, purpose: string) {
        super(amount, timeInMonths, ConsumeLoan.getInterestRate(purpose))
    }

    private static getInterestRate(purpose: string): number {
        switch (purpose) {
            case 'car':
                return parseFloat(process.env.CAR_INTEREST_RATE);
            case 'accomodation-reconstruction':
                return parseFloat(process.env.RECONSTRUCTION_INTEREST_RATE);
            case 'education':
                return parseFloat(process.env.EDUCATION_INTEREST_RATE);
            default:
                break;
        }
    }

}