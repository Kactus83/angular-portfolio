import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation
  } from '@angular/core';
  import {
    NgForm,
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators
  } from '@angular/forms';
  import { Router, RouterLink } from '@angular/router';
  import { MatButtonModule } from '@angular/material/button';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';
  import { portfolioAnimations } from '@portfolio/animations';
  import {
    PortfolioAlertComponent,
    PortfolioAlertType
  } from '@portfolio/components/alert';
  import { AuthService } from 'app/core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';


  @Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: portfolioAnimations,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink,
      TranslocoModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      PortfolioAlertComponent
    ],
    providers: [
      provideTranslocoScope('common')
    ]
  })
  export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;
  
    /**
     * Formulaire de connexion (Prénom + Nom).
     */
    signInForm: UntypedFormGroup;
  
    /**
     * Contrôle l’affichage de l’alerte.
     */
    showAlert = false;
  
    /**
     * Type et message de l’alerte.
     */
    alert: { type: PortfolioAlertType; message: string } = {
      type: 'success',
      message: ''
    };
  
    constructor(
      private _formBuilder: UntypedFormBuilder,
      private _authService: AuthService,
      private _router: Router
    ) {}
  
    ngOnInit(): void {
      // Construction du FormGroup
      this.signInForm = this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName : ['', Validators.required]
      });
    }
  
    /**
     * Connexion « classique » : génère email+user à partir du prénom/nom.
     * Si le formulaire est invalide, on marque tous les champs touchés pour
     * afficher les messages d’erreur.
     */
    signIn(): void {
      if (this.signInForm.invalid) {
        this.signInForm.markAllAsTouched();
        return;
      }
  
      this.showAlert = false;
  
      this._authService.signIn(this.signInForm.value).subscribe({
        next: () => {
          this._router.navigateByUrl('/');
        },
        error: () => {
          this.signInForm.reset();
          this.signInForm.markAsPristine();
          this.signInForm.markAsUntouched();
          this.alert = {
            type   : 'error',
            message: 'Impossible de vous connecter avec ces informations.'
          };
          this.showAlert = true;
        }
      });
    }
  
    /**
     * Connexion en tant qu’Invité.
     */
    continueAsGuest(): void {
      this.showAlert = false;
  
      this._authService.signInAsGuest().subscribe({
        next: () => {
          this._router.navigateByUrl('/');
        },
        error: () => {
          this.alert = {
            type   : 'error',
            message: 'Impossible de se connecter en tant qu’invité.'
          };
          this.showAlert = true;
        }
      });
    }
  }
  