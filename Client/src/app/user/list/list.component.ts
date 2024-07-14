import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { IAppUserState } from '../store';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  users: any

  constructor(private store: Store<IAppUserState>) {
    store.select(state => state.user.list.entities).subscribe((users) => this.users = users);
  }

  delete(id: number) {
    this.store.dispatch({ type: 'DELETE_USER', payload: id });
  }
}
