import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanString'
})
export class BooleanStringPipe implements PipeTransform {

  transform(value: string | boolean, ...args: unknown[]): string {
    if (typeof value === 'string' && !value)
      return '';

    if (value === 'TRUE' || value === 'FALSE')
      return value;

    if (typeof value === 'boolean') {
      const bValue = Boolean(value);
      return bValue.toString().toUpperCase();
    }

    if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
      return value.toUpperCase();
    }

    return value;
  }
}
