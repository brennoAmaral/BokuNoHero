import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Motivation from '../../images/svg/motivation'
import Loupe from '../../images/svg/loupe'
import Blocks from '../../images/svg/blocks'
import * as style from './style'


export default function Menu() {
  return (
    
    <style.NavBar>
      <style.Button>
        <Motivation/>
        <p>
          Motivation
        </p>
      </style.Button>

      <style.Button>
        <Loupe/>
        <p>
          Search Heroes
        </p>
      </style.Button>

      <style.Button >
        <Blocks/>
        <p>
          Block Search
        </p>
      </style.Button>
    </style.NavBar>
  );
}
