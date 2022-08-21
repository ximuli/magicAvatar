import { View, Button, Image, Canvas } from '@tarojs/components'
// import { $ } from '@tarojs/extend'
import './CompletedArea.scss'
import { useRecoilValue } from 'recoil'
import { avatarURL, operatingOption } from './../store'
import { getCanvasById } from './../shared/common'

export default function CompletedArea() {
  const myAvatar = useRecoilValue(avatarURL)
  const option = useRecoilValue(operatingOption)
  const handler = async () => {
    const canvas = await getCanvasById('#myCanvas')
    console.log('canvas', canvas)
  }
  if (option.img) {
    handler()
  }
  const onClick = () => {
    console.log('onClick')
  }
  return (
    <View className='completedArea'>
      <Canvas type="2d" id="myCanvas"></Canvas>
      <Image className='newAvatar' src={myAvatar}></Image>
      <Button className='saveBtn' onClick={onClick}>保存最新头像</Button>
    </View>
  )
}
