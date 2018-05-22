import React from 'react';
import { ScrollView } from 'react-native';

import { Footer, Button, Icon } from 'native-base'

export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Footer style={{backgroundColor:'#303030', height:45}}>
                <ScrollView horizontal={true} overScrollMode={'never'} showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <Button transparent onPress={this.props.undo}><Icon style={{color:'darkgray'}} name="undo" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="redo" /></Button>
                    <Button transparent onPress = {this.props.onSearchButtonPress}><Icon style={{color:'darkgray'}} name="search"/></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                    <Button transparent><Icon style={{color:'darkgray'}} name="help" /></Button>
                </ScrollView>
            </Footer>
        );
    }
}
