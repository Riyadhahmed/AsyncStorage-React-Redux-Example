import React, { Component } from "react";
import GLOBALS from "../common/Global_Constant";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image
} from "react-native";
import { Card } from "../common/index";

// redux actions
import {
  fetchUser,
  createUser,
  checkUserExists
} from "../../actions/serverUserAction";

class serverUserScreen extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.fetchAllUser();
  }

  fetchAllUser = () => {
    this.props.fetchUser();
  };

  addUser(item) {
    this.props.checkUserExists(item);
  }

  renderUser = ({ item, index }) => {
    return (
      <View style={styles.ListView}>
        <View style={styles.contestView}>
          <Text style={styles.menuText}>{item.name}</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => this.addUser(item)}>
            <Image
              style={styles.plusImage}
              source={require("../../assets/img/plus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    if (this.props.userLoading) {
      return <ActivityIndicator />;
    }

    return (
      <Card>
        <FlatList
          data={this.props.userList}
          renderItem={this.renderUser}
          keyExtractor={(item, index) => index.toString()}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  ListView: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "#F7F7F7",
    borderBottomWidth: 1,
    padding: 10
  },
  FlatList: {
    flex: 1,
    flexDirection: "row"
  },
  contestView: {
    justifyContent: "flex-start",
    width: 300
  },
  buttonView: {
    alignItems: "flex-end"
  },
  plusImage: {
    width: 25,
    height: 25
  },
  menuText: {
    fontSize: 18,
    fontFamily: GLOBALS.DefaultTheme.titleFont
  }
});

serverUserScreen.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func.isRequired,
  userList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  userList: state.serverUser.userList,
  userLoading: state.serverUser.userLoading,
});

export default connect(
  mapStateToProps,
  { fetchUser, createUser, checkUserExists }
)(serverUserScreen);
