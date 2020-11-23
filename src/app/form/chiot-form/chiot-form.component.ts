import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Portee } from '../../shared/models/portee.model';
import { Chiot } from '../../shared/models/chiot.model';
import { PorteesService } from '../../services/portees.service';
import { ChiotService } from '../../services/chiot.service';

@Component({
  selector: 'app-chiot-form',
  templateUrl: './chiot-form.component.html',
  styleUrls: ['./chiot-form.component.css']
})
export class ChiotFormComponent implements OnInit {

  @Input() portee: Portee;
  chiotForm: FormGroup;
  fileChiotIsUploading = false;
  fileChiotUrl: string;
  fileChiotUploaded = false;

  chiots: Chiot[] = [];
  nbChiot: number = 0;

  constructor(private formBuilder: FormBuilder, private porteesService: PorteesService,
              private router: Router, private chiotService: ChiotService) { }

  ngOnInit(): void {
  }



  initFormChiot() {
    this.chiotForm = this.formBuilder.group({
      nom: ['', Validators.required],
      genre:['Femelle', Validators.required],
      dateDisponible: "",
      prixVente:'',
      robe:'',
      photo:''
    });
  }

  onSaveChiot(){
    this.initFormChiot();
    const newChiot = new Chiot();
    newChiot.nom = this.chiotForm.get('nom').value;
    newChiot.genre = this.chiotForm.get('genre').value;
    newChiot.dateDisponible = this.chiotForm.get('dateDisponible').value;
    newChiot.prixVente = this.chiotForm.get('prixVente').value;
    newChiot.robe = this.chiotForm.get('robe').value;

    if( this.fileChiotUploaded ) {
      newChiot.photo = this.fileChiotUrl;
    }

    if ( !this.fileChiotUploaded && !this.fileChiotIsUploading ){
      newChiot.photo = "https://firebasestorage.googleapis.com/v0/b/projetcanailles.appspot.com/o/chiots%2FimageDeBaseChiot.jpg?alt=media&token=7aec3200-27dc-48fe-8425-c41c36369adb";
    }

    this.chiots.push(newChiot);

  }

  getDate(){
    //return new Date(this.portee.dateNaissance.setUTCMonth(this.portee.dateNaissance.getUTCMonth()+2));
  }

  getDateDispo(){
  //  const dateNaissance = this.porteeForm.get('dateNaissance').value;
  //  return new Date(dateNaissance.setUTCMonth(dateNaissance.getUTCMonth()+2));
  }


  onUploadFileChiot(file: File) {
  this.fileChiotIsUploading = true;
    this.chiotService.uploadFile(file).then(
      (url: string) => {
        this.fileChiotUrl = url;
        this.fileChiotIsUploading = false;
        this.fileChiotUploaded = true;
      }
    );
  }

  detectFilesChiot(event) {
    this.onUploadFileChiot(event.target.files[0]);
  }

}
