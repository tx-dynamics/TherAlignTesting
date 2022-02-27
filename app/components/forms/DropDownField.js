import SelectDropdown from "react-native-select-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import colors from "../../config/colors";
import { wp } from "../../Helpers/Responsiveness";

export const DropDownField = ({ data, width = "100%", defaultButtonText }) => {
  const [menuData, setMenuData] = useState(data);

  return (
    <SelectDropdown
      data={menuData}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
        // return item;
      }}
      renderDropdownIcon={() => (
        <MaterialCommunityIcons name="chevron-down" size={25} />
      )}
      defaultButtonText={defaultButtonText}
      buttonStyle={{
        width: width,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightGray,
        marginBottom: wp(4),
      }}
    />
  );
};
