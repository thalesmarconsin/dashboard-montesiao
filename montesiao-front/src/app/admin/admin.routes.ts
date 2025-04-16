import { Routes } from '@angular/router';
import { GridMembroComponent } from './membros/grid-membros/grid-membros.component';
import { FormMembroComponent } from './membros/form-membros/form-membros.component';
import { GridMinisteriosComponent } from './ministerios/grid-ministerio/grid-ministerios.component';
import { FormMinisteriosComponent } from './ministerios/form-ministerio/form-ministerios.component';
import { GridEventosComponent } from './eventos/grid-eventos/grid-eventos.component';
import { FormEventosComponent } from './eventos/form-eventos/form-eventos/form-eventos.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: GridMinisteriosComponent },

  { path: 'ministerios', component: GridMinisteriosComponent },
  { path: 'ministerios/ministeriosForm', component: FormMinisteriosComponent },

  { path: 'membros', component: GridMembroComponent },
  { path: 'membros/membrosForm', component: FormMembroComponent },

  { path: 'eventos', component: GridEventosComponent },
  { path: 'eventos/eventosForm', component: FormEventosComponent },
];
