import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import OwnText from "../Components/Text/OwnText";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { deleteTodoApi, getTodoApi } from "../../API/Index";
import { useIsFocused } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }: { navigation: any }) => {
  const [todos, setTodos] = useState<CreateTodoBodyData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [noTodo, setNoTodo] = useState<boolean>(false);
  const { email } = useSelector((state: any) => state);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setLoading(false);
      if (email?.user?.email) {
        fetchData();
      }
    }
  }, [email?.user?.email, isFocused]);

  interface GetTodoBodyData {
    email: string | null;
  }

  const fetchData = async () => {
    let bodyData: GetTodoBodyData = {
      email: email?.user?.email,
    };
    const res = await getTodoApi(bodyData);
    console.log(res.data);
    if (res?.error == false) {
      setTodos(res?.data);
      setNoTodo(false);
    } else {
      if (res.message == "Nothing Found") {
        setTodos([]);
        setNoTodo(true);
      } else {
        setLoading(false);
        setNoTodo(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    let bodyData: DeleteTodoBody = {
      _id: id,
    };
    const res = await deleteTodoApi(bodyData);
    if (res?.error == false && res.data.deletedCount > 0) {
      fetchData();
    }
  };

  const handleRender = ({ item }: any) => {
    const { title, description, theme } = item;
    return (
      <View
        style={[styles.note, { flexDirection: "row", backgroundColor: theme }]}
      >
        <View>
          <OwnText preset="h6" style={styles.noteTitle}>
            {title}
          </OwnText>
          <OwnText preset="small" style={styles.noteDescription}>
            {description}
          </OwnText>
        </View>
        <View>
          <Pressable
            onPress={() => handleDelete(item?._id)}
            style={styles.delete}
          >
            <AntDesign name="delete" size={24} color="red" />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("update", { item })}
            style={styles.delete}
          >
            <Feather name="edit" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    );
  };

  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <View style={styles.container}>
      <View style={styles.header}>
        <OwnText preset="h6">My Notes</OwnText>
        <AntDesign
          onPress={() => navigation.navigate("create")}
          name="pluscircleo"
          size={24}
          color="black"
        />
      </View>
      {!noTodo ? (
        <FlatList
          data={todos}
          renderItem={handleRender}
          keyExtractor={(item: any) => item._id}
          contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
          extraData={fetchData}
        />
      ) : (
        <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
          <OwnText preset="h6">No Todos Found</OwnText>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteTitle: {
    color: "white",
  },
  noteDescription: {
    color: "white",
    marginTop: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  note: {
    marginBottom: 24,
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
  },
  delete: {
    paddingHorizontal: 4,
    paddingBottom: 12,
  },
});
