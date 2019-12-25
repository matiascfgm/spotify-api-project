import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any): string {
    console.log('images -> ' + images)
    if (!images || images === '') {
      console.log('this bitx empty')
      return 'https://matthewsenvironmentalsolutions.com/images/com_hikashop/upload/not-available.png';
    } else {
      return images;
    }
  }

}
