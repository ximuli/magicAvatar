import { View, Image } from '@tarojs/components'
import './SourceItem.scss'

export default function SourceItem(props) {
  console.log('SourceItem props', props)
  return (
    <View className='sourceItem'>
      <Image className='sourceItemImage' src={ props.sourceSrc }></Image>
    </View>
  )
}
