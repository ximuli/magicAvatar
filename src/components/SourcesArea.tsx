// import React from 'react'
import { View } from '@tarojs/components'
import './SourcesArea.scss'
import SourceItem from './SourceItem'
import flag from './../assets/img/flag.png'

export default function SourcesArea() {
  return (
    <View className='sourcesArea'>
      <SourceItem sourceSrc={ flag } />
    </View>
  )
}
