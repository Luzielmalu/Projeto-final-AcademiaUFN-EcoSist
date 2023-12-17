import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  users: any[]=[];
  constructor(private http: HttpClient){
    this.loadUsers();
  }

  loadUsers() {
    debugger;
    this.http.get('  http://localhost:8089/cadastro').subscribe((res:any)=>{
      this.users = res.data;
    })
  }

}
