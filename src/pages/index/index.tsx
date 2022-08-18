import { View } from '@tarojs/components'
import './index.scss'
import OriginalArea from '../../components/OriginalArea'
import SourcesArea from '../../components/SourcesArea'
import OperatingArea from '../../components/OperatingArea'
import CompletedArea from '../../components/CompletedArea'

export default function Index() {
  return (
    <View className='index'>
      <OriginalArea></OriginalArea>
      <SourcesArea></SourcesArea>
      <OperatingArea></OperatingArea>
      <CompletedArea></CompletedArea>
    </View>
  )
}
