import './App.css';
import ProfileDashBoard from "./features/profile/ProfileDashBoard";
import {Route} from "react-router-dom";
import {Container} from "semantic-ui-react";
import ProfileForm from "./features/profile/profileForm/ProfileForm";

const App = () => (
    <>
        <Route exact path={'/'} component={ProfileDashBoard}/>
        <Route path={'/(.+)'} render={() => (
            <>
                <Container className="main">
                    <Route exact path={'/new'} component={ProfileForm}/>

                </Container>

            </>
        )}


        />
    </>
);

export default App;
