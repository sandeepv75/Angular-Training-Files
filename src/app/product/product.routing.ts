import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductEditComponent } from "./product-edit.component";
import { ProductHomeComponent } from "./product-home.component";
import { EditGuard, SaveAlertGuard } from "./product.guards";

const routes:Routes = [
    {
        path: "products",
        component: ProductHomeComponent,

        children:[
            {
                path: 'list',
                component: ProductListComponent
            },
            {
                path: 'edit/:id',
                component: ProductEditComponent,
                canActivate: [EditGuard],
                canDeactivate: [SaveAlertGuard]
            },
            {
                path: 'create',
                component: ProductEditComponent
            }
        ]
    }
]


//Prevents importing all components one at a time
export const components: any [] = [
    ProductEditComponent,
    ProductListComponent,
    ProductHomeComponent
]

import { ModuleWithProviders } from "@angular/core";

export const routingModule: ModuleWithProviders = RouterModule.forChild(routes);