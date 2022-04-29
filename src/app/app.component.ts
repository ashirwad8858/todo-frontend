import { HttpClient } from '@angular/common/http';
import {
  AfterContentInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo-frontend';
  public Editor = ClassicEditor;
  // dropdownList:{item_id:number,item_text:String}[] = [];
  // selectedItems:{item_id:number,item_text:String}[] = [];
  // dropdownSettings = {};

  // dropdownList:{ item_id: number, item_text: String}[] = [];
  // selectedItems :{ item_id: number, item_text: String}[]= [];
  // dropdownSettings:IDropdownSettings ;
  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: { item_id: number, item_text: String, image: String, }[] = [];
  selectedItems: { item_id: number, item_text: String, image: String, }[] = [];
  dropdownSettings:IDropdownSettings;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    console.log('constructor call');
  }

  // get getItems() {
  //   return this.cities.reduce((acc, curr) => {
  //     acc[curr.item_id] = curr;
  //     return acc;
  //   }, {});
  // }
  ngOnInit(): void {
    console.log('oninit call');
    console.log('app component');
    this.cities = [
      {
        item_id: 1,
        item_text: "India",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg",
      },
      {
        item_id: 2,
        item_text: "Spain",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/Spain.jpg",
      },
      {
        item_id: 3,
        item_text: "United Kingdom",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg",
      },
      {
        item_id: 4,
        item_text: "Canada",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg",
        // isDisabled: this.disableBangalore,
      },
      {
        item_id: 5,
        item_text: "Israel",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Israel.jpg",
      },
      {
        item_id: 6,
        item_text: "Brazil",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg",
      },
      {
        item_id: 7,
        item_text: "Barbados",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Barbados.jpg",
      },
      {
        item_id: 8,
        item_text: "Mexico",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Mexico.jpg",
      },
    ];
    this.selectedItems = [
      {
        item_id: 1,
        item_text: "India",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg",
      },
      {
        item_id: 5,
        item_text: "Israel",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Israel.jpg",
      },
    ];
    this.dropdownSettings =      {
      "singleSelection": false,
      "defaultOpen": false,
      "idField": "item_id",
      "textField": "item_text",
      "selectAllText": "Select All",
      "unSelectAllText": "UnSelect All",
      "enableCheckAll": true,
      "itemsShowLimit": 3,
      "allowSearchFilter": true
    }
    this.myForm = this.fb.group({
      city: [this.selectedItems]
    });

    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    // this.dropdownSettings= {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };

    this.http.get('http://localhost:3000/users').subscribe((res)=>{
      console.log(res);
    })
  }
  // onItemSelect(item: any) {
  //   console.log(item);
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }
    onItemSelect(item: any) {
      console.log('onItemSelect', item);
  }
  onSelectAll(items: any) {
      console.log('onSelectAll', items);
  }
  toogleShowFilter() {
      this.ShowFilter = !this.ShowFilter;
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
  }
  // ngOnChanges(changes:SimpleChanges){
  //   // console.log("onchanges call")
  // }

  // ngDoCheck(): void {
  //     // console.log("docheck called")
  // }
  // ngAfterContentInit(): void {
  //     // console.log("after content init")
  // }
}
