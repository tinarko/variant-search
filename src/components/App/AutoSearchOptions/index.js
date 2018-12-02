import React from 'react';

function AutoSearchOptions({ options = [], onClick = () => () => {} }) {
  return (
    <div className="AutoSearchOptions__component" style={styles.wrapper}>
      {options.map((option, index) => {
        return (
          <div onClick={onClick(option)} style={styles.option} key={index}>
            {option}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'absolute'
  },
  option: {
    background: 'white',
    padding: '10px 40px'
  }
};

export default AutoSearchOptions;
