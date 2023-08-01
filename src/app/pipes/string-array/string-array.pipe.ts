import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringarray'
})
export class StringArrayPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string[] {
    let separator: string = ',';
    if (args.length > 0)
      separator = args[0];

    return value.split(separator);
  }

}
