import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { INotificationService } from 'src/app/abstractions/view-services/notification-service.interface';

@Injectable()
export class NotificationService implements INotificationService {
  showSuccess(message: string): Observable<void> {
    return EMPTY;
  }
  showError(message: string): Observable<void> {
    return EMPTY;
  }
}
