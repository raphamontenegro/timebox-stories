import { Pipe, PipeTransform } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    return value.substr(0, arg) + '...';
  }

}
