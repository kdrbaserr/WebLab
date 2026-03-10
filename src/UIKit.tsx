import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function UIKit() {
    return (
        <div className="min-h-screen bg-white dark:bg-[linear-gradient(180deg,#4A0001_0%,#AD0003_100%)] p-8 space-y-12 transition-colors duration-300">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    UI Kit
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Bileşen kütüphanesi ve varyant görünümleri
                </p>
            </div>

            {/* --- BUTTONS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">
                    Buttons
                </h2>

                {/* Varyant 1: Renkler */}
                <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Primary / Secondary / Danger / Ghost (Renk Varyantları)</h3>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>

                {/* Varyant 2: Boyutlar */}
                <div className="mt-4">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">sm / md / lg (Boyut Varyantları)</h3>
                    <div className="flex flex-wrap items-end gap-3">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">
                    Inputs
                </h2>

                {/* Varyant 3: Normal */}
                <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Normal Durum</h3>
                    <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
                </div>

                {/* Varyant 4: Hatalı */}
                <div className="mt-4">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Hata (Error) Durumu</h3>
                    <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />
                </div>

                {/* Varyant 5: Help text */}
                <div className="mt-4">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Açıklama (Help Text) Durumu</h3>
                    <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
                </div>

                {/* Varyant 6: Disabled */}
                <div className="mt-4">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Pasif (Disabled) Durum</h3>
                    <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" />
                </div>
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">
                    Cards
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Varyant 7: Elevated */}
                    <div>
                        <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Elevated (Gölgeli) Varyant</h3>
                        <Card variant="elevated" title="Elevated Card">
                            Gölge ile yükseltilmiş kart.
                        </Card>
                    </div>

                    {/* Varyant 8: Outlined */}
                    <div>
                        <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Outlined (Çerçeveli) Varyant</h3>
                        <Card variant="outlined" title="Outlined Card">
                            Çerçeveli kart.
                        </Card>
                    </div>

                    {/* Varyant 9: Filled */}
                    <div>
                        <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Filled (Dolgulu) Varyant</h3>
                        <Card variant="filled" title="Filled Card">
                            Dolgulu arka plan.
                        </Card>
                    </div>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-4 max-w-xl pb-12">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">
                    Alerts
                </h2>

                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2 mt-4">Info / Success / Warning / Error ile Kapatılabilir Özellik Tümü</h3>
                <Alert variant="info" title="Bilgi">
                    Bilgilendirme mesajı.
                </Alert>
                <Alert variant="success" title="Başarılı">
                    İşlem tamamlandı.
                </Alert>
                <Alert variant="warning" title="Uyarı">
                    Dikkat edilmesi gereken durum.
                </Alert>
                <Alert variant="error" title="Hata" dismissible>
                    Bir hata oluştu (kapatılabilir).
                </Alert>
            </section>

        </div>
    );
}
