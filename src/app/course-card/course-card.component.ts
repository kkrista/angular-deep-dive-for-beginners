import { Component, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed () {
    console.log("card component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }

}
