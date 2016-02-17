import {Account} from './sms-recipient-account';
import {PARENTACCOUNTS,STUDENTACCOUNTS,STAFFACCOUNTS} from './mock-accounts';
import {Injectable} from 'angular2/core';

@Injectable()

export class SMSAccountService {
    getAccounts(groupID) {
        if (groupID === "1")
            return PARENTACCOUNTS;
        if (groupID === "2")
            return STUDENTACCOUNTS;
        if (groupID === "3")
            return STAFFACCOUNTS;
    }
}