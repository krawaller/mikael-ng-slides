import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: "McFaceIt"
})
export class McFaceIt implements PipeTransform {
  transform(value){
    return value + 'y Mc' + value + 'face';
  }
}