import {Component} from 'angular2/core';
import {RouteConfig,RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';

import {NewEmailComponent} from './new-email.component';
import {EmailHistoryComponent} from './email-history.component';
import {EmailScheduledComponent} from './email-scheduled.component';
import {EmailSignatureComponent} from './email-signature.component';

@Component({
    selector: 'email-blast',
    template: `
        <div>
            <h3>Email Blast</h3>
            <paper-tabs noink no-bar selected="0">
                <paper-tab [routerLink]="['NewEmail']">New</paper-tab>
                <paper-tab [routerLink]="['EmailHistory']">History</paper-tab>
                <paper-tab [routerLink]="['EmailScheduled']">Scheduled</paper-tab>
                <paper-tab [routerLink]="['EmailSignature']">Signature</paper-tab>
            </paper-tabs>
            <div>&nbsp;</div>
            <router-outlet></router-outlet>
        </div>
    `,
    inputs: ['sender'],
    directives: [RouterOutlet,ROUTER_DIRECTIVES],
    styles: [`
        paper-tabs {
            width:500px;
        }
        paper-tab {
            background-color:grey;
            width:100px;
            text-align:center;
            vertical-align:center;
            font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
            color: black;
            border-top-left-radius:10px 10px;
            border-top-right-radius:10px 10px;
            border: 1px solid black;
        }
        paper-tabs[no-bar] paper-tab.iron-selected {
            color: white;
            border-bottom: none;
        }
        div {
            width:775px;
            margin: 0 auto;
        }
    `]
})

@RouteConfig([
    {path:'/', name:'NewEmail', component: NewEmailComponent, useAsDefault:true},
    {path:'/email-history', name:'EmailHistory', component: EmailHistoryComponent},
    {path:'/email-scheduled', name:'EmailScheduled', component: EmailScheduledComponent},
    {path:'/email-signature', name:'EmailSignature', component: EmailSignatureComponent}
])

export class EmailBlastComponent {
    
}