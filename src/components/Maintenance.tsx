import React, { useState } from 'react';
import useShoes from '../hooks/useShoes';
import usePins from '../hooks/usePins';

const Maintenance: React.FC = () => {
  const { shoes, createShoe, deleteShoe } = useShoes();
  const { pins, createPin, deletePin } = usePins();
  const [pinCount, setPinCount] = useState<number>(0);
  const [shoeSize, setShoeSize] = useState<number>(0);

  const handlePinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPinCount(parseInt(event.target.value));
  };

  const handleShoeSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShoeSize(parseInt(event.target.value));
  };

  const reportMissingPins = () => {
    console.log(`Reporting ${pinCount} missing pins`);
    deletePin(pinCount); // Slet det angivne antal pins
  };

  const orderNewPins = () => {
    createPin({ id: pinCount });
  };

  const reportMissingShoes = () => {
    console.log(`Reporting shoes of size ${shoeSize} missing`);
    deleteShoe(shoeSize); // Slet sko af den angivne størrelse
  };

  const orderNewShoes = () => {
    createShoe({ size: shoeSize });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1>Vedligehold</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Pins</h2>
          <div>
            <h3>Rapporter manglende pins</h3>
            <input
              type="number"
              value={pinCount}
              onChange={handlePinChange}
            />
            <button onClick={reportMissingPins}>OK</button>
          </div>
          <div>
            <h3>Bestil nye pins</h3>
            <input
              type="number"
              value={pinCount}
              onChange={handlePinChange}
            />
            <button onClick={orderNewPins}>OK</button>
          </div>
        </div>
        <div>
          <h2>Shoes</h2>
          <div>
            <h3>Rapporter manglende sko</h3>
            <input
              type="number"
              value={shoeSize}
              onChange={handleShoeSizeChange}
            />
            <button onClick={reportMissingShoes}>OK</button>
          </div>
          <div>
            <h3>Bestil nye sko</h3>
            <input
              type="number"
              value={shoeSize}
              onChange={handleShoeSizeChange}
            />
            <button onClick={orderNewShoes}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
