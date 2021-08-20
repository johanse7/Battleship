import { BrowserRouter, Switch, Route } from "react-router-dom"
import BoardGamePage from "../pages/BoardGamePage"
import ConfigGamePage from "../pages/ConfigGamePage"
import MainLayout from "../components/theme/Layout/MainLayout"
import PlayedGamesPage from "../pages/PlayedGamesPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route exact path={["/", "/settings"]}>
            <ConfigGamePage />
          </Route>
          <Route exact path={"/board"} component={BoardGamePage} />
          <Route exact path={"/playedlist"} component={PlayedGamesPage} />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
