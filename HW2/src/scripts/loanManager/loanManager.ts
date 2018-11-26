export default abstract class LoanManager {

    public onSubmit(e: Event): void {
        e.preventDefault();
        const form = (<HTMLInputElement>e.currentTarget).form;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const resultInput = (<HTMLInputElement>document.getElementById('result'));
        const amountResultInput = (<HTMLInputElement>document.getElementById('amount-result'));

        const { result, amount } = this.getResults();
        resultInput.value = result.toFixed(2).toString();
        amountResultInput.value = amount.toFixed(2).toString();
    }

    protected abstract getResults(): { result: number, amount : number};
}