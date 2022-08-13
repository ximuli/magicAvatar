import { View, Button } from '@tarojs/components'
import './CompletedArea.scss'

export default function CompletedArea() {
  const onClick = () => {
    console.log('onClick')
  }
  return (
    <View className='completedArea'>
      {/* <Image src={  }></Image> */}
      <View className='newAvatar'>

      </View>
      <Button className='saveBtn' onClick={ onClick }>保存最新头像</Button>
    </View>
  )
}
