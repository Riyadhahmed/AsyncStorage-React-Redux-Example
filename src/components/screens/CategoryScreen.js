import React, {Component} from 'react';
import {View} from 'react-native';
import PostCategoryList from '../common/PostCategoryList';

const CategoryScreen = (props) => {

    const {navigation} = props;
    const cat_title = navigation.getParam('CategoryTitle', 'none');
    const cat_id = navigation.getParam('CategoryId', 'none');
    const per_page = navigation.getParam('PerPage', 'none');

    return (
        <View style={{flex: 1}}>
            <PostCategoryList cat_id={cat_id} per_page={per_page} navigation={navigation}/>
        </View>
    );
}

export default CategoryScreen;