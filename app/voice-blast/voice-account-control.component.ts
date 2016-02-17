import {Component, OnChanges} from 'angular2/core';
import {Account} from './voice-recipient-account';
import {VoiceAccountService} from './voice-recipient-account.service';

@Component({
    selector: 'voice-account-control',
    template: `
            <label>Exclude: </label>
            <select class="form-control">
                <option *ngFor="#account of accounts" [value]="account.id">{{account.name}}</option>
            </select>
            {{groupID.selectedGroup}}
            {{account}}
    `,
    properties:['groupID'],
    styles:[`
        select {
            width:100px;
        }    
    `]
    
})

export class VoiceAccountControl {
    public accounts: Account[];
    public selectedAccount: Account;
    
    onSelect(account: Account) { 
        this.selectedAccount = account;
    }
    
    constructor(private _accountService: VoiceAccountService) { }
    
    getAccounts(groupID) {
        this.accounts = this._accountService.getAccounts(groupID);
    }
    
    // ngOnChanges() {
    //     getAccounts(groupID.selectedGroup)
    // }
    
}