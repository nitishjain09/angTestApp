import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(mobiles: any[], searchTerm: string): any[] {
    
    //if this is not there, then empty comp is visible when nothing is entered in search bar
    if(!mobiles || !searchTerm)   
      return mobiles;
    else
      return mobiles.filter( mobileObj => mobileObj.productTitle.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
