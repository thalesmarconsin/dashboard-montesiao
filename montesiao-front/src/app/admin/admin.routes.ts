import { Routes } from '@angular/router';
import { GridMembroComponent } from './estudiante/grid-membros/grid-membros.component';
import { FormMembroComponent } from './estudiante/form-membros/form-membros.component';
import { GridMinisteriosComponent } from './ministerios/grid-ministerio/grid-ministerios.component';
import { FormMinisteriosComponent } from './ministerios/form-ministerio/form-ministerios.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: GridMinisteriosComponent },

  { path: 'ministerios', component: GridMinisteriosComponent },
  { path: 'ministerios/ministeriosForm', component: FormMinisteriosComponent },
  { path: 'membros', component: GridMembroComponent },
  { path: 'membros/membrosForm', component: FormMembroComponent },
];
