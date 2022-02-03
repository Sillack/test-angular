import {Pipe, PipeTransform} from '@angular/core';
import {Service} from "../../core/interfaces/service";

@Pipe({
    name: 'regionFilterPipe',
    pure: false,
})
export class RegionFilterPipe implements PipeTransform {
    transform(items: Service[], region: string): any {
        return items.filter((item) => region.includes(item.attributes["aws:region"]));
    }
}
