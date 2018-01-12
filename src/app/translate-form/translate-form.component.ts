import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-translate-form',
  templateUrl: './translate-form.component.html',
  styleUrls: ['./translate-form.component.css']
})
export class TranslateFormComponent implements OnInit {
	textInput = '';
  lang = '';
  url = '';
	translateword = '';
  responseBody = '';
  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSubmit() { 
  	this.url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171014T081849Z.1779481955eba56b.cd8aca74863f98b89197617c569f313440881094&lang='+this.lang+'&text='+this.textInput;
  	 this.http.get(this.url).subscribe(resp => {
      // Read the result field from the JSON response.
      this.responseBody = JSON.parse(resp["_body"]);
      this.translateword = this.responseBody["text"][0];
    });
  }
}
