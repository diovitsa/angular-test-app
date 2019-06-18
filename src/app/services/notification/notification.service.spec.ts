import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material';

describe('NotificationService', () => {
  let service: NotificationService;
  const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

  beforeEach(() => {
    service = new NotificationService(snackBarSpy);
  });

  describe('signIn', () => {
    beforeEach(() => {
      service.showErrorMessage('testMessage', 'testAction');
    });

    it('should show snackbar with provided params', () => {
      expect(snackBarSpy.open).toHaveBeenCalledWith('testMessage', 'testAction', { panelClass: 'warning', duration: 3000 });
    });
  });
});
