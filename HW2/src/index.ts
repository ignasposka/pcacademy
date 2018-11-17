import LoanButtonsEventHandler from './loanButtonsEventHandler';
import dotenv from 'dotenv';

window.onload = () => {
    dotenv.config();
    const fastCreditBtn: Element = document.getElementById('fast-credit-btn');
    const accomodationLoanCreditBtn: Element = document.getElementById('accomodation-loan-btn');
    const consumeLoanCreditBtn: Element = document.getElementById('consume-loan-btn');
    const buttonsHandler = new LoanButtonsEventHandler();

    fastCreditBtn.addEventListener('click', buttonsHandler.fastCreditBtnOnClick);
    accomodationLoanCreditBtn.addEventListener('click', buttonsHandler.accomodationLoanBtnOnClick);
    consumeLoanCreditBtn.addEventListener('click', buttonsHandler.consumeLoanBtnOnClick);
};
