import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { listResolverFn } from "./guards/list-resolver.resolver";

const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: ListComponent,
        resolve: { users: listResolverFn }
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);