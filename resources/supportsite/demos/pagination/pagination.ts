import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: "pagination"
})
export default class Pagination implements PipeTransform {
  transform(list,perPage,currentPage){
    console.log("Paginating",list,perPage,currentPage)
    return list.slice((currentPage-1)*perPage,(currentPage)*perPage)
  }
}