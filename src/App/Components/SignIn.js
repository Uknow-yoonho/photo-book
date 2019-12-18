import React from 'react'
import { withStyles } from '@material-ui/core/styles'  
import { TextField, FormControl, 
  Button, Avatar, Dialog, Typography, createMuiTheme } from '@material-ui/core'
import { isMobile } from 'mobile-device-detect';
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from "@material-ui/styles";

const theme =  createMuiTheme({
});

const customStyle = theme => ({
  root: {
    height: '100vh',
    paddingTop : '15vh',
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
    width : '100%',
    marginTop : 15,
  },
  button : {
    width : '100%',
    marginTop : 20, color: 'white',
    backgroundColor: 'tomato',
  },
  underline: {
    '&:before': {
      borderBottomColor: '#eaeaea',
    },
    '&:after': {
      borderBottomColor: 'tomato',
    },
    '&:hover:before': {
      borderBottomColor: ['#aeaeae', '!important'],
    },
  },
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
            <ThemeProvider theme={theme}>
              <TextField type="password"
                placeholder="PASSWORD" 
                onChange={this.handleChange}
                InputProps={{classes: {underline: classes.underline}}}
              />
            </ThemeProvider>
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