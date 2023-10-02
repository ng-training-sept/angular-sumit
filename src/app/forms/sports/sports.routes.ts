import { SportsComponent } from "./sports.component";
import { RouterModule, Routes } from "@angular/router";
import { Route } from "@angular/router";
import { CardItemComponent } from "src/app/components/card/card-item/card-item.component";

// export const routes: Route[] = [
export const routes: Routes = [
    { path: '', component: SportsComponent },
    { path: 'card-item/:id', component: CardItemComponent},

  ];