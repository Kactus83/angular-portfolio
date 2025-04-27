import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { User } from 'app/core/user/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Sujet réémettant le User courant.
   */
  private readonly _userSubject = new ReplaySubject<User>(1);

  /**
   * Clé utilisée pour stocker l’utilisateur dans le localStorage.
   */
  private readonly STORAGE_KEY = 'appUser';

  /**
   * Définit ou met à jour le User courant.
   */
  set user(value: User) {
    this._userSubject.next(value);
    // On synchronise également dans le localStorage pour persistance
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }

  /**
   * Flux Observable du User connecté.
   */
  get user$(): Observable<User> {
    return this._userSubject.asObservable();
  }

  /**
   * Renvoie le User courant sous forme d’Observable.
   * Ici, on réémet simplement le dernier User connu.
   */
  get(): Observable<User> {
    return this.user$;
  }

  /**
   * Met à jour le User (profil, avatar, etc.).
   * @param user Nouvel objet User
   * @returns Observable<User>
   */
  update(user: User): Observable<User> {
    this.user = user;
    return of(user);
  }
}
