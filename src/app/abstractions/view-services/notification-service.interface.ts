import { Observable } from "rxjs";

export abstract class INotificationService {
  abstract showSuccess(message: string): void;
  abstract showError(message: string): void;
}
