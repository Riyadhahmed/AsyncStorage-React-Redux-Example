import React, { Component } from "react";
import GLOBALS from "../common/Global_Constant";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    StyleSheet, View, FlatList, TouchableOpacity, Text, Alert, ActivityIndicator, Image
} from "react-native";
import { Card } from "../common/index";

// redux actions
import { fetchLocalUser, deleteLocalUser } from "../../actions/localUserAction";

class localUserScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser = () => {
        this.props.fetchLocalUser();
    };


    removeUser = item => {
        Alert.alert(
            "Delete",
            "Do you want to delete this user?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed!")
                },
                {
                    text: "Yes",
                    onPress: () => {
                        this.props.deleteLocalUser(item.id)
                    }
                }
            ],
            {
                cancelable: true
            }
        );
    }
    renderUser = ({ item, index }) => {
        return (

            <View style={styles.ListView}>
                <View style={styles.contestView}>
                    <Text style={styles.menuText}>{item.name}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => this.removeUser(item)}
                    >
                        <Image
                            style={styles.plusImage}
                            source={require('../../assets/img/minus.png')}
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
                {this.props.emptyLocalUser ? (
                    <View>
                        <Text>No users</Text>
                    </View>
                ) : (
                        <FlatList
                            data={this.props.localUserList}
                            renderItem={this.renderUser}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    )}
            </Card>
        );
    }
}

localUserScreen.propTypes = {
    fetchLocalUser: PropTypes.func.isRequired,
    deleteLocalUser: PropTypes.func.isRequired,
    localUserList: PropTypes.array.isRequired,
    localUserLoading: PropTypes.bool,
    emptyLocalUser: PropTypes.bool
};

const mapStateToProps = state => ({
    localUserList: state.localUser.localUserList,
    localUserLoading: state.localUser.localUserLoading,
    emptyLocalUser: state.localUser.emptyLocalUser
});

export default connect(
    mapStateToProps,
    { fetchLocalUser, deleteLocalUser }
)(localUserScreen);


const styles = StyleSheet.create({
    ListView: {
        flex: 1,
        flexDirection: "row",
        borderBottomColor: '#F7F7F7',
        borderBottomWidth: 1,
        padding: 10,
    },
    FlatList: {
        flex: 1,
        flexDirection: "row",
    },
    contestView: {
        justifyContent: "flex-start",
        width: 300,
    },
    buttonView: {
        alignItems: "flex-end",
    },
    plusImage: {
        width: 25,
        height: 25
    },
    menuText: {
        fontSize: 18,
        fontFamily: GLOBALS.DefaultTheme.titleFont,
    }
});
