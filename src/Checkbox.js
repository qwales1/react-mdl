import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

var Checkbox = (props) => {
    var { checked, disabled, label, ripple, onChange } = props;

    var classes = classNames('mdl-checkbox mdl-js-checkbox', {
        'mdl-js-ripple-effect': ripple
    });

    return (
        <label className={classes}>
            <input
                type="checkbox"
                className="mdl-checkbox__input"
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            {label && <span className="mdl-checkbox__label">{label}</span>}
        </label>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    ripple: PropTypes.bool
};

export default mdlUpgrade(Checkbox);
