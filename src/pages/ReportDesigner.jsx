import React from 'react';
import { withRouter } from 'react-router';

class Designer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            iframe: function () {
                console.log(props)
                return {
                  __html: '<iframe src="./Stimulsoft/designer/index.html" width="100%" height="1000"></iframe>'
                }
              }
        }

    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={ this.state.iframe() } />
            </div>   
        );
    }

}


export default withRouter(Designer);