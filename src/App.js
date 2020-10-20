import React from 'react';
import Seasons from './components/Seasons';
import Loading from './components/Loading';
import './components/season.css'

export default class App extends React.Component{
  state={lat:null,error_message:""}

  componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
          position=> this.setState({
              lat:position.coords.latitude
          }),
          err=> this.setState({
              error_message:err.message
          })
      );
    }

    renderContent(){
        if (this.state.lat && !this.state.error_message) {
            return <Seasons lat={this.state.lat}></Seasons>
        }
        if (!this.state.lat && this.state.error_message) {
        return <div>{this.state.error_message}</div>
        }
        return <Loading loading_text = {"Please accept location request"}></Loading>
    }
  render() {
      return (
          <div>
              {this.renderContent()}
          </div>
      )
  }
}