import { Component,AfterViewInit,OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { Collapse } from 'bootstrap'; // Importación correcta de Bootstrap

/*declare global {
  interface Window {
    formbutton: {
      (action: 'create', config: any): void;
      q?: any[];
    };
  }
}*/

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements AfterViewInit*/{
  title = 'NexAur Technologies';

    /*private collapseInstance?: Collapse;
    
    ngAfterViewInit(): void {
      this.initNavbar();
      this.initScrollBehavior();
      this.initIntersectionObserver();
      this.initFormButton();
    }
  
    ngOnDestroy(): void {
      this.collapseInstance?.dispose();
    }
  
    private initNavbar(): void {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse) {
        this.collapseInstance = new Collapse(navbarCollapse, { toggle: false });
        
        document.querySelectorAll<HTMLAnchorElement>('.nav-link').forEach(link => {
          link.addEventListener('click', (e: MouseEvent) => {
            // Verificar si el menú está abierto usando la clase de Bootstrap
            if (navbarCollapse.classList.contains('show')) {
              this.collapseInstance?.hide();
            }
            
            const target = document.querySelector(link.hash);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });
      }
    }
  
    private initScrollBehavior(): void {
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector<HTMLElement>('.navbar');
        if (navbar) {
          navbar.classList.toggle('bg-dark navbar-shrink', window.scrollY > 100);
        }
      });
    }
  
    private initIntersectionObserver(): void {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      }, { threshold: 0.1 });
  
      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });
    }
  
    private initFormButton(): void {
      window.formbutton = window.formbutton || function(this: any) {
        (this.q = this.q || []).push(arguments);
      };
  
      window.formbutton('create', {
        onResponse: (ok: boolean, setStatus: (msg: string) => void) => {
          if (ok) {
            setStatus("Recibimos su solicitud. Nos pondremos en contacto con usted en breve.");
          } else {
            setStatus("<span style='color:red'>Hubo un problema. Intentalo de nuevo</span>");
          }
        },
        action: "https://formspree.io/f/xgvalnar",
        buttonImg: "<i class='fas fa-comment' style='font-size:24px'/>",
        title: "Cómo podemos ayudarte?",
        fields: [/* ... mantén tus campos actuales ... *///],
        /*styles: {
          title: { backgroundColor: "#4ECDC4" },
          button: { backgroundColor: "#4ECDC4" }
        }
      });
    }*/
}
