import { COLORS } from '../../utils/colors';

const styles = {
  nav: {
    fontSize: '18px',
    fontWeight: '500',
    padding: '10px'
    // fontFamily: 'airbnb'
  },
  navtext: {
    color: COLORS.textPrimaryColor,
    marginLeft: '50px'
  },
  navIcon: {
    fontSize: '35px',
    marginRight: '10px'
  },
  footerContainer: {
    position: 'relative',
    width: '100%',
    height: '60vh',
    backgroundColor: COLORS.secondaryColor
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '60vh',
    color: COLORS.textPrimaryColor
  },
  txtTitle: {
    fontSize: '50px'
  },
  txtColor: {
    color: '#707070'
  },
  footerList: {
    position: 'absolute',
    bottom: '0px',
    display: 'flex',
    fontSize: '14px',
    justifyContent: 'space-around',
    width: '30%',
    padding: '12px',
    listStyleType: 'none'
  },
  footerLink: {
    textDecoration: 'none',
    color: '#707070'
  },
  boxTextCreadit: {
    display: 'flex',
    flexDirection: 'center',
    justifyContent: 'center'
  },
  txtCreadit: {
    position: 'absolute',
    bottom: '12px',
    textAlign: 'center'
  },
  cardContainer: {
    position: 'relative',
    borderRadius: '15px'
  },
  cardImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '15px'
  },
  cardTitle: {
    position: 'absolute',
    width: '105px',
    left: '15px',
    bottom: '10px',
    fontWeight: '600'
  },
  containerAuth: {
    height: '100vh'
  },
  positionAuth: {
    position: 'fixed',
    height: '100vh',
    width: '100%'
  },
  containerAuthLogo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(
    to right bottom,
    rgba(239, 200, 26, .7),
    rgba(239, 200, 26, .7)), url("https://s3-alpha-sig.figma.com/img/86b2/055d/76c7e3577554580136d5f65222046a21?Expires=1650844800&Signature=KohSGDqTJy4D1hB~ifM2Auem4N~dRnmCYMHoqrbx6L1hlUp07BtAI2mAJNDwP5b7O1XKW8834TuhSFSWYBRY46tmpVLMr6F~qlOD6fvlOcre4ecae9HFTagCRVWI-NqXFQxE-xi-a9AY6iRUoEwfaBtVKR~XHvd4MBxCg4OTpEYx7u4EaHXbCF08vQYtShxqz2P6OzrQOdAKy3S4V0sysVjkBA2qzxwhn2bCNuSICSP3wllcEcZBWyfVVfKiRLBcnQn-kN39827oMGYTTxDs9oAboyBg66fvENWhPQ6C53tCSl4kTsX6NBODenBO1yqimaCqTdNnE26Lp-9PM4dG4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectFit: 'cover',
    height: '100vh',
    width: '100%',
    margin: '0px'
  },
  logo: {
    width: '25%',
    height: '25%'
  },
  titleLogo: {
    color: COLORS.primryColor,
    marginTop: '15px',
    fontWeight: '500',
    fontSize: '18px'
  },
  auth: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  formInput: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    right: '0'
  },
  authTitle: {
    color: COLORS.secondaryColor,
    fontWeight: 'bold'
  },
  formWidth: {
    width: '45%'
  },
  authTxt: {
    color: '#8692A6',
    margin: '20px 0 30px 0'
  },
  txtLabel: {
    width: '100%',
    display: 'flex',
    marginTop: '20px',
    color: '#696F79',
    fontSize: '16px',
    fontWeight: '500'
  },
  authInput: {
    height: '40px',
    width: '100%'
  },
  buttonSubmit: {
    width: '100%',
    backgroundColor: COLORS.secondaryColor,
    height: '40px',
    border: 'none',
    marginTop: '30px'
  },
  checkboxAuth: {
    position: 'relative',
    display: 'flex'
  },
  check: {
    accentColor: '#EFC81A'
  },
  textChecbox: {
    color: '#696F79',
    fontSize: '14px'
  },
  positionJumbotron: {
    position: 'fixed',
    width: '50%',
    height: '100vh',
    zIndex: '99'
  },
  containerSignUp: {
    position: 'relative',
    height: '120vh'
  },
  authSignup: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '120vh'
  },
  txtAuth: {
    color: '#8692A6',
    marginTop: '24px',
    fontSize: '13px'
  },
  txtAuthAction: {
    fontSize: '13px',
    textDecoration: 'none',
    color: COLORS.secondaryColor
  },
  txtForgotPassword: {
    display: 'flex',
    justifyContent: 'end',
    color: '#8692A6',
    marginTop: '16px',
    fontSize: '13px',
    textDecoration: 'none'
  },
  containerHome: {
    position: 'relative'
  },
  bgContent: {
    height: '100vh',
    backgroundColor: COLORS.primryColor
  },
  bgDecoration: {
    height: '100vh',
    backgroundColor: COLORS.secondaryColor
  },
  boxAction: {
    position: 'absolute',
    top: '200px',
    left: '100px',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  titleContent: {
    fontSize: '55px',
    color: '#2E266F',
    width: '80%'
  },
  search: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  iconSearch: {
    fontSize: '35px',
    position: 'absolute',
    left: '5px',
    top: '25px'
  },
  searchInput: {
    height: '60px',
    paddingLeft: '40px',
    width: '80%',
    fontSize: '18px',
    backgroundColor: '#EFEFEF',
    marginTop: '10px'
  },
  decoration: {
    position: 'relative'
  },
  bgVector: {
    height: '300px',
    marginLeft: '30px',
    width: 'auto'
  },
  vegetable: {
    position: 'absolute',
    left: '20px',
    top: '-200px',
    height: '500px',
    width: 'auto'
  },
  foodOne: {
    position: 'absolute',
    left: '20px',
    top: '-100px',
    height: '500px',
    width: 'auto'
  }
};

export default styles;
