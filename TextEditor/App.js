import React from 'react';

import { createStackNavigator  } from 'react-navigation';

import { MainScreen } from './screens/MainScreen'
import { HelpScreen } from './screens/HelpScreen'

const StackNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Help: HelpScreen
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    render() {
        return <StackNavigator />
    }
}

String.prototype.replaceAllWords = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

String.prototype.regexIndexOf = function(str1, startpos, ignore) {
    var indexOf = this.substring(startpos || 0).search(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")));
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}