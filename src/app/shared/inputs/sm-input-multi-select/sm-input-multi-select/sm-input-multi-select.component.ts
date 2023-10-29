import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from "@angular/core";
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputSelectOption, InputSelectOptionsGroup } from "@shared";

@Component({
  selector: "sm-input-multi-select",
  templateUrl: "./sm-input-multi-select.component.html",
  styleUrls: ["./sm-input-multi-select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmInputMultiSelectComponent),
      multi: true,
    },
  ],
})
export class SmInputMultiSelectComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName?: string;
  @Input() groupedOptionList?: InputSelectOptionsGroup[];
  @Input() hasClearOption: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() label: string = "";
  @Input() multipleLimit?: number;
  @Input() optionList: InputSelectOption[] = [];
  @Input() placeholder: string = "";
  @Input() value: string[] | number[] = [];

  @Output() valueChange = new EventEmitter<any>();

  formControl?: FormControl;

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) {}

  ngOnInit() {
    this.formControlCreator();
  }
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {}

  /**
   * Create a formControl instance from the parent form group.
   * @TODO Create a service and put this inside, so it can be used from other shared components.
   */
  formControlCreator() {
    if (this.formControlName) {
      if (this.controlContainer) {
        this.formControl = this.controlContainer.control!.get(this.formControlName) as FormControl;
      } else {
        console.error("Can't find parent FormGroup directive");
      }
    }
  }
}
