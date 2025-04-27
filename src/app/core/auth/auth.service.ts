import { Injectable, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Indique si un utilisateur est actuellement authentifié.
   */
  private _authenticated = false;

  /**
   * Clé utilisée pour stocker l’utilisateur dans le localStorage.
   */
  private readonly STORAGE_KEY = 'appUser';

  /**
   * Service utilisateur pour propager les données du user connecté.
   */
  private _userService = inject(UserService);

  constructor() {
    // Au démarrage, charger un éventuel user depuis le localStorage
    this._loadFromStorage();
  }

  /**
   * Tente de connecter l’utilisateur avec Prénom + Nom (fake).
   * @param credentials { firstName, lastName }
   * @returns Observable<User>
   */
  signIn(credentials: { firstName: string; lastName: string }): Observable<User> {
    if (this._authenticated) {
      return throwError(() => new Error('Utilisateur déjà connecté.'));
    }

    // Création du profil utilisateur factice
    const email = `${credentials.firstName.toLowerCase()}.${credentials.lastName.toLowerCase()}@portfolio.fr`;
    const user: User = {
      id: Date.now().toString(),
      name: `${credentials.firstName} ${credentials.lastName}`,
      email,
      avatar: undefined,
      status: 'online'
    };

    this._setUser(user);
    return of(user);
  }

  /**
   * Connexion en tant qu’invité.
   * @returns Observable<User>
   */
  signInAsGuest(): Observable<User> {
    if (this._authenticated) {
      return throwError(() => new Error('Utilisateur déjà connecté.'));
    }

    const user: User = {
      id: 'guest',
      name: 'Invité',
      email: 'guest@portfolio.fr',
      avatar: undefined,
      status: 'online'
    };

    this._setUser(user);
    return of(user);
  }

  /**
   * Déconnexion : supprime le stockage et réinitialise l’état.
   * @returns Observable<boolean>
   */
  signOut(): Observable<boolean> {
    localStorage.removeItem(this.STORAGE_KEY);
    this._authenticated = false;
    return of(true);
  }

  /**
   * Vérifie si un utilisateur est actuellement connecté.
   * @returns Observable<boolean>
   */
  check(): Observable<boolean> {
    return of(this._authenticated);
  }

  // ----------------------------------------
  // Méthodes internes
  // ----------------------------------------

  /**
   * Charge l’utilisateur depuis localStorage s’il existe.
   */
  private _loadFromStorage(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      try {
        const user: User = JSON.parse(data);
        this._userService.user = user;
        this._authenticated = true;
      } catch {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    }
  }

  /**
   * Mémorise l’utilisateur, met à jour le service user et le stockage.
   * @param user Profil User
   */
  private _setUser(user: User): void {
    this._authenticated = true;
    this._userService.user = user;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }
}
