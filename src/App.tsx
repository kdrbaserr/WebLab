 
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

  <figure>
    <img 
      src="https://via.placeholder.com/150" 
      alt="Profil Fotoğrafı" 
    />
    <figcaption>Yazılım Mühendisi Adayı</figcaption>
  </figure>

  <p>
    <strong>Yazılım Mühendisliği 3. sınıf öğrencisiyim.</strong> Akademik kariyerimi 
    özellikle <strong>savunma sanayii</strong> alanında uzmanlaşarak sürdürmeyi hedefliyorum. 
    Şu anda veri analizi, uyku sınıflandırması üzerine projeler ve modern web teknolojileri 
    üzerinde çalışmalarımı yoğunlaştırıyorum.
  </p>

  <h3>Kullandığım Teknolojiler & Yetkinlikler</h3>
  <ul>
    <li><strong>Diller:</strong> C++, C#, Java, Python</li>
    <li><strong>Web:</strong> React (Components, State, Props), HTML5, CSS3</li>
    <li><strong>Uzmanlık:</strong> Nesne Yönelimli Programlama (OOP), Yazılım Metodolojileri (Agile, Scrum)</li>
    <li><strong>Araçlar:</strong> Git, Veri Analizi</li>
  </ul>
</section>

        <section id="projeler">
  <h2>Projelerim</h2>

  <article>
    <h3>E-Ticaret Sitesi</h3>
    <p>React ile geliştirilmiş bir alışveriş sitesi.</p>
    <img 
      src="https://via.placeholder.com/300"
      alt="E-ticaret sitesi ana sayfa ekran görüntüsü"
    />
  </article>

  <article>
    <h3>Blog Uygulaması</h3>
    <p>Kullanıcıların yazı paylaşabildiği blog platformu.</p>
    <img 
      src="https://via.placeholder.com/300"
      alt="Blog uygulaması yazı listesi ekran görüntüsü"
    />
  </article>
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

