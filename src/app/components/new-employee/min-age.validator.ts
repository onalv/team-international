import { FormControl } from '@angular/forms';
export class MinAgeValidator {
  static validDateOfBirth(fc: FormControl) {
    const today = new Date();
    if (fc.value !== null) {
      if (today.getFullYear() - fc.value['year'] < 18) {
        return {'minAge': {value: fc.value}};
      } else if (today.getFullYear() - fc.value['year'] === 18) {
        if ((today.getMonth() + 1) - fc.value['month'] < 0) {
          return {'minAge': {value: fc.value}};
        } else if ((today.getMonth() + 1) - fc.value['month'] === 0) {
          if (today.getDate() - fc.value['day'] < 0) {
            return {'minAge': {value: fc.value}};
          }
        }
      }
    }
    return null;
  }
}
