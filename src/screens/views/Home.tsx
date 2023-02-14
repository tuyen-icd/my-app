import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { COLORS } from "../../constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getProduct } from "../../redux/actions/ProductAction";
import Credentials from "../../repos/local/Credentials";

const Home = () => {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      dispatch(
        getProduct({
          dataProduct: filteredData,
        })
      );

      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Home!</Text>

      <View>
        <TextInput
          placeholder="SEARCH......"
          style={{
            borderColor: COLORS.green,
            borderWidth: 1,
            padding: 16,
            borderRadius: 14,
          }}
          onChangeText={(e) => searchItems(e)}
        />

        <View style={{ padding: 20 }}>
          {searchInput.length > 1
            ? filteredResults.map((item) => {
                return (
                  <Text style={{ paddingBottom: 5 }} key={item.id}>
                    {item.name}
                  </Text>
                );
              })
            : APIData.map((item) => {
                return (
                  <Text style={{ paddingBottom: 5 }} key={item.id}>
                    {item.name}
                  </Text>
                );
              })}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
