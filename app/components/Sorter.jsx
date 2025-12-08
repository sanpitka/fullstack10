import { Picker } from "@react-native-picker/picker";
import { View } from 'react-native';


const Sorter = ({ sorter, setSorter }) => {

  return (
    <View>
      <Picker 
        selectedValue={sorter}
        onValueChange={setSorter}
        style={Text}>
        <Picker.Item label="Sort by..." value="" enabled={false} />
        <Picker.Item label="Latest repositories" value="latest" selected />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );
}

export default Sorter;