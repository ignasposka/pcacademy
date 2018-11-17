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
        
    }
    public accomodationLoanBtnOnClick(): void {
        this.accomodationLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.accomodationLoanCalcModule);
    }
    public consumeLoanBtnOnClick(): void {
        this.consumeLoanCalcModule.classList.remove('hidden');
        this.hideModulesExcept(this.consumeLoanCalcModule);
    }
    private hideModulesExcept(moduleToExcept: Element): void {
        const modules = this.getAllModules();
        modules.forEach(element => {
            if(element != moduleToExcept) {
                element.classList.add('hidden')
            }
        });
    }
    private getAllModules(): Element[] {
        const modules = [];
        modules.push(this.fastCreditCalcModule,
            this.accomodationLoanCalcModule, this.consumeLoanCalcModule)
        return modules;
    }
}