import {Component, OnInit, ElementRef, Input} from "@angular/core";

@Component({
    selector: 'wu-executions-list',
    templateUrl: './executions-list-test-working.component.html'
})
export class ExecutionsListTestWorkingComponent implements OnInit {
    @Input()
    executions: any[];

    protected element;

    constructor(
        private _elementRef: ElementRef,
    ) {
        this.element = _elementRef.nativeElement;
    }

    ngOnInit(): void {
    }

    canCancel(execution: any): boolean {
        return execution.state === 'QUEUED' || execution.state === 'STARTED';
    }

    cancelExecution(execution: any) {

    }

    getClass(execution: any): string {
        switch (execution.state) {
            default:
            case "QUEUED":
            case "STARTED":
                return 'info';
            case "COMPLETED":
                return 'success';
            case "FAILED":
                return 'danger';
            case "CANCELLED":
                return 'warning';
        }
    }
}
