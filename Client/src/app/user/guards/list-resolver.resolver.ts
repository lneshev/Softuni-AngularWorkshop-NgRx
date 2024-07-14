import { ResolveFn } from '@angular/router';
import { UserService } from '../user.service';
import { inject } from '@angular/core';
import { tap, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';

export const listResolverFn: ResolveFn<boolean> = (route, state) => {
  const userService = inject(UserService);
  const store = inject(Store<IAppState>);

  return userService.load().pipe(tap(users => {
    store.dispatch({ type: 'LOAD_USERS_SUCCESS', payload: users })
  }, map(() => true)));
};
