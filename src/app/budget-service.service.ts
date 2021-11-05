import { Injectable } from '@angular/core';
import { IBudgetItem } from './shared/models/budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private _store: IBudgetItem[] = [];

  constructor() { }

  loadAll(): void {
    let budgets = window.localStorage.getItem('budgets');
    if(budgets) {
      let parsed_budgets = JSON.parse(budgets);
      this._store = parsed_budgets;
    }
  }

  nextID = (): number => this._store.length;

  get store(): IBudgetItem[] {
    let public_store: IBudgetItem[] = [];
    this._store.forEach((budget) => public_store.push(budget));
    return public_store;
  }

  addBudget(amount: number, description: string): void {
    let next_id = this.nextID();
    let new_budget: IBudgetItem = new IBudgetItem(next_id, amount, description);
    this._store.push(new_budget);
    this.save();
  }

  getBudgetIndex(budget: IBudgetItem): number {
    let valid_budget = this._store.find((value) => value.id === budget.id);
    if(valid_budget){
      return this._store.indexOf(valid_budget);
    }
    return -1;
  }

  updateBudget(updated_budget: IBudgetItem): number | void {
    let index = this.getBudgetIndex(updated_budget);
    if(index !== -1){
      this._store[index] = updated_budget;
      this.save();
    }
  }

  deleteBudget(budget: IBudgetItem): boolean {
    let index = this.getBudgetIndex(budget);
    if(index !== -1 ){
      this._store.splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  save(): void {
    let parsed_budgets: string = JSON.stringify(this._store);
    window.localStorage.setItem('budgets', parsed_budgets);
  }
}
