import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCountDown'
})
export class DateCountDownPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
