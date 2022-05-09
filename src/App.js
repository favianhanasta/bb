import React from 'react';
import Swal from 'sweetalert2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 1,
      pict: false
    }
  }
  print = () => {
    let { i } = this.state;
    if (i == 1) {
      Swal.fire({
        text: 'halo sasa 😀'
      }).then(() => this.setState({ i: 2 }))
    } else if (i == 2) {
      Swal.fire({
        text: 'anywayy makasih sudah sabar kepada qU !!',
      }).then(() => this.setState({ i: 3 }))
    } else if (i == 3) {
      Swal.fire({
        text: 'first of all happy birthday kembaran h+2'
      }).then(()=>this.setState({i:4}))
    } else if(i==4){
      Swal.fire({
        text: 'Semoga kedepanya tetap bisa menjadi sasa yang ku kenal 😊'
      }).then(()=>this.setState({ i:5 }))
    }else if (i == 5) {
      Swal.fire({
        text: 'semoga karirnya bisa lancar kedepanya,bisa banggain orang tua, dirimu, dan teman2 mu yg kamu sayang 🖤,pokonya semoga yang di semogakan tersemogakan 😀'
      }).then(()=>this.setState({i:6}))
    }else if(i==6){
      Swal.fire({
        text: 'kadonya nyusul ya maap bet anjay :v'
      }).then(()=>this.setState({ i:7 }))
    }else if(i==7){
      Swal.fire({
        text: 'stay humble artis tiktokku 😍'
      }).then(()=>this.setState({ i:8 }))
    }else if(i==8){
      Swal.fire({
        text: 'dah gitu aja hehe'
      })
    }
  }
  render() {
    console.log('i',this.state.pict)
    return (
      <div className='container'>
        {
          this.state.pict ?
          <div>
          </div>
          :
          this.print()
        }
      </div>
    );
  }
}

export default App;
