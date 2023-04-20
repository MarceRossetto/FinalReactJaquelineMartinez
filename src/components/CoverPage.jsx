import logo from "../assets/img/logo-img-main.png";
import "../styles/CoverPage.scss";

const CoverPage = () => {
  return (
    <section className="cover">
      <div className="cover-container bd-grid">
        <div className="logo-hero">
          <img src={logo} alt="logo" className="logo-hero-img" />
        </div>
        <div className="logo-hero-info">
          <span className="hero-years">2023</span>
          <h1 className="hero-info">
            EN JM SHOES ENCONTRÁS LAS MEJORES ZAPATILLAS:
            
          </h1>
          <p className="hero-description">Amplia variedad de calzado deportivo y casual para todas las edades y gustos.</p>
          <p className="hero-description">
             Nuestra colección incluye zapatillas de marcas reconocidas y de alta calidad, diseñadas para brindar comodidad, soporte y estilo. <br />
             Ya sea que estés buscando zapatillas para correr, entrenar en el gimnasio, caminar por la ciudad o simplemente relajarte en casa, tenemos algo para ti. <br />
             Nos esforzamos por brindar una experiencia de compra agradable y sin complicaciones.
             
          </p>
          <a href="#products-container" className="button">
            Explorar
          </a>
        </div>
      </div>
    </section>
  );
};
export default CoverPage;
