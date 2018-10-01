import { Action } from '@ngrx/store';

export const INCREMENT_ID = '[ID] Increment';

export class IncrementId implements Action {
  readonly type = INCREMENT_ID;

  constructor() {}
}

export type Actions = IncrementId;
