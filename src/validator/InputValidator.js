import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../utils/Constant.js";

export class InputValidator {
    static totalPurcahseAmountValidator(strTotalPurcahseAmount) {
        const totalPurchaseAmount = Number(strTotalPurcahseAmount);

        if (strTotalPurcahseAmount === '') {
            throw new Error(ERROR_MESSAGE.TOTAL_PURCHASE_INPUT_IS_EMPTY);
        }

        if (Number.isNaN(totalPurchaseAmount)) {
            throw new Error(ERROR_MESSAGE.TOTAL_PURCHASE_INPUT_IS_NOT_NUMBER);
        }

        if (totalPurchaseAmount < 1000) {
            throw new Error(ERROR_MESSAGE.TOTAL_PURCHASE_INPUT_IS_NOT_POSITIVE);
        }

        if (totalPurchaseAmount % 1000 !== 0) {
            throw new Error(ERROR_MESSAGE.TOTAL_PURCHASE_INPUT_CAN_NOT_DEVIDE);
        }

        return totalPurchaseAmount;
    }

}

