import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logged-in-status',
  templateUrl: './logged-in-status.component.html',
  styleUrls: ['./logged-in-status.component.scss']
})
export class LoggedInStatusComponent {
  @Input() username!: Readonly<string>;
}
