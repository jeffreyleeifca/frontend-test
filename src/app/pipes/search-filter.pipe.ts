import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchFilter',
    // An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], filter: any, model?: any): any {
        if (!items || !filter) {
            return items;
        }

        if (model) {
            return items.filter(item =>
                Object.keys(model).some(k => item[k] != null &&
                    item[k].toString().toLowerCase()
                        .includes(filter.toLowerCase()))
            );
        }

        return items.filter(item =>
            Object.keys(item).some(k => item[k] != null &&
                item[k].toString().toLowerCase()
                    .includes(filter.toLowerCase()))
        );
    }
}
