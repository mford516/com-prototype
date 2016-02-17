import {Component, Input} from 'angular2/core'

@Component({
    selector: 'email-selection-review',
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
    
})

export class EmailSelectionReviewComponent {
    
    @Input() groupSelectionReview;
    @Input() accountSelectionReview;
    @Input() quickAddSelectionReview;
 }