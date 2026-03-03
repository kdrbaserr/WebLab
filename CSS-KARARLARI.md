# CSS Kararları

## 1. Breakpoint Seçimi
- [cite_start]**640px ve 1024px:** Standart tablet ve masaüstü geçiş noktaları olduğu için tercih edildi[cite: 131, 134]. [cite_start]İçerik bu noktalarda tek sütundan çoklu sütuna evriliyor[cite: 1201].

## 2. Layout Tercihleri
- [cite_start]**Flexbox:** Navigasyon çubuğu ve beceri etiketleri gibi tek boyutlu hizalama gereken alanlarda kullanıldı[cite: 372, 373].
- [cite_start]**Grid:** Proje kartlarının iki boyutlu ızgara düzeni için `auto-fit` ve `minmax` ile kullanıldı, böylece media query gereksinimi azaldı[cite: 490, 534].

## 3. Design Tokens
- **Renk ve Spacing:** Tüm tasarım kararları `:root` altında toplandı. [cite_start]Bu sayede projenin tutarlılığı ve bakım kolaylığı sağlandı[cite: 287, 291].
- [cite_start]**Fluid Typography:** `clamp()` fonksiyonu ile yazı boyutlarının her ekranda akıcı olması sağlandı[cite: 319, 322].

## 4. Responsive Stratejiler
- **Mobile-First:** Tasarım önce en küçük ekran için yapıldı ve `min-width` kullanılarak genişletildi. [cite_start]Bu yaklaşım performans ve içerik önceliği sağladı[cite: 61, 118, 121].