import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './abstractions/views/menu-item';
import { IAppWorker } from './abstractions/workers/app-worker.interface';
import { AppWorker } from './app.component.worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: IAppWorker, useClass: AppWorker }
  ]
})
export class AppComponent implements OnInit {
  title = 'Rita';
  username: Readonly<string> = 'Guest';
  menuItems$: Observable<ReadonlyArray<MenuItem>> = this._worker.menuItems$;

  constructor(private readonly _worker: IAppWorker) { }

  ngOnInit(): void {
    this._worker.initialize();
  }

  menuItemSelected(menuItem: MenuItem): void {
    this._worker.menuItemSelected(menuItem);
  }
}