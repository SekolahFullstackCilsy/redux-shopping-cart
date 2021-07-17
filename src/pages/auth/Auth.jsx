import React, {useState} from 'react'
import {AuthStyled, TabStyled, Tab, TabContent} from './AuthStyles'

const Auth = () => {
  const [tab, setTab] = useState(0)
  const handleTab = (tabIndex) => setTab(tabIndex)

  return (
    <AuthStyled>
      <TabStyled>
        {tab === 0 
          ? (<Tab onClick={() => handleTab(0)} active>Sign Up</Tab>) 
          : <Tab onClick={() => handleTab(0)}>Sign Up</Tab>
        }
        {tab === 1 
          ? (<Tab onClick={() => handleTab(1)} active>Log In</Tab>) 
          : <Tab onClick={() => handleTab(1)}>Log In</Tab>
        }
      </TabStyled>
      <TabStyled>
        {tab === 0 ? (
          <TabContent><h2>Sign Up</h2></TabContent>
          ) : (
            <TabContent><h2>Log In</h2></TabContent>
        )}
      </TabStyled>
    </AuthStyled>
  )
}

export default Auth