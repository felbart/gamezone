import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired, // Valida que 'children' é um nó React e é obrigatório
};

export default DefaultLayout;