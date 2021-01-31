import { Component, OnInit } from '@angular/core';
import { CreateservicesService } from './createservices.service';

@Component({
  selector: 'app-createservices',
  templateUrl: './createservices.component.html',
  styleUrls: ['./createservices.component.scss'],
})

export class CreateservicesComponent implements OnInit {
    public servicetypes = {
        servicename: '',
        servicedescription: '',
    }

    constructor (
        private createservicesService: CreateservicesService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createservicesService.GpCreate(this.servicetypes).subscribe(data => {
            this.servicetypes.servicename = ''
 	 	this.servicetypes.servicedescription = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}