import { Injectable } from '@angular/core';
// @vendors
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Do you want lo leave?');

    return of(confirmation);
  }
}
