import React, { Component } from 'react';
import superagent from 'superagent';
import Preview from '../presentation/Preview';
class Jobs extends Component{
  constructor(){
    super();
    this.state = {
      jobs : []
    }
  }
  componentDidMount(){
    console.log("Component did mount");
    superagent.get('/api/job')
    .query()
    .set('Accept', 'application/json')
    .end((err, response) => {
      if(err){
        console.log('Error happened'+ err.message);
        return;
      }
      const jobs = response.body.data;
      console.log('Jobs: '+ JSON.stringify(jobs));
      this.setState({
        jobs: jobs});
    })
  }
  render(){
      return(
        <div>
        <h3>Current Jobs</h3>
        <ol>
          {
            this.state.jobs.map((job, i)=>{
              return (
                <li key={i}>
                  <Preview {...job}/>
                </li>
              )
            })
          }
        </ol>
        </div>
      )
  }
}


export default Jobs;
