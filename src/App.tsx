 
  function App() {

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>kadir BAŞER - Kişisel Portföy</h1>

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
      alt="Kadir Başer Profil Fotoğrafı" 
    />
    <figcaption>Kadir Başer</figcaption>
  </figure>

  <p>
    <strong>Yazılım Mühendisliği 3. sınıf öğrencisiyim.</strong> Kariyer hedefimi 
    <strong>savunma sanayii</strong> alanında uzmanlaşmak üzerine kuruyorum. 
    Şu an aktif olarak veri analizi ve modern web teknolojileri üzerine projeler geliştiriyorum.
  </p>

  <h3>Teknik Yetkinlikler</h3>
  <ul>
    <li><strong>Programlama:</strong> C++, C#, Java, Python</li>
    <li><strong>Web Geliştirme:</strong> React, JavaScript, HTML5, CSS3</li>
    <li><strong>Metodolojiler:</strong> Agile, Scrum, OOP Prensipleri</li>
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

  <form action="#" method="POST" noValidate>
    <fieldset>
      <legend>İletişim Formu</legend>

      <div className="form-group">
        <label htmlFor="name">Ad Soyad:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          aria-describedby="name-error"
        />
        <small id="name-error" className="error-msg" role="alert"></small>
      </div>

      <div className="form-group">
        <label htmlFor="email">E-posta:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-describedby="email-error"
        />
        <small id="email-error" className="error-msg" role="alert"></small>
      </div>

      <div className="form-group">
        <label htmlFor="subject">Konu:</label>
        <select
          id="subject"
          name="subject"
          required
          aria-describedby="subject-error"
        >
          <option value="">-- Seçiniz --</option>
          <option value="is">İş Teklifi</option>
          <option value="soru">Soru</option>
          <option value="oneri">Öneri</option>
        </select>
        <small id="subject-error" className="error-msg" role="alert"></small>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mesajınız:</label>
        <textarea
          id="message"
          name="message"
        
          required
          minLength={10}
          aria-describedby="message-error"
        ></textarea>
        <small id="message-error" className="error-msg" role="alert"></small>
      </div>

      <button type="submit">Gönder</button>
    </fieldset>
  </form>
</section>
      </main>

      <footer>
        <p>© 2025 Kadir BAŞER. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App

