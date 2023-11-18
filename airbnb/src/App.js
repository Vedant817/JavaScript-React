// import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import Main from './Main';
import Card from './Card';
import Contact from './Conatct';

function App() {
  // const card=data.map(item=>{
  //   return (
  //     <Card img ------- /> OR <Card key=item.id  item={item} OR {...item}
  //   )
  // })

  return (
    <div className="App">
      <NavBar />
      <Main />
      {/* {card} */}
      <Card />
      <div className='contacts'>
        <Contact img="./cardPic.jpg" name="Mr. Walter White" phone="(222)555-1234" email="white@yahoo.com" />
        <Contact img="./cardPic.jpg" name="Mr. Mike" phone="(222)555-1235" email="mike@yahoo.com"/>
        <Contact img="./cardPic.jpg" name="Mr. Dustin" phone="(222)555-1236" email="dustin@yahoo.com"/>
        <Contact img="./cardPic.jpg" name="Mr. Loki" phone="(222)555-1237" email="loki@yahoo.com"/>
      </div>
    </div>
  );
}

export default App;
