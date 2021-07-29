import React from "react";
import { chartSettings, pointSettings } from "../config";
import { Input } from "./input";
import "../styles/form.css";
import { useAppContext } from "../context";

export const Form: React.FC = () => {
  const [label, setLabel] = React.useState("");
  const [dx, setDx] = React.useState(-1);
  const [dy, setDy] = React.useState(-1);
  const { addPoint } = useAppContext();

  const submitForm = () => {
    if (!label || !dx || !dy) {
      alert("No blank space must be left");

      return;
    }

    if (dx < 0 || dx > chartSettings.width - pointSettings.width - chartSettings.borderWidth - 1) {
      alert(
        `X must be between 0 and ${
          chartSettings.width - pointSettings.width - chartSettings.borderWidth - 1
        }`,
      );

      return;
    }

    if (
      dy < 0 ||
      dy > chartSettings.height - pointSettings.height - chartSettings.borderWidth - 1
    ) {
      alert(
        `Y must be between 0 and ${
          chartSettings.height - pointSettings.height - chartSettings.borderWidth - 1
        }`,
      );

      return;
    }

    if (label.length > 15) {
      alert("The length of the label must be less than 15");

      return;
    }

    addPoint({ id: -1, x: dx, y: dy, label });
  };

  return (
    <div className="form-container">
      <h2>Add Point</h2>
      <div className="inputs-container">
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLabel(event.target.value)}
          type="text"
          label="Label"
        />
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDx(Number(event.target.value))
          }
          type="number"
          label="X"
        />
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDy(Number(event.target.value))
          }
          type="number"
          label="Y"
        />
      </div>
      <div className="button-container">
        <div onClick={submitForm}>Add Point</div>
      </div>
    </div>
  );
};
