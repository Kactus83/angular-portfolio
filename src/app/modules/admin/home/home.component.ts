import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterLink }     from '@angular/router';
import { MatIconModule }  from '@angular/material/icon';
import { UserService }    from 'app/core/user/user.service';
import { Observable }     from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TypewriterDirective } from './directives/typewriter.directive';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

interface Section {
  title: string;
  icon : string;
  desc  : string;
  link  : string;
}

@Component({
  selector       : 'admin-home',
  standalone     : true,
  imports        : [
    CommonModule,
    RouterLink,
    MatIconModule,
    TypewriterDirective,
    TranslocoModule
  ],
  templateUrl    : './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation  : ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('particleCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  readonly greetLine1$: Observable<string> = this._userService.user$.pipe(
    switchMap(user => {
      const who = user && user.name !== 'Invité'
        ? user.name
        : '';
      return this._transloco.selectTranslate('home.greetLine1', { who });
    })
  );

  readonly greetLine2: string = this._transloco.translate('home.greetLine2');
  readonly line3: string      = this._transloco.translate('home.line3');

  readonly sections: Section[] = [
    {
      title: this._transloco.translate('navigation.profile.title'),
      icon : 'heroicons_solid:user-circle',
      desc : this._transloco.translate('navigation.profile.desc'),
      link : '/profile'
    },
    {
      title: this._transloco.translate('navigation.skills.title'),
      icon : 'heroicons_solid:academic-cap',
      desc : this._transloco.translate('navigation.skills.desc'),
      link : '/skills'
    },
    {
      title: this._transloco.translate('navigation.experiences.title'),
      icon : 'heroicons_solid:briefcase',
      desc : this._transloco.translate('navigation.experiences.desc'),
      link : '/experiences'
    },
    {
      title: this._transloco.translate('navigation.projects.title'),
      icon : 'heroicons_solid:folder',
      desc : this._transloco.translate('navigation.projects.desc'),
      link : '/projects'
    },
    {
      title: this._transloco.translate('navigation.veille.title'),
      icon : 'heroicons_solid:magnifying-glass',
      desc : this._transloco.translate('navigation.veille.desc'),
      link : '/veille'
    },
    {
      title: this._transloco.translate('navigation.contact.title'),
      icon : 'heroicons_solid:at-symbol',
      desc : this._transloco.translate('navigation.contact.desc'),
      link : '/contact'
    }
  ];

  constructor(
    private _userService: UserService,
    private _transloco: TranslocoService
  ) {}

  ngAfterViewInit(): void {
    const canvasEl = this.canvas.nativeElement;
    const ctx      = canvasEl.getContext('2d')!;
    const particles: any[] = [];

    // --- UTIL : récupère une CSS-var avec fallback ---
    const getVar = (name: string) => {
      const v1 = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      if (v1) return v1;
      return getComputedStyle(document.body).getPropertyValue(name).trim();
    };

    // --- REDIMENSIONNEMENT CANVAS ---
    const resize = () => {
      canvasEl.width  = canvasEl.clientWidth;
      canvasEl.height = canvasEl.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // --- GÉNÈRE DES PARTICULES À CHAQUE MOUVEMENT ---
    let lastX = 0, lastY = 0, lastT = performance.now();
    const host = canvasEl.parentElement!;
    host.addEventListener('mousemove', (e: MouseEvent) => {
      const now = performance.now();
      const dt  = now - lastT || 16;
      const dx  = e.clientX - lastX;
      const dy  = e.clientY - lastY;
      const velocity = Math.hypot(dx, dy) / dt; // px/ms

      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;

      // Reprendre dynamiquement les 3 teintes primaires
      const hexes = [
        getVar('--portfolio-primary'),
        getVar('--portfolio-primary-200'),
        getVar('--portfolio-primary-50')
      ].filter(h => /^#/.test(h));
      // Convertisseur hex → rgb
      const hexToRgb = (h: string) => {
        h = h.replace('#','');
        if (h.length === 3) h = h.split('').map(c => c+c).join('');
        const i = parseInt(h,16);
        return { r:(i>>16)&255, g:(i>>8)&255, b:i&255 };
      };
      const colors = hexes.length
        ? hexes.map(hexToRgb)
        : [{r:79,g:70,b:229},{r:199,g:210,b:254},{r:238,g:242,b:255}];

      // Nombre de particules proportionnel à la vélocité
      const count = Math.min(Math.floor(velocity * 0.45), 6);
      for (let i = 0; i < count; i++) {
        particles.push({
          baseX: Math.random() * canvasEl.width,
          y: canvasEl.height + 5,
          speed: 0.5 + Math.random() * 1,           // vitesse réduite
          life: 80 + Math.random() * 80,
          age: 0,
          oscAmp: 5 + Math.random() * 10,           // oscillation plus faible
          oscSpeed: 0.02 + Math.random() * 0.05,
          force: (Math.random() - 0.5) * 0.2,        // force qui fera varier oscAmp
          color: colors[Math.floor(Math.random()*colors.length)]
        });
      }
    });

    // --- BOUCLE D’ANIM ---
    const animate = () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age++;
        p.y -= p.speed;
        // faire évoluer l’amplitude
        p.oscAmp += p.force;
        // oscillation
        const x = p.baseX + Math.sin(p.age * p.oscSpeed) * p.oscAmp;
        const alpha = 1 - p.age / p.life;
        ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
        if (p.age >= p.life) {
          particles.splice(i, 1);
        }
      }
      requestAnimationFrame(animate);
    };
    animate();
  }
}
