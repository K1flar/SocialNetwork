import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SideBar from './Components/SideBar/SideBar';
import Profile from './Components/Profile/Profile';

function App() {
    return (
        <div>
            
            <Header />

            <main className='main'>
                <div className='container'>
                    <SideBar />

                    <div className='mainContent'>
                        <Profile />
                    </div>
                </div>
            </main>

            <Footer />

        </div>
    );
}

export default App;

