import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
/*
"Property 'nativeElement' does not exist on type 'FormControl'".
'NativeElementInjectorDirective' injects nativeElement to each control,
so we can access it from inside validator for example.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
export class NativeElementInjectorDirective {
    constructor(controlDir, host) {
        this.controlDir = controlDir;
        this.host = host;
    }
    ngOnInit() {
        if (this.controlDir.control) {
            this.controlDir.control['nativeElement'] = this.host.nativeElement;
        }
    }
}
NativeElementInjectorDirective.ɵfac = function NativeElementInjectorDirective_Factory(t) { return new (t || NativeElementInjectorDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NativeElementInjectorDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: NativeElementInjectorDirective, selectors: [["", "ngModel", ""], ["", "formControl", ""], ["", "formControlName", ""]] });
NativeElementInjectorDirective.ctorParameters = () => [
    { type: NgControl },
    { type: ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NativeElementInjectorDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[ngModel], [formControl], [formControlName]'
            }]
    }], function () { return [{ type: ɵngcc1.NgControl }, { type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW50bC10ZWwtaW5wdXQvc3JjL2xpYi9kaXJlY3RpdmVzL25hdGl2ZS1lbGVtZW50LWluamVjdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFLRixNQUFNLE9BQU8sOEJBQThCO0FBQUcsSUFDN0MsWUFDUyxVQUFxQixFQUNyQixJQUFpQztBQUN4QyxRQUZPLGVBQVUsR0FBVixVQUFVLENBQVc7QUFBQyxRQUN0QixTQUFJLEdBQUosSUFBSSxDQUE2QjtBQUMzQyxJQUFJLENBQUM7QUFDTCxJQUFDLFFBQVE7QUFDVCxRQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7QUFDL0IsWUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUN0RSxTQUFHO0FBQ0gsSUFBQyxDQUFDO0FBQ0Y7MERBZEMsU0FBUyxTQUFDLGtCQUNWLCtDQUErQyxpQkFDL0MsUUFBUSxFQUFFLDZDQUE2QyxlQUN2RDsrTUFDSTtBQUFDO0FBQXdELFlBZHJELFNBQVM7QUFBSSxZQURGLFVBQVU7QUFBRzs7Ozs7Ozt1R0FBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLypcblwiUHJvcGVydHkgJ25hdGl2ZUVsZW1lbnQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ0Zvcm1Db250cm9sJ1wiLlxuJ05hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZScgaW5qZWN0cyBuYXRpdmVFbGVtZW50IHRvIGVhY2ggY29udHJvbCxcbnNvIHdlIGNhbiBhY2Nlc3MgaXQgZnJvbSBpbnNpZGUgdmFsaWRhdG9yIGZvciBleGFtcGxlLlxuTW9yZSBhYm91dCB0aGlzIGFwcHJvYWNoIGFuZCByZWFzb25zIGZvciB0aGlzOlxuaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgwMjVcbmh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDA3NTExOS8xNjE3NTkwXG4qL1xuQERpcmVjdGl2ZSh7XG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG5cdHNlbGVjdG9yOiAnW25nTW9kZWxdLCBbZm9ybUNvbnRyb2xdLCBbZm9ybUNvbnRyb2xOYW1lXScsXG59KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29udHJvbERpcjogTmdDb250cm9sLFxuXHRcdHByaXZhdGUgaG9zdDogRWxlbWVudFJlZjxIVE1MRm9ybUVsZW1lbnQ+XG5cdCkge31cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuY29udHJvbERpci5jb250cm9sKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xEaXIuY29udHJvbFsnbmF0aXZlRWxlbWVudCddID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=