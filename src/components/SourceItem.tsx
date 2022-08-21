import { View, Image } from '@tarojs/components'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { operatingOption } from './../store'
import './SourceItem.scss'

export default function SourceItem(props) {
  const [active, setActive] = useState('')
  const [option, setOption] = useRecoilState(operatingOption)
  const onClick = () => {
    if (active) {
      setActive('')
      setOption({
        ...option,
        img: ''
      })
    } else {
      setActive('active')
      setOption({
        ...option,
        img: props.sourceSrc
      })
    }
  }
  return (
    <View className={ `sourceItem ${active}` } onClick={ onClick }>
      <Image className='sourceItemImage' src={ props.sourceSrc }></Image>
    </View>
  )
}
