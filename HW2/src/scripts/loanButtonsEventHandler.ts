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
        this.fastCreditCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.fastCreditCalcModule);
        this.setCurrentButton('fast-credit-btn');
        this.setCurrentMaxAmount('Fast Credit');
    }
    public accomodationLoanBtnOnClick(): void {
        this.accomodationLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.accomodationLoanCalcModule);
        this.setCurrentButton('accomodation-loan-btn');
        this.setCurrentMaxAmount('Accomodation Loan');
    }
    public consumeLoanBtnOnClick(): void {
        this.consumeLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.consumeLoanCalcModule);
        this.setCurrentButton('consume-loan-btn');
        this.setCurrentMaxAmount('Consume Loan');
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

    private setCurrentMaxAmount(visibleModule: string): void {
        const maxLoanInput = <HTMLInputElement>document.getElementById('max-amount-result');

        switch (visibleModule) {
            case 'Fast Credit':
                maxLoanInput.value = process.env.MAX_FAST_CREDIT_AMOUNT;
                break;
            case 'Accomodation Loan':
                maxLoanInput.value = '';
                break;
            case 'Consume Loan':
                maxLoanInput.value = process.env.MAX_CONSUME_LOAN_AMOUNT;
                break;
        }
    }
}