import React, {Component} from  'react'
import { Jobs }  from  './containers'

class Feed extends Component {

  render(){
    return (
      <div className="container">
        <h2>Feed</h2>
        <div className="row">
          <div className="col-md-8">
          <Jobs/>
          </div>

          <div className="col-md-4">

          </div>
        </div>

      </div>
    )
  }
}

export default Feed
