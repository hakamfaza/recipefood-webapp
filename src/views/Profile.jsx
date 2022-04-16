import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { FiEdit } from 'react-icons/fi';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';

import styles from '../assets/styles/styles';
import CardSmall from '../components/CardSmall/CardSmall';
import Footer from '../components/Footer/Footer';

const Profile = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container" style={styles.containerProfile}>
          <div className="row">
            <div className="col-sm" style={styles.boxUserProfile}>
              <div style={styles.userProfile}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/d063/327b/4662c85cb7661f579e2c9baff0ce5fdc?Expires=1650844800&Signature=MBA-enll1UC8IkCVbFsEzMC7tfRm3KUWx3LttO7XUnztWoBW9AyCoLrqUYuTyE4QqMgbsFk1z2JOVm9Ny-v-wHxxTgxjj5jawQlM9dY6u29NIprVKjbnrXDqwCSv5fFX9KgQ1kWRC4rvg88kgTHP72QAlUsmktJMgOdAr5uS9qJHEPLcBmf3I0YybOwTNneyhlp4Z2sKQgqzaJdD35Nxx2HyOG1BDstY7j2aGcCmJG7IJAVSjDo7IWVu3wlDIqtKYnLL7ekyKaejFqhGYOII6QGJVAVG~TfP91ETSiOJbBP~iW7mradb9LPpcXL6OEO0t9KOCQB9FLqkhhKR10TtOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="User Profile"
                  style={styles.userImage}
                />
                <a href="profile" style={styles.iconLink}>
                  <FiEdit style={styles.editIcon} />
                </a>
              </div>
              <h1 className="font" style={styles.titleUserProfile}>
                Garneta Sharina
              </h1>
            </div>
          </div>

          <div className="row" style={styles.boxRecipeAction}>
            <div className="col-sm">
              <Nav style={styles.titleRecipeAction} tabs>
                <NavItem className="font txt-profileaction">
                  <NavLink
                    className={toggleState === 1 ? 'active' : ''}
                    onClick={() => toggleTab(1)}
                    style={styles.recipeAction}
                  >
                    My Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={toggleState === 2 ? 'active' : ''}
                    onClick={() => toggleTab(2)}
                    style={styles.recipeAction}
                  >
                    Saved Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={toggleState === 3 ? 'active' : ''}
                    onClick={() => toggleTab(3)}
                    style={styles.recipeAction}
                  >
                    Liked Recipe
                  </NavLink>
                </NavItem>
              </Nav>

              <hr />

              <TabContent
                activeTab={
                  toggleState === 1 ? '1' : toggleState === 2 ? '2' : '3'
                }
              >
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <div style={styles.boxCardRecipe}>
                        <CardSmall
                          src="https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1650844800&Signature=SgZQopFNKrZmxAoeVT-pqDAnIwCJaLClfflK-Zvdr-uLoqbbFnQbLcDwbhbNJCZRhQ7SzUmjpph0uDaYJgrh3vgyaSCocGtLIJZShjF5wkmlOY5Xr1~qecf4PRW9Q3iu9S98D31XuCuhYy-HqsJ0YAIuGf2Qv0dJl4dI~WbcLENoBaIvSNsjUkNGJdYv-8ZJbie-jBfsAc-oRD2P0iOwvv89VXr03zeJW8F1JGM30DbuUOnr0BbsHwIoHWj28uq~tgXqY5bKOkatJf1L41be7o6gsO70IP~uTpCUxOkuli8p0GAf~l21C0pUq71kKoMSkqaNjUuZw44GQ301AbUBsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          title="Bomb Chicken"
                          alt="Bomb Chicken"
                          href="/bombchicken"
                        />
                        <CardSmall
                          src="https://s3-alpha-sig.figma.com/img/3acd/766c/65940ba73f12f048d870dfa487a052df?Expires=1650844800&Signature=S30zooy32ocRs504MQP9gADG3~~F2ZSDFx7byvKuk2CcM51h3MfSaO4ZsBEUiCQ5nHQOzeS8Qq3Hmkn4Ek4UqtKLzczQ0pWM5CSH4dvHRh6Sfgbz8Tn5A2RbyaZflb63FUjJxBreVLR~ajfLPoyMzYu-al8QeHefTnJ3Y6ho6r2bQFnB1xCjZZf2mor70uGnfzpoipivWNm9VQtDirUveOEqU52UJ6TWYyD9r08ncz~5F5Qqcew6g0r8M6sFIVVlHKhqJYA9wT4VNMbjqSnfLfmBXKQgFOsjk8fIn36G8PI3ewd8EaoUty-MlWb00PfSGs-whTcYGFOZSznqqIoNcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          title="Bananas Pancake"
                          alt="Bananas Pancake"
                          href="/bananaspancake"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <div style={styles.boxCardRecipe}>
                        <CardSmall
                          src="https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1650844800&Signature=SgZQopFNKrZmxAoeVT-pqDAnIwCJaLClfflK-Zvdr-uLoqbbFnQbLcDwbhbNJCZRhQ7SzUmjpph0uDaYJgrh3vgyaSCocGtLIJZShjF5wkmlOY5Xr1~qecf4PRW9Q3iu9S98D31XuCuhYy-HqsJ0YAIuGf2Qv0dJl4dI~WbcLENoBaIvSNsjUkNGJdYv-8ZJbie-jBfsAc-oRD2P0iOwvv89VXr03zeJW8F1JGM30DbuUOnr0BbsHwIoHWj28uq~tgXqY5bKOkatJf1L41be7o6gsO70IP~uTpCUxOkuli8p0GAf~l21C0pUq71kKoMSkqaNjUuZw44GQ301AbUBsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          title="Bomb Chicken"
                          alt="Bomb Chicken"
                          href="/bombchicken"
                        />
                        <CardSmall
                          src="https://s3-alpha-sig.figma.com/img/3acd/766c/65940ba73f12f048d870dfa487a052df?Expires=1650844800&Signature=S30zooy32ocRs504MQP9gADG3~~F2ZSDFx7byvKuk2CcM51h3MfSaO4ZsBEUiCQ5nHQOzeS8Qq3Hmkn4Ek4UqtKLzczQ0pWM5CSH4dvHRh6Sfgbz8Tn5A2RbyaZflb63FUjJxBreVLR~ajfLPoyMzYu-al8QeHefTnJ3Y6ho6r2bQFnB1xCjZZf2mor70uGnfzpoipivWNm9VQtDirUveOEqU52UJ6TWYyD9r08ncz~5F5Qqcew6g0r8M6sFIVVlHKhqJYA9wT4VNMbjqSnfLfmBXKQgFOsjk8fIn36G8PI3ewd8EaoUty-MlWb00PfSGs-whTcYGFOZSznqqIoNcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          title="Bananas Pancake"
                          alt="Bananas Pancake"
                          href="/bananaspancake"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <div style={styles.boxCardRecipe}>
                        <CardSmall
                          src="https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1650844800&Signature=SgZQopFNKrZmxAoeVT-pqDAnIwCJaLClfflK-Zvdr-uLoqbbFnQbLcDwbhbNJCZRhQ7SzUmjpph0uDaYJgrh3vgyaSCocGtLIJZShjF5wkmlOY5Xr1~qecf4PRW9Q3iu9S98D31XuCuhYy-HqsJ0YAIuGf2Qv0dJl4dI~WbcLENoBaIvSNsjUkNGJdYv-8ZJbie-jBfsAc-oRD2P0iOwvv89VXr03zeJW8F1JGM30DbuUOnr0BbsHwIoHWj28uq~tgXqY5bKOkatJf1L41be7o6gsO70IP~uTpCUxOkuli8p0GAf~l21C0pUq71kKoMSkqaNjUuZw44GQ301AbUBsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          title="Bomb Chicken"
                          alt="Bomb Chicken"
                          href="/bombchicken"
                        />
                        <CardSmall
                          src="https://s3-alpha-sig.figma.com/img/3acd/766c/65940ba73f12f048d870dfa487a052df?Expires=1650844800&Signature=S30zooy32ocRs504MQP9gADG3~~F2ZSDFx7byvKuk2CcM51h3MfSaO4ZsBEUiCQ5nHQOzeS8Qq3Hmkn4Ek4UqtKLzczQ0pWM5CSH4dvHRh6Sfgbz8Tn5A2RbyaZflb63FUjJxBreVLR~ajfLPoyMzYu-al8QeHefTnJ3Y6ho6r2bQFnB1xCjZZf2mor70uGnfzpoipivWNm9VQtDirUveOEqU52UJ6TWYyD9r08ncz~5F5Qqcew6g0r8M6sFIVVlHKhqJYA9wT4VNMbjqSnfLfmBXKQgFOsjk8fIn36G8PI3ewd8EaoUty-MlWb00PfSGs-whTcYGFOZSznqqIoNcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          title="Bananas Pancake"
                          alt="Bananas Pancake"
                          href="/bananaspancake"
                        />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
