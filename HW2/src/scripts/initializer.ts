import LoanButtonsEventHandler from './loanButtonsEventHandler';
import FastCredit from './loans/fastCredit';
import AccomodationLoan from './loans/accomodationLoan';
import FastCreditManager from './loanManager/fastCreditManager';
import AccomodationLoanManager from './loanManager/accomodationLoanManager';
import ConsumeLoanManager from './loanManager/consumeLoanManager';

export default class Initializer {
    public static initMenuButtons():void {
        const fastCreditBtn: Element = document.getElementById('fast-credit-btn');
        const accomodationLoanCreditBtn: Element = document.getElementById('accomodation-loan-btn');
        const consumeLoanCreditBtn: Element = document.getElementById('consume-loan-btn');
        const buttonsHandler = new LoanButtonsEventHandler();
    
        fastCreditBtn.addEventListener('click', buttonsHandler.fastCreditBtnOnClick);
        accomodationLoanCreditBtn.addEventListener('click', buttonsHandler.accomodationLoanBtnOnClick);
        consumeLoanCreditBtn.addEventListener('click', buttonsHandler.consumeLoanBtnOnClick);    
    }
    
    public static initSubmitButtons():void {
        const fastCreditSubmitBtn: Element = document.getElementById('calc-fast-credit-btn');
        const accomodationLoanSubmitBtn: Element = document.getElementById('calc-accomodation-loan-btn');
        const consumeLoanSubmitBtn: Element = document.getElementById('calc-consume-loan-btn');

        const fastCreditManager = new FastCreditManager();
        const accomodationLoanManager = new AccomodationLoanManager();
        const consumeLoanManager = new ConsumeLoanManager();
    
        fastCreditSubmitBtn.addEventListener('click', (e:Event) => fastCreditManager.onSubmit(e));
        accomodationLoanSubmitBtn.addEventListener('click', (e:Event) => accomodationLoanManager.onSubmit(e));
        consumeLoanSubmitBtn.addEventListener('click', (e:Event) => consumeLoanManager.onSubmit(e));

    }

    public static setMaxFastCredit():void {
        FastCredit.setMaxFastCredit();
    } 

    public static setMaxAmounts(): void {
        const fastCreditAmountInput = <HTMLInputElement>document.getElementById('fast-credit-amount')
        const accomodationLoanAmountInput = <HTMLInputElement>document.getElementById('consume-loan-amount-input')

        fastCreditAmountInput.max = process.env.MAX_FAST_CREDIT_AMOUNT;
        accomodationLoanAmountInput.max = process.env.MAX_CONSUME_LOAN_AMOUNT;

    }

    public static initLiveActions(): void {
        const accomodationLoanMonthlySalaryInput = document.getElementById('accomodation-loan-salary')

        accomodationLoanMonthlySalaryInput.addEventListener('input', AccomodationLoan.updateMaxLoanAmount);
    }
}
