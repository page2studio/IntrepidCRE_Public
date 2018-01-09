import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { ListComponent } from './list.component';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'property'
    },
      children: [
          {
              path: 'search',
              component: SearchComponent,
              data: {
                  title: 'Search'
              }
          },
          {
              path: 'list',
              component: ListComponent,
              data: {
                  title: 'List'
              }
          }
          ,
          {
              path: 'details',
              component: DetailsComponent,
              data: {
                  title: 'Property Details'
              }
          }
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
