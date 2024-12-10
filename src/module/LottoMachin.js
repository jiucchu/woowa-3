
export default class LottoMachin {
    constructor(totalPurchaseAmount) {
        this.totalPurchaseAmount = totalPurchaseAmount;
        this.numberOfTicket = totalPurchaseAmount / 1000;
    }


}