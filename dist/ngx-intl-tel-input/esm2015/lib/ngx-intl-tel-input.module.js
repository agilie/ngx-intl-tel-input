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
export const ngxMaskModuleForRoot = NgxMaskModule.forRoot();
export class NgxIntlTelInputModule {
}
NgxIntlTelInputModule.ɵfac = function NgxIntlTelInputModule_Factory(t) { return new (t || NgxIntlTelInputModule)(); };
NgxIntlTelInputModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxIntlTelInputModule });
NgxIntlTelInputModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot,
            ngxMaskModuleForRoot,
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
                    ngxMaskModuleForRoot,
                ],
                exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxIntlTelInputModule, { declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.BsDropdownModule, i2.NgxMaskModule], exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRXpDLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUEwQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2RyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7QUFhNUQsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjt1RUFBckIscUJBQXFCOzJFQVZ4QjtZQUNSLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixvQkFBb0I7U0FDbkI7dUZBSVUscUJBQXFCO2NBWmpDLFFBQVE7ZUFBQztnQkFDVCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztnQkFDeEUsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNuQjtnQkFFRixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQzthQUNuRTs7d0ZBQ1kscUJBQXFCLG1CQVhsQix3QkFBd0IsRUFBRSw4QkFBOEIsYUFFdEUsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUIsb0RBS1Ysd0JBQXdCLEVBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neEludGxUZWxJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25Nb2R1bGVGb3JSb290OiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJzRHJvcGRvd25Nb2R1bGU+ID0gQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCk7XG5leHBvcnQgY29uc3Qgbmd4TWFza01vZHVsZUZvclJvb3QgPSBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKTtcbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW05neEludGxUZWxJbnB1dENvbXBvbmVudCwgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlXSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdGRyb3Bkb3duTW9kdWxlRm9yUm9vdCxcblx0XHRuZ3hNYXNrTW9kdWxlRm9yUm9vdCxcbiAgXSxcblxuXHRleHBvcnRzOiBbTmd4SW50bFRlbElucHV0Q29tcG9uZW50LCBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbnRsVGVsSW5wdXRNb2R1bGUge1xuXG59XG4iXX0=