import React, {Component} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
} from 'react-native';

import {observer} from 'mobx-react';

import BookStore from './BookStore';

const initialState = {
  title: '',
  author: '',
  read: false,
};

class App extends Component {
  state = initialState;
  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  addBook() {
    if (!this.state.title || !this.state.author) return;
    BookStore.addBook(this.state);
    BookStore.AddBookPLus(this.state);
    this.setState(initialState);
    this.titleRef.focus();
  }

  render() {
    const {books} = BookStore;
    console.log('readBooks:', books);

    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.title}
          placeholder="title"
          onChangeText={value => this.onChangeText('title', value)}
          style={styles.input}
          autoCorrect={false}
          ref={title => (this.titleRef = title)}
        />
        <TextInput
          value={this.state.author}
          placeholder="author"
          onChangeText={value => this.onChangeText('author', value)}
          style={styles.input}
          autoCorrect={false}
        />
        <Text style={styles.label}>Read? {this.state.read ? 'Yes' : 'No'}</Text>
        <Text style={styles.label}>{BookStore.BookCount()}</Text>
        <Switch
          onValueChange={value => this.setState(() => ({read: value}))}
          value={this.state.read}
        />
        <Button onPress={this.addBook.bind(this)} title="Add Book" />
        <Text style={styles.title}>Books</Text>
        <ScrollView>
          {books.map((book, index) => (
            <TouchableOpacity
              onPress={() => {
                if (book.read) {
                  // BookStore.remove(book);
                  book.toggleRead();
                } else {
                  book.toggleRead();
                }
              }}
              key={index}>
              <View style={styles.book}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookDescription}>{book.author}</Text>
                <Text>Read: {book.read ? 'yes' : 'no'}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default observer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  input: {
    height: 45,
    backgroundColor: '#ededed',
    borderRadius: 3,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    paddingBottom: 10,
  },
  book: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .15)',
  },
  bookTitle: {
    fontSize: 16,
  },
  bookDescription: {
    color: 'rgba(0, 0, 0, .4)',
    fontSize: 12,
    marginVertical: 4,
  },
});
