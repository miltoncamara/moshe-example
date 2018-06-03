import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesInHours',
})

export class MinutesInHoursPipe implements PipeTransform {
  transform(minutes: number) {
    var hours = Math.round(minutes / 60);
    var minutes = Math.round(minutes % 60);
    return `${hours}h ${minutes}m`;
  }
}
