import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {
  incomeMin: number = 100000;
  incomeMax: number = 300000;
  monthlyIncome: number = 0;
  monthlyExpence: number = 0;
  expenceMin: number = 10000;
  expenceMax: number = 100000;
  incomePercent: number = 0;
  expencePercent: number;
  constructor() { }

  ngOnInit(): void {
  }

  monthlyIncomeChange(e) {
    this.incomePercent = (100 * (e - this.incomeMin)) / (this.incomeMax - this.incomeMin);
  }

  monthlyExpenceChange(e) {
    this.expencePercent = (100 * (e - this.expenceMin)) / (this.expenceMax - this.expenceMin);
  }
}
