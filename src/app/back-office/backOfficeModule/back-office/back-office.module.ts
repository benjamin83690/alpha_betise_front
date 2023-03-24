import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLivreComponent } from '../../components/add-livre/add-livre.component';
import { LivresComponent } from '../../components/livres/livres.component';
import { UpdateLivreComponent } from '../../components/update-livre/update-livre.component';
import { SharedModule } from 'src/app/shared/sharedModule/shared/shared.module';



@NgModule({
  declarations: [
    AddLivreComponent,
    LivresComponent,
    UpdateLivreComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddLivreComponent,
    LivresComponent,
    UpdateLivreComponent
  ]
})
export class BackOfficeModule { }
