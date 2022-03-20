import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
// import { NgxMaskModule } from 'ngx-mask';
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
//export const ngxMaskModuleForRoot = NgxMaskModule.forRoot();
export class NgxIntlTelInputModule {
}
NgxIntlTelInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    dropdownModuleForRoot,
                ],
                exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSw0Q0FBNEM7QUFFNUMsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTBDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3ZHLDhEQUE4RDtBQWE5RCxNQUFNLE9BQU8scUJBQXFCOzs7WUFaakMsUUFBUSxTQUFDO2dCQUNULFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO2dCQUN4RSxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUVwQjtnQkFFRixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQzthQUNuRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdGl2ZS1lbGVtZW50LWluamVjdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJztcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxCc0Ryb3Bkb3duTW9kdWxlPiA9IEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpO1xuLy9leHBvcnQgY29uc3Qgbmd4TWFza01vZHVsZUZvclJvb3QgPSBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKTtcbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW05neEludGxUZWxJbnB1dENvbXBvbmVudCwgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlXSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdGRyb3Bkb3duTW9kdWxlRm9yUm9vdCxcblx0Ly9cdG5neE1hc2tNb2R1bGVGb3JSb290LFxuICBdLFxuXG5cdGV4cG9ydHM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGxUZWxJbnB1dE1vZHVsZSB7XG5cbn1cbiJdfQ==