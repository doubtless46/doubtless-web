import Login from "./Login"
import svg from '../../assets/loginsvg.jpg'
const Main = () => {
  return (
    <div className="login-container">
      <div className="button-comp">
      <h1 className="login-heading">Welcome to Doubtless</h1>
      <p className="login-description">Ignite your path to become DoubtLess !</p>
            <Login/>
      </div>
      <div className="svg-comp">
          <img src={svg}/>
      </div>
    </div>
  )
}

export default Main
