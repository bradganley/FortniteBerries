import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
const base = 'https://fortnite-api.com/v1/stats/br/v2?name=';

class FortTable extends React.Component {
  constructor(props){
    super(props);
    this.state = { updating: false,
                  brad: {},
                  ehren: {},
                  cam: {},
                  adi: {},
                  mapUrl: '' }
  }
  async getBrad(){
    let res = await fetch(`${base}DampClamz`);
    let json = await res.json();
    await this.setState({ brad: json.data.stats.all.overall })
    console.log(this.state.brad)
  }
  async getEhren(){
    let res = await fetch(`${base}theehreng`);
    let json = await res.json();
    await this.setState({ ehren: json.data.stats.all.overall })
    console.log(this.state.ehren)
  }
  async getAdi(){
    let res = await fetch(`${base}xxgamermaryxx`);
    let json = await res.json();
    await this.setState({ adi: json.data.stats.all.overall })
    console.log(this.state.cam)
  }
  async getCam(){
    let res = await fetch(`${base}thecambulance14`);
    let json = await res.json();
    await this.setState({ cam: json.data.stats.all.overall })
    console.log(this.state.cam)
  }
  async getMap(){
    const response = await fetch('https://fortnite-api.com/v1/map');
    const json = await response.json();
    this.setState({ mapUrl: json.data.images.pois });
  }
  async updateData(){
    await this.getBrad();
    await this.getEhren();
    await this.getCam();
  }
  async componentDidMount(){
    await this.getMap();
    await this.getBrad();
    await this.getEhren();
    await this.getCam();
    await this.getAdi();
  }

  render() {
    let { brad, ehren, cam, adi } = this.state
    return (      
        <Container>
        <Button variant="light" onClick={ () => { this.updateData() } }> Update Data </Button>
        <Table variant="dark" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Stat</th>
              <th>Brad</th>
              <th>Ehren</th>
              <th>Cameron</th>
              <th>Adi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Wins</th>
              <td>{brad.wins}</td>
              <td>{ehren.wins}</td>
              <td>{cam.wins}</td>
              <td>{adi.wins}</td>
            </tr>
            <tr>
              <th>Kills</th>
              <td>{brad.kills}</td>
              <td>{ehren.kills}</td>
              <td>{cam.kills}</td>
              <td>{adi.kills}</td>
            </tr>
            <tr>
              <th>Deaths</th>
              <td>{brad.deaths}</td>
              <td>{ehren.deaths}</td>
              <td>{cam.deaths}</td>
              <td>{adi.deaths}</td>
            </tr>
            <tr>
              <th>Top 10's</th>
              <td>{brad.top10}</td>
              <td>{ehren.top10}</td>
              <td>{cam.top10}</td>
              <td>{adi.top10}</td>
            </tr>
            <tr>
              <th>Win Rate</th>
              <td>{brad.winRate}</td>
              <td>{ehren.winRate}</td>
              <td>{cam.winRate}</td>
              <td>{adi.winRate}</td>
            </tr>
            <tr>
              <th>Matches Played</th>
              <td>{brad.matches}</td>
              <td>{ehren.matches}</td>
              <td>{cam.matches}</td>
              <td>{adi.matches}</td>
            </tr>
            <tr>
              <th>Minutes Played</th>
              <td>{brad.minutesPlayed}</td>
              <td>{ehren.minutesPlayed}</td>
              <td>{cam.minutesPlayed}</td>
              <td>{adi.minutesPlayed}</td>
            </tr>
          </tbody>
        </Table>
        <Image src={this.state.mapUrl} roundedCircle fluid />
        
        </Container>
    )
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { formVal: 'dampclamz'}
  }
  handleChange(event){
    this.setState({formVal: event.target.value});
  }
  handleSubmit(event){
    alert("This isn't a feature yet");
  }
  render(){
  return (
    <div className="App">
      <FortTable />
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.formVal} onChange={event => this.handleChange(event)}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
  }
}

export default App;
