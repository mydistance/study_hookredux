// index.js
import React from 'react';
import ReactDOM from 'react-dom';

import ShowArea from '../components/redux-test/ShowArea';
import Buttons from '../components/redux-test/Buttons';
import { Color } from '../components/redux-test/Color';


const View = () => {
    return (

        <>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </>

    )


}

export default View

