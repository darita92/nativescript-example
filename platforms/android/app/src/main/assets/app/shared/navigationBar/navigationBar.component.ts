import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';

@Component({
    moduleId: module.id,
    selector: "nav-bar",
    templateUrl: 'navigationBar.component.html',
    //styleUrls: ['navigationBar.component.css']
})
export class NavBarComponent implements AfterViewInit, OnInit {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    ngOnInit() {
        
    }

    public showSlideout() {
        this.drawer.showDrawer();
    }
}