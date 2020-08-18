import React from "react";

import "./App.scss";
import { NumberDisplay } from "../NumberDisplay/NumberDisplay";

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <NumberDisplay value={0} />
        <div className="Face">
          <span role="img" aria-label="Smiled emoji">
            😃
          </span>
        </div>
        <NumberDisplay value={23} />
      </div>

      <div className="Body">Body</div>
    </div>
  );
};
