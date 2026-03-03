function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Kadir Başer - Yazılım Mühendisi Adayı</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* HAKKIMDA - Kişiselleştirilmiş Bölüm */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src="https://via.placeholder.com/150"
              alt="Kadir Başer profil fotoğrafı"
              width="150"
              height="150"
              loading="lazy"
            />
            <figcaption>Kadir Başer</figcaption>
          </figure>

          <p>
            <strong>Yazılım Mühendisliği 3. sınıf öğrencisiyim.</strong> Kariyerimi özellikle 
            <strong> savunma sanayii</strong> alanında uzmanlaşarak şekillendirmek istiyorum. 
            Şu an akademik çalışmalarımın yanı sıra veri analizi ve gömülü sistemler üzerine odaklanıyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li><strong>Diller:</strong> C++, C#, Java, Python</li>
            <li><strong>Web:</strong> React, JavaScript, HTML5, CSS3</li>
            <li><strong>Diğer:</strong> Git, Veri Analizi, Yazılım Mimarisi (Agile/Scrum)</li>
          </ul>
        </section>

        {/* PROJELER - Senin Gerçek Projelerin */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Uyku Evreleri Sınıflandırması</h3>
            <p>Farelerden alınan EEG verilerini analiz ederek uyku evrelerini sınıflandıran bir model üzerinde çalışıyorum.</p>
            <img
              src="https://via.placeholder.com/300"
              alt="EEG Veri Analizi Proje Görseli"
              width="300"
              height="200"
              loading="lazy"
            />
          </article>

          <article>
            <h3>EVSE Güvenlik Analizi</h3>
            <p>Elektrikli araç şarj istasyonlarının güvenliği ve termal sensör yanıltma (spoofing) üzerine araştırmalar ve raporlamalar yapıyorum.</p>
            <img
              src="https://via.placeholder.com/300"
              alt="Şarj İstasyonu Güvenlik Projesi"
              width="300"
              height="200"
              loading="lazy"
            />
          </article>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form action="#" method="POST">
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş / Staj Teklifi</option>
                  <option value="proje">Proje İşbirliği</option>
                   <option value="soru">Soru</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                rows={5}
                  required
                  minLength={10}
                ></textarea>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Kadir Başer. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;