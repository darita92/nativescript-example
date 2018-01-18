import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-pro-ui/sidedrawer/angular';
import { DrawerTransitionBase, SideDrawerLocation, SlideInOnTopTransition } from 'nativescript-pro-ui/sidedrawer';

@Component({
    moduleId: module.id,
    selector: "nav-bar",
    templateUrl: 'navigationBar.component.html',
    //styleUrls: ['navigationBar.component.css']
})
export class NavBarComponent implements AfterViewInit, OnInit {
    private _sideDrawerTransition: DrawerTransitionBase = new SlideInOnTopTransition();
    private _drawer: SideDrawerType;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    ngAfterViewInit() {
        if(this.drawerComponent){
            this._drawer = this.drawerComponent.sideDrawer;
            this._drawer.drawerLocation = SideDrawerLocation.Left;
        }
    }

    ngOnInit() {
        
    }

    public showSlideout() {
        this._drawer.showDrawer();
    }
}