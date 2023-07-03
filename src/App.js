import { Route, Switch } from "react-router-dom";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import Layout from './components/layout/Layout'

function App() {
    return (
        <Layout>
            <Switch>
                {/* ici, le props exact vérifie que le nom de la route match exactement afin de savoir quel component display  */}
                <Route path='/' exact>
                    <AllMeetupsPage />
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage />
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
