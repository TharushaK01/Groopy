import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-costdashboard',
  templateUrl: './costdashboard.component.html',
  styleUrl: './costdashboard.component.scss'
})
export class CostdashboardComponent {
  costForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.costForm = this.fb.group({
      entries: this.fb.array([
        this.createEntry(),
        this.createEntry()
      ])
    });
  }

  get entries(): FormArray {
    return this.costForm.get('entries') as FormArray;
  }

  createEntry(): FormGroup {
    return this.fb.group({
      personName: '',
      itemOfBooking: '',
      cost: 0
    });
  }

  addEntry(): void {
    this.entries.push(this.createEntry());
  }

  removeEntry(index: number): void {
    this.entries.removeAt(index);
  }

  get totalCost(): number {
    return this.entries.value.reduce((sum: number, entry: { cost: any; }) => sum + (Number(entry.cost) || 0), 0);
  }
}