import { COLORS } from '../../utils/colors';

const styles = {
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
    width: '300px',
    height: '300px',
    // border: 'solid 1px #707070',
    borderRadius: '15px',
    marginBottom: '30px',
    marginTop: '30px'
  },
  cardImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '15px'
  },
  cardTitle: {
    position: 'absolute',
    width: '170px',
    left: '15px',
    bottom: '10px',
    fontWeight: '600',
    color: '#3F3A3A'
  },
  cardMedium: {
    position: 'relative',
    height: '450px',
    width: '450px'
  },
  cardImageMedium: {
    width: '450px',
    height: '450px',
    objectFit: 'cover',
    borderRadius: '15px'
  },
  cardTitleMedium: {
    position: 'absolute',
    width: '105px',
    left: '25px',
    color: COLORS.primryColor,
    bottom: '10px',
    fontWeight: '600'
  },
  cardSmall: {
    position: 'relative',
    height: '200px',
    width: '320px',
    marginRight: '20px',
    marginTop: '50px'
  },
  cardImageSmall: {
    height: '200px',
    width: '320px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  cardTitleSmall: {
    position: 'absolute',
    width: '105px',
    left: '15px',
    color: COLORS.primryColor,
    bottom: '-5px',
    fontWeight: '500'
  },

  cardListVidio: {
    position: 'relative',
    width: '220px',
    height: '100px',
    borderRadius: '5px',
    marginTop: '20px'
  },
  smallVidio: {
    borderRadius: '5px',
    position: 'relative'
  },
  titleCardVidio: {
    position: 'relative'
  },
  textDate: {
    fontSize: '10px',
    color: '#AAAAAA'
  },

  boxCardRecipeProfile: {
    position: 'relative',
    width: '320px'
  },
  boxActionRecipe: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
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
    top: '250px',
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
  boxSearch: {
    width: '100%'
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
    width: '350px'
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
  },
  boxPopular: {
    backgroundColor: COLORS.primryColor,
    marginTop: '100px'
  },
  mtMedium: {
    marginTop: '20px'
  },
  titlePopular: {
    marginTop: '40px',
    marginLeft: '50px',
    color: '#2E266F',
    borderLeft: `#EFC81A solid 10px`,
    paddingLeft: '20px'
  },
  imagePopularContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px'
  },
  containerNewRecipe: {
    position: 'relative'
  },
  bgObject: {
    width: '350px',
    height: '450px',
    marginLeft: '-12px',
    backgroundColor: COLORS.secondaryColor
  },
  boxCard: {
    position: 'absolute',
    top: '60px',
    left: '100px'
  },
  boxAboutRecipe: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  aboutTitle: {
    color: '#3F3A3A',
    width: '400px',
    fontWeight: 'bold'
  },
  textAbout: {
    color: '#3F3A3A',
    width: '370px',
    marginTop: '20px'
  },
  line: {
    borderBottom: 'solid 2px #6F6A40',
    width: '100px',
    marginTop: '15px'
  },
  boxOfCard: {
    marginTop: '30px',
    marginBottom: '100px'
  },
  mbMedium: {
    marginBottom: '100px'
  },

  // Style detail page
  detailContainer: {
    position: 'relative',
    width: '70%'
  },
  detailImage: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '70px'
  },
  titleDetailRecipe: {
    color: COLORS.textPrimaryColor,
    fontWeight: '600'
  },
  boxImageDetail: {
    position: 'relative',
    width: '650px',
    height: '400px'
  },
  imageRecipe: {
    width: '650px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '20px',
    marginTop: '30px'
  },
  boxIcon: {
    position: 'absolute',
    bottom: '1px',
    right: '10px',
    padding: '5px'
  },
  bookmarkIcon: {
    fontSize: '40px',
    color: COLORS.primryColor,
    padding: '5px',
    backgroundColor: COLORS.secondaryColor,
    borderRadius: '5px'
  },
  likeIcon: {
    fontSize: '40px',
    color: COLORS.secondaryColor,
    padding: '5px',
    backgroundColor: COLORS.primryColor,
    borderRadius: '5px',
    marginLeft: '10px'
  },
  containerRecipe: {
    position: 'relative',
    marginTop: '50px'
  },
  titleRecipe: {
    color: '#3F3A3A',
    marginTop: '30px'
  },
  playButton: {
    width: '250px',
    height: '50px',
    backgroundColor: COLORS.secondaryColor,
    fontSize: '24px',
    color: COLORS.primryColor,
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    marginLeft: '15px'
  },
  containerComment: {
    marginTop: '100px'
  },
  boxComment: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textAreaComment: {
    backgroundColor: '#F6F5F4',
    border: 'none',
    padding: '20px 0 0 20px',
    fontSize: '20px',
    minHeight: '200px',
    maxHeight: '200px',
    width: '100%'
  },
  buttonPost: {
    marginTop: '50px',
    width: '300px',
    height: '40px',
    backgroundColor: COLORS.secondaryColor,
    border: 'none',
    color: COLORS.primryColor,
    borderRadius: '3px'
  },
  boxUserComment: {
    position: 'relative',
    marginTop: '30px'
  },
  boxCommentUser: {
    position: 'relative',
    marginTop: '20px',
    marginBottom: '200px',
    display: 'flex',
    alignItems: 'center'
  },
  userComment: {
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    objectFit: 'cover'
  },
  userAndComment: {
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column'
  },
  titleUser: {
    marginTop: '15px',
    position: 'relative',
    fontWeight: 'bold'
  },
  textComment: {
    marginTop: '-5px'
  },

  // Styles Profile
  profile: {
    postition: 'relative'
  },
  containerProfile: {
    position: 'relative'
  },
  boxUserProfile: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '100px'
  },
  userProfile: {
    position: 'relative',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  userImage: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  iconLink: {
    position: 'absolute',
    bottom: '30px',
    right: '20px'
  },
  editIcon: {
    fontSize: '20px',
    color: COLORS.secondaryColor
  },
  titleUserProfile: {
    fontSize: '26px',
    fontWeight: 'bold'
  },
  boxRecipeAction: {
    marginTop: '80px'
  },
  titleRecipeAction: {
    border: 'none'
  },
  boxCardRecipe: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '100px'
  },
  recipeAction: {
    border: 'none',
    cursor: 'pointer'
  },

  // Add Recipe
  containerAddRecipe: {
    position: 'relative'
  },
  boxAddRecipe: {
    position: 'relative',
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputImage: {
    marginTop: '150px',
    width: '100%',
    height: '300px',
    backgroundColor: '#F6F5F4',
    borderRadius: '5px'
  },
  titleInput: {
    height: '60px',
    border: 'none',
    backgroundColor: '#F6F5F4',
    borderRadius: '5px',
    width: '100%',
    marginTop: '50px',
    paddingLeft: '20px'
  },
  ingredientsInput: {
    minHeight: '250px',
    border: 'none',
    backgroundColor: '#F6F5F4',
    borderRadius: '10px',
    width: '100%',
    marginTop: '50px',
    paddingLeft: '20px',
    paddingTop: '20px'
  },
  errPasword: {
    fontSize: '12px',
    display: 'none',
    marginTop: '-12px',
    color: 'red'
  },
  displayErrPasword: {
    fontSize: '12px',
    display: 'flex',
    marginTop: '-12px',
    color: 'red'
  },
  // buttonPost: {
  //   height: '30px',

  // },

  // style detail vidio
  vidioContainer: {
    overflowY: 'hidden'
  },
  bgVidio: {
    backgroundColor: COLORS.secondaryColor,
    height: '120vh'
  },
  containerMainVidio: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  mainVidio: {
    marginTop: '-30px'
  },
  titleVidio: {
    width: '500px'
  },
  containerListVidio: {
    position: 'relative',
    width: '20%',
    height: '100vh'
  },
  boxListVidio: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
  }
};

export default styles;
