import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    public ticket = {
        ticketname: '',
        ticketcurrentnotes: '',
        ticketnoteshistory: '',
        severityname: '',
        severityid: '',
        ticketservicetype: '',
        ticketstatus: '',
        servicetypename: '',
        servicetypeid: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createticketService.GpCreate(this.ticket).subscribe(data => {
            this.ticket.ticketname = ''
 	 	this.ticket.ticketcurrentnotes = ''
 	 	this.ticket.ticketnoteshistory = ''
 	 	this.ticket.severityname = ''
 	 	this.ticket.severityid = ''
 	 	this.ticket.ticketservicetype = ''
 	 	this.ticket.ticketstatus = ''
 	 	this.ticket.servicetypename = ''
 	 	this.ticket.servicetypeid = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}