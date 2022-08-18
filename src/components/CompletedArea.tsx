import { View, Button, Image } from '@tarojs/components'
import './CompletedArea.scss'
import { useRecoilValue } from 'recoil'
import { avatarURL } from './../store'

export default function CompletedArea() {
  const myAvatar = useRecoilValue(avatarURL)
  const onClick = () => {
    console.log('onClick')
  }
  return (
    <View className='completedArea'>
      <Image className='newAvatar' src={myAvatar}></Image>
      <Button className='saveBtn' onClick={onClick}>保存最新头像</Button>
    </View>
  )
}
