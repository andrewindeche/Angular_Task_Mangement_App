import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statuscolor',
  standalone: true
})
export class StatuscolorPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'status-done' : 'status-pending';
  }
}
