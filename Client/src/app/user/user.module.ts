import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { provideState } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    provideState({ name: 'user', reducer: reducers } as any)
  ]
})
export class UserModule { }
