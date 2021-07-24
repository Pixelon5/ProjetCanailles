import { Component, OnInit } from '@angular/core';
import { Portee } from '../../shared/models/portee.model';
import { Chiot } from '../../shared/models/chiot.model';
import { PorteesService } from '../../services/portees.service';
import { ChiotService } from '../../services/chiot.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portee-form',
  templateUrl: './portee-form.component.html',
  styleUrls: ['./portee-form.component.css']
})
export class PorteeFormComponent implements OnInit {

  porteeForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  fileUploadResult: string;

  chiots: Chiot[] = [];
  nbChiot: number = 0;

  constructor(private formBuilder: FormBuilder, private porteesService: PorteesService,
              private router: Router, private chiotService: ChiotService) { }

  ngOnInit(){
      this.initForm();
  }

  initForm() {
    this.porteeForm = this.formBuilder.group({
      nom: ['', Validators.required],
      race: '',
      dateNaissance: '',
      pere: '',
      mere: '',
      image: '',
      chiots: this.formBuilder.array([])
    });
  }

  onSavePortee() {
    this.initForm();
    const newPortee = new Portee();
    newPortee.nom = this.porteeForm.get('nom').value;
    newPortee.race = this.porteeForm.get('race').value;
    newPortee.dateNaissance = this.porteeForm.get('dateNaissance').value;
    newPortee.pere = this.porteeForm.get('pere').value;
    newPortee.mere = this.porteeForm.get('mere').value;

    if ( this.fileUploaded ) {
      newPortee.image = this.fileUrl;
    }

    if ( !this.fileUploaded && !this.fileIsUploading ){
      newPortee.image = 'https://firebasestorage.googleapis.com/v0/b/projetcanailles.appspot.com/o/portees%2FimageDeBase.png?alt=media&token=0bdbd20a-5520-4476-9860-5ec7b090db9f';
    }

    newPortee.chiots = this.chiots;

    console.log(newPortee);

    this.porteesService.createNewPortee(newPortee);

    if ( this.chiots !== [] ){

    }


    this.router.navigate(['/portees']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    console.log('coucou');
    this.porteesService.uploadFile(file).then((url: string) => {
        this.fileUrl = url;
        this.fileUploaded = true;
        this.fileUploadResult = 'Fichier téléchargé.';
      }).catch(() => {
        console.log('coucou 2');
        this.fileUploaded = false;
        this.fileUploadResult = 'Erreur de téléchargement.';
    }).finally(() => this.fileIsUploading = false);
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

  getChiots(): FormArray{
    return this.porteeForm.get('chiots') as FormArray;
  }

  onAddChiot(){
    const newChiotControl = this.formBuilder.control(null);
    this.getChiots().push(newChiotControl);
  }

  getDate(){
    return new Date();
  }

}
