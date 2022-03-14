import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { NgxMaskModule } from 'ngx-mask';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ngx-bootstrap/dropdown';
import * as ɵngcc2 from 'ngx-mask';
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
export const ngxMaskModuleForRoot = NgxMaskModule.forRoot();
export class NgxIntlTelInputModule {
}
NgxIntlTelInputModule.ɵfac = function NgxIntlTelInputModule_Factory(t) { return new (t || NgxIntlTelInputModule)(); };
NgxIntlTelInputModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxIntlTelInputModule });
NgxIntlTelInputModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot,
            ngxMaskModuleForRoot
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxIntlTelInputModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    dropdownModuleForRoot,
                    ngxMaskModuleForRoot
                ],
                exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxIntlTelInputModule, { declarations: function () { return [NgxIntlTelInputComponent, NativeElementInjectorDirective]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule, ɵngcc1.BsDropdownModule, ɵngcc2.NgxMaskModule]; }, exports: function () { return [NgxIntlTelInputComponent, NativeElementInjectorDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFFekMsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTBDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQWE1RCxNQUFNLE9BQU8scUJBQXFCO0FBQ2xDO2lEQWJDLFFBQVEsU0FBQyxrQkFDVCxZQUFZLEVBQUUsQ0FBQztJQUF3QixFQUFFLDhCQUE4QixDQUFDLGtCQUN4RSxPQUFPLEVBQUUsc0JBQ1IsWUFBWTttQkFDWixXQUFXLHNCQUNYLG1CQUFtQjtZQUNuQjtPQUFxQjtJQUNyQixvQkFBb0I7U0FDbkIsa0JBRUYsT0FBTztDQUFFLENBQUMsd0JBQXdCLEVBQUU7O1VBQThCLENBQUMsZUFDbkU7Ozs7Ozs7Ozs7Ozs7Ozs7cUxBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdGl2ZS1lbGVtZW50LWluamVjdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJztcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxCc0Ryb3Bkb3duTW9kdWxlPiA9IEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpO1xuZXhwb3J0IGNvbnN0IG5neE1hc2tNb2R1bGVGb3JSb290ID0gTmd4TWFza01vZHVsZS5mb3JSb290KCk7XG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRkcm9wZG93bk1vZHVsZUZvclJvb3QsXG5cdFx0bmd4TWFza01vZHVsZUZvclJvb3RcbiAgXSxcblxuXHRleHBvcnRzOiBbTmd4SW50bFRlbElucHV0Q29tcG9uZW50LCBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbnRsVGVsSW5wdXRNb2R1bGUge1xuXG59XG4iXX0=