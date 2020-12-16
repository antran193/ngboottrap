import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalconfirm',
  templateUrl: './modalconfirm.component.html',
  styleUrls: ['./modalconfirm.component.css']
})
export class ModalconfirmComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
