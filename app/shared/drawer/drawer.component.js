"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var SideDrawerComponent = (function () {
    function SideDrawerComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    SideDrawerComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    SideDrawerComponent.prototype.ngOnInit = function () {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    };
    Object.defineProperty(SideDrawerComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    SideDrawerComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    SideDrawerComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SideDrawerComponent.prototype, "drawerComponent", void 0);
    SideDrawerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "side-drawer",
            templateUrl: 'drawer.component.html',
            styleUrls: ['drawer.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], SideDrawerComponent);
    return SideDrawerComponent;
}());
exports.SideDrawerComponent = SideDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFJL0Ysa0VBQWdHO0FBU2hHO0lBR0ksNkJBQW9CLG1CQUFzQztRQUF0Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO0lBQzFELENBQUM7SUFLRCw2Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLDZSQUE2UixDQUFDO0lBQ3pULENBQUM7SUFFRCxzQkFBSSxnREFBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FKQTtJQU1NLHdDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sOENBQWdCLEdBQXZCO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBMUJrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7Z0VBQUM7SUFOekUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUkyQyx3QkFBaUI7T0FIakQsbUJBQW1CLENBaUMvQjtJQUFELDBCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwic2lkZS1kcmF3ZXJcIixcclxuICAgIHRlbXBsYXRlVXJsOiAnZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydkcmF3ZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udGVudFRleHQgPSBcIlNpZGVEcmF3ZXIgZm9yIE5hdGl2ZVNjcmlwdCBjYW4gYmUgZWFzaWx5IHNldHVwIGluIHRoZSBIVE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIHRrRHJhd2VyQ29udGVudCBhbmQgdGtNYWluQ29udGVudC4gVGhlIGNvbXBvbmVudCBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluQ29udGVudFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1haW5Db250ZW50VGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH1cclxufSJdfQ==