import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterLink }     from '@angular/router';
import { MatIconModule }  from '@angular/material/icon';
import { UserService }    from 'app/core/user/user.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap, filter, take } from 'rxjs/operators';
import {
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope
} from '@ngneat/transloco';
import { TypewriterDirective } from './directives/typewriter.directive';
import { STORAGE_KEY } from 'app/layout/common/languages/languages.component';

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
  providers      : [
    provideTranslocoScope('home')
  ],
  templateUrl    : './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation  : ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  greetLine1$!: Observable<string>;
  greetLine2 = '';
  line3     = '';
  /** Devient `true` dès que la traduction `home` est chargée */
  ready     = false;

  readonly sections: Section[] = [
    { title: 'home.navigation.profile.title',     icon: 'heroicons_solid:user-circle',      desc: 'home.navigation.profile.desc',        link: '/profile'     },
    { title: 'home.navigation.skills.title',      icon: 'heroicons_solid:academic-cap',     desc: 'home.navigation.skills.desc',         link: '/skills'      },
    { title: 'home.navigation.experiences.title', icon: 'heroicons_solid:briefcase',        desc: 'home.navigation.experiences.desc',    link: '/experiences' },
    { title: 'home.navigation.projects.title',    icon: 'heroicons_solid:folder',           desc: 'home.navigation.projects.desc',       link: '/projects'    },
    { title: 'home.navigation.veille.title',      icon: 'heroicons_solid:magnifying-glass', desc: 'home.navigation.veille.desc',         link: '/veille'      },
    { title: 'home.navigation.contact.title',     icon: 'heroicons_solid:at-symbol',        desc: 'home.navigation.contact.desc',        link: '/contact'     }
  ];

  private _subs = new Subscription();

  constructor(
    public  _userService: UserService,
    private _transloco:  TranslocoService,
    private _cdr:        ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    
    // 0) Vérifie si une langue préférée est déjà enregistrée dans le local storage
    // const saved = localStorage.getItem(STORAGE_KEY);
    // if (saved && this._transloco.getAvailableLangs().some(l => l.id === saved)) {
    //   this._transloco.setActiveLang(saved);
    // }else{
    //   this._transloco.setActiveLang(this._transloco.getDefaultLang());
    // }

    // On attend la toute première traduction du scope 'home' avant d'afficher les titres animés
    this._subs.add(
      this._transloco.events$
        .pipe(
          filter(e => e.type === 'translationLoadSuccess'),
          take(1)
        )
        .subscribe(() => {
          this.ready = true;
          this._cdr.markForCheck();
        })
    );
  }

  ngAfterViewInit(): void {
    // ==== ton code particles, inchangé ====
    const canvasEl = this.canvas.nativeElement;
    const ctx      = canvasEl.getContext('2d')!;
    const particles: any[] = [];

    const getVar = (name: string) => {
      const v1 = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      if (v1) return v1;
      return getComputedStyle(document.body).getPropertyValue(name).trim();
    };

    const resize = () => {
      canvasEl.width  = canvasEl.clientWidth;
      canvasEl.height = canvasEl.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let lastX = 0, lastY = 0, lastT = performance.now();
    const host = canvasEl.parentElement!;
    host.addEventListener('mousemove', (e: MouseEvent) => {
      const now = performance.now();
      const dt  = now - lastT || 16;
      const dx  = e.clientX - lastX;
      const dy  = e.clientY - lastY;
      const velocity = Math.hypot(dx, dy) / dt;

      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;

      const hexes = [
        getVar('--portfolio-primary'),
        getVar('--portfolio-primary-200'),
        getVar('--portfolio-primary-50')
      ].filter(h => /^#/.test(h));

      const hexToRgb = (h: string) => {
        h = h.replace('#','');
        if (h.length === 3) h = h.split('').map(c => c+c).join('');
        const i = parseInt(h,16);
        return { r:(i>>16)&255, g:(i>>8)&255, b:i&255 };
      };
      const colors = hexes.length
        ? hexes.map(hexToRgb)
        : [{r:79,g:70,b:229},{r:199,g:210,b:254},{r:238,g:242,b:255}];

      const count = Math.min(Math.floor(velocity * 0.45), 6);
      for (let i = 0; i < count; i++) {
        particles.push({
          baseX: Math.random() * canvasEl.width,
          y: canvasEl.height + 5,
          speed: 0.5 + Math.random() * 1,
          life: 80 + Math.random() * 80,
          age: 0,
          oscAmp: 5 + Math.random() * 10,
          oscSpeed: 0.02 + Math.random() * 0.05,
          force: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random()*colors.length)]
        });
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age++;
        p.y -= p.speed;
        p.oscAmp += p.force;
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

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
