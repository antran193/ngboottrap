import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalfocus',
  templateUrl: './modalfocus.component.html',
  styleUrls: ['./modalfocus.component.css']
})
export class ModalfocusComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
