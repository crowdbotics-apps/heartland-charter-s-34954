import React, { useState } from "react"

import { slice } from "./store"
import { Button, Layout } from '../../components'
import { ProfileDetails, TermsConditions } from './components'

export const UserProfile = ({ navigation }) => {
  const [slide, setSlide] = useState(1);
  const onNext = () => {
    if(slide === 2) {
      navigation.navigate("Root");
    }
    setSlide(2)
  }
  return (
    <Layout title="Profile Setup">
      {slide === 1 ? <TermsConditions /> : <ProfileDetails /> }
      <Button title="Next" onPress={onNext} />
    </Layout>
  )
}

export default {
  title: "userProfile",
  navigator: UserProfile,
  slice
}
