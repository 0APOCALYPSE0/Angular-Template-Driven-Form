import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor (private enrollmentService: EnrollmentService) { }
  userModel: User = new User('Aakash Giri', 'giriaakash00@gmail.com', 8368325809, 'default', 'morning', true);

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText
    );
  }  

}
