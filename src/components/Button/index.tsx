import React        from "react";
import { 
  TouchableOpacity, TouchableOpacityProps,
  Text, ColorValue }from 'react-native';
import { styles }   from './styles';
import {AntDesign}  from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  title: string;
  color: string;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
}
export function Button({ title, color, backgroundColor, icon, ...rest }: Props) {
  return (
    <TouchableOpacity 
     style={[styles.button, { backgroundColor }]}
     {...rest}
    >
      <AntDesign 
       name={icon} 
       size={24} 
       style={styles.icon}
      />
      <Text style={[styles.title, { color }]}>
        {title}
      </Text>
    
    </TouchableOpacity>
  )
}