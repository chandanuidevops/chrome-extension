
import './App.css';
function App() {
  const appUrl = 'https://uatweb.ysil.in'
  const links = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'Dashboard',
      url: '/dashboard'
    },
    {
      id: 3,
      name: 'Orders',
      url: '/orders'
    },
    {
      id: 4,
      name: 'Market Stats',
      url: '/marketStats'
    },
    {
      id: 5,
      name: 'Holding',
      url: '/holdings'
    },
    {
      id: 6,
      name: 'Mutual Funds',
      url: '/mfunds'
    },
    {
      id: 7,
      name: 'Research Call',
      url: '/research'
    },
    {
      id: 8,
      name: 'Funds/Reports',
      url: '/fundsRep'
    },
  ];
  const navigateUrl = (path) => {
    window.open(`${appUrl}${path}`, '_blank')

  }
  return (
    <div className="App">
      <div className='logo'   >
        <img src='https://uatweb.ysil.in/static/media/logo.6a8d6f56.png' alt='logo' />
      </div>
      <div className='nav' >
        {
          links.map(ele => (
            <button key={ele.id} onClick={() => navigateUrl(ele.url)} className='nav__btn'  >{ele.name}</button>
          ))
        }



      </div>
    </div>
  );
}

export default App;
