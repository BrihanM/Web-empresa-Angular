import { Routes } from '@angular/router';
import { ContactFormWebComponent } from './contact-form-web/contact-form-web.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    // ... rutas existentes
    {
        path: '',
        component: HomeComponent,
        title: 'NexAur Technologies - Inicio'
    },
    {
        path: 'Contact',
        component: ContactFormWebComponent,
        title: 'NexAur Technologies - Contacto'
    }
];
