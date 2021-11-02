import { useState } from "react";
import { Alert } from "react-bootstrap"
import { useDispatch} from "react-redux";
import { clearMessage } from "../../redux/actions/actionCreators";
interface IProps{
  message:string;
  code?:number
}

const LoginAlert = (props:IProps) => {
    const [show, setShow] = useState(true);
    //const message = useSelector((state: RootState) => state.messages.message)
    const dispatch = useDispatch()
    const handleClose = ()=>{
      setShow(false);
      dispatch(clearMessage());
      
    }
    if (show) {
        return (
          <Alert variant={`${(props.code===200 || props.code===201)? 'success':"danger"}`} onClose={handleClose} dismissible transition>
            {props.code===200 && 
            <Alert.Heading >{props.message}</Alert.Heading>
            }
            {props.code===201 && 
            <Alert.Heading >{props.message}</Alert.Heading>
            }
            {props.code===201 && 
            <p>
            Use your credentials to login
          </p>
            }
            {props.code===400 && 
            <Alert.Heading >{props.message}</Alert.Heading>
            }
            {props.code===400 && 
            <p>
            Please use a valid email/password
          </p>
            } 
          </Alert>
        );
      }
      return null;
    }

export default LoginAlert
