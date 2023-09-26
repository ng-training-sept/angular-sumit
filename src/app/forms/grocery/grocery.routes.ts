import { GroceryComponent } from "./grocery.component";
import { RouterModule, Routes } from "@angular/router";
import { Route } from "@angular/router";
import { CardItemComponent } from "src/app/components/card3/card-item/card-item.component";

// export const routes: Route[] = [
export const routes: Routes = [
    { path: '', component: GroceryComponent },
    { path: 'card-item/:id', component: CardItemComponent},

  ];