import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  // constructor(private sanitizer:DomSanitizer){}
  transform(value:any,limit:number):any {
  // transform(value:any, city:string):any {
  //   if(city==='dwd' || city==="dvg")
  // {
  //   return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:grey">'+ city +'</div>');
  // }
  // else
  // {
  //   return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:">'+ city +'</div>');
  // }
  if(value.length>limit){
    return value.substr(0,limit)+'...'
  }
  else{
    return value
  }

  }
}
