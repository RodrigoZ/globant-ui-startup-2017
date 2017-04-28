import React from 'react';
import Header from '../../components/Header/Header';
import FavoriteSongsContainer from '../../components/FavoriteSongsContainer/FavoriteSongsContainer';
import Footer from '../../components/Footer/Footer';
import InputSearch from'../../components/InputSearch/InputSearch';
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';

class Home extends React.Component{

    render() {

        return(
            <div className='content'>

                <Header />
                <Title texts="Some title" />
                <Subtitle />
                <InputSearch />
                <FavoriteSongsContainer />
                <Footer className="footer" text="&copy; Globant Bootcamp 2017" />

            </div>
        )

    }

}

export default Home;
