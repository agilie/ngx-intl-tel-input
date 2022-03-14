import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
// import { NgxMaskModule } from 'ngx-mask';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ngx-bootstrap/dropdown';
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
//export const ngxMaskModuleForRoot = NgxMaskModule.forRoot();
export class NgxIntlTelInputModule {
}
NgxIntlTelInputModule.ɵfac = function NgxIntlTelInputModule_Factory(t) { return new (t || NgxIntlTelInputModule)(); };
NgxIntlTelInputModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxIntlTelInputModule });
NgxIntlTelInputModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot,
            //	ngxMaskModuleForRoot,
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
                    //	ngxMaskModuleForRoot,
                ],
                exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxIntlTelInputModule, { declarations: function () { return [NgxIntlTelInputComponent, NativeElementInjectorDirective]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule, ɵngcc1.BsDropdownModule]; }, exports: function () { return [NgxIntlTelInputComponent, NativeElementInjectorDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLDRDQUE0Qzs7O0FBRTVDLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUEwQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2Ryw4REFBOEQ7QUFhOUQsTUFBTSxPQUFPLHFCQUFxQjtBQUNsQztpREFiQyxRQUFRLFNBQUMsa0JBQ1QsWUFBWSxFQUFFLENBQUM7SUFBd0IsRUFBRSw4QkFBOEIsQ0FBQyxrQkFDeEUsT0FBTyxFQUFFLHNCQUNSLFlBQVk7bUJBQ1osV0FBVyxzQkFDWCxtQkFBbUI7WUFDbkI7T0FBcUI7SUFDdEIsd0JBQXdCO2FBQ3RCLGtCQUVGO0dBQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFOztVQUE4QixDQUFDLGVBQ25FOzs7Ozs7Ozs7Ozs7Ozs7OytKQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCc0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kcm9wZG93bic7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uYXRpdmUtZWxlbWVudC1pbmplY3Rvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4SW50bFRlbElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bk1vZHVsZUZvclJvb3Q6IE1vZHVsZVdpdGhQcm92aWRlcnM8QnNEcm9wZG93bk1vZHVsZT4gPSBCc0Ryb3Bkb3duTW9kdWxlLmZvclJvb3QoKTtcbi8vZXhwb3J0IGNvbnN0IG5neE1hc2tNb2R1bGVGb3JSb290ID0gTmd4TWFza01vZHVsZS5mb3JSb290KCk7XG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRkcm9wZG93bk1vZHVsZUZvclJvb3QsXG5cdC8vXHRuZ3hNYXNrTW9kdWxlRm9yUm9vdCxcbiAgXSxcblxuXHRleHBvcnRzOiBbTmd4SW50bFRlbElucHV0Q29tcG9uZW50LCBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbnRsVGVsSW5wdXRNb2R1bGUge1xuXG59XG4iXX0=