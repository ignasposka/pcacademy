import { LoanType } from './loans/loanType';

export default class LoanButtonsEventHandler {

    private fastCreditCalcModule: Element
    private accomodationLoanCalcModule: Element
    private consumeLoanCalcModule: Element

    constructor() {
        this.fastCreditCalcModule = document.getElementById('fast-credit');
        this.accomodationLoanCalcModule = document.getElementById('accomodation-loan');
        this.consumeLoanCalcModule = document.getElementById('consume-loan');

        this.fastCreditBtnOnClick = this.fastCreditBtnOnClick.bind(this);
        this.accomodationLoanBtnOnClick = this.accomodationLoanBtnOnClick.bind(this);
        this.consumeLoanBtnOnClick = this.consumeLoanBtnOnClick.bind(this);
    }
    public fastCreditBtnOnClick(): void {
        this.resetResults();
        this.fastCreditCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.fastCreditCalcModule);
        this.setCurrentButton('fast-credit-btn');
        this.setCurrentMaxAmount(LoanType.FastCredit);
        this.disableAccomodationLoanMaxAmountLabel();
    }
    public accomodationLoanBtnOnClick(): void {
        this.resetResults();
        this.accomodationLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.accomodationLoanCalcModule);
        this.setCurrentButton('accomodation-loan-btn');
        this.setCurrentMaxAmount(LoanType.AccomodationLoan);
        this.enableAccomodationLoanMaxAmountLabel();
    }
    public consumeLoanBtnOnClick(): void {
        this.resetResults();
        this.consumeLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.consumeLoanCalcModule);
        this.setCurrentButton('consume-loan-btn');
        this.setCurrentMaxAmount(LoanType.ConsumeLoan);
        this.disableAccomodationLoanMaxAmountLabel();
    }

    private hideModulesExcept(moduleToExcept: Element): void {
        const modules = this.getAllModules();
        modules.forEach(element => {
            if (element !== moduleToExcept) {
                element.classList.add('hidden')
            }
        });
    }
    private getAllModules(): Element[] {
        const modules: Element[] = [];
        modules.push(this.fastCreditCalcModule,
            this.accomodationLoanCalcModule, this.consumeLoanCalcModule)
        return modules;
    }

    private setCurrentButton(currentButtonId: string): void {
        const buttons = Array.from(document.getElementsByClassName('button'));
        buttons.forEach(button => {
            if (button.id === currentButtonId) {
                button.classList.add('red');
            }
            else {
                button.classList.remove('red');
            }
        })
    }

    private setCurrentMaxAmount(visibleModule: LoanType): void {
        const maxLoanInput = <HTMLInputElement>document.getElementById('max-amount-result');

        switch (visibleModule) {
            case LoanType.FastCredit:
                maxLoanInput.value = process.env.MAX_FAST_CREDIT_AMOUNT;
                break;
            case LoanType.AccomodationLoan:
                maxLoanInput.value = '';
                break;
            case LoanType.ConsumeLoan:
                maxLoanInput.value = process.env.MAX_CONSUME_LOAN_AMOUNT;
                break;
        }
    }

    private enableAccomodationLoanMaxAmountLabel() {
        const maxAccomodationLoanAmountLabel = document.getElementById('max-accomodation-loan-amount-label');
        const maxLoanAmountInputLabel = document.getElementById('max-amount-label');

        maxAccomodationLoanAmountLabel.classList.remove('hidden');
        maxLoanAmountInputLabel.classList.add('hidden');
    }

    private disableAccomodationLoanMaxAmountLabel() {
        const maxAccomodationLoanAmountLabel = document.getElementById('max-accomodation-loan-amount-label');
        const maxLoanAmountInputLabel = document.getElementById('max-amount-label');

        maxAccomodationLoanAmountLabel.classList.add('hidden');
        maxLoanAmountInputLabel.classList.remove('hidden');
    }

    private resetResults() {
        const resultsContainer = document.getElementById('results-container');

        Array.from(resultsContainer.children).forEach(element => {
            if (element.tagName === 'INPUT') {
                (<HTMLInputElement>element).value = '';
            }
        });
    }
}