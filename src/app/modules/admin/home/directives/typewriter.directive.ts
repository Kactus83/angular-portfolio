import {
    Directive,
    Input,
    ElementRef,
    AfterViewInit,
    OnChanges,
    SimpleChanges
  } from '@angular/core';
  
  @Directive({
    selector   : '[appTypewriter]',
    standalone : true
  })
  export class TypewriterDirective implements AfterViewInit, OnChanges {
    @Input('appTypewriter') text = '';
    @Input() speed = 50;
    @Input() startDelay = 0;
  
    private initialized = false;
  
    constructor(private el: ElementRef<HTMLElement>) {}
  
    ngAfterViewInit(): void {
      this.initialized = true;
      this.run();
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      if (this.initialized && changes['text']) {
        this.run();
      }
    }
  
    private async run(): Promise<void> {
      const el = this.el.nativeElement;
      el.innerText = '';
      if (this.startDelay > 0) {
        await new Promise(r => setTimeout(r, this.startDelay));
      }
      for (let i = 0; i < this.text.length; i++) {
        el.innerText += this.text.charAt(i);
        await new Promise(r => setTimeout(r, this.speed));
      }
    }
  }
  