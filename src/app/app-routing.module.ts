import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseilsLectureComponent } from './components/conseils-lecture/conseils-lecture.component';
import { RencontresComponent } from './components/rencontres/rencontres.component';
import { EVENT_CONF } from './configs/EventConfig';
import { NextEventConfig } from './configs/NextEventConfig';
import { PastEventConfig } from './configs/PastEventConfig';
import { RencontresService } from './services/rencontresService/rencontres.service';

const routes: Routes = [
  {
    path: 'evenements',
    component: RencontresComponent,
    providers: [{ provide: EVENT_CONF, useValue: NextEventConfig }],
  },
  {
    path: 'archives',
    component: RencontresComponent,
    providers: [
      { provide: EVENT_CONF, useValue: PastEventConfig },
    ],
  },
  { path: 'conseils-lecture', component: ConseilsLectureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
