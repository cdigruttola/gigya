import Gigya from './gigya';
import GigyaResponse from './interfaces/gigya-response';
import BaseParams from './interfaces/base-params';

export * from './interfaces/gigya-response';
export * from './interfaces/base-params';

export class Extensions {
    constructor(protected gigya: Gigya) {
    }

    /**
     * This method is used to retrieve extensions logs.
     *
     */
    public logs(params: BaseParams & any) {
        return this.gigya.request<any>('accounts.extensions.logs', params);
    }

}

export default Extensions;
