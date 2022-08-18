import { RecoilRoot } from 'recoil'
import './app.scss'

export default function App(props) {
  return (
    <RecoilRoot>
      { props.children }
    </RecoilRoot>
  )
}
