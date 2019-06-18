import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { TapBar } from '@components'
import { observer, inject } from '@tarojs/mobx'
import Profile from './profile'
// import Menu from './menu'
import Opers from './opers'
// import Activity from './activity'
import './user.scss'

@inject('user')
@inject('cart')
@observer
class User extends Taro.PureComponent {
  config = {
    navigationBarTitleText: '个人中心'
  }

  componentDidShow() {
    const { user, cart } = this.props

    user.dispatchUser()
    cart.dispatchCartNum()
  }

  handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/user-login/user-login'
    })
  }

  render () {
    const { user } = this.props

    return (
      <View className='user page-con'>
        <ScrollView
          scrollY
          className='user__wrap'
        >
          <Profile userInfo={user.userInfo} />
          <Opers></Opers>
          {/* <Menu />
          {userInfo.login &&
            <View className='user__logout' onClick={this.handleLogin}>
              <Text className='user__logout-txt'>切换账号</Text>
            </View>
          }
          <View className='user__empty' /> */}
        </ScrollView>
        {/* <View className='user__activity'>
          <Activity />
        </View> */}
        <TapBar></TapBar>
      </View>
    )
  }
}

export default User
