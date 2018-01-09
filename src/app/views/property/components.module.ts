import { NgModule } from '@angular/core';


import { ComponentsRoutingModule } from './components-routing.module';
import { SearchComponent } from './search.component';
import { ListComponent } from './list.component';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    ComponentsRoutingModule
   
  ],
  declarations: [
     SearchComponent,
     ListComponent,
     DetailsComponent
  ]
})
export class ComponentsModule { }
