import { IBudgetItem } from "../models/budget-item.model";

export interface ISortedBudgetItems {
    expenses: Array<IBudgetItem>;
    income: Array<IBudgetItem>;
}
