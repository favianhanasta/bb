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
      }).then(()=>this.setState({ i:8 }))
    }
  }
  render() {
    console.log('i',this.state.pict)
    return (
      <div className='container'>
        {
          this.state.pict ?
          <div>
            <img src='data:image/jpeg;base64,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'/>
            <h2> HBD</h2>
          </div>
          :
          this.print()
        }
      </div>
    );
  }
}

export default App;
