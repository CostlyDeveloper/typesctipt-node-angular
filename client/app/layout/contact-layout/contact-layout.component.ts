import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../layers/data-hub/api.service';
import { DataClass } from '../../layers/data-hub/data-class';
import { DataInterface } from '../../layers/data-hub/data-interface';
import { catchError } from 'rxjs/operators';
import { INFORMATIONInterface } from '../../../../dependencies/models/INFORMATION/information.interface';

@Component({
    selector   : 'app-contact-layout',
    templateUrl: './contact-layout.component.html',
    styleUrls  : ['./contact-layout.component.scss'],
    providers  : [ApiService]
})
export class ContactLayoutComponent implements OnInit {

    componentForm: FormGroup;
    notification: DataInterface.IMessage = new DataClass.Message();
    showNotification: boolean            = false;


    constructor(private formBuilder: FormBuilder, private apiService: ApiService) {

        /*this.notification = {
         show: true,
         text: 'This is a success alert—check it out!',
         class: 'alert-success'
         };*/
    }

    ngOnInit(): void {
        
        this.componentForm = this.formBuilder.group({
            Email  : [null],
            Message: [null]
        });
    }

    submitForm(_FormValues: any): void {

        const email: INFORMATIONInterface.IEmail = {
            Email  : _FormValues.Email,
            Message: _FormValues.Message
        };

        const sub = this.apiService.postService(email, '/API/contact').pipe(
            catchError(err => {
                if (err.status === 422) {
                    this.createNotification(err.error);
                }
                throw err.error;
            })).subscribe(_Data => {

            this.createNotification(_Data.Message);
            sub.unsubscribe();
        });
    }

    createNotification(_Message: DataInterface.IMessage): void {
        this.showNotification = true;
        this.notification     = _Message;

        setTimeout(() => {
            this.showNotification = false;
        }, 5000);
    }

}
