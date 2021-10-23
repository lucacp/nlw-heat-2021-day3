import React        from "react";
import {ScrollView} from 'react-native';
import {Message, MessageProps}    from '../Message';
import {styles}     from './styles';

const message: MessageProps = {
  id: '1',
  text: 'mensagem teste',
  user: {
    name: 'Ana',
    avatar_url: "https://github.com/lucacp.png",
  }
}

export function MessageList(){
  return (
    <ScrollView 
     style={styles.container}
     contentContainerStyle={styles.content}
     keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}