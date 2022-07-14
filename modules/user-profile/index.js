import React, { useState } from "react"

import { slice } from "./store"
import { Button, Layout } from '../../components'
import { ProfileDetails, TermsConditions } from './components'

export const UserProfile = ({ route }) => {
  const [slide, setSlide] = useState(1);
  return (
    <Layout title="Profile Setup">
      {slide === 1 ? <TermsConditions /> : <ProfileDetails /> }
      <Button title="Next" onPress={() => setSlide(2)} />
    </Layout>
  )
}

export default {
  title: "userProfile",
  navigator: UserProfile,
  slice
}
