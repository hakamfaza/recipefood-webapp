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
  containerAuth: {
    height: '100vh'
  },
  positionAuth: {
    position: 'fixed',
    height: '100vh',
    width: '100%'
  },

  titleLogo: {
    color: COLORS.primryColor,
    marginTop: '15px',
    fontWeight: '500',
    fontSize: '18px'
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

  // buttonPost: {
  //   height: '30px',

  // },

  bgVidio: {
    backgroundColor: '#efc81a',
    height: '120vh'
  }
};

export default styles;
