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
        this.setCurrentButton('fast-credit-btn')
    }
    public accomodationLoanBtnOnClick(): void {
        this.accomodationLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.accomodationLoanCalcModule);
        this.setCurrentButton('accomodation-loan-btn')
    }
    public consumeLoanBtnOnClick(): void {
        this.consumeLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.consumeLoanCalcModule);
        this.setCurrentButton('consume-loan-btn')
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
}