import { Component, OnInit } from '@angular/core';
import { Case } from '../models/case';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  Cases: Case[];

  constructor(
    public CaseService: CaseService
  ) { }

  ngOnInit(): void {
    this.CaseService.GetCases().subscribe((cases: Case[]) => {
      this.Cases = cases;
      console.log(cases[0].Events[0].Description);
    })
  }

}
