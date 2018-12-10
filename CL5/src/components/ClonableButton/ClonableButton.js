import React from 'react';
import Button from '@material-ui/core/Button';

class ClonableButton extends Component {
    state = {
        buttonList: [{
            id: 0,
            count: 0
        }]
    }

    updateCount = (id) => {
        this.setState((state) => {
            buttonList:[
            ...buttonList,
            
            ]

        })
    }

    render() {
        const { buttonList } = this.state;
        return (
            <div>
                {buttonList.map((button) => {
                    <Button onClick={}>{() => button.count(button.id)}</Button>
                })}
            </div>
        )
    }
}