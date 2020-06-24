import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./common.scss";
import { RenderComponent } from "./helper/renderComp";
import MenuList from "./component/leftMenu/menuList";
import Header from "./component/header/header";
import LeftMenu from "./component/leftMenu/leftMenu";

const Loading = () => {
  return <div>...</div>;
};
ReactDOM.render(
  <Router>
    <Header />
    <div className="main-wrapper">
      <LeftMenu />
      <React.Suspense fallback={<Loading />}>
        <main>
          {MenuList.map((main) => {
            return !!main.subMenu && main.subMenu.length > 0 ? (
              main.subMenu.map((sub) => (
                <Route
                  key={sub.name}
                  path={`/${sub.name}`}
                  render={() => {
                    return <RenderComponent name={sub.name} />;
                  }}
                />
              ))
            ) : (
              <Route
                key={main.name}
                path={`/${main.name}`}
                render={() => {
                  return <RenderComponent name={main.name} />;
                }}
              />
            );
          })}
        </main>
      </React.Suspense>
    </div>
  </Router>,
  document.getElementById("root")
);
