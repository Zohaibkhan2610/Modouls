import React from 'react';
import { ButtonModule0} from './ButtonModules1';
import './ButtonModules1.css'
const ButtonModulesTable = () => {
  return (
    <table className="w-full border-collapse">
      <caption className="text-lg font-bold p-4 bg-gray-100 bg-gradient-to-tl from-blue-400 to-red-500 text-white">Neon Button Modules 0-16</caption>
      <tr className='grid grid-cols-3 bg-black'>
        <ButtonModule0/>
        <button className="custom-btn btn-1">Button 1</button>
        <button className="custom-btn btn-2">Button 2</button>
        <button className="custom-btn btn-3">Button 3</button>
        <button className="custom-btn btn-4">Button 4</button>
        <button className="custom-btn btn-5"><span>Button 5</span></button>
        <button className="custom-btn btn-6"><span>Button 6</span></button>
        <button className="custom-btn btn-7"><span>Button 7</span></button>
        <button className="custom-btn btn-8">Button 8</button>
        <button className="custom-btn btn-9">Button 9</button>
        <button className="custom-btn btn-10">Button 10</button>
        <button className="custom-btn btn-11">Button 11</button>
        <button className="custom-btn btn-12"><span>Click!</span><span>Button 12</span></button>
        <button className="custom-btn btn-13">Button 13</button>
        <button className="custom-btn btn-14">Button 14</button>
        <button className="custom-btn btn-15">Button 15</button>
        <button className="custom-btn btn-16"><span>Button 16</span></button>


      </tr>
    </table>
  );
};

export default ButtonModulesTable;




