import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, Subscription } from 'rxjs'
import { Production } from '../classes/production';
@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {


  isDisplay = false;

  productions!:any;
  nbLignes:Number = 8
  nameEnter!:String;
  Lat!:String;
  Lon!:String;
  Trouve:Boolean = false ;
  tabVille: String[][] = [['Washington','-77.0368707','38.9071923'], ['Dallas','-96.7969879','32.7766642'], ['Chicago','-87.6297982','41.8781136'], ['Philadelphie','-75.1333','40.0094'], ['Phoenix','-112.0740373','33.4483771'],['Houston','-95.369803','29.760427'],['Los Angeles','-118.411','34.0194'],['San Diego','-117.1610838','32.715738']]
  months: String[]= ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre']

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

   research() {
     for(let i: number = 0; i < this.nbLignes ;i++){
      if (this.tabVille[i][0]  == this.nameEnter) {
        this.Lon = this.tabVille[i][1];
        this.Lat =  this.tabVille[i][2];
        this.Trouve = true;
        console.log("trouve");
        break;
      }
    }
      if (this.Trouve) {
        this.dataService.get(this.Lon, this.Lat).toPromise().then(
          (data: any) =>
          {
            console.log(data);
            this.productions = data;
          }
        );
        }
 }
}
