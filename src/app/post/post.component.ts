import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
AfterContentInit,
AfterContentChecked{

  @Input() post!: Post
  @ContentChild("info",{static:true}) infoRef!: ElementRef

  ngOnChanges(changes: SimpleChanges): void{
  console.log("ngOnChanges", changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    // console.log(this.infoRef.nativeElement)
  }
  ngDoCheck():void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }

}
