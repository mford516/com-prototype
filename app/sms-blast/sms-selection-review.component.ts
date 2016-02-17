import {Component,Input} from 'angular2/core'

@Component({
    selector: 'sms-selection-review',
    template: `
            <div>
                <hr>
                <div>
                    <b>Sending to:</b> {{groupSelectionReview}} {{quickAddSelectionReview}}<br>
                    <b>Excluding:</b> {{accountSelectionReview}}
                </div>
                <hr>
            </div>
    `,
    styles: [`
        div {
            width:775px;
        }
    `]
    
})

export class SMSSelectionReviewComponent {
    
    @Input() groupSelectionReview;
    @Input() accountSelectionReview;
    @Input() quickAddSelectionReview;
 }