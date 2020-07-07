import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import MenuList from "./menuList";
import { classnames } from "../../helper/utils";
import "./leftMenu.scss";

export default () => {
  const history = useHistory();
  return (
    <aside className="docs-left-menu">
      <ul>
        {MenuList.map((main) => {
          return (
            <li key={main.name}>
              {!!main.subMenu && main.subMenu.length > 0 ? (
                <React.Fragment>
                  <div className="main-title">{main.title}</div>
                  <ul>
                    {main.subMenu.map((sub) => (
                      <li
                        key={sub.name}
                        className={classnames(
                          "menu-item",
                          !!useRouteMatch(`/${sub.name}`) ? "active" : ""
                        )}
                        onClick={() => {
                          history.push(`/${sub.name}`);
                        }}
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ) : (
                <div
                  className={classnames(
                    "menu-item",
                    !!useRouteMatch(`/${main.name}`) ? "active" : ""
                  )}
                  onClick={() => {
                    history.push(`/${main.name}`);
                  }}
                >
                  {main.title}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
