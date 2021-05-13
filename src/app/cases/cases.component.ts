import { Component, OnInit } from '@angular/core';
import { Case } from './models/case';
import { Event } from './models/event';
import { CaseService } from './case.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  Cases: Case[];
  Events: Event[];
  caseTitle: String;

  constructor(
    public CaseService: CaseService
  ) { }

  ngOnInit(): void {
    this.Events = [];
    this.caseTitle = "";
    this.CaseService.GetCases().subscribe((cases: Case[]) => {
      this.Cases = cases;
    })
  }

  showEvents( i:number ) {
    this.Events = this.Cases[i].Events;
    this.caseTitle = this.Cases[i].Title;
  }

}
