import React from 'react'

import { Button } from './BackButton.styled'

const BackButton = () => <Button onClick={() => window.history.back()}><span>←</span>Back</Button>

export default BackButton
