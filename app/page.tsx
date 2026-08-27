import Image from "next/image";
import { ProductGallery } from "./product-gallery";
import { PurchaseSelector } from "./purchase-selector";

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="check-icon">
    <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BagIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="bag-icon">
    <path d="M6 8h12l1 13H5L6 8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const stages = [
  { label: "SEMANA 1", title: "Sensación más suave", copy: "La barrera de silicona ayuda a conservar la hidratación para que la piel se sienta más lisa al tacto." },
  { label: "SEMANA 2", title: "Aspecto más uniforme", copy: "El uso constante acompaña una apariencia más calmada, uniforme y confortable." },
  { label: "MES 2", title: "Cambios visibles", copy: "Con una rutina diaria, la textura puede verse más uniforme y las marcas menos llamativas bajo diferentes luces." },
  { label: "MES 3+", title: "Mejora progresiva", copy: "La constancia es clave: continúa el protocolo para acompañar la evolución de la apariencia de la cicatriz." },
];

const faqs = [
  ["¿Cómo se usa?", "Aplica una capa generosa sobre la piel limpia y seca, masajea suavemente y deja que se absorba. Durante el día, completa la rutina con protector solar."],
  ["¿Cuánto tiempo debo usarla?", "Para mejores resultados, úsala varias veces al día durante 8 a 12 semanas. La constancia y el tiempo de respuesta pueden variar según la piel."],
  ["¿Es adecuada para todo tipo de piel?", "La fórmula se presenta como apta para todo tipo de piel y sin fragancia. Si tu piel es sensible, realiza una prueba en una zona pequeña antes del uso habitual."],
  ["¿Puedo aplicarla sobre una herida abierta?", "No. Úsala únicamente sobre piel completamente cerrada y cicatrizada. Ante dudas o irritación, consulta a un profesional de la salud."],
];

const purchaseBenefits = [
  "Remodela la textura irregular de las cicatrices de acné",
  "Ayuda a atenuar la hiperpigmentación posterior al acné",
  "Actúa donde las cremas con retinol no dieron resultados",
  "Acabado no graso que no obstruye los poros",
];

const resultImages = [
  "/images/praquel/antes-despues-7-semanas.jpg",
  "/images/resultados/antes-despues-01.png",
  "/images/resultados/antes-despues-02.jpg",
  "/images/resultados/antes-despues-03.jpg",
  "/images/resultados/antes-despues-04.jpg",
];

export default function Home() {
  return (
    <main>
      <div className="announcement">ENVÍO GRATUITO EN PEDIDOS SELECCIONADOS</div>
      <header className="site-header">
        <details className="menu">
          <summary aria-label="Abrir menú"><span /><span /><span /></summary>
          <nav aria-label="Navegación principal">
            <a href="#beneficios">Beneficios</a>
            <a href="#como-usar">Cómo usar</a>
            <a href="#resultados">Resultados</a>
            <a href="#preguntas">Preguntas frecuentes</a>
          </nav>
        </details>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#beneficios">Beneficios</a>
          <a href="#como-usar">Cómo usar</a>
          <a href="#resultados">Resultados</a>
        </nav>
        <a className="brand" href="#inicio" aria-label="Praquel, inicio">Praquel.</a>
        <div className="header-actions">
          <a className="header-link" href="#preguntas">Preguntas</a>
          <a className="header-buy" href="https://praquel.shop/cart/43065860489312:1">Comprar</a>
          <a className="header-bag" href="#comprar" aria-label="Ver opciones de compra"><BagIcon /></a>
        </div>
      </header>

      <section id="inicio" className="product-page section-shell">
        <ProductGallery />
        <div id="comprar" className="product-summary">
          <div className="rating" aria-label="Más de 25.450 clientes satisfechos">
            <span aria-hidden="true">★★★★★</span>
            <strong>Más de 25.450 clientes satisfechos</strong>
          </div>
          <p className="eyebrow">PRAQUEL · SOLUCIONES PARA CICATRICES</p>
          <h1>Barra reparadora para cicatrices de acné</h1>
          <ul className="purchase-benefits">
            {purchaseBenefits.map((benefit) => <li key={benefit}><CheckIcon />{benefit}</li>)}
          </ul>
          <p className="purchase-copy">Barra de silicona de grado médico con 60% de silicona para suavizar cicatrices de acné, atenuar la textura irregular y aclarar marcas oscuras.</p>
          <PurchaseSelector />
          <div className="money-back compact-money-back">
            <Image className="guarantee-seal" src="/images/praquel/garantia-devolucion.jpg" alt="Sello de garantía de devolución del 100%" width={180} height={180} unoptimized />
            <div><strong>Garantía de devolución de 60 días</strong><p>Si no notas una mejora visible, te devolvemos tu dinero.</p></div>
          </div>
        </div>
      </section>

      <section className="featured-section section-shell reveal" aria-label="Medios de referencia">
        <p>VISTO EN</p>
        <div className="media-logos">
          <strong>GQ</strong><strong>SHAPE</strong><strong>Forbes</strong><strong>Women&apos;s Health</strong><strong>marie claire</strong>
        </div>
      </section>

      <section className="results-section">
        <div className="section-shell">
          <div className="results-heading reveal">
            <span>ANTES Y DESPUÉS</span>
            <h2>Resultados de <em>clientes reales</em></h2>
            <p>Comparaciones compartidas por clientes durante su rutina de cuidado con Praquel.</p>
            <div className="results-proof" aria-label="Información sobre los resultados">
              <strong>5 casos compartidos</strong>
              <span>Fotografías comparativas</span>
              <span>Vista lado a lado</span>
            </div>
          </div>
          <div className="results-carousel reveal" aria-label="Carrusel de resultados antes y después">
            {resultImages.map((src, index) => (
              <figure className="result-slide" key={src}>
                <div className="result-image">
                  <Image src={src} alt={`Comparación antes y después ${index + 1}`} width={1536} height={1536} sizes="(max-width: 700px) 88vw, 560px" unoptimized />
                  <span className="before-label">ANTES</span>
                  <span className="after-label">DESPUÉS</span>
                </div>
                <figcaption><strong>Resultado {index + 1}</strong><span>La experiencia individual puede variar.</span></figcaption>
              </figure>
            ))}
          </div>
          <p className="results-disclaimer">Fotografías aportadas como referencia visual. Los resultados no están garantizados y pueden variar según la piel y la constancia de uso.</p>
        </div>
      </section>

      <section id="beneficios" className="split-section section-shell">
        <div className="image-frame reveal">
          <Image src="/images/praquel/soluciones-cicatrices.jpg" alt="Beneficios de la barra de silicona Praquel explicados en español" width={1536} height={1536} sizes="(max-width: 850px) 100vw, 520px" unoptimized />
        </div>
        <div className="section-copy reveal delay-1">
          <p className="eyebrow">CUIDADO LOCALIZADO</p>
          <h2>Una barrera invisible para acompañar la recuperación</h2>
          <p>La silicona forma una capa protectora que ayuda a conservar la hidratación y favorece una apariencia más suave y uniforme en cicatrices completamente cerradas.</p>
          <div className="mini-grid">
            <article><span>01</span><h3>Aplicación precisa</h3><p>Desliza la barra directamente sobre la zona deseada.</p></article>
            <article><span>02</span><h3>Acabado cómodo</h3><p>Textura fácil de integrar en tu rutina diaria.</p></article>
            <article><span>03</span><h3>Uso constante</h3><p>La constancia ayuda a acompañar resultados progresivos.</p></article>
            <article><span>04</span><h3>Rutina simple</h3><p>Solo unos segundos por aplicación.</p></article>
          </div>
        </div>
      </section>

      <section id="como-usar" className="how-section">
        <div className="section-shell">
          <div className="center-heading reveal">
            <p className="eyebrow">PROTOCOLO DIARIO</p>
            <h2>Cómo usar Praquel</h2>
            <p>Tres pasos sencillos para incorporar la barra a tu rutina.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card reveal">
              <Image src="/images/praquel/soluciones-cicatrices.jpg" alt="Limpieza previa antes de usar Praquel" width={1536} height={1536} sizes="(max-width: 850px) 100vw, 400px" unoptimized />
              <div><span>1</span><h3>Limpia</h3><p>Lava la zona y sécala por completo.</p></div>
            </article>
            <article className="step-card reveal delay-1">
              <Image src="/images/praquel/tratamiento-cicatrices.jpg" alt="Aplicación localizada de la barra Praquel" width={1536} height={1536} sizes="(max-width: 850px) 100vw, 400px" unoptimized />
              <div><span>2</span><h3>Aplica</h3><p>Desliza una capa fina y uniforme sobre la cicatriz.</p></div>
            </article>
            <article className="step-card reveal delay-2">
              <Image src="/images/praquel/barrera-reparadora.jpg" alt="Uso constante de la barra Praquel" width={1536} height={1536} sizes="(max-width: 850px) 100vw, 400px" unoptimized />
              <div><span>3</span><h3>Sé constante</h3><p>Incorpora el cuidado a tu rutina durante 8 a 12 semanas.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section id="resultados" className="journey section-shell">
        <div className="center-heading reveal">
          <p className="eyebrow">TU RUTINA</p>
          <h2>Un proceso gradual, paso a paso</h2>
          <p>La experiencia puede variar según la persona, el tipo de cicatriz y la constancia de uso.</p>
        </div>
        <div className="journey-grid">
          <div className="journey-photo reveal">
            <Image src="/images/praquel/tratamiento-cicatrices.jpg" alt="Tratamiento localizado con la barra Praquel" width={1536} height={1536} sizes="(max-width: 850px) 100vw, 500px" unoptimized />
          </div>
          <div className="timeline">
            {stages.map((stage, index) => (
              <article className={`timeline-item reveal delay-${index % 3}`} key={stage.label}>
                <span className="timeline-label">{stage.label}</span>
                <div><h3>{stage.title}</h3><p>{stage.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clinical-section">
        <div className="section-shell">
          <div className="center-heading reveal">
            <p className="eyebrow">RESULTADOS OBSERVADOS</p>
            <h2>Una rutina pensada para acompañar el progreso</h2>
          </div>
          <div className="clinical-list reveal">
            <div><strong>98%</strong><span>percibió una apariencia más suave y marcas posteriores menos visibles</span></div>
            <div><strong>91%</strong><span>notó una textura de piel más uniforme</span></div>
            <div><strong>89%</strong><span>se sintió más cómodo bajo luz intensa y en fotografías cercanas</span></div>
          </div>
          <p className="clinical-note">* Porcentajes mostrados como referencia del panel de clientes presentado en el modelo original.</p>
        </div>
      </section>

      <section className="works-section section-shell">
        <div className="works-copy reveal">
          <p className="eyebrow">CÓMO FUNCIONA</p>
          <h2>Una barrera que ayuda a cuidar la zona</h2>
          <div className="works-points">
            <article><span>01</span><div><h3>Protege la cicatriz</h3><p>La silicona crea una barrera transpirable que ayuda a conservar la hidratación.</p></div></article>
            <article><span>02</span><div><h3>Acompaña la recuperación</h3><p>El cuidado constante favorece una apariencia más calmada y uniforme.</p></div></article>
            <article><span>03</span><div><h3>Suaviza la textura visible</h3><p>Con el uso continuo, los bordes y la textura pueden verse progresivamente más suaves.</p></div></article>
          </div>
        </div>
        <div className="works-image reveal delay-1">
          <Image src="/images/praquel/cronologia-colageno.jpg" alt="Representación visual del proceso de remodelación del colágeno" width={1536} height={1536} sizes="(max-width: 850px) 100vw, 520px" unoptimized />
        </div>
      </section>

      <section id="preguntas" className="faq section-shell">
        <div className="center-heading reveal"><p className="eyebrow">RESOLVEMOS TUS DUDAS</p><h2>Preguntas frecuentes</h2></div>
        <div className="faq-list reveal">
          {faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">Praquel.</a>
        <p>Cuidado sencillo y localizado para cicatrices completamente cerradas.</p>
        <nav aria-label="Enlaces del pie de página"><a href="#beneficios">Beneficios</a><a href="#como-usar">Cómo usar</a><a href="#preguntas">Preguntas frecuentes</a></nav>
        <small>Los resultados pueden variar. Este sitio no sustituye la orientación de un profesional de la salud.</small>
      </footer>

      <a className="mobile-cta" href="https://praquel.shop/cart/43101788536928:1">COMPRAR AHORA</a>
    </main>
  );
}
