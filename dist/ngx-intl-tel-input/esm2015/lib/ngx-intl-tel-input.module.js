import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { NgxMaskModule } from 'ngx-mask';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/dropdown";
import * as i2 from "ngx-mask";
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
export class NgxIntlTelInputModule {
}
NgxIntlTelInputModule.ɵfac = function NgxIntlTelInputModule_Factory(t) { return new (t || NgxIntlTelInputModule)(); };
NgxIntlTelInputModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxIntlTelInputModule });
NgxIntlTelInputModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot,
            NgxMaskModule.forRoot(),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxIntlTelInputModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    dropdownModuleForRoot,
                    NgxMaskModule.forRoot(),
                ],
                exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxIntlTelInputModule, { declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.BsDropdownModule, i2.NgxMaskModule], exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRXpDLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUEwQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQWN2RyxNQUFNLE9BQU8scUJBQXFCOzswRkFBckIscUJBQXFCO3VFQUFyQixxQkFBcUI7MkVBVnhCO1lBQ1IsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7U0FDdEI7dUZBSVUscUJBQXFCO2NBWmpDLFFBQVE7ZUFBQztnQkFDVCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztnQkFDeEUsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTtpQkFDdEI7Z0JBRUYsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLENBQUM7YUFDbkU7O3dGQUNZLHFCQUFxQixtQkFYbEIsd0JBQXdCLEVBQUUsOEJBQThCLGFBRXRFLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CLG9EQUtWLHdCQUF3QixFQUFFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdGl2ZS1lbGVtZW50LWluamVjdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJztcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxCc0Ryb3Bkb3duTW9kdWxlPiA9IEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRkcm9wZG93bk1vZHVsZUZvclJvb3QsXG5cdFx0Tmd4TWFza01vZHVsZS5mb3JSb290KCksXG4gIF0sXG5cblx0ZXhwb3J0czogW05neEludGxUZWxJbnB1dENvbXBvbmVudCwgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4SW50bFRlbElucHV0TW9kdWxlIHtcblxufVxuIl19