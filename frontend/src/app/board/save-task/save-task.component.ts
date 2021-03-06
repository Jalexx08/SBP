import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  public taskData: any;
  public errorMessage: String;

  constructor(private boardservice: BoardService, private router: Router) {
    this.taskData = {},
      this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  saveTask() {
    if (!this.taskData.name || !this.taskData.description) {
      console.log('Failed process: Incomplete data');
      this.errorMessage = 'Failed process: Incomplete data';
      this.closeAlert();

    } else {
      this.boardservice.saveTask(this.taskData).subscribe(
        (res: any) => {
          console.log(res);
          // localStorage.setItem('token', res.jwtToken);
          this.taskData = {};
          this.router.navigate(['/listTasks']);

        },
        (err) => {

          console.log(err);
          this.errorMessage = err.error;
          this.closeAlert();

        }
      );
    }
  }


  closeAlert() {
    setTimeout(() => {

      this.errorMessage = '';
    }, 3000);
  }

  closeX() {
    this.errorMessage = '';
  }

}
