import React from 'react'
import ProfilPhoto from './profile/ProfilPhoto'
import FullName from './profile/FullName'
import Address from './profile/Address'


function Main() {
    return (
      <React.Fragment>
          <ProfilPhoto />
          <FullName />
          <Address />
      </React.Fragment>
    );
  }
  
  export default Main;