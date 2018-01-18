import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-pro-ui/sidedrawer/angular';
import { DrawerTransitionBase, SideDrawerLocation, SlideInOnTopTransition } from 'nativescript-pro-ui/sidedrawer';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    private _sideDrawerTransition: DrawerTransitionBase = new SlideInOnTopTransition();
    private _drawer: SideDrawerType;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    ngAfterViewInit() {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = SideDrawerLocation.Left;
    }
    
    test(): void {
        alert('Testing');
    }

    public toggle() {
        this._drawer.toggleDrawerState();
    }
}