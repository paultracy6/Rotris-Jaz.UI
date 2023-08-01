import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayString'
})
export class ArrayStringPipe implements PipeTransform {

  /**
   * Transforms an array to string using a separator
   * @param value the array to convert
   * @param args arg[0] is the separator: default ,
   * @returns string of array.
   */
  transform(value: string[], ...args: string[]): string {
    let separator: string = ',';

    if (args.length > 0)
      separator = args[0];

    return value.join(separator);
  }

}
