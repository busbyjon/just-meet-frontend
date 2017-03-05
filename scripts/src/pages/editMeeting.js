import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';
import view from './views/editMeeting';
import menu from '../utils/menu';

class EditMeeting extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            text: ''
        };
    }

    handleChange(value) {
        this.setState({ text: value });
    }

    render(){
        return view(this);
    }
};

export default EditMeeting;
