import { Console } from "@woowacourse/mission-utils";
import { InputValidator } from "../validator/InputValidator.js";

export class InputUtils {
    static async totalPurchasAmountInput() {
        const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        const totalPurcahseAmount = InputValidator.totalPurcahseAmountValidator(input);

        return totalPurcahseAmount;
    }

}


export class OutPutUtils {

}