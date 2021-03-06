import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'datatable',
    template: `
    <div style="margin:10px;"></div>
    <table class="table table-bordered">
        <thead [ngStyle]="{'background-color': 'rgb(5, 3, 48)', 'color': 'white'}">
            <tr>
                <th class="col-md-4">
                    Title
                </th>
                <th class="col-md-4">
                    Author
                </th>
                <th class="col-md-4">
                    IsAvailable
                </th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let book of booksList">
                <td tableFocus (click)="onRowClick(book)">
                    {{book.title}}
                </td>
                <td>
                    {{book.author}}
                </td>
                <td>
                    <input type="checkbox" [checked]="book.isAvailable" disabled>
                </td>
            </tr>
        </tbody>
    </table>
    `
})

export class DataTableComponent implements OnChanges {

    @Input() booksList: Array<any>;
    @Output() bookDetails: any = new EventEmitter<any>();

    ngOnChanges() {

    }

    onRowClick(book: any) {
        this.bookDetails.emit(book);
    }
}