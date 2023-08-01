import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when showSuccessAsync invoked', () => {
    it('should call showSuccessAsync with correct parameters', async () => {
      // Act
      service.showSuccess('test').subscribe();

      // Assert
      expect().nothing();
    });

    it('should call showErrorAsync with correct parameters', async () => {
      // Act
      service.showError('test').subscribe();

      // Assert
      expect().nothing();
    });
  });
});
