import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {ExecutionsListComponent} from "./executions-list.component";

let comp:    ExecutionsListComponent;
let fixture: ComponentFixture<ExecutionsListComponent>;
let de:      DebugElement;
let el:      HTMLElement;
/*
TODO: Fix this test, now it is killing PhantomJS
*/
describe('ExecutionsListComponent', () => {
    let executions: any[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ ExecutionsListComponent ],
            providers: [ ]
        });

        fixture = TestBed.createComponent(ExecutionsListComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('table.executions-list-table'));
        el = de.nativeElement;

        comp.executions = EXECUTIONS_DATA;
        fixture.detectChanges();
    });

    it('should display all windup executions', () => {
        let rows = fixture.debugElement.queryAll(By.css('tr.execution-row'));
        expect(rows.length).toEqual(EXECUTIONS_DATA.length);
    });


    it('should display windup execution data', () => {
        console.log(fixture.debugElement);
        let row = fixture.debugElement.query(By.css('.execution-row'));
        console.log(row);
        let el = row.nativeElement;

        expect(el.children.length).toEqual(6);

        expect(el.children[0].textContent).toEqual(executions[0].id);
        expect(el.children[1].textContent).toEqual(executions[0].state);
        // expect(el.children[2].textContent).toEqual(''); // pipe result
        // expect(el.children[3].textContent).toEqual(''); // pipe result
        // expect(el.children[4].textContent).toEqual(''); // pipe result
        expect(el.children[5].textContent).toEqual(''); // cancel
    });

    it('should display cancel link for QUEUED executions', () => {
        let rows = fixture.debugElement.queryAll(By.css('tr.execution-row'));

        rows.filter(row => row.nativeElement.children[1].context === 'QUEUED')
            .forEach(row => {
                let el = row.nativeElement;
                expect(el.children[5].children[0].textContent).toEqual('cancel');
            });
    });

    it('should not display cancel link for executions in other state', () => {
        let rows = fixture.debugElement.queryAll(By.css('tr.execution-row'));

        rows.filter(row => row.nativeElement.children[1].context === 'QUEUED')
            .forEach(row => {
                let el = row.nativeElement;
                expect(el.children[5].children[0].textContent).not.toEqual('cancel');
            });
    });
/*
    describe('after clicking on cancel', () => {
        let migrationIssueService;

        beforeEach(() => {
            /*
            migrationIssueService = de.injector.get('');
            migrationIssueService.getIssuesPerFile.and.returnValue(new Observable<any>(observer => {
                let data = [];
                observer.next(data);
                observer.complete();
            }));


            de = fixture.debugElement.query(By.css('a.issue-title'));
            el = de.nativeElement;

            de.triggerEventHandler('click', null);
            fixture.detectChanges();
        });

        it('should call cancel method on windup service', () => {
            expect(migrationIssueService.getIssuesPerFile).toHaveBeenCalledWith(1, executions[0]);
        });
    });
*/
});
/**/

const EXECUTIONS_DATA = [
    {
        "id": 13,
        "version": 1,
        "timeStarted": 1477907641905,
        "timeCompleted": 1477907647229,
        "outputPath": "/home/dklingen/apps/wildfly-10.1.0.Final/standalone/data/windup/reports/Default Group.ANnIuZsNxbfq.report",
        "totalWork": 0,
        "workCompleted": 0,
        "currentTask": null,
        "lastModified": 1477907647318,
        "state": "COMPLETED",
        "analysisContext": null,
        "outputDirectoryName": "Default Group.ANnIuZsNxbfq.report",
        "applicationListRelativePath": "Default Group.ANnIuZsNxbfq.report/index.html"
    },
    {
        "id": 15,
        "version": 1,
        "timeStarted": 1477907945127,
        "timeCompleted": 1477907948439,
        "outputPath": "/home/dklingen/apps/wildfly-10.1.0.Final/standalone/data/windup/reports/Default Group.ANnIuZsNxbfq.report",
        "totalWork": 0,
        "workCompleted": 0,
        "currentTask": null,
        "lastModified": 1477907948484,
        "state": "FAILED",
        "analysisContext": null,
        "outputDirectoryName": "Default Group.ANnIuZsNxbfq.report",
        "applicationListRelativePath": "Default Group.ANnIuZsNxbfq.report/index.html"
    },
    {
        "id": 25,
        "version": 27,
        "timeStarted": 1478000242721,
        "timeCompleted": null,
        "outputPath": "/home/dklingen/apps/wildfly-10.1.0.Final/standalone/data/windup/reports/Default Group.ANnIuZsNxbfq.report",
        "totalWork": 757,
        "workCompleted": 5,
        "currentTask": "PostFinalizePhase - RenderRuleProviderReportRuleProvider - RenderRuleProviderReportRuleProvider_1",
        "lastModified": 1478000316581,
        "state": "STARTED",
        "analysisContext": null,
        "outputDirectoryName": "Default Group.ANnIuZsNxbfq.report",
        "applicationListRelativePath": "Default Group.ANnIuZsNxbfq.report/index.html"
    },
    {
        "id": 30,
        "version": 30,
        "timeStarted": null,
        "timeCompleted": null,
        "outputPath": null,
        "totalWork": 757,
        "workCompleted": 0,
        "currentTask": null,
        "lastModified": 1478000242721,
        "state": "QUEUED",
        "analysisContext": null,
        "outputDirectoryName": "Default Group.ANnIuZsNxbfq.report",
        "applicationListRelativePath": "Default Group.ANnIuZsNxbfq.report/index.html"
    },
    {
        "id": 35,
        "version": 35,
        "timeStarted": 1478000242721,
        "timeCompleted": null,
        "outputPath": null,
        "totalWork": 757,
        "workCompleted": 0,
        "currentTask": null,
        "lastModified": 1478000242721,
        "state": "CANCELLED",
        "analysisContext": null,
        "outputDirectoryName": "Default Group.ANnIuZsNxbfq.report",
        "applicationListRelativePath": "Default Group.ANnIuZsNxbfq.report/index.html"
    },
];
