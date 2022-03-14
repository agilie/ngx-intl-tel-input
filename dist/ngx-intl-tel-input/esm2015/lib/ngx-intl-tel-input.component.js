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
import * as ɵngcc4 from 'ngx-mask';
import * as ɵngcc5 from '@angular/forms';
import * as ɵngcc6 from './directives/native-element-injector.directive';

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
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 15, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "mask", "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function NgxIntlTelInputComponent_Template(rf, ctx) { if (rf & 1) {
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
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(13, _c1, ctx.disabled))("isDisabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.separateDialCode);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("mask", ctx.phoneMask)("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());
        ɵngcc0.ɵɵattribute("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
    } }, directives: [ɵngcc2.NgClass, ɵngcc3.BsDropdownDirective, ɵngcc3.BsDropdownToggleDirective, ɵngcc2.NgIf, ɵngcc3.BsDropdownMenuDirective, ɵngcc4.MaskDirective, ɵngcc5.DefaultValueAccessor, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc6.NativeElementInjectorDirective, ɵngcc2.NgForOf], styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{white-space:nowrap}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-sm-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-md-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-lg-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-xl-right[_ngcontent-%COMP%]{right:0;left:auto}}.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:0}.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{vertical-align:0}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-header[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[_ngcontent-%COMP%]{display:block;padding:.25rem 1.5rem;color:#212529}", "li.iti__country[_ngcontent-%COMP%]:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}.iti__flag-container.disabled[_ngcontent-%COMP%]{cursor:default!important}.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%]{background:none}.country-dropdown[_ngcontent-%COMP%]{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container[_ngcontent-%COMP%]{position:relative}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list[_ngcontent-%COMP%]{position:relative;border:none}.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%]{padding-left:6px}.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%]{margin-left:6px}.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%]{width:93px}.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:98px}"] });
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
                template: "<div class=\"iti iti--allow-dropdown\" [ngClass]=\"separateDialCodeClass\">\n\t<div\n\t\tclass=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{ disabled: disabled }\"\n\t\t[isDisabled]=\"disabled\"\n\t>\n\t\t<div class=\"iti__selected-flag dropdown-toggle\" dropdownToggle>\n\t\t\t<div class=\"iti__flag\" [ngClass]=\"selectedCountry?.flagClass\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\" class=\"selected-dial-code\">\n\t\t\t\t+{{ selectedCountry.dialCode }}\n\t\t\t</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu class=\"dropdown-menu country-dropdown\">\n\t\t\t<div\n\t\t\t\tclass=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\"\n\t\t\t>\n\t\t\t\t<input\n\t\t\t\t\tid=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\" #countryList>\n\t\t\t\t<li\n\t\t\t\t\tclass=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId + '-preferred'\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\" [ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{ country.name }}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{ country.dialCode }}</span>\n\t\t\t\t</li>\n\t\t\t\t<li\n\t\t\t\t\tclass=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"\n\t\t\t\t></li>\n\t\t\t\t<li\n\t\t\t\t\tclass=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\"\n\t\t\t\t>\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\" [ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{ country.name }}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{ country.dialCode }}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<input\n\t\ttype=\"tel\"\n\t\t[mask]=\"phoneMask\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable\n\t/>\n</div>\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFFN0MsT0FBTyxFQUNOLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3JFLFdBZ0JhLG9CQUFvQjtBQUtqQyxNQUFNLE9BQU8sd0JBQXdCO0FBQUcsSUFpRHZDLFlBQW9CLGVBQTRCO0FBQ2pELFFBRHFCLG9CQUFlLEdBQWYsZUFBZSxDQUFhO0FBQUMsUUFoRHhDLFVBQUssR0FBRyxFQUFFLENBQUM7QUFDckIsUUFBVSx1QkFBa0IsR0FBa0IsRUFBRSxDQUFDO0FBQ2pELFFBQVUsc0JBQWlCLEdBQUcsSUFBSSxDQUFD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LElBQUksdUJBQ1g7QUFDRCwwQkFDQyxPQUFPLEVBQUU7U0FBYTtJQUN0QixRQUFRLElBQXNCLDBCQUM5QixLQUFLLEVBQUUsSUFBSSx1QkFDWDtRQUNEOzs7Ozs7Ozs7Ozs7Ozs7O2d1R0FDRCxxNUdBQ0k7QUFBQztBQUFrRCxZQTVCL0MsV0FBVztBQUFHO0FBQUc7QUFDUCxvQkE0QmpCLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyxzQ0FDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyx1Q0FDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLDRCQUdWLE1BQU07QUFBSywwQkF1QlgsU0FBUyxTQUFDLGFBQWE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogdHNsaW50LWRpc2FibGUgKi9cbmltcG9ydCAqIGFzIGxwbiBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG5pbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0Zm9yd2FyZFJlZixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuaW1wb3J0IHsgQ291bnRyeUNvZGUgfSBmcm9tICcuL2RhdGEvY291bnRyeS1jb2RlJztcbmltcG9ydCB7IENvdW50cnlJU08gfSBmcm9tICcuL2VudW1zL2NvdW50cnktaXNvLmVudW0nO1xuaW1wb3J0IHsgU2VhcmNoQ291bnRyeUZpZWxkIH0gZnJvbSAnLi9lbnVtcy9zZWFyY2gtY291bnRyeS1maWVsZC5lbnVtJztcbmltcG9ydCB0eXBlIHsgQ2hhbmdlRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcy9jaGFuZ2UtZGF0YSc7XG5pbXBvcnQgdHlwZSB7IENvdW50cnkgfSBmcm9tICcuL21vZGVsL2NvdW50cnkubW9kZWwnO1xuaW1wb3J0IHsgcGhvbmVOdW1iZXJWYWxpZGF0b3IgfSBmcm9tICcuL25neC1pbnRsLXRlbC1pbnB1dC52YWxpZGF0b3InO1xuaW1wb3J0IHsgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICcuL2VudW1zL3Bob25lLW51bWJlci1mb3JtYXQuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuXHRzZWxlY3RvcjogJ25neC1pbnRsLXRlbC1pbnB1dCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9ib290c3RyYXAtZHJvcGRvd24uY3NzJywgJy4vbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5jc3MnXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q291bnRyeUNvZGUsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZm9yd2FyZC1yZWZcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neEludGxUZWxJbnB1dENvbXBvbmVudCksXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG5cdFx0XHR1c2VWYWx1ZTogcGhvbmVOdW1iZXJWYWxpZGF0b3IsXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHZhbHVlID0gJyc7XG5cdEBJbnB1dCgpIHByZWZlcnJlZENvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXHRASW5wdXQoKSBlbmFibGVQbGFjZWhvbGRlciA9IHRydWU7XG5cdEBJbnB1dCgpIGN1c3RvbVBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG51bWJlckZvcm1hdDogUGhvbmVOdW1iZXJGb3JtYXQgPSBQaG9uZU51bWJlckZvcm1hdC5JbnRlcm5hdGlvbmFsO1xuXHRASW5wdXQoKSBjc3NDbGFzcyA9ICdmb3JtLWNvbnRyb2wnO1xuXHRASW5wdXQoKSBvbmx5Q291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cdEBJbnB1dCgpIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gdHJ1ZTtcblx0QElucHV0KCkgc2VhcmNoQ291bnRyeUZsYWcgPSBmYWxzZTtcblx0QElucHV0KCkgc2VhcmNoQ291bnRyeUZpZWxkOiBTZWFyY2hDb3VudHJ5RmllbGRbXSA9IFtTZWFyY2hDb3VudHJ5RmllbGQuQWxsXTtcblx0QElucHV0KCkgc2VhcmNoQ291bnRyeVBsYWNlaG9sZGVyID0gJ1NlYXJjaCBDb3VudHJ5Jztcblx0QElucHV0KCkgbWF4TGVuZ3RoID0gJyc7XG5cdEBJbnB1dCgpIHNlbGVjdEZpcnN0Q291bnRyeSA9IHRydWU7XG5cdEBJbnB1dCgpIHNlbGVjdGVkQ291bnRyeUlTTzogQ291bnRyeUlTTztcblx0QElucHV0KCkgcGhvbmVWYWxpZGF0aW9uID0gdHJ1ZTtcblx0QElucHV0KCkgaW5wdXRJZCA9ICdwaG9uZSc7XG5cdEBJbnB1dCgpIHNlcGFyYXRlRGlhbENvZGUgPSBmYWxzZTtcblx0QElucHV0KCkgZGVmYXVsdFBob25lTWFzayA9ICcwMCAwMCAwMCAwMCc7XG5cdHNlcGFyYXRlRGlhbENvZGVDbGFzczogc3RyaW5nO1xuXG5cdEBPdXRwdXQoKSByZWFkb25seSBjb3VudHJ5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudHJ5PigpO1xuXG5cdHNlbGVjdGVkQ291bnRyeTogQ291bnRyeSA9IHtcblx0XHRhcmVhQ29kZXM6IHVuZGVmaW5lZCxcblx0XHRkaWFsQ29kZTogJycsXG5cdFx0aHRtbElkOiAnJyxcblx0XHRmbGFnQ2xhc3M6ICcnLFxuXHRcdGlzbzI6ICcnLFxuXHRcdG5hbWU6ICcnLFxuXHRcdHBsYWNlSG9sZGVyOiAnJyxcblx0XHRwcmlvcml0eTogMCxcblx0fTtcblxuXHRwaG9uZU51bWJlciA9ICcnO1xuXHRhbGxDb3VudHJpZXM6IEFycmF5PENvdW50cnk+ID0gW107XG5cdHByZWZlcnJlZENvdW50cmllc0luRHJvcERvd246IEFycmF5PENvdW50cnk+ID0gW107XG5cdC8vIEhhcyB0byBiZSAnYW55JyB0byBwcmV2ZW50IGEgbmVlZCB0byBpbnN0YWxsIEB0eXBlcy9nb29nbGUtbGlicGhvbmVudW1iZXIgYnkgdGhlIHBhY2thZ2UgdXNlci4uLlxuXHRwaG9uZVV0aWw6IGFueSA9IGxwbi5QaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcblx0ZGlzYWJsZWQgPSBmYWxzZTtcblx0ZXJyb3JzOiBBcnJheTxhbnk+ID0gWydQaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQuJ107XG5cdGNvdW50cnlTZWFyY2hUZXh0ID0gJyc7XG5cdHB1YmxpYyBwaG9uZU1hc2sgPSB0aGlzLmRlZmF1bHRQaG9uZU1hc2s7XG5cblx0QFZpZXdDaGlsZCgnY291bnRyeUxpc3QnKSBjb3VudHJ5TGlzdDogRWxlbWVudFJlZjtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblx0cHJvcGFnYXRlQ2hhbmdlID0gKF86IENoYW5nZURhdGEpID0+IHt9O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY291bnRyeUNvZGVEYXRhOiBDb3VudHJ5Q29kZSkge1xuXHRcdC8vIElmIHRoaXMgaXMgbm90IHNldCwgbmd4LWJvb3RzdHJhcCB3aWxsIHRyeSB0byB1c2UgdGhlIGJzMyBDU1MgKHdoaWNoIGlzIG5vdCB3aGF0IHdlJ3ZlIGVtYmVkZGVkKSBhbmQgd2lsbFxuXHRcdC8vIEFkZCB0aGUgd3JvbmcgY2xhc3NlcyBhbmQgc3VjaFxuXHRcdHNldFRoZW1lKCdiczQnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IHNlbGVjdGVkSVNPID0gY2hhbmdlc1snc2VsZWN0ZWRDb3VudHJ5SVNPJ107XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5hbGxDb3VudHJpZXMgJiZcblx0XHRcdHNlbGVjdGVkSVNPICYmXG5cdFx0XHRzZWxlY3RlZElTTy5jdXJyZW50VmFsdWUgIT09IHNlbGVjdGVkSVNPLnByZXZpb3VzVmFsdWVcblx0XHQpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0ZWRDb3VudHJ5KCk7XG5cdFx0fVxuXHRcdGlmIChjaGFuZ2VzLnByZWZlcnJlZENvdW50cmllcykge1xuXHRcdFx0dGhpcy51cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKTtcblx0XHR9XG5cdFx0dGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xuXHR9XG5cblx0Lypcblx0XHRUaGlzIGlzIGEgd3JhcHBlciBtZXRob2QgdG8gYXZvaWQgY2FsbGluZyB0aGlzLm5nT25Jbml0KCkgaW4gd3JpdGVWYWx1ZSgpLlxuXHRcdFJlZjogaHR0cDovL2NvZGVseXplci5jb20vcnVsZXMvbm8tbGlmZS1jeWNsZS1jYWxsL1xuXHQqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuZmV0Y2hDb3VudHJ5RGF0YSgpO1xuXHRcdGlmICh0aGlzLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMudXBkYXRlUHJlZmVycmVkQ291bnRyaWVzKCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm9ubHlDb3VudHJpZXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmFsbENvdW50cmllcyA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT5cblx0XHRcdFx0dGhpcy5vbmx5Q291bnRyaWVzLmluY2x1ZGVzKGMuaXNvMilcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnNlbGVjdEZpcnN0Q291bnRyeSkge1xuXHRcdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bi5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZENvdW50cnkodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duWzBdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KHRoaXMuYWxsQ291bnRyaWVzWzBdKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy51cGRhdGVTZWxlY3RlZENvdW50cnkoKTtcblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cdH1cblxuXHRzZXRTZWxlY3RlZENvdW50cnkoY291bnRyeTogQ291bnRyeSkge1xuXHRcdHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeTtcblx0XHR0aGlzLmNvdW50cnlDaGFuZ2UuZW1pdChjb3VudHJ5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggY291bnRyeSBiYXNlZCBvbiBjb3VudHJ5IG5hbWUsIGlzbzIsIGRpYWxDb2RlIG9yIGFsbCBvZiB0aGVtLlxuXHQgKi9cblx0cHVibGljIHNlYXJjaENvdW50cnkoKSB7XG5cdFx0aWYgKCF0aGlzLmNvdW50cnlTZWFyY2hUZXh0KSB7XG5cdFx0XHR0aGlzLmNvdW50cnlMaXN0Lm5hdGl2ZUVsZW1lbnRcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoJy5pdGlfX2NvdW50cnktbGlzdCBsaScpXG5cdFx0XHRcdC5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0XHRcdGJsb2NrOiAnbmVhcmVzdCcsXG5cdFx0XHRcdFx0aW5saW5lOiAnbmVhcmVzdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBjb3VudHJ5U2VhcmNoVGV4dExvd2VyID0gdGhpcy5jb3VudHJ5U2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IGNvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+IHtcblx0XHRcdGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5BbGwpID4gLTEpIHtcblx0XHRcdFx0Ly8gU2VhcmNoIGluIGFsbCBmaWVsZHNcblx0XHRcdFx0aWYgKGMuaXNvMi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcblx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xuXHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjLmRpYWxDb2RlLnN0YXJ0c1dpdGgodGhpcy5jb3VudHJ5U2VhcmNoVGV4dCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gT3Igc2VhcmNoIGJ5IHNwZWNpZmljIFNlYXJjaENvdW50cnlGaWVsZChzKVxuXHRcdFx0XHRpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuSXNvMikgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChjLmlzbzIudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLk5hbWUpID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoYy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5EaWFsQ29kZSkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChjLmRpYWxDb2RlLnN0YXJ0c1dpdGgodGhpcy5jb3VudHJ5U2VhcmNoVGV4dCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGNvdW50cnkubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLmNvdW50cnlMaXN0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0JyMnICsgY291bnRyeVswXS5odG1sSWRcblx0XHRcdCk7XG5cdFx0XHRpZiAoZWwpIHtcblx0XHRcdFx0ZWwuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdFx0XHRibG9jazogJ25lYXJlc3QnLFxuXHRcdFx0XHRcdGlubGluZTogJ25lYXJlc3QnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cdH1cblxuXHRwdWJsaWMgb25QaG9uZU51bWJlckNoYW5nZSgpOiB2b2lkIHtcblx0XHRsZXQgY291bnRyeUNvZGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHQvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIHVzZXIgc2V0cyB0aGUgdmFsdWUgcHJvZ3JhbWF0aWNhbGx5IGJhc2VkIG9uIGEgcGVyc2lzdGVkIENoYW5nZURhdGEgb2JqLlxuXHRcdGlmICh0aGlzLnBob25lTnVtYmVyICYmIHR5cGVvZiB0aGlzLnBob25lTnVtYmVyID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgbnVtYmVyT2JqOiBDaGFuZ2VEYXRhID0gdGhpcy5waG9uZU51bWJlcjtcblx0XHRcdHRoaXMucGhvbmVOdW1iZXIgPSBudW1iZXJPYmoubnVtYmVyO1xuXHRcdFx0Y291bnRyeUNvZGUgPSBudW1iZXJPYmouY291bnRyeUNvZGU7XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XG5cdFx0Y291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZSB8fCB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yO1xuXHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKHRoaXMucGhvbmVOdW1iZXIsIGNvdW50cnlDb2RlKTtcblxuXHRcdC8vIGF1dG8gc2VsZWN0IGNvdW50cnkgYmFzZWQgb24gdGhlIGV4dGVuc2lvbiAoYW5kIGFyZWFDb2RlIGlmIG5lZWRlZCkgKGUuZyBzZWxlY3QgQ2FuYWRhIGlmIG51bWJlciBzdGFydHMgd2l0aCArMSA0MTYpXG5cdFx0aWYgKHRoaXMuZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QpIHtcblx0XHRcdGNvdW50cnlDb2RlID1cblx0XHRcdFx0bnVtYmVyICYmIG51bWJlci5nZXRDb3VudHJ5Q29kZSgpXG5cdFx0XHRcdFx0PyB0aGlzLmdldENvdW50cnlJc29Db2RlKG51bWJlci5nZXRDb3VudHJ5Q29kZSgpLCBudW1iZXIpXG5cdFx0XHRcdFx0OiB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yO1xuXHRcdFx0aWYgKGNvdW50cnlDb2RlICYmIGNvdW50cnlDb2RlICE9PSB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yKSB7XG5cdFx0XHRcdGNvbnN0IG5ld0NvdW50cnkgPSB0aGlzLmFsbENvdW50cmllc1xuXHRcdFx0XHRcdC5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmluZCgoYykgPT4gYy5pc28yID09PSBjb3VudHJ5Q29kZSk7XG5cdFx0XHRcdGlmIChuZXdDb3VudHJ5KSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSBuZXdDb3VudHJ5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvdW50cnlDb2RlID0gY291bnRyeUNvZGUgPyBjb3VudHJ5Q29kZSA6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XG5cblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cblx0XHRpZiAoIXRoaXMudmFsdWUpIHtcblx0XHRcdC8vIFJlYXNvbjogYXZvaWQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MzU4MTMzLzE2MTc1OTBcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgaW50bE5vID0gbnVtYmVyXG5cdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG5cdFx0XHRcdDogJyc7XG5cblx0XHRcdC8vIHBhcnNlIHBob25lTnVtYmVyIGlmIHNlcGFyYXRlIGRpYWwgY29kZSBpcyBuZWVkZWRcblx0XHRcdGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50bE5vKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLnJlbW92ZURpYWxDb2RlKGludGxObyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHtcblx0XHRcdFx0bnVtYmVyOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRpbnRlcm5hdGlvbmFsTnVtYmVyOiBpbnRsTm8sXG5cdFx0XHRcdG5hdGlvbmFsTnVtYmVyOiBudW1iZXJcblx0XHRcdFx0XHQ/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcblx0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0XHRlMTY0TnVtYmVyOiBudW1iZXJcblx0XHRcdFx0XHQ/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5FMTY0KVxuXHRcdFx0XHRcdDogJycsXG5cdFx0XHRcdGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpLFxuXHRcdFx0XHRkaWFsQ29kZTogJysnICsgdGhpcy5zZWxlY3RlZENvdW50cnkuZGlhbENvZGUsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25Db3VudHJ5U2VsZWN0KGNvdW50cnk6IENvdW50cnksIGVsKTogdm9pZCB7XG5cdFx0Y29uc3QgY291bnRyeVBsYWNlaG9sZGVyID0gY291bnRyeS5wbGFjZUhvbGRlci5yZXBsYWNlKC9bMC05XS9nLCAnMCcpO1xuXHRcdGlmKGNvdW50cnlQbGFjZWhvbGRlcikge1xuXHRcdFx0dGhpcy5waG9uZU1hc2sgPSBjb3VudHJ5UGxhY2Vob2xkZXI7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KGNvdW50cnkpO1xuXG5cdFx0dGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xuXG5cdFx0aWYgKHRoaXMucGhvbmVOdW1iZXIgJiYgdGhpcy5waG9uZU51bWJlci5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcblx0XHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKFxuXHRcdFx0XHR0aGlzLnBob25lTnVtYmVyLFxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgaW50bE5vID0gbnVtYmVyXG5cdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG5cdFx0XHRcdDogJyc7XG5cdFx0XHQvLyBwYXJzZSBwaG9uZU51bWJlciBpZiBzZXBhcmF0ZSBkaWFsIGNvZGUgaXMgbmVlZGVkXG5cdFx0XHRpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGxObykge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRsTm8pO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRcdG51bWJlcjogdGhpcy52YWx1ZSxcblx0XHRcdFx0aW50ZXJuYXRpb25hbE51bWJlcjogaW50bE5vLFxuXHRcdFx0XHRuYXRpb25hbE51bWJlcjogbnVtYmVyXG5cdFx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0ZTE2NE51bWJlcjogbnVtYmVyXG5cdFx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuRTE2NClcblx0XHRcdFx0XHQ6ICcnLFxuXHRcdFx0XHRjb3VudHJ5Q29kZTogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMi50b1VwcGVyQ2FzZSgpLFxuXHRcdFx0XHRkaWFsQ29kZTogJysnICsgdGhpcy5zZWxlY3RlZENvdW50cnkuZGlhbENvZGUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1udWxsLWtleXdvcmRcblx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdH1cblxuXHRcdGVsLmZvY3VzKCk7XG5cdH1cblxuXHRwdWJsaWMgb25JbnB1dEtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG5cdFx0Y29uc3QgYWxsb3dlZENoYXJzID0gL1swLTlcXCtcXC1cXChcXClcXCBdLztcblx0XHRjb25zdCBhbGxvd2VkQ3RybENoYXJzID0gL1theGN2XS87IC8vIEFsbG93cyBjb3B5LXBhc3Rpbmdcblx0XHRjb25zdCBhbGxvd2VkT3RoZXJLZXlzID0gW1xuXHRcdFx0J0Fycm93TGVmdCcsXG5cdFx0XHQnQXJyb3dVcCcsXG5cdFx0XHQnQXJyb3dSaWdodCcsXG5cdFx0XHQnQXJyb3dEb3duJyxcblx0XHRcdCdIb21lJyxcblx0XHRcdCdFbmQnLFxuXHRcdFx0J0luc2VydCcsXG5cdFx0XHQnRGVsZXRlJyxcblx0XHRcdCdCYWNrc3BhY2UnLFxuXHRcdF07XG5cblx0XHRpZiAoXG5cdFx0XHQhYWxsb3dlZENoYXJzLnRlc3QoZXZlbnQua2V5KSAmJlxuXHRcdFx0IShldmVudC5jdHJsS2V5ICYmIGFsbG93ZWRDdHJsQ2hhcnMudGVzdChldmVudC5rZXkpKSAmJlxuXHRcdFx0IWFsbG93ZWRPdGhlcktleXMuaW5jbHVkZXMoZXZlbnQua2V5KVxuXHRcdCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcblx0fVxuXG5cdHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAob2JqID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdH1cblx0XHR0aGlzLnBob25lTnVtYmVyID0gb2JqO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5vblBob25lTnVtYmVyQ2hhbmdlKCk7XG5cdFx0fSwgMSk7XG5cdH1cblxuXHRyZXNvbHZlUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcblx0XHRsZXQgcGxhY2Vob2xkZXIgPSAnJztcblx0XHRpZiAodGhpcy5jdXN0b21QbGFjZWhvbGRlcikge1xuXHRcdFx0cGxhY2Vob2xkZXIgPSB0aGlzLmN1c3RvbVBsYWNlaG9sZGVyO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZENvdW50cnkucGxhY2VIb2xkZXIpIHtcblx0XHRcdHBsYWNlaG9sZGVyID0gdGhpcy5zZWxlY3RlZENvdW50cnkucGxhY2VIb2xkZXI7XG5cdFx0XHRpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlKSB7XG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShwbGFjZWhvbGRlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBwbGFjZWhvbGRlcjtcblx0fVxuXG5cdC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHBhcnNlIFBob25lTnVtYmVyIG9iamVjdC5cblx0ICogQHBhcmFtIHBob25lTnVtYmVyIHN0cmluZ1xuXHQgKiBAcGFyYW0gY291bnRyeUNvZGUgc3RyaW5nXG5cdCAqL1xuXHRwcml2YXRlIGdldFBhcnNlZE51bWJlcihcblx0XHRwaG9uZU51bWJlcjogc3RyaW5nLFxuXHRcdGNvdW50cnlDb2RlOiBzdHJpbmdcblx0KTogbHBuLlBob25lTnVtYmVyIHtcblx0XHRsZXQgbnVtYmVyOiBscG4uUGhvbmVOdW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdG51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHBob25lTnVtYmVyLCBjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpKTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHJldHVybiBudW1iZXI7XG5cdH1cblxuXHQvKipcblx0ICogQWRqdXN0cyBpbnB1dCBhbGlnbm1lbnQgYmFzZWQgb24gdGhlIGRpYWwgY29kZSBwcmVzZW50YXRpb24gc3R5bGUuXG5cdCAqL1xuXHRwcml2YXRlIGNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCkge1xuXHRcdGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgdGhpcy5zZWxlY3RlZENvdW50cnkpIHtcblx0XHRcdGNvbnN0IGNudHJ5Q2QgPSB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZTtcblx0XHRcdHRoaXMuc2VwYXJhdGVEaWFsQ29kZUNsYXNzID1cblx0XHRcdFx0J3NlcGFyYXRlLWRpYWwtY29kZSBpdGktc2RjLScgKyAoY250cnlDZC5sZW5ndGggKyAxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXBhcmF0ZURpYWxDb2RlQ2xhc3MgPSAnJztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYW5zIGRpYWxjb2RlIGZyb20gcGhvbmUgbnVtYmVyIHN0cmluZy5cblx0ICogQHBhcmFtIHBob25lTnVtYmVyIHN0cmluZ1xuXHQgKi9cblx0cHJpdmF0ZSByZW1vdmVEaWFsQ29kZShwaG9uZU51bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmdldFBhcnNlZE51bWJlcihwaG9uZU51bWJlciwgdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMik7XG5cdFx0cGhvbmVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5mb3JtYXQoXG5cdFx0XHRudW1iZXIsXG5cdFx0XHRscG4uUGhvbmVOdW1iZXJGb3JtYXRbdGhpcy5udW1iZXJGb3JtYXRdXG5cdFx0KTtcblx0XHRpZiAocGhvbmVOdW1iZXIuc3RhcnRzV2l0aCgnKycpICYmIHRoaXMuc2VwYXJhdGVEaWFsQ29kZSkge1xuXHRcdFx0cGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlci5zdWJzdHIocGhvbmVOdW1iZXIuaW5kZXhPZignICcpICsgMSk7XG5cdFx0fVxuXHRcdHJldHVybiBwaG9uZU51bWJlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaWZ0cyB0aHJvdWdoIGFsbCBjb3VudHJpZXMgYW5kIHJldHVybnMgaXNvIGNvZGUgb2YgdGhlIHByaW1hcnkgY291bnRyeVxuXHQgKiBiYXNlZCBvbiB0aGUgbnVtYmVyIHByb3ZpZGVkLlxuXHQgKiBAcGFyYW0gY291bnRyeUNvZGUgY291bnRyeSBjb2RlIGluIG51bWJlciBmb3JtYXRcblx0ICogQHBhcmFtIG51bWJlciBQaG9uZU51bWJlciBvYmplY3Rcblx0ICovXG5cdHByaXZhdGUgZ2V0Q291bnRyeUlzb0NvZGUoXG5cdFx0Y291bnRyeUNvZGU6IG51bWJlcixcblx0XHRudW1iZXI6IGxwbi5QaG9uZU51bWJlclxuXHQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdC8vIFdpbGwgdXNlIHRoaXMgdG8gbWF0Y2ggYXJlYSBjb2RlIGZyb20gdGhlIGZpcnN0IG51bWJlcnNcblx0XHRjb25zdCByYXdOdW1iZXIgPSBudW1iZXJbJ3ZhbHVlc18nXVsnMiddLnRvU3RyaW5nKCk7XG5cdFx0Ly8gTGlzdCBvZiBhbGwgY291bnRyaWVzIHdpdGggY291bnRyeUNvZGUgKGNhbiBiZSBtb3JlIHRoYW4gb25lLiBlLnguIFVTLCBDQSwgRE8sIFBSIGFsbCBoYXZlICsxIGNvdW50cnlDb2RlKVxuXHRcdGNvbnN0IGNvdW50cmllcyA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcihcblx0XHRcdChjKSA9PiBjLmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXG5cdFx0KTtcblx0XHQvLyBNYWluIGNvdW50cnkgaXMgdGhlIGNvdW50cnksIHdoaWNoIGhhcyBubyBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxuXHRcdGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoKGMpID0+IGMuYXJlYUNvZGVzID09PSB1bmRlZmluZWQpO1xuXHRcdC8vIFNlY29uZGFyeSBjb3VudHJpZXMgYXJlIGFsbCBjb3VudHJpZXMsIHdoaWNoIGhhdmUgYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cblx0XHRjb25zdCBzZWNvbmRhcnlDb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKFxuXHRcdFx0KGMpID0+IGMuYXJlYUNvZGVzICE9PSB1bmRlZmluZWRcblx0XHQpO1xuXHRcdGxldCBtYXRjaGVkQ291bnRyeSA9IG1haW5Db3VudHJ5ID8gbWFpbkNvdW50cnkuaXNvMiA6IHVuZGVmaW5lZDtcblxuXHRcdC8qXG5cdFx0XHRJdGVyYXRlIG92ZXIgZWFjaCBzZWNvbmRhcnkgY291bnRyeSBhbmQgY2hlY2sgaWYgbmF0aW9uYWxOdW1iZXIgc3RhcnRzIHdpdGggYW55IG9mIGFyZWFDb2RlcyBhdmFpbGFibGUuXG5cdFx0XHRJZiBubyBtYXRjaGVzIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgbWFpbiBjb3VudHJ5LlxuXHRcdCovXG5cdFx0c2Vjb25kYXJ5Q291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcblx0XHRcdGNvdW50cnkuYXJlYUNvZGVzLmZvckVhY2goKGFyZWFDb2RlKSA9PiB7XG5cdFx0XHRcdGlmIChyYXdOdW1iZXIuc3RhcnRzV2l0aChhcmVhQ29kZSkpIHtcblx0XHRcdFx0XHRtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvMjtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbWF0Y2hlZENvdW50cnk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBmb3JtYXR0ZWQgZXhhbXBsZSBwaG9uZSBudW1iZXIgZnJvbSBwaG9uZVV0aWwuXG5cdCAqIEBwYXJhbSBjb3VudHJ5Q29kZSBzdHJpbmdcblx0ICovXG5cdHByb3RlY3RlZCBnZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5waG9uZVV0aWwuZm9ybWF0KFxuXHRcdFx0XHR0aGlzLnBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnlDb2RlKSxcblx0XHRcdFx0bHBuLlBob25lTnVtYmVyRm9ybWF0W3RoaXMubnVtYmVyRm9ybWF0XVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJpbmcgdGhlIGxpc3QgdG8gYXZvaWQgZHVwbGljYXRlcyAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNhdDEyMzQ1L25neC1pbnRsLXRlbC1pbnB1dC9pc3N1ZXMvMjQ4KVxuXHQgKi9cblx0cHJvdGVjdGVkIGZldGNoQ291bnRyeURhdGEoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxDb3VudHJpZXMgPSBbXTtcblxuXHRcdHRoaXMuY291bnRyeUNvZGVEYXRhLmFsbENvdW50cmllcy5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHRjb25zdCBjb3VudHJ5OiBDb3VudHJ5ID0ge1xuXHRcdFx0XHRuYW1lOiBjWzBdLnRvU3RyaW5nKCksXG5cdFx0XHRcdGlzbzI6IGNbMV0udG9TdHJpbmcoKSxcblx0XHRcdFx0ZGlhbENvZGU6IGNbMl0udG9TdHJpbmcoKSxcblx0XHRcdFx0cHJpb3JpdHk6ICtjWzNdIHx8IDAsXG5cdFx0XHRcdGFyZWFDb2RlczogKGNbNF0gYXMgc3RyaW5nW10pIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0aHRtbElkOiBgaXRpLTBfX2l0ZW0tJHtjWzFdLnRvU3RyaW5nKCl9YCxcblx0XHRcdFx0ZmxhZ0NsYXNzOiBgaXRpX18ke2NbMV0udG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpfWAsXG5cdFx0XHRcdHBsYWNlSG9sZGVyOiAnJyxcblx0XHRcdH07XG5cblx0XHRcdGlmICh0aGlzLmVuYWJsZVBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdGNvdW50cnkucGxhY2VIb2xkZXIgPSB0aGlzLmdldFBob25lTnVtYmVyUGxhY2VIb2xkZXIoXG5cdFx0XHRcdFx0Y291bnRyeS5pc28yLnRvVXBwZXJDYXNlKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hbGxDb3VudHJpZXMucHVzaChjb3VudHJ5KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMgcHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93biB3aXRoIHByZWZmZXJyZWQgY291bnRyaWVzLlxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKSB7XG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duID0gW107XG5cdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllcy5mb3JFYWNoKChpc28yKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHByZWZlcnJlZENvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gYy5pc28yID09PSBpc28yO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24ucHVzaChwcmVmZXJyZWRDb3VudHJ5WzBdKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHNlbGVjdGVkQ291bnRyeS5cblx0ICovXG5cdHByaXZhdGUgdXBkYXRlU2VsZWN0ZWRDb3VudHJ5KCkge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkQ291bnRyeUlTTykge1xuXHRcdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maW5kKChjKSA9PiB7XG5cdFx0XHRcdHJldHVybiBjLmlzbzIudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5zZWxlY3RlZENvdW50cnlJU08udG9Mb3dlckNhc2UoKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5KSB7XG5cdFx0XHRcdGlmICh0aGlzLnBob25lTnVtYmVyKSB7XG5cdFx0XHRcdFx0dGhpcy5vblBob25lTnVtYmVyQ2hhbmdlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXG5cdFx0XHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==