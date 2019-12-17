import React from 'react'
import { withStyles } from '@material-ui/core/styles'  
import { TextField, FormControl, 
  Button, Avatar, Dialog, Typography } from '@material-ui/core'
import { isMobile } from 'mobile-device-detect';
import { inject, observer } from 'mobx-react'

const customStyle = theme => ({
  root: {
    height: '100vh',
    paddingTop : '20vh',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent : 'center',
    margin: 30,
  },
  avatar : {
    width : 100, height: 100
  },
  formContainer : {
    display:'flex', justifyContent:'center'
  },
  form : {
    width : isMobile? '70vw':'30vw',
  },
  formcontrol : {
    width : '100%'
  },
  button : {
    width : '100%',
    marginTop : 10, color: 'white',
    backgroundColor: 'tomato',
  }
})

const imagePath = process.env.PUBLIC_URL + '/assets/';

@inject('authStore')
@observer
class SignIn extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value : '',
      open : false
    }
  }

  handleSubmit = () => {
    const { authStore } = this.props
    const { value } = this.state
    authStore.signIn(value) ? {} : this.setState({open:true})
  }

  handleChange = (e) => {
    this.setState({value:e.target.value})
  }

  onClose = () => {
    this.setState({open:false})
  }

  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <div className={classes.root} >
        <div className={classes.avatarContainer} >
          <Avatar className={classes.avatar} alt="tomato" src={`${imagePath}tomato.jpeg`} />
        </div>
        <div className={classes.formContainer}>
          <div className={classes.form}> 
            <FormControl className={classes.formcontrol}>
              <TextField type="password"
                placeholder="PASSWORD" 
                onChange={this.handleChange}
              />
            </FormControl>
            <Button onClick={this.handleSubmit} 
            className={classes.button}>LOGIN</Button>
          </div>
        </div>

        <Dialog open={open}
        onClose={this.onClose}>
          <Typography 
          style={{fontSize: 20, padding: 10,
          color: 'tomato'}}>
            INCORRECT PASSWORD
          </Typography>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(customStyle)(SignIn)