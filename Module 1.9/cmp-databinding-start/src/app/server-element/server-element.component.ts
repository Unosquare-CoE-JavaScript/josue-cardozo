import { Component, ContentChild, ElementRef, Input, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None // cambia el selector par que afecte a todos los componentes
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('contructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('ngOnchanges called', changes)
  }

  ngOnInit(): void {
    //console.log('ngOnInit Called!', this.header.nativeElement.textContent, this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    //console.log('ngDocheck Called!', this.header.nativeElement.textContent, this.paragraph.nativeElement.textContent)
  }

  ngAfterContentInit() {
    //console.log('ngAfterContentInit Called!', this.header.nativeElement.textContent, this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    //console.log('ngAfterContentChecked Called!', this.header.nativeElement.textContent, this.paragraph.nativeElement.textContent)
  }

  ngAfterViewInit() {
    //console.log('ngAfterViewInit Called!', this.header.nativeElement.textContent, this.paragraph.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked Called!', this.header.nativeElement.textContent, this.paragraph.nativeElement.textContent)
  }

  ngOnDestroy() {
    //console.log('ngOnDestroy')
  }

}
