import { Component, ViewChild, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchoToSlider: number;
  public captions: boolean;
  public autor: any;

  @ViewChild('textos', {static: true}) textos;

  constructor() { 
  	this.captions = false;
  }

  ngOnInit(): void {
  	//console.log(this.textos.nativeElement.textContent);
  }

  cargarSlider(){

  	this.anchoToSlider = this.widthSlider;
  }

  resetSlider(){
  	this.anchoToSlider = null;
  }

  getAutor(event){
  	this.autor = event;
  }
}
