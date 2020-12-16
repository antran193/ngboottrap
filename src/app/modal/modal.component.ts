import { Component, OnInit, Type } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalconfirmComponent } from './modalconfirm/modalconfirm.component';
import { ModalfocusComponent } from './modalfocus/modalfocus.component';



const MODALS: {[name: string]: Type<any>} = {
  focusFirst: ModalconfirmComponent,
  autofocus: ModalfocusComponent
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
  constructor(private _modalService: NgbModal) { }
  open(name: string) {
    this._modalService.open(MODALS[name]);
  }
  ngOnInit(): void {
  }

}
