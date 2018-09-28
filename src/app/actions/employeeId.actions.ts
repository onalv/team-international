import { Action } from '@ngrx/store';

export const INCREMENT_ID = '[ID] Increment';
export const DECREMENT_ID = '[ID] Decrement';

export class IncrementId implements Action {
  readonly type = INCREMENT_ID;

  constructor() {}
}

export class DecrementId implements Action {
  readonly type = DECREMENT_ID;

  constructor() {}
}

export type Actions = IncrementId | DecrementId;
