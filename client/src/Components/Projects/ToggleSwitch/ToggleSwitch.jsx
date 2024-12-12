import { useState } from 'react';

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        style={{
          width: '98vw',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          onClick={() => setToggle((prev) => !prev)}
          style={{
            display: 'flex',
            background: 'lightgrey',
            height: '70px',
            width: '200px',
            borderRadius: '100px',
            padding: '10px',
            alignItems: 'center',
            justifyContent: toggle ? 'flex-end' : 'flex-start',
            gap: '10px',
            fontSize: '25px',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              padding: '2px',
              borderRadius: '100px',
              background: toggle ? 'green' : 'red',
              height: '70px',
              width: '70px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            {toggle ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
