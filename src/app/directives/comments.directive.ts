import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appComments]'
})
export class CommentsDirective {

  @Input() maxChars=20;
  @HostListener('input') onKeyUp(){

    const  value:string =this.el.nativeElement.value;
 
     if(value.length > this.maxChars){
 
       this.el.nativeElement.value=value.substring(0,this.maxChars);
 
     }
 
 
 
    }
    constructor(private el:ElementRef,private renderer:Renderer2) { }

 

}