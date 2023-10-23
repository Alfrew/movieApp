/**
 * Used for input selects' list of options.
 * @value the property passed as formcontrol value.
 * @viewValue the string that is visible in the UI.
 */
export interface InputSelectOption {
  value: string | number;
  viewValue: string;
}

/**
 * Used for input selects with grouped options.
 * @disabled an optional value, if true it disables the entire group of options in the input select.
 * @name the string of the options group visible in the UI.
 * @options the list of options part of this group.
 */
export interface InputSelectOptionsGroup {
  diasbled?: boolean;
  name: string;
  options: InputSelectOption[];
}

/**
 * A collection of shared functions used for input selects.
 */
export abstract class InputSelectFunctions {
  /**
   * Used to create an `optionList` from an array of objects.
   * @param array the starting list to convert in `optionList`.
   * @param propertyValue the name of the property that will be set as `value`.
   * @param propertyViewValue the name of the property that will be set as `viewValue`.
   * @returns an `optionList` based on the starting array.
   */
  static returnOptionList(array: any[], propertyValue: string, propertyViewValue: string): InputSelectOption[] {
    return array.map((element: any) => {
      return { value: element[propertyValue], viewValue: element[propertyViewValue] };
    });
  }

  /**
   * Used to create an `optionList` from an array of strings.
   * @param stringList the starting array of strings to convert in `optionList`.
   * @returns an `optionList` based on the starting array of strings.
   */
  static returnOptionListFromStringList(stringList: string[]): InputSelectOption[] {
    return stringList.map((element: string) => {
      return { value: element, viewValue: element };
    });
  }

  /**
   * Used to create an `optionsGroupList` from an array of groups.
   * @param groupsList the starting grouped list to convert in `optionsGroupList`
   * @param propertyName the name of the property that will be set as `name` of the group.
   * @param propertyOptions the name of the property that will be set as `options`.
   * @param propertyValue the name of the property that will be set as `value`.
   * @param propertyViewValue the name of the property that will be set as `viewValue`.
   * @param propertyDisabled the name of the property that will be set as `disabled`.
   * @returns a `optionsGroupList` based on the starting array of groups.
   */
  static returnOptionsGroupList(
    groupsList: any[],
    propertyName: string,
    propertyOptions: string,
    propertyValue: string,
    propertyViewValue: string,
    propertyDisabled?: string
  ): InputSelectOptionsGroup[] {
    return groupsList.map((group) => {
      return {
        diasbled: propertyDisabled ? group[propertyDisabled] : false,
        name: group[propertyName],
        options: this.returnOptionList(group[propertyOptions], propertyValue, propertyViewValue),
      };
    });
  }
}
