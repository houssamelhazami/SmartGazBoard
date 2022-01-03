import React from "react";
import { func, number, bool } from "prop-types";

function Burner({ id, disabled, onBurnerStart, min, max, defaultValue, step }) {
    return (
        <div className="burner">
            <h4 className="item-heading">#{id}</h4>
            <img alt="" className="card-img" src="https://cdn4.iconfinder.com/data/icons/dishes-signes-glyph/64/148_stove-gas-hob-burner-cooker-1024.png" />
            <div className="burner-start">
                <h4 className="item-heading">Start</h4>
                <input
                    className="burner-controller"
                    id={id}
                    disabled={disabled}
                    onChange={onBurnerStart}
                    name={id}
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={defaultValue}
                    step={step} />
            </div>
        </div>
    );
}

Burner.propTypes = {
    id: number.isRequired,
    disabled: bool.isRequired,
    onBurnerStart: func.isRequired,
    min: number.isRequired,
    max: number.isRequired,
    defaultValue: number.isRequired,
    step: number.isRequired
};

export default Burner;