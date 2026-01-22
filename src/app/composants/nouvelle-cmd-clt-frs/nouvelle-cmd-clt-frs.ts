import { Component, OnInit } from '@angular/core';
import { DetailCmd } from '../detail-cmd/detail-cmd';
import { ActivatedRoute, Router } from '@angular/router';
import { NouvelleCmdCltFrsRouteData } from './models/nouvelle-cmd-clt-frs.model';


@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  imports: [DetailCmd],
  templateUrl: './nouvelle-cmd-clt-frs.html',
  styleUrl: './nouvelle-cmd-clt-frs.scss',
})
export class NouvelleCmdCltFrs implements OnInit {
  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   const data = this.activatedRoute.snapshot.data as NouvelleCmdCltFrsRouteData;
       this.origin = data.origin;
    }
  }


