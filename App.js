import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    // setTodos((prevTodos)=> {
    //  return [
    //   ...prevTodos,
    //   newTodo
    //  ]
    // })
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit ={addTodo}/>
        {/* <View>
          {todos.map(todo =>{
            return <Todo todo={todo} key={todo.id}/>
          })}
        </View> */}
        <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos} 
        renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo}/>)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
