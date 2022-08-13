import { View, Text, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
// import React from 'react'
import './OriginalArea.scss'

export default function OriginalArea() {
  // 如果发现本地缓存有旧的头像，那就直接使用
  let oldValue = Taro.getStorageSync('avatarUrl')

  const [myAvatar, setMyAvatar] = useState(oldValue || '')

  const onChooseAvatar = (avatarInfo) => {
    const avatarUrl = avatarInfo.detail.avatarUrl
    console.log('avatarInfo', avatarUrl)
    setMyAvatar(avatarUrl)
    // 获取一次后即存储到本地
    Taro.setStorageSync('avatarUrl', avatarUrl)
  }

  return (
    <View className='originalArea'>
      { !myAvatar && <Button openType='chooseAvatar' onChooseAvatar={onChooseAvatar}>点击获取当前头像</Button>}
      { myAvatar && <Image className='myAvatar' src={myAvatar} /> }
    </View>
  )
}
