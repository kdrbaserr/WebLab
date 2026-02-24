 
  function App() {

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Kaan Basar - Kişisel Portföy</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
        </section>
      </main>

      <footer>
        <p>© 2025 Kaan Basar. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App

