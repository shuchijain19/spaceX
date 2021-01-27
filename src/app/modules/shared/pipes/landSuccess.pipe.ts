import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} landSuccess
   * @returns {any[]}
   */
  transform(items: any[], landSuccess:string): any[] {

    if (!items) {
      return [];
    }
    if (!landSuccess) {
      return items;
    }

    return items.filter(val => {
      return (val['land_success'].toString()==landSuccess);
    });
  }
}