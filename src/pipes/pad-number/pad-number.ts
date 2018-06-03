import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padNumber',
})

export class PadNumberPipe implements PipeTransform {
  transform(value: number) {
    return (value < 10) ? ("0" + value) : value;
  }
}
