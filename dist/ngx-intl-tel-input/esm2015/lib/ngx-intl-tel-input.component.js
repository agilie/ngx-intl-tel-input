/* eslint-disable */
/* tslint-disable */
import * as lpn from 'google-libphonenumber';
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { CountryCode } from './data/country-code';
import { SearchCountryField } from './enums/search-country-field.enum';
import { phoneNumberValidator } from './ngx-intl-tel-input.validator';
import { PhoneNumberFormat } from './enums/phone-number-format.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './data/country-code';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ngx-bootstrap/dropdown';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from './directives/native-element-injector.directive';

const _c0 = ["countryList"];
function NgxIntlTelInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" +", ctx_r0.selectedCountry.dialCode, " ");
} }
function NgxIntlTelInputComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelementStart(1, "input", 18);
    ɵngcc0.ɵɵlistener("ngModelChange", function NgxIntlTelInputComponent_div_6_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.countrySearchText = $event; })("keyup", function NgxIntlTelInputComponent_div_6_div_1_Template_input_keyup_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.searchCountry(); })("click", function NgxIntlTelInputComponent_div_6_div_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r3.countrySearchText)("placeholder", ctx_r3.searchCountryPlaceholder);
} }
function NgxIntlTelInputComponent_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 19);
    ɵngcc0.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_4_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r14); const country_r12 = restoredCtx.$implicit; const ctx_r13 = ɵngcc0.ɵɵnextContext(2); const _r2 = ɵngcc0.ɵɵreference(8); return ctx_r13.onCountrySelect(country_r12, _r2); });
    ɵngcc0.ɵɵelementStart(1, "div", 20);
    ɵngcc0.ɵɵelement(2, "div", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 21);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "span", 22);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("id", country_r12.htmlId + "-preferred");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", country_r12.flagClass);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(country_r12.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("+", country_r12.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 23);
} }
function NgxIntlTelInputComponent_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 24);
    ɵngcc0.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_6_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r17); const country_r15 = restoredCtx.$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(2); const _r2 = ɵngcc0.ɵɵreference(8); return ctx_r16.onCountrySelect(country_r15, _r2); });
    ɵngcc0.ɵɵelementStart(1, "div", 20);
    ɵngcc0.ɵɵelement(2, "div", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 21);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "span", 22);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r15 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("id", country_r15.htmlId);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", country_r15.flagClass);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(country_r15.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("+", country_r15.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, NgxIntlTelInputComponent_div_6_div_1_Template, 2, 2, "div", 11);
    ɵngcc0.ɵɵelementStart(2, "ul", 12, 13);
    ɵngcc0.ɵɵtemplate(4, NgxIntlTelInputComponent_div_6_li_4_Template, 7, 4, "li", 14);
    ɵngcc0.ɵɵtemplate(5, NgxIntlTelInputComponent_div_6_li_5_Template, 1, 0, "li", 15);
    ɵngcc0.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_li_6_Template, 7, 4, "li", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.searchCountryFlag && ctx_r1.searchCountryField);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.preferredCountriesInDropDown);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.preferredCountriesInDropDown == null ? null : ctx_r1.preferredCountriesInDropDown.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.allCountries);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
const ɵ0 = phoneNumberValidator;
export class NgxIntlTelInputComponent {
    constructor(countryCodeData) {
        this.countryCodeData = countryCodeData;
        this.value = '';
        this.preferredCountries = [];
        this.enablePlaceholder = true;
        this.numberFormat = PhoneNumberFormat.International;
        this.cssClass = 'form-control';
        this.onlyCountries = [];
        this.enableAutoCountrySelect = true;
        this.searchCountryFlag = false;
        this.searchCountryField = [SearchCountryField.All];
        this.searchCountryPlaceholder = 'Search Country';
        this.maxLength = '';
        this.selectFirstCountry = true;
        this.phoneValidation = true;
        this.inputId = 'phone';
        this.separateDialCode = false;
        this.defaultPhoneMask = '00 00 00 00';
        this.countryChange = new EventEmitter();
        this.selectedCountry = {
            areaCodes: undefined,
            dialCode: '',
            htmlId: '',
            flagClass: '',
            iso2: '',
            name: '',
            placeHolder: '',
            priority: 0,
        };
        this.phoneNumber = '';
        this.allCountries = [];
        this.preferredCountriesInDropDown = [];
        // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
        this.phoneUtil = lpn.PhoneNumberUtil.getInstance();
        this.disabled = false;
        this.errors = ['Phone number is required.'];
        this.countrySearchText = '';
        this.phoneMask = this.defaultPhoneMask;
        this.onTouched = () => { };
        this.propagateChange = (_) => { };
        // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
        // Add the wrong classes and such
        setTheme('bs4');
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        const selectedISO = changes['selectedCountryISO'];
        if (this.allCountries &&
            selectedISO &&
            selectedISO.currentValue !== selectedISO.previousValue) {
            this.updateSelectedCountry();
        }
        if (changes.preferredCountries) {
            this.updatePreferredCountries();
        }
        this.checkSeparateDialCodeStyle();
    }
    /*
        This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
        Ref: http://codelyzer.com/rules/no-life-cycle-call/
    */
    init() {
        this.fetchCountryData();
        if (this.preferredCountries.length) {
            this.updatePreferredCountries();
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
        }
        if (this.selectFirstCountry) {
            if (this.preferredCountriesInDropDown.length) {
                this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
            }
            else {
                this.setSelectedCountry(this.allCountries[0]);
            }
        }
        this.updateSelectedCountry();
        this.checkSeparateDialCodeStyle();
    }
    setSelectedCountry(country) {
        this.selectedCountry = country;
        this.countryChange.emit(country);
    }
    /**
     * Search country based on country name, iso2, dialCode or all of them.
     */
    searchCountry() {
        if (!this.countrySearchText) {
            this.countryList.nativeElement
                .querySelector('.iti__country-list li')
                .scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            });
            return;
        }
        const countrySearchTextLower = this.countrySearchText.toLowerCase();
        const country = this.allCountries.filter((c) => {
            if (this.searchCountryField.indexOf(SearchCountryField.All) > -1) {
                // Search in all fields
                if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.dialCode.startsWith(this.countrySearchText)) {
                    return c;
                }
            }
            else {
                // Or search by specific SearchCountryField(s)
                if (this.searchCountryField.indexOf(SearchCountryField.Iso2) > -1) {
                    if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.Name) > -1) {
                    if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.DialCode) > -1) {
                    if (c.dialCode.startsWith(this.countrySearchText)) {
                        return c;
                    }
                }
            }
        });
        if (country.length > 0) {
            const el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        }
        this.checkSeparateDialCodeStyle();
    }
    onPhoneNumberChange() {
        let countryCode;
        // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
        if (this.phoneNumber && typeof this.phoneNumber === 'object') {
            const numberObj = this.phoneNumber;
            this.phoneNumber = numberObj.number;
            countryCode = numberObj.countryCode;
        }
        this.value = this.phoneNumber;
        countryCode = countryCode || this.selectedCountry.iso2;
        const number = this.getParsedNumber(this.phoneNumber, countryCode);
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            countryCode =
                number && number.getCountryCode()
                    ? this.getCountryIsoCode(number.getCountryCode(), number)
                    : this.selectedCountry.iso2;
            if (countryCode && countryCode !== this.selectedCountry.iso2) {
                const newCountry = this.allCountries
                    .sort((a, b) => {
                    return a.priority - b.priority;
                })
                    .find((c) => c.iso2 === countryCode);
                if (newCountry) {
                    this.selectedCountry = newCountry;
                }
            }
        }
        countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
        this.checkSeparateDialCodeStyle();
        if (!this.value) {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            this.propagateChange(null);
        }
        else {
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: countryCode.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
    }
    onCountrySelect(country, el) {
        const countryPlaceholder = country.placeHolder.replace(/[0-9]/g, '0');
        if (countryPlaceholder) {
            this.phoneMask = countryPlaceholder;
        }
        this.setSelectedCountry(country);
        this.checkSeparateDialCodeStyle();
        if (this.phoneNumber && this.phoneNumber.length > 0) {
            this.value = this.phoneNumber;
            const number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: this.selectedCountry.iso2.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
        else {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            this.propagateChange(null);
        }
        el.focus();
    }
    onInputKeyPress(event) {
        const allowedChars = /[0-9\+\-\(\)\ ]/;
        const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
        const allowedOtherKeys = [
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'Home',
            'End',
            'Insert',
            'Delete',
            'Backspace',
        ];
        if (!allowedChars.test(event.key) &&
            !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
            !allowedOtherKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (obj === undefined) {
            this.init();
        }
        this.phoneNumber = obj;
        setTimeout(() => {
            this.onPhoneNumberChange();
        }, 1);
    }
    resolvePlaceholder() {
        let placeholder = '';
        if (this.customPlaceholder) {
            placeholder = this.customPlaceholder;
        }
        else if (this.selectedCountry.placeHolder) {
            placeholder = this.selectedCountry.placeHolder;
            if (this.separateDialCode) {
                placeholder = this.removeDialCode(placeholder);
            }
        }
        return placeholder;
    }
    /* --------------------------------- Helpers -------------------------------- */
    /**
     * Returns parse PhoneNumber object.
     * @param phoneNumber string
     * @param countryCode string
     */
    getParsedNumber(phoneNumber, countryCode) {
        let number;
        try {
            number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
        }
        catch (e) { }
        return number;
    }
    /**
     * Adjusts input alignment based on the dial code presentation style.
     */
    checkSeparateDialCodeStyle() {
        if (this.separateDialCode && this.selectedCountry) {
            const cntryCd = this.selectedCountry.dialCode;
            this.separateDialCodeClass =
                'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
        }
        else {
            this.separateDialCodeClass = '';
        }
    }
    /**
     * Cleans dialcode from phone number string.
     * @param phoneNumber string
     */
    removeDialCode(phoneNumber) {
        const number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
        phoneNumber = this.phoneUtil.format(number, lpn.PhoneNumberFormat[this.numberFormat]);
        if (phoneNumber.startsWith('+') && this.separateDialCode) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    }
    /**
     * Sifts through all countries and returns iso code of the primary country
     * based on the number provided.
     * @param countryCode country code in number format
     * @param number PhoneNumber object
     */
    getCountryIsoCode(countryCode, number) {
        // Will use this to match area code from the first numbers
        const rawNumber = number['values_']['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        const countries = this.allCountries.filter((c) => c.dialCode === countryCode.toString());
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        const mainCountry = countries.find((c) => c.areaCodes === undefined);
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        const secondaryCountries = countries.filter((c) => c.areaCodes !== undefined);
        let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
        /*
            Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
            If no matches found, fallback to the main country.
        */
        secondaryCountries.forEach((country) => {
            country.areaCodes.forEach((areaCode) => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.iso2;
                }
            });
        });
        return matchedCountry;
    }
    /**
     * Gets formatted example phone number from phoneUtil.
     * @param countryCode string
     */
    getPhoneNumberPlaceHolder(countryCode) {
        try {
            return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat[this.numberFormat]);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Clearing the list to avoid duplicates (https://github.com/webcat12345/ngx-intl-tel-input/issues/248)
     */
    fetchCountryData() {
        this.allCountries = [];
        this.countryCodeData.allCountries.forEach((c) => {
            const country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: c[4] || undefined,
                htmlId: `iti-0__item-${c[1].toString()}`,
                flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
                placeHolder: '',
            };
            if (this.enablePlaceholder) {
                country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            this.allCountries.push(country);
        });
    }
    /**
     * Populates preferredCountriesInDropDown with prefferred countries.
     */
    updatePreferredCountries() {
        if (this.preferredCountries.length) {
            this.preferredCountriesInDropDown = [];
            this.preferredCountries.forEach((iso2) => {
                const preferredCountry = this.allCountries.filter((c) => {
                    return c.iso2 === iso2;
                });
                this.preferredCountriesInDropDown.push(preferredCountry[0]);
            });
        }
    }
    /**
     * Updates selectedCountry.
     */
    updateSelectedCountry() {
        if (this.selectedCountryISO) {
            this.selectedCountry = this.allCountries.find((c) => {
                return c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase();
            });
            if (this.selectedCountry) {
                if (this.phoneNumber) {
                    this.onPhoneNumberChange();
                }
                else {
                    // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                    // tslint:disable-next-line: no-null-keyword
                    this.propagateChange(null);
                }
            }
        }
    }
}
NgxIntlTelInputComponent.ɵfac = function NgxIntlTelInputComponent_Factory(t) { return new (t || NgxIntlTelInputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CountryCode)); };
NgxIntlTelInputComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxIntlTelInputComponent, selectors: [["ngx-intl-tel-input"]], viewQuery: function NgxIntlTelInputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.countryList = _t.first);
    } }, inputs: { value: "value", preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", numberFormat: "numberFormat", cssClass: "cssClass", onlyCountries: "onlyCountries", enableAutoCountrySelect: "enableAutoCountrySelect", searchCountryFlag: "searchCountryFlag", searchCountryField: "searchCountryField", searchCountryPlaceholder: "searchCountryPlaceholder", maxLength: "maxLength", selectFirstCountry: "selectFirstCountry", phoneValidation: "phoneValidation", inputId: "inputId", separateDialCode: "separateDialCode", defaultPhoneMask: "defaultPhoneMask", customPlaceholder: "customPlaceholder", selectedCountryISO: "selectedCountryISO" }, outputs: { countryChange: "countryChange" }, features: [ɵngcc0.ɵɵProvidersFeature([
            CountryCode,
            {
                provide: NG_VALUE_ACCESSOR,
                // tslint:disable-next-line:no-forward-ref
                useExisting: forwardRef(() => NgxIntlTelInputComponent),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useValue: ɵ0,
                multi: true
            },
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 14, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function NgxIntlTelInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, NgxIntlTelInputComponent_div_4_Template, 2, 1, "div", 4);
        ɵngcc0.ɵɵelement(5, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_Template, 7, 4, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "input", 7, 8);
        ɵngcc0.ɵɵlistener("blur", function NgxIntlTelInputComponent_Template_input_blur_7_listener() { return ctx.onTouched(); })("keypress", function NgxIntlTelInputComponent_Template_input_keypress_7_listener($event) { return ctx.onInputKeyPress($event); })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener($event) { return ctx.phoneNumber = $event; })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener() { return ctx.onPhoneNumberChange(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.separateDialCodeClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c1, ctx.disabled))("isDisabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.separateDialCode);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());
        ɵngcc0.ɵɵattribute("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
    } }, directives: [ɵngcc2.NgClass, ɵngcc3.BsDropdownDirective, ɵngcc3.BsDropdownToggleDirective, ɵngcc2.NgIf, ɵngcc3.BsDropdownMenuDirective, ɵngcc4.DefaultValueAccessor, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc5.NativeElementInjectorDirective, ɵngcc2.NgForOf], styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{white-space:nowrap}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-sm-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-md-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-lg-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-xl-right[_ngcontent-%COMP%]{right:0;left:auto}}.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:0}.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{vertical-align:0}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-header[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[_ngcontent-%COMP%]{display:block;padding:.25rem 1.5rem;color:#212529}", "li.iti__country[_ngcontent-%COMP%]:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}.iti__flag-container.disabled[_ngcontent-%COMP%]{cursor:default!important}.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%]{background:none}.country-dropdown[_ngcontent-%COMP%]{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container[_ngcontent-%COMP%]{position:relative}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list[_ngcontent-%COMP%]{position:relative;border:none}.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%]{padding-left:6px}.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%]{margin-left:6px}.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%]{width:93px}.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:98px}"] });
NgxIntlTelInputComponent.ctorParameters = () => [
    { type: CountryCode }
];
NgxIntlTelInputComponent.propDecorators = {
    value: [{ type: Input }],
    preferredCountries: [{ type: Input }],
    enablePlaceholder: [{ type: Input }],
    customPlaceholder: [{ type: Input }],
    numberFormat: [{ type: Input }],
    cssClass: [{ type: Input }],
    onlyCountries: [{ type: Input }],
    enableAutoCountrySelect: [{ type: Input }],
    searchCountryFlag: [{ type: Input }],
    searchCountryField: [{ type: Input }],
    searchCountryPlaceholder: [{ type: Input }],
    maxLength: [{ type: Input }],
    selectFirstCountry: [{ type: Input }],
    selectedCountryISO: [{ type: Input }],
    phoneValidation: [{ type: Input }],
    inputId: [{ type: Input }],
    separateDialCode: [{ type: Input }],
    defaultPhoneMask: [{ type: Input }],
    countryChange: [{ type: Output }],
    countryList: [{ type: ViewChild, args: ['countryList',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxIntlTelInputComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ngx-intl-tel-input',
                template: "<div class=\"iti iti--allow-dropdown\" [ngClass]=\"separateDialCodeClass\">\n\t<div\n\t\tclass=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{ disabled: disabled }\"\n\t\t[isDisabled]=\"disabled\"\n\t>\n\t\t<div class=\"iti__selected-flag dropdown-toggle\" dropdownToggle>\n\t\t\t<div class=\"iti__flag\" [ngClass]=\"selectedCountry?.flagClass\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\" class=\"selected-dial-code\">\n\t\t\t\t+{{ selectedCountry.dialCode }}\n\t\t\t</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu class=\"dropdown-menu country-dropdown\">\n\t\t\t<div\n\t\t\t\tclass=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\"\n\t\t\t>\n\t\t\t\t<input\n\t\t\t\t\tid=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\" #countryList>\n\t\t\t\t<li\n\t\t\t\t\tclass=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId + '-preferred'\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\" [ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{ country.name }}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{ country.dialCode }}</span>\n\t\t\t\t</li>\n\t\t\t\t<li\n\t\t\t\t\tclass=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"\n\t\t\t\t></li>\n\t\t\t\t<li\n\t\t\t\t\tclass=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\" [ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{ country.name }}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{ country.dialCode }}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<!--\t\t[mask]=\"phoneMask\"-->\n\t<input\n\n\t\ttype=\"tel\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable\n\t/>\n</div>\n",
                providers: [
                    CountryCode,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        // tslint:disable-next-line:no-forward-ref
                        useExisting: forwardRef(() => NgxIntlTelInputComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: ɵ0,
                        multi: true
                    },
                ],
                styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"]
            }]
    }], function () { return [{ type: ɵngcc1.CountryCode }]; }, { value: [{
            type: Input
        }], preferredCountries: [{
            type: Input
        }], enablePlaceholder: [{
            type: Input
        }], numberFormat: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], onlyCountries: [{
            type: Input
        }], enableAutoCountrySelect: [{
            type: Input
        }], searchCountryFlag: [{
            type: Input
        }], searchCountryField: [{
            type: Input
        }], searchCountryPlaceholder: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], selectFirstCountry: [{
            type: Input
        }], phoneValidation: [{
            type: Input
        }], inputId: [{
            type: Input
        }], separateDialCode: [{
            type: Input
        }], defaultPhoneMask: [{
            type: Input
        }], countryChange: [{
            type: Output
        }], customPlaceholder: [{
            type: Input
        }], selectedCountryISO: [{
            type: Input
        }], countryList: [{
            type: ViewChild,
            args: ['countryList']
        }] }); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFFN0MsT0FBTyxFQUNOLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDckUsV0FnQmEsb0JBQW9CO0FBS2pDLE1BQU0sT0FBTyx3QkFBd0I7QUFBRyxJQWlEdkMsWUFBb0IsZUFBNEI7QUFDakQsUUFEcUIsb0JBQWUsR0FBZixlQUFlLENBQWE7QUFBQyxRQWhEeEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixRQUFVLHVCQUFrQixHQUFrQixFQUFFLENBQUM7QUFDakQsUUFBVSxzQkFBaUIsR0FBRyxJQUFJLENBQUM7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RSxJQUFJLHVCQUNYO21CQUNEO01BQ0MsT0FBTyxFQUFFLGFBQWE7dUJBQ3RCLFFBQVEsSUFBc0IsMEJBQzlCLEtBQUssRUFBRSxJQUFJO1FBQ1gsbUJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7MHdHQUNELHExR0FDSTtBQUFDO0FBQWtELFlBNUIvQyxXQUFXO0FBQUc7QUFBRztBQUNQLG9CQTRCakIsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLHNDQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssaUNBQ1YsS0FBSztBQUFLLHVDQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssaUNBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyw4QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssNEJBR1YsTUFBTTtBQUFLLDBCQXVCWCxTQUFTLFNBQUMsYUFBYTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiB0c2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgbHBuIGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRmb3J3YXJkUmVmLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBzZXRUaGVtZSB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb3VudHJ5Q29kZSB9IGZyb20gJy4vZGF0YS9jb3VudHJ5LWNvZGUnO1xuaW1wb3J0IHsgQ291bnRyeUlTTyB9IGZyb20gJy4vZW51bXMvY291bnRyeS1pc28uZW51bSc7XG5pbXBvcnQgeyBTZWFyY2hDb3VudHJ5RmllbGQgfSBmcm9tICcuL2VudW1zL3NlYXJjaC1jb3VudHJ5LWZpZWxkLmVudW0nO1xuaW1wb3J0IHR5cGUgeyBDaGFuZ2VEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NoYW5nZS1kYXRhJztcbmltcG9ydCB0eXBlIHsgQ291bnRyeSB9IGZyb20gJy4vbW9kZWwvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBwaG9uZU51bWJlclZhbGlkYXRvciB9IGZyb20gJy4vbmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvcic7XG5pbXBvcnQgeyBQaG9uZU51bWJlckZvcm1hdCB9IGZyb20gJy4vZW51bXMvcGhvbmUtbnVtYmVyLWZvcm1hdC5lbnVtJztcblxuQENvbXBvbmVudCh7XG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG5cdHNlbGVjdG9yOiAnbmd4LWludGwtdGVsLWlucHV0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2Jvb3RzdHJhcC1kcm9wZG93bi5jc3MnLCAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50LmNzcyddLFxuXHRwcm92aWRlcnM6IFtcblx0XHRDb3VudHJ5Q29kZSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1mb3J3YXJkLXJlZlxuXHRcdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4SW50bFRlbElucHV0Q29tcG9uZW50KSxcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMSURBVE9SUyxcblx0XHRcdHVzZVZhbHVlOiBwaG9uZU51bWJlclZhbGlkYXRvcixcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGxUZWxJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgdmFsdWUgPSAnJztcblx0QElucHV0KCkgcHJlZmVycmVkQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cdEBJbnB1dCgpIGVuYWJsZVBsYWNlaG9sZGVyID0gdHJ1ZTtcblx0QElucHV0KCkgY3VzdG9tUGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgbnVtYmVyRm9ybWF0OiBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0LkludGVybmF0aW9uYWw7XG5cdEBJbnB1dCgpIGNzc0NsYXNzID0gJ2Zvcm0tY29udHJvbCc7XG5cdEBJbnB1dCgpIG9ubHlDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblx0QElucHV0KCkgZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QgPSB0cnVlO1xuXHRASW5wdXQoKSBzZWFyY2hDb3VudHJ5RmxhZyA9IGZhbHNlO1xuXHRASW5wdXQoKSBzZWFyY2hDb3VudHJ5RmllbGQ6IFNlYXJjaENvdW50cnlGaWVsZFtdID0gW1NlYXJjaENvdW50cnlGaWVsZC5BbGxdO1xuXHRASW5wdXQoKSBzZWFyY2hDb3VudHJ5UGxhY2Vob2xkZXIgPSAnU2VhcmNoIENvdW50cnknO1xuXHRASW5wdXQoKSBtYXhMZW5ndGggPSAnJztcblx0QElucHV0KCkgc2VsZWN0Rmlyc3RDb3VudHJ5ID0gdHJ1ZTtcblx0QElucHV0KCkgc2VsZWN0ZWRDb3VudHJ5SVNPOiBDb3VudHJ5SVNPO1xuXHRASW5wdXQoKSBwaG9uZVZhbGlkYXRpb24gPSB0cnVlO1xuXHRASW5wdXQoKSBpbnB1dElkID0gJ3Bob25lJztcblx0QElucHV0KCkgc2VwYXJhdGVEaWFsQ29kZSA9IGZhbHNlO1xuXHRASW5wdXQoKSBkZWZhdWx0UGhvbmVNYXNrID0gJzAwIDAwIDAwIDAwJztcblx0c2VwYXJhdGVEaWFsQ29kZUNsYXNzOiBzdHJpbmc7XG5cblx0QE91dHB1dCgpIHJlYWRvbmx5IGNvdW50cnlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvdW50cnk+KCk7XG5cblx0c2VsZWN0ZWRDb3VudHJ5OiBDb3VudHJ5ID0ge1xuXHRcdGFyZWFDb2RlczogdW5kZWZpbmVkLFxuXHRcdGRpYWxDb2RlOiAnJyxcblx0XHRodG1sSWQ6ICcnLFxuXHRcdGZsYWdDbGFzczogJycsXG5cdFx0aXNvMjogJycsXG5cdFx0bmFtZTogJycsXG5cdFx0cGxhY2VIb2xkZXI6ICcnLFxuXHRcdHByaW9yaXR5OiAwLFxuXHR9O1xuXG5cdHBob25lTnVtYmVyID0gJyc7XG5cdGFsbENvdW50cmllczogQXJyYXk8Q291bnRyeT4gPSBbXTtcblx0cHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bjogQXJyYXk8Q291bnRyeT4gPSBbXTtcblx0Ly8gSGFzIHRvIGJlICdhbnknIHRvIHByZXZlbnQgYSBuZWVkIHRvIGluc3RhbGwgQHR5cGVzL2dvb2dsZS1saWJwaG9uZW51bWJlciBieSB0aGUgcGFja2FnZSB1c2VyLi4uXG5cdHBob25lVXRpbDogYW55ID0gbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuXHRkaXNhYmxlZCA9IGZhbHNlO1xuXHRlcnJvcnM6IEFycmF5PGFueT4gPSBbJ1Bob25lIG51bWJlciBpcyByZXF1aXJlZC4nXTtcblx0Y291bnRyeVNlYXJjaFRleHQgPSAnJztcblx0cHVibGljIHBob25lTWFzayA9IHRoaXMuZGVmYXVsdFBob25lTWFzaztcblxuXHRAVmlld0NoaWxkKCdjb3VudHJ5TGlzdCcpIGNvdW50cnlMaXN0OiBFbGVtZW50UmVmO1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogQ2hhbmdlRGF0YSkgPT4ge307XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb3VudHJ5Q29kZURhdGE6IENvdW50cnlDb2RlKSB7XG5cdFx0Ly8gSWYgdGhpcyBpcyBub3Qgc2V0LCBuZ3gtYm9vdHN0cmFwIHdpbGwgdHJ5IHRvIHVzZSB0aGUgYnMzIENTUyAod2hpY2ggaXMgbm90IHdoYXQgd2UndmUgZW1iZWRkZWQpIGFuZCB3aWxsXG5cdFx0Ly8gQWRkIHRoZSB3cm9uZyBjbGFzc2VzIGFuZCBzdWNoXG5cdFx0c2V0VGhlbWUoJ2JzNCcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJU08gPSBjaGFuZ2VzWydzZWxlY3RlZENvdW50cnlJU08nXTtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFsbENvdW50cmllcyAmJlxuXHRcdFx0c2VsZWN0ZWRJU08gJiZcblx0XHRcdHNlbGVjdGVkSVNPLmN1cnJlbnRWYWx1ZSAhPT0gc2VsZWN0ZWRJU08ucHJldmlvdXNWYWx1ZVxuXHRcdCkge1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3RlZENvdW50cnkoKTtcblx0XHR9XG5cdFx0aWYgKGNoYW5nZXMucHJlZmVycmVkQ291bnRyaWVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVByZWZlcnJlZENvdW50cmllcygpO1xuXHRcdH1cblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cdH1cblxuXHQvKlxuXHRcdFRoaXMgaXMgYSB3cmFwcGVyIG1ldGhvZCB0byBhdm9pZCBjYWxsaW5nIHRoaXMubmdPbkluaXQoKSBpbiB3cml0ZVZhbHVlKCkuXG5cdFx0UmVmOiBodHRwOi8vY29kZWx5emVyLmNvbS9ydWxlcy9uby1saWZlLWN5Y2xlLWNhbGwvXG5cdCovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mZXRjaENvdW50cnlEYXRhKCk7XG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy51cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub25seUNvdW50cmllcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWxsQ291bnRyaWVzID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKChjKSA9PlxuXHRcdFx0XHR0aGlzLm9ubHlDb3VudHJpZXMuaW5jbHVkZXMoYy5pc28yKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuc2VsZWN0Rmlyc3RDb3VudHJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnNldFNlbGVjdGVkQ291bnRyeSh0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd25bMF0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZENvdW50cnkodGhpcy5hbGxDb3VudHJpZXNbMF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblx0fVxuXG5cdHNldFNlbGVjdGVkQ291bnRyeShjb3VudHJ5OiBDb3VudHJ5KSB7XG5cdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5O1xuXHRcdHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KGNvdW50cnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBjb3VudHJ5IGJhc2VkIG9uIGNvdW50cnkgbmFtZSwgaXNvMiwgZGlhbENvZGUgb3IgYWxsIG9mIHRoZW0uXG5cdCAqL1xuXHRwdWJsaWMgc2VhcmNoQ291bnRyeSgpIHtcblx0XHRpZiAoIXRoaXMuY291bnRyeVNlYXJjaFRleHQpIHtcblx0XHRcdHRoaXMuY291bnRyeUxpc3QubmF0aXZlRWxlbWVudFxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLml0aV9fY291bnRyeS1saXN0IGxpJylcblx0XHRcdFx0LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdFx0YmxvY2s6ICduZWFyZXN0Jyxcblx0XHRcdFx0XHRpbmxpbmU6ICduZWFyZXN0Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGNvdW50cnlTZWFyY2hUZXh0TG93ZXIgPSB0aGlzLmNvdW50cnlTZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLkFsbCkgPiAtMSkge1xuXHRcdFx0XHQvLyBTZWFyY2ggaW4gYWxsIGZpZWxkc1xuXHRcdFx0XHRpZiAoYy5pc28yLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xuXHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGMuZGlhbENvZGUuc3RhcnRzV2l0aCh0aGlzLmNvdW50cnlTZWFyY2hUZXh0KSkge1xuXHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBPciBzZWFyY2ggYnkgc3BlY2lmaWMgU2VhcmNoQ291bnRyeUZpZWxkKHMpXG5cdFx0XHRcdGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5Jc28yKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGMuaXNvMi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuTmFtZSkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChjLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLkRpYWxDb2RlKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGMuZGlhbENvZGUuc3RhcnRzV2l0aCh0aGlzLmNvdW50cnlTZWFyY2hUZXh0KSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoY291bnRyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBlbCA9IHRoaXMuY291bnRyeUxpc3QubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnIycgKyBjb3VudHJ5WzBdLmh0bWxJZFxuXHRcdFx0KTtcblx0XHRcdGlmIChlbCkge1xuXHRcdFx0XHRlbC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0XHRcdGJsb2NrOiAnbmVhcmVzdCcsXG5cdFx0XHRcdFx0aW5saW5lOiAnbmVhcmVzdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblx0fVxuXG5cdHB1YmxpYyBvblBob25lTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xuXHRcdGxldCBjb3VudHJ5Q29kZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgdXNlciBzZXRzIHRoZSB2YWx1ZSBwcm9ncmFtYXRpY2FsbHkgYmFzZWQgb24gYSBwZXJzaXN0ZWQgQ2hhbmdlRGF0YSBvYmouXG5cdFx0aWYgKHRoaXMucGhvbmVOdW1iZXIgJiYgdHlwZW9mIHRoaXMucGhvbmVOdW1iZXIgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBudW1iZXJPYmo6IENoYW5nZURhdGEgPSB0aGlzLnBob25lTnVtYmVyO1xuXHRcdFx0dGhpcy5waG9uZU51bWJlciA9IG51bWJlck9iai5udW1iZXI7XG5cdFx0XHRjb3VudHJ5Q29kZSA9IG51bWJlck9iai5jb3VudHJ5Q29kZTtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcblx0XHRjb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlIHx8IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XG5cdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5nZXRQYXJzZWROdW1iZXIodGhpcy5waG9uZU51bWJlciwgY291bnRyeUNvZGUpO1xuXG5cdFx0Ly8gYXV0byBzZWxlY3QgY291bnRyeSBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIChhbmQgYXJlYUNvZGUgaWYgbmVlZGVkKSAoZS5nIHNlbGVjdCBDYW5hZGEgaWYgbnVtYmVyIHN0YXJ0cyB3aXRoICsxIDQxNilcblx0XHRpZiAodGhpcy5lbmFibGVBdXRvQ291bnRyeVNlbGVjdCkge1xuXHRcdFx0Y291bnRyeUNvZGUgPVxuXHRcdFx0XHRudW1iZXIgJiYgbnVtYmVyLmdldENvdW50cnlDb2RlKClcblx0XHRcdFx0XHQ/IHRoaXMuZ2V0Q291bnRyeUlzb0NvZGUobnVtYmVyLmdldENvdW50cnlDb2RlKCksIG51bWJlcilcblx0XHRcdFx0XHQ6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XG5cdFx0XHRpZiAoY291bnRyeUNvZGUgJiYgY291bnRyeUNvZGUgIT09IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIpIHtcblx0XHRcdFx0Y29uc3QgbmV3Q291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzXG5cdFx0XHRcdFx0LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5maW5kKChjKSA9PiBjLmlzbzIgPT09IGNvdW50cnlDb2RlKTtcblx0XHRcdFx0aWYgKG5ld0NvdW50cnkpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IG5ld0NvdW50cnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZSA/IGNvdW50cnlDb2RlIDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcblxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblxuXHRcdGlmICghdGhpcy52YWx1ZSkge1xuXHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1udWxsLWtleXdvcmRcblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBpbnRsTm8gPSBudW1iZXJcblx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcblx0XHRcdFx0OiAnJztcblxuXHRcdFx0Ly8gcGFyc2UgcGhvbmVOdW1iZXIgaWYgc2VwYXJhdGUgZGlhbCBjb2RlIGlzIG5lZWRlZFxuXHRcdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRsTm8pIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50bE5vKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRudW1iZXI6IHRoaXMudmFsdWUsXG5cdFx0XHRcdGludGVybmF0aW9uYWxOdW1iZXI6IGludGxObyxcblx0XHRcdFx0bmF0aW9uYWxOdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuXHRcdFx0XHRcdDogJycsXG5cdFx0XHRcdGUxNjROdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LkUxNjQpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0Y291bnRyeUNvZGU6IGNvdW50cnlDb2RlLnRvVXBwZXJDYXNlKCksXG5cdFx0XHRcdGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbkNvdW50cnlTZWxlY3QoY291bnRyeTogQ291bnRyeSwgZWwpOiB2b2lkIHtcblx0XHRjb25zdCBjb3VudHJ5UGxhY2Vob2xkZXIgPSBjb3VudHJ5LnBsYWNlSG9sZGVyLnJlcGxhY2UoL1swLTldL2csICcwJyk7XG5cdFx0aWYoY291bnRyeVBsYWNlaG9sZGVyKSB7XG5cdFx0XHR0aGlzLnBob25lTWFzayA9IGNvdW50cnlQbGFjZWhvbGRlcjtcblx0XHR9XG5cdFx0dGhpcy5zZXRTZWxlY3RlZENvdW50cnkoY291bnRyeSk7XG5cblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cblx0XHRpZiAodGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lTnVtYmVyLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLnBob25lTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnVtYmVyID0gdGhpcy5nZXRQYXJzZWROdW1iZXIoXG5cdFx0XHRcdHRoaXMucGhvbmVOdW1iZXIsXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzJcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBpbnRsTm8gPSBudW1iZXJcblx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcblx0XHRcdFx0OiAnJztcblx0XHRcdC8vIHBhcnNlIHBob25lTnVtYmVyIGlmIHNlcGFyYXRlIGRpYWwgY29kZSBpcyBuZWVkZWRcblx0XHRcdGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50bE5vKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLnJlbW92ZURpYWxDb2RlKGludGxObyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHtcblx0XHRcdFx0bnVtYmVyOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRpbnRlcm5hdGlvbmFsTnVtYmVyOiBpbnRsTm8sXG5cdFx0XHRcdG5hdGlvbmFsTnVtYmVyOiBudW1iZXJcblx0XHRcdFx0XHQ/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcblx0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0XHRlMTY0TnVtYmVyOiBudW1iZXJcblx0XHRcdFx0XHQ/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5FMTY0KVxuXHRcdFx0XHRcdDogJycsXG5cdFx0XHRcdGNvdW50cnlDb2RlOiB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yLnRvVXBwZXJDYXNlKCksXG5cdFx0XHRcdGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBSZWFzb246IGF2b2lkIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDM1ODEzMy8xNjE3NTkwXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW51bGwta2V5d29yZFxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UobnVsbCk7XG5cdFx0fVxuXG5cdFx0ZWwuZm9jdXMoKTtcblx0fVxuXG5cdHB1YmxpYyBvbklucHV0S2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcblx0XHRjb25zdCBhbGxvd2VkQ2hhcnMgPSAvWzAtOVxcK1xcLVxcKFxcKVxcIF0vO1xuXHRcdGNvbnN0IGFsbG93ZWRDdHJsQ2hhcnMgPSAvW2F4Y3ZdLzsgLy8gQWxsb3dzIGNvcHktcGFzdGluZ1xuXHRcdGNvbnN0IGFsbG93ZWRPdGhlcktleXMgPSBbXG5cdFx0XHQnQXJyb3dMZWZ0Jyxcblx0XHRcdCdBcnJvd1VwJyxcblx0XHRcdCdBcnJvd1JpZ2h0Jyxcblx0XHRcdCdBcnJvd0Rvd24nLFxuXHRcdFx0J0hvbWUnLFxuXHRcdFx0J0VuZCcsXG5cdFx0XHQnSW5zZXJ0Jyxcblx0XHRcdCdEZWxldGUnLFxuXHRcdFx0J0JhY2tzcGFjZScsXG5cdFx0XTtcblxuXHRcdGlmIChcblx0XHRcdCFhbGxvd2VkQ2hhcnMudGVzdChldmVudC5rZXkpICYmXG5cdFx0XHQhKGV2ZW50LmN0cmxLZXkgJiYgYWxsb3dlZEN0cmxDaGFycy50ZXN0KGV2ZW50LmtleSkpICYmXG5cdFx0XHQhYWxsb3dlZE90aGVyS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpXG5cdFx0KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXHR9XG5cblx0d3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuXHRcdGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0fVxuXHRcdHRoaXMucGhvbmVOdW1iZXIgPSBvYmo7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLm9uUGhvbmVOdW1iZXJDaGFuZ2UoKTtcblx0XHR9LCAxKTtcblx0fVxuXG5cdHJlc29sdmVQbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuXHRcdGxldCBwbGFjZWhvbGRlciA9ICcnO1xuXHRcdGlmICh0aGlzLmN1c3RvbVBsYWNlaG9sZGVyKSB7XG5cdFx0XHRwbGFjZWhvbGRlciA9IHRoaXMuY3VzdG9tUGxhY2Vob2xkZXI7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkQ291bnRyeS5wbGFjZUhvbGRlcikge1xuXHRcdFx0cGxhY2Vob2xkZXIgPSB0aGlzLnNlbGVjdGVkQ291bnRyeS5wbGFjZUhvbGRlcjtcblx0XHRcdGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUpIHtcblx0XHRcdFx0cGxhY2Vob2xkZXIgPSB0aGlzLnJlbW92ZURpYWxDb2RlKHBsYWNlaG9sZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBsYWNlaG9sZGVyO1xuXHR9XG5cblx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0LyoqXG5cdCAqIFJldHVybnMgcGFyc2UgUGhvbmVOdW1iZXIgb2JqZWN0LlxuXHQgKiBAcGFyYW0gcGhvbmVOdW1iZXIgc3RyaW5nXG5cdCAqIEBwYXJhbSBjb3VudHJ5Q29kZSBzdHJpbmdcblx0ICovXG5cdHByaXZhdGUgZ2V0UGFyc2VkTnVtYmVyKFxuXHRcdHBob25lTnVtYmVyOiBzdHJpbmcsXG5cdFx0Y291bnRyeUNvZGU6IHN0cmluZ1xuXHQpOiBscG4uUGhvbmVOdW1iZXIge1xuXHRcdGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UocGhvbmVOdW1iZXIsIGNvdW50cnlDb2RlLnRvVXBwZXJDYXNlKCkpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0cmV0dXJuIG51bWJlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGp1c3RzIGlucHV0IGFsaWdubWVudCBiYXNlZCBvbiB0aGUgZGlhbCBjb2RlIHByZXNlbnRhdGlvbiBzdHlsZS5cblx0ICovXG5cdHByaXZhdGUgY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKSB7XG5cdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiB0aGlzLnNlbGVjdGVkQ291bnRyeSkge1xuXHRcdFx0Y29uc3QgY250cnlDZCA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlO1xuXHRcdFx0dGhpcy5zZXBhcmF0ZURpYWxDb2RlQ2xhc3MgPVxuXHRcdFx0XHQnc2VwYXJhdGUtZGlhbC1jb2RlIGl0aS1zZGMtJyArIChjbnRyeUNkLmxlbmd0aCArIDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlcGFyYXRlRGlhbENvZGVDbGFzcyA9ICcnO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhbnMgZGlhbGNvZGUgZnJvbSBwaG9uZSBudW1iZXIgc3RyaW5nLlxuXHQgKiBAcGFyYW0gcGhvbmVOdW1iZXIgc3RyaW5nXG5cdCAqL1xuXHRwcml2YXRlIHJlbW92ZURpYWxDb2RlKHBob25lTnVtYmVyOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKHBob25lTnVtYmVyLCB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yKTtcblx0XHRwaG9uZU51bWJlciA9IHRoaXMucGhvbmVVdGlsLmZvcm1hdChcblx0XHRcdG51bWJlcixcblx0XHRcdGxwbi5QaG9uZU51bWJlckZvcm1hdFt0aGlzLm51bWJlckZvcm1hdF1cblx0XHQpO1xuXHRcdGlmIChwaG9uZU51bWJlci5zdGFydHNXaXRoKCcrJykgJiYgdGhpcy5zZXBhcmF0ZURpYWxDb2RlKSB7XG5cdFx0XHRwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cihwaG9uZU51bWJlci5pbmRleE9mKCcgJykgKyAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBob25lTnVtYmVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNpZnRzIHRocm91Z2ggYWxsIGNvdW50cmllcyBhbmQgcmV0dXJucyBpc28gY29kZSBvZiB0aGUgcHJpbWFyeSBjb3VudHJ5XG5cdCAqIGJhc2VkIG9uIHRoZSBudW1iZXIgcHJvdmlkZWQuXG5cdCAqIEBwYXJhbSBjb3VudHJ5Q29kZSBjb3VudHJ5IGNvZGUgaW4gbnVtYmVyIGZvcm1hdFxuXHQgKiBAcGFyYW0gbnVtYmVyIFBob25lTnVtYmVyIG9iamVjdFxuXHQgKi9cblx0cHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcblx0XHRjb3VudHJ5Q29kZTogbnVtYmVyLFxuXHRcdG51bWJlcjogbHBuLlBob25lTnVtYmVyXG5cdCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0Ly8gV2lsbCB1c2UgdGhpcyB0byBtYXRjaCBhcmVhIGNvZGUgZnJvbSB0aGUgZmlyc3QgbnVtYmVyc1xuXHRcdGNvbnN0IHJhd051bWJlciA9IG51bWJlclsndmFsdWVzXyddWycyJ10udG9TdHJpbmcoKTtcblx0XHQvLyBMaXN0IG9mIGFsbCBjb3VudHJpZXMgd2l0aCBjb3VudHJ5Q29kZSAoY2FuIGJlIG1vcmUgdGhhbiBvbmUuIGUueC4gVVMsIENBLCBETywgUFIgYWxsIGhhdmUgKzEgY291bnRyeUNvZGUpXG5cdFx0Y29uc3QgY291bnRyaWVzID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKFxuXHRcdFx0KGMpID0+IGMuZGlhbENvZGUgPT09IGNvdW50cnlDb2RlLnRvU3RyaW5nKClcblx0XHQpO1xuXHRcdC8vIE1haW4gY291bnRyeSBpcyB0aGUgY291bnRyeSwgd2hpY2ggaGFzIG5vIGFyZWFDb2RlcyBzcGVjaWZpZWQgaW4gY291bnRyeS1jb2RlLnRzIGZpbGUuXG5cdFx0Y29uc3QgbWFpbkNvdW50cnkgPSBjb3VudHJpZXMuZmluZCgoYykgPT4gYy5hcmVhQ29kZXMgPT09IHVuZGVmaW5lZCk7XG5cdFx0Ly8gU2Vjb25kYXJ5IGNvdW50cmllcyBhcmUgYWxsIGNvdW50cmllcywgd2hpY2ggaGF2ZSBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxuXHRcdGNvbnN0IHNlY29uZGFyeUNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIoXG5cdFx0XHQoYykgPT4gYy5hcmVhQ29kZXMgIT09IHVuZGVmaW5lZFxuXHRcdCk7XG5cdFx0bGV0IG1hdGNoZWRDb3VudHJ5ID0gbWFpbkNvdW50cnkgPyBtYWluQ291bnRyeS5pc28yIDogdW5kZWZpbmVkO1xuXG5cdFx0Lypcblx0XHRcdEl0ZXJhdGUgb3ZlciBlYWNoIHNlY29uZGFyeSBjb3VudHJ5IGFuZCBjaGVjayBpZiBuYXRpb25hbE51bWJlciBzdGFydHMgd2l0aCBhbnkgb2YgYXJlYUNvZGVzIGF2YWlsYWJsZS5cblx0XHRcdElmIG5vIG1hdGNoZXMgZm91bmQsIGZhbGxiYWNrIHRvIHRoZSBtYWluIGNvdW50cnkuXG5cdFx0Ki9cblx0XHRzZWNvbmRhcnlDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xuXHRcdFx0Y291bnRyeS5hcmVhQ29kZXMuZm9yRWFjaCgoYXJlYUNvZGUpID0+IHtcblx0XHRcdFx0aWYgKHJhd051bWJlci5zdGFydHNXaXRoKGFyZWFDb2RlKSkge1xuXHRcdFx0XHRcdG1hdGNoZWRDb3VudHJ5ID0gY291bnRyeS5pc28yO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBtYXRjaGVkQ291bnRyeTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGZvcm1hdHRlZCBleGFtcGxlIHBob25lIG51bWJlciBmcm9tIHBob25lVXRpbC5cblx0ICogQHBhcmFtIGNvdW50cnlDb2RlIHN0cmluZ1xuXHQgKi9cblx0cHJvdGVjdGVkIGdldFBob25lTnVtYmVyUGxhY2VIb2xkZXIoY291bnRyeUNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLnBob25lVXRpbC5mb3JtYXQoXG5cdFx0XHRcdHRoaXMucGhvbmVVdGlsLmdldEV4YW1wbGVOdW1iZXIoY291bnRyeUNvZGUpLFxuXHRcdFx0XHRscG4uUGhvbmVOdW1iZXJGb3JtYXRbdGhpcy5udW1iZXJGb3JtYXRdXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhcmluZyB0aGUgbGlzdCB0byBhdm9pZCBkdXBsaWNhdGVzIChodHRwczovL2dpdGh1Yi5jb20vd2ViY2F0MTIzNDUvbmd4LWludGwtdGVsLWlucHV0L2lzc3Vlcy8yNDgpXG5cdCAqL1xuXHRwcm90ZWN0ZWQgZmV0Y2hDb3VudHJ5RGF0YSgpOiB2b2lkIHtcblx0XHR0aGlzLmFsbENvdW50cmllcyA9IFtdO1xuXG5cdFx0dGhpcy5jb3VudHJ5Q29kZURhdGEuYWxsQ291bnRyaWVzLmZvckVhY2goKGMpID0+IHtcblx0XHRcdGNvbnN0IGNvdW50cnk6IENvdW50cnkgPSB7XG5cdFx0XHRcdG5hbWU6IGNbMF0udG9TdHJpbmcoKSxcblx0XHRcdFx0aXNvMjogY1sxXS50b1N0cmluZygpLFxuXHRcdFx0XHRkaWFsQ29kZTogY1syXS50b1N0cmluZygpLFxuXHRcdFx0XHRwcmlvcml0eTogK2NbM10gfHwgMCxcblx0XHRcdFx0YXJlYUNvZGVzOiAoY1s0XSBhcyBzdHJpbmdbXSkgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRodG1sSWQ6IGBpdGktMF9faXRlbS0ke2NbMV0udG9TdHJpbmcoKX1gLFxuXHRcdFx0XHRmbGFnQ2xhc3M6IGBpdGlfXyR7Y1sxXS50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKCl9YCxcblx0XHRcdFx0cGxhY2VIb2xkZXI6ICcnLFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKHRoaXMuZW5hYmxlUGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0Y291bnRyeS5wbGFjZUhvbGRlciA9IHRoaXMuZ2V0UGhvbmVOdW1iZXJQbGFjZUhvbGRlcihcblx0XHRcdFx0XHRjb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmFsbENvdW50cmllcy5wdXNoKGNvdW50cnkpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBvcHVsYXRlcyBwcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duIHdpdGggcHJlZmZlcnJlZCBjb3VudHJpZXMuXG5cdCAqL1xuXHRwcml2YXRlIHVwZGF0ZVByZWZlcnJlZENvdW50cmllcygpIHtcblx0XHRpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24gPSBbXTtcblx0XHRcdHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmZvckVhY2goKGlzbzIpID0+IHtcblx0XHRcdFx0Y29uc3QgcHJlZmVycmVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjLmlzbzIgPT09IGlzbzI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bi5wdXNoKHByZWZlcnJlZENvdW50cnlbMF0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgc2VsZWN0ZWRDb3VudHJ5LlxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVTZWxlY3RlZENvdW50cnkoKSB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5SVNPKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbmQoKGMpID0+IHtcblx0XHRcdFx0cmV0dXJuIGMuaXNvMi50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnNlbGVjdGVkQ291bnRyeUlTTy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZENvdW50cnkpIHtcblx0XHRcdFx0aWYgKHRoaXMucGhvbmVOdW1iZXIpIHtcblx0XHRcdFx0XHR0aGlzLm9uUGhvbmVOdW1iZXJDaGFuZ2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBSZWFzb246IGF2b2lkIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDM1ODEzMy8xNjE3NTkwXG5cdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1udWxsLWtleXdvcmRcblx0XHRcdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19