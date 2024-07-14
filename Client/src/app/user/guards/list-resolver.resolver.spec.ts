import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { listResolverFn } from './list-resolver.resolver';

describe('listResolverFn', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => listResolverFn(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
