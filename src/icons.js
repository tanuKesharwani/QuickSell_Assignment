import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { GiProgression,GiEgyptianProfile } from 'react-icons/gi';

import {BsChatSquareDots,  BsCircle,BsCircleHalf,BsXCircleFill, BsFillExclamationSquareFill } from 'react-icons/bs';
import { MdSignalCellular1Bar,MdSignalCellular2Bar,MdSignalCellular3Bar} from 'react-icons/md';

const Style = {
  fontSize: '20px',
  color: 'gray',
};

const urgentStyle={
    fontSize:'20px',
    color:'red',
}
const options = new Map([
  ['profile',<GiEgyptianProfile style={Style} />],
  ['Backlog', <BsChatSquareDots    style={Style} />],
  ['Todo', <BsCircle style={Style} />],
  ['In progress', <GiProgression style={Style} />],
  ['Done', <FaCheckCircle style={Style} />],
  ['Canceled', <BsXCircleFill style={Style} />],
  [0, <BsChatSquareDots style={Style} />],
  [1, <MdSignalCellular1Bar style={Style} />],
  [2, <MdSignalCellular2Bar style={Style} />],
  [3, <MdSignalCellular3Bar style={Style} />],
  [4, <BsFillExclamationSquareFill style={urgentStyle} />],



]);

export default options;
