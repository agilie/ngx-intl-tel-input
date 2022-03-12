/* eslint-disable */
/* tslint-disable */
import * as lpn from 'google-libphonenumber';
/*
We use "control: any" instead of "control: FormControl" to silence:
"Property 'nativeElement' does not exist on type 'FormControl'".
This happens because I've expanded control with nativeElement via
'NativeElementInjectorDirective' to get an access to the element.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
export const phoneNumberValidator = (control) => {
    if (!control.value) {
        return;
    }
    // Find <input> inside injected nativeElement and get its "id".
    const el = control.nativeElement;
    const inputBox = el
        ? el.querySelector('input[type="tel"]')
        : undefined;
    if (inputBox) {
        const id = inputBox.id;
        const isCheckValidation = inputBox.getAttribute('validation');
        if (isCheckValidation === 'true') {
            const isRequired = control.errors && control.errors.required === true;
            const error = { validatePhoneNumber: { valid: false } };
            inputBox.setCustomValidity('Invalid field.');
            let number;
            try {
                number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
            }
            catch (e) {
                if (isRequired === true) {
                    return error;
                }
                else {
                    inputBox.setCustomValidity('');
                }
            }
            if (control.value) {
                if (!number) {
                    return error;
                }
                else {
                    if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
            }
        }
        else if (isCheckValidation === 'false') {
            inputBox.setCustomValidity('');
            control.clearValidators();
        }
    }
    return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUVwQixPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBRTdDOzs7Ozs7OztFQVFFO0FBQ0YsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFZLEVBQUUsRUFBRTtJQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNuQixPQUFPO0tBQ1A7SUFDRCwrREFBK0Q7SUFDL0QsTUFBTSxFQUFFLEdBQWdCLE9BQU8sQ0FBQyxhQUE0QixDQUFDO0lBQzdELE1BQU0sUUFBUSxHQUFxQixFQUFFO1FBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDYixJQUFJLFFBQVEsRUFBRTtRQUNiLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksaUJBQWlCLEtBQUssTUFBTSxFQUFFO1lBQ2pDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUV4RCxRQUFRLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU3QyxJQUFJLE1BQXVCLENBQUM7WUFFNUIsSUFBSTtnQkFDSCxNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDekIsQ0FBQzthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO29CQUN4QixPQUFPLEtBQUssQ0FBQztpQkFDYjtxQkFBTTtvQkFDTixRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQy9CO2FBQ0Q7WUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1osT0FBTyxLQUFLLENBQUM7aUJBQ2I7cUJBQU07b0JBQ04sSUFDQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLENBQ3hELE1BQU0sRUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDekIsRUFDQTt3QkFDRCxPQUFPLEtBQUssQ0FBQztxQkFDYjt5QkFBTTt3QkFDTixRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQy9CO2lCQUNEO2FBQ0Q7U0FDRDthQUFNLElBQUksaUJBQWlCLEtBQUssT0FBTyxFQUFFO1lBQ3pDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUvQixPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7S0FDRDtJQUNELE9BQU87QUFDUixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogdHNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0ICogYXMgbHBuIGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XG5cbi8qXG5XZSB1c2UgXCJjb250cm9sOiBhbnlcIiBpbnN0ZWFkIG9mIFwiY29udHJvbDogRm9ybUNvbnRyb2xcIiB0byBzaWxlbmNlOlxuXCJQcm9wZXJ0eSAnbmF0aXZlRWxlbWVudCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnRm9ybUNvbnRyb2wnXCIuXG5UaGlzIGhhcHBlbnMgYmVjYXVzZSBJJ3ZlIGV4cGFuZGVkIGNvbnRyb2wgd2l0aCBuYXRpdmVFbGVtZW50IHZpYVxuJ05hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZScgdG8gZ2V0IGFuIGFjY2VzcyB0byB0aGUgZWxlbWVudC5cbk1vcmUgYWJvdXQgdGhpcyBhcHByb2FjaCBhbmQgcmVhc29ucyBmb3IgdGhpczpcbmh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MDI1XG5odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQwNzUxMTkvMTYxNzU5MFxuKi9cbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlclZhbGlkYXRvciA9IChjb250cm9sOiBhbnkpID0+IHtcblx0aWYgKCFjb250cm9sLnZhbHVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIEZpbmQgPGlucHV0PiBpbnNpZGUgaW5qZWN0ZWQgbmF0aXZlRWxlbWVudCBhbmQgZ2V0IGl0cyBcImlkXCIuXG5cdGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGNvbnRyb2wubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblx0Y29uc3QgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQgPSBlbFxuXHRcdD8gZWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRlbFwiXScpXG5cdFx0OiB1bmRlZmluZWQ7XG5cdGlmIChpbnB1dEJveCkge1xuXHRcdGNvbnN0IGlkID0gaW5wdXRCb3guaWQ7XG5cdFx0Y29uc3QgaXNDaGVja1ZhbGlkYXRpb24gPSBpbnB1dEJveC5nZXRBdHRyaWJ1dGUoJ3ZhbGlkYXRpb24nKTtcblx0XHRpZiAoaXNDaGVja1ZhbGlkYXRpb24gPT09ICd0cnVlJykge1xuXHRcdFx0Y29uc3QgaXNSZXF1aXJlZCA9IGNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkID09PSB0cnVlO1xuXHRcdFx0Y29uc3QgZXJyb3IgPSB7IHZhbGlkYXRlUGhvbmVOdW1iZXI6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcblxuXHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJ0ludmFsaWQgZmllbGQuJyk7XG5cblx0XHRcdGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlcjtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bnVtYmVyID0gbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLnBhcnNlKFxuXHRcdFx0XHRcdGNvbnRyb2wudmFsdWUubnVtYmVyLFxuXHRcdFx0XHRcdGNvbnRyb2wudmFsdWUuY291bnRyeUNvZGVcblx0XHRcdFx0KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aWYgKGlzUmVxdWlyZWQgPT09IHRydWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb250cm9sLnZhbHVlKSB7XG5cdFx0XHRcdGlmICghbnVtYmVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVycm9yO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdCFscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcblx0XHRcdFx0XHRcdFx0bnVtYmVyLFxuXHRcdFx0XHRcdFx0XHRjb250cm9sLnZhbHVlLmNvdW50cnlDb2RlXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGlzQ2hlY2tWYWxpZGF0aW9uID09PSAnZmFsc2UnKSB7XG5cdFx0XHRpbnB1dEJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cblx0XHRcdGNvbnRyb2wuY2xlYXJWYWxpZGF0b3JzKCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybjtcbn07XG4iXX0=