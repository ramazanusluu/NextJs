# NEXT.JS
![image](https://user-images.githubusercontent.com/98388628/182457588-8154a02a-b7d3-4e1d-b395-7011893ef88c.png)

## Next.Js Nedir?
- NEXT.JS, REACT.JS için geliştirilmiş bir framework’tur.

## React.js Nedir?
- React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu bir javascript kütüphanesidir!

![image](https://user-images.githubusercontent.com/98388628/182458470-6a7f9ab2-9aa3-4815-b026-16c6b3d9da0b.png)

# Neden NEXT.JS?
**Next.Js bize ne gibi avantajlar sağlar?**
* Fast Refresh
> Fast Refresh, React bileşenlerinizde yapılan düzenlemeler hakkında size anında geri bildirim sağlayan bir Next.js özelliğidir.(Sadece function component & hooks’larda geçerli bir durum.)

* Built-In CSS Support
> NEXT.JS içerisinde built in css, sass, css in js desteği sağlar.

* Routing
> * Next.js, sayfa konsepti üzerine kurulmuş dosya sistemi tabanlı bir yönlendiriciye sahiptir.
> * Pages dizine bir dosya eklendiğinde, otomatik olarak bir rota olarak kullanılabilir.

* Code Splitting
> * Daha hızlı sayfa yüklemeleri için otomatik kod bölümleme.
> * NEXT.JS her bir sayfanın tamamen fonksiyonel bir şekilde işlemesi için gerekli olan minimum js kodu o sayfa için yüklenir ve diğer sayfaların yüklenmesi gerçekleşmez.  Bu durum daha performanslı olmasını sağlıyor.

* Pre-Fetching
> * Optimize edilmiş önceden getirme ile istemci tarafı yönlendirme sağlıyor(Client side routing).
> * Bir next.js sayfası hayal edelim, bu sayfa üzerinde farklı sayfalara link verdiğimizi düşünelim. Burada pre-fetching işlemi gerçekleşmektedir. Yani next.js link’te bahsettiğimiz sayfaları önceden pre-fetch ediyor. Bu link’ler ile client side routing işlemi gerçekleşmiş oluyor.

* API Routes
> * Sunucusuz işlevlerde API uç noktaları oluşturmak için API yolları tanımlamamızı sağlar.

* Pre-Rendering
> * Varsayılan olarak, Next.js her sayfayı önceden işler. Bu, Next.js'nin her şeyi istemci tarafı JavaScript ile yapmak yerine önceden her sayfa için HTML oluşturduğu anlamına gelir. Ön işleme, daha iyi performans ve SEO ile sonuçlanabilir
> * Next.js'nin iki ön işleme biçimi vardır: Static Generation ve  Server-side Rendering. Fark, bir sayfa için HTML oluşturduğundadır.

* Static Generation
> * HTML'yi derleme zamanında oluşturan ön işleme yöntemidir. Önceden oluşturulmuş HTML daha sonra her istekte yeniden kullanılır 

* Server-side Rendering
> * her istekte HTML oluşturan ön işleme yöntemidir.
> * Bunları sayfa bazlı olarak; bir sayfada Static Generation, bir sayfada Server-side Rendering kullanılabilir!

## Client Side Rendering

![image](https://user-images.githubusercontent.com/98388628/182464241-24c14f7f-0610-4a5c-b106-07ff5915a003.png)

## Server Side Rendering

![image](https://user-images.githubusercontent.com/98388628/182464317-b25105f1-81aa-4aba-81da-03e04af1926b.png)

# NEXT.JS Kurulum

## Automatic Setup 
* create-next-app Her şeyi sizin için otomatik olarak ayarlar. create-next-app kullanarak yeni bir Next.js uygulaması oluşturması önerilir.

![image](https://user-images.githubusercontent.com/98388628/182467335-c14361cd-30ab-4b8a-85a1-a9479153b37e.png)

* Bir TypeScript projesiyle başlamak istiyorsanız, --typescript bayrağı kullanabilirsiniz.

![image](https://user-images.githubusercontent.com/98388628/182467173-75148c45-b904-4ad9-b09f-9f265e4e0e0a.png)

## Manual Setup

* Install next, react and react-dom in your project:

![image](https://user-images.githubusercontent.com/98388628/182467219-0f89267b-c676-4586-9037-70dc769a23dd.png)

## ‘create-next-app’ ile elde ettiklerimiz

* Automatic compilation and bundling.
* React Fast Refresh.
* Static generation and server-side rendering of pages/.
* Static file serving through public/ which is mapped to the base URL (/).

## create-next-app File Structure

![image](https://user-images.githubusercontent.com/98388628/182466142-c4dafcc4-5dad-44f9-9fcc-464f9f725254.png)

* Pages 
> * Pages klasörü, NEXT.JS’in routing sistemini sağlar. create-react-app ile oluşturulan projede routing işlemleri için hangi kütüphaneyi veya paketleri kullanacağımıza biz karar veriyoduk. Genelde react-router kullanıyorduk. Ama bu durum NEXT.JS’te söz konusu değildir. NEXT.JS sayfa tabanlı routing işlemini gerçekleştiren bir sistemi var. Pages klasörü özel bir klasördür. Bu klasör içerisine oluşturululan sayfalar otomatik olarak url oluşturulur.
> * Burada bulunan sayfalar birer react component’larıdır

* Public
> * Public klasörünün altında yer alan .ico, .svg, image dosylarına import işlemine gerek duyulmadan örneğin: /image/next.png şeklinde erişilebilir.

* Styles
> * Css dosylarını bu klasör altında tanımlıyoruz.

## Pages in Next.js

### Create a New Page
Pages kalsörü altında örneğin about.js isminde yeni bir dosya oluşturularak about page sayfası oluşturulabilir.
http://localhost:3000/about

![image](https://user-images.githubusercontent.com/98388628/182466817-0284e9aa-ff6b-4694-aa5f-84cb04743669.png)

## Fast Refresh
Fast Refresh, React bileşenlerinizde yapılan düzenlemeler hakkında size anında geri bildirim sağlayan bir Next.js özelliğidir.
* Nasıl çalışır?
> * Yalnızca React component’larını dışa aktaran bir dosyayı düzenlerseniz , Hızlı Yenileme yalnızca o dosyanın kodunu günceller ve bileşeninizi yeniden oluşturur. Bu dosyadaki stiller, işleme mantığı, olay işleyiciler veya efektler dahil her şeyi düzenleyebilirsiniz.
* Hata Esnekliği
> * Geliştirme sırasında bir sözdizimi hatası yaparsanız, düzeltebilir ve dosyayı tekrar kaydedebilirsiniz. Hata otomatik olarak kaybolacak ve uygulamayı yeniden yüklemeniz gerekmeyecek. Bileşen durumunu kaybetmezsiniz .
> * Bileşeninizin içinde bir çalışma zamanı hatasına yol açan bir hata yaparsanız, bağlamsal bir kaplama ile karşılaşacaksınız. Hatanın düzeltilmesi, uygulamayı yeniden yüklemeden kaplamayı otomatik olarak kaldıracaktır.
* İpucu
> * Fast refresh’i disable çevirmek için kod’un herhangi bir yerinde // @refresh reset kodu eklenir.


## next/head

![image](https://user-images.githubusercontent.com/98388628/182471686-38f4b66d-22ff-4b63-96c6-cc6c0967ea37.png)

![image](https://user-images.githubusercontent.com/98388628/182471840-4c924d76-61ae-4331-b302-67c66fc6e43a.png)

HTML’deki <head></head> etiketi ile aynı işlevi görür.
Her sayfaya özel title vermemize olanak sağlar.

## Built-In CSS Support

### Global Css Sayfası Ekleme

![image](https://user-images.githubusercontent.com/98388628/182472227-15fbf543-a959-4092-9be8-1671703bad5c.png)

Bu stiller (globals.css), uygulamanızdaki tüm sayfalara ve bileşenlere uygulanacaktır. Stil sayfalarının genel doğası gereği ve çakışmaları önlemek için bunları yalnızca pages/_app.js içine aktarabilirsiniz. 

### Import styles from node_modules

![image](https://user-images.githubusercontent.com/98388628/182472486-77fad746-6cd2-4567-b91f-428ac41f2b3a.png)

bootstrap gibi global stil sayfalarını pages/_app.js dosyasında içe aktarmalısınız

### Adding Component-Level CSS

* Next.js , dosya adlandırma kuralını kullanan CSS Modüllerini destekler.[name].module.css
* CSS Modülleri, otomatik olarak benzersiz bir sınıf adı oluşturarak CSS'yi yerel olarak kapsar. Bu, aynı CSS sınıf adını farklı dosyalarda çakışma endişesi duymadan kullanmanıza olanak tanır.
* Bu davranış, CSS Modüllerini bileşen düzeyinde CSS'yi dahil etmenin ideal yolu yapar. 
* CSS Modülü dosyalarını , uygulamanızın herhangi bir yerine aktarılabiliriz .


### Sass Support

Next.js, hem .scss uzantıları hem de .sass  uzantıları kullanarak Sass'ı içe aktarmanıza olanak tanır. Bileşen düzeyinde Sass'ı CSS Modülleri ve .module.scss veya .module.sass uzantısı aracılığıyla kullanabilirsiniz.

### JS'de CSS

Mevcut herhangi bir CSS-in-JS çözümünü kullanmak mümkündür. En basiti satır içi stiller:


## Layout Component

* İlk olarak, tüm sayfalarda paylaşılacak bir Düzen bileşeni oluşturalım.
* components adlı bir üst düzey dizin oluşturun İçinde, layout.js adında bir dosya oluşturun.

![image](https://user-images.githubusercontent.com/98388628/182473184-5a5f200f-9655-4be0-97e7-035d28b09f25.png)

![image](https://user-images.githubusercontent.com/98388628/182473209-87aedf66-9805-42cb-904f-fca4478e0240.png)

## next/link

İstemci tarafı geçişleri Link rotalar , next/link tarafından dışa aktarılan bileşen aracılığıyla etkinleştirilebilir.

![image](https://user-images.githubusercontent.com/98388628/182473383-b1ea7ad8-92b2-4fec-a186-afd1229e9ce2.png)

Dynamik Rota;
> dinamik rota pages/blog/[slug].jsaşağıdaki bağlantıyla eşleşecektir.

![image](https://user-images.githubusercontent.com/98388628/182473465-f2a153a8-8560-4f4c-8d4d-cd620cf553f2.png)

## Next/router

### useRouter
* Uygulamanızdaki herhangi bir işlev bileşeninin içindeki nesneye erişmek istiyorsanız , useRouter kullanabilirsiniz

![image](https://user-images.githubusercontent.com/98388628/182473644-be56f898-a9ab-4e4e-85d4-02f41765ca13.png)

### withRouter
* useRouterSizin için en uygun değilse, aynı nesneyi herhangi bir bileşene withRouterde ekleyebilirsiniz

![image](https://user-images.githubusercontent.com/98388628/182473744-b58e0a86-2bbd-4cc7-9a33-f529a111c12e.png)

## Pre-rendering

* Varsayılan olarak, Next.js her sayfayı önceden işler. Bu, Next.js'nin her şeyi istemci tarafı JavaScript ile yapmak yerine önceden her sayfa için HTML oluşturduğu anlamına gelir. Ön işleme, daha iyi performans ve SEO ile sonuçlanabilir.
* Oluşturulan her HTML, o sayfa için gerekli olan minimum JavaScript koduyla ilişkilendirilir. Bir sayfa tarayıcı tarafından yüklendiğinde, JavaScript kodu çalışır ve sayfayı tamamen etkileşimli hale getirir. (Bu işleme hidrasyon denir .)

## Two Forms of Pre-rendering
* Next.js'nin iki ön işleme biçimi vardır:  Static Generation ve Server-side Rendering. Fark, bir sayfa için HTML oluşturduğundadır.
* Static Generation HTML'yi derleme zamanında oluşturan ön işleme yöntemidir. Önceden oluşturulmuş HTML daha sonra her istekte yeniden kullanılır. 
* Server-side Rendering, her istekte HTML oluşturan ön işleme yöntemidir.

![image](https://user-images.githubusercontent.com/98388628/182474008-6f058f5e-7b6f-422b-ae68-d38ed9aafabb.png)

![image](https://user-images.githubusercontent.com/98388628/182474017-c01cc0aa-ee36-49ab-98f2-0bd0bf1037cc.png)

Daha da önemlisi, Next.js , her sayfa için hangi ön işleme formunun kullanılacağını seçmenize izin verir. Çoğu sayfa için Statik Oluşturma'yı ve diğerleri için Sunucu Tarafı İşleme'yi kullanarak bir "karma" Next.js uygulaması oluşturabilirsiniz .

![image](https://user-images.githubusercontent.com/98388628/182474115-3e197982-18d8-4388-bac6-6998daf5917e.png)

## When to Use Static Generation vs Server-side Rendering?

* Sayfanız bir kez oluşturulabilir ve CDN tarafından sunulabilir, bu da onu her istekte bir sunucunun sayfayı oluşturmasından çok daha hızlı hale getirir .

* Aşağıdakiler dahil birçok sayfa türü için Statik Oluşturma'yı kullanabilirsiniz :

- Pazarlama sayfaları
- Blog gönderileri
- E-ticaret ürün listelemeleri
- Yardım ve belgeler

* Kendinize şunu sormalısınız: "Bu sayfayı bir kullanıcının isteğinden önce önceden oluşturabilir miyim? " Cevabınız evet ise Static Generation seçmelisiniz .
* Öte yandan, kullanıcının isteğinden önce bir sayfayı önceden oluşturamıyorsanız Statik Oluşturma iyi bir fikir değildir . Belki sayfanız sık güncellenen verileri gösteriyor ve sayfa içeriği her istekte değişiyor.
* Bu durumda Server-side Rendering kullanabilirsiniz . Daha yavaş olacak, ancak önceden oluşturulmuş sayfa her zaman güncel olacaktır. Veya ön oluşturmayı atlayabilir ve sık güncellenen verileri doldurmak için istemci tarafı JavaScript'i kullanabilirsiniz.


## Static Generation with Data using getStaticProps

* Bazı sayfalar için, önce bazı harici verileri getirmeden HTML'yi oluşturamayabilirsiniz. Belki dosya sistemine erişmeniz, harici API getirmeniz veya derleme zamanında veritabanınızı sorgulamanız gerekir. Next.js, kullanıma hazır bu durumu destekler: Verilerle Statik Oluşturma.
* Next.js'de bir sayfa bileşenini dışa aktardığınızda, async adlı getStaticProps  bir işlevi de dışa aktarabilirsiniz.
* getStaticProps üretimde yapım zamanında çalışır ve İşlevin içinde, harici verileri alabilir ve sayfaya sahne olarak gönderebilirsiniz![image](https://user-

![image](https://user-images.githubusercontent.com/98388628/182474748-6c33a7e4-dd47-4ac2-bbf6-041098e16ba8.png)

## Dynamic Routes
İlk olarak pages/posts, altında [id].js adında bir sayfa oluşturacağız. []İle başlayan ve biten sayfalar , Next.js'deki dinamik rotalardır 
Slug olarak adlandırılır.

![image](https://user-images.githubusercontent.com/98388628/182474863-0c075ed7-cd09-4a0f-8801-225384087efd.png)

## getServerSideProps

* Bir sayfadan (Sunucu Tarafı Oluşturma) adlı bir işlevi dışa getServerSideProps aktarırsanız, Next.js tarafından döndürülen verileri kullanarak her istekte bu sayfayı önceden oluşturur.
* getServerSideProps Yalnızca, verileri istek zamanında alınması gereken bir sayfa oluşturmanız gerekiyorsa kullanmalısınız . 

![image](https://user-images.githubusercontent.com/98388628/182475035-eb3e8a1c-bad4-4d21-96fd-24031650c8f7.png)

## getStaticPaths

* Bir sayfanın Dinamik Rotaları varsa ve kullanıyorsa getStaticProps, statik olarak oluşturulacak yolların bir listesini tanımlaması gerekir.
* Dinamik yollar kullanan bir sayfadan (Statik Site Oluşturma) adlı bir işlevi dışa getStaticPathsaktardığınızda, Next.js tarafından belirtilen tüm yolları statik olarak önceden işler getStaticPaths.
* fallback: false
* ifallback, false döndürülmeyen yollar 404 sayfasıyla getStaticPaths sonuçlanır.

![image](https://user-images.githubusercontent.com/98388628/182475302-7941f1bf-78e8-430c-961d-6bed95577f9c.png)

## API Routers Oluşutrmak

![image](https://user-images.githubusercontent.com/98388628/182475448-a949f34b-a0e3-4f51-bf86-2ea18c858ecb.png)

## Image Component and Image Optimization

* Next.js Image bileşeni, next/image modern web için geliştirilmiş <img>  HTML öğesinin bir uzantısıdır . 
* İyi Temel Web Verileri elde etmenize yardımcı olmak için çeşitli yerleşik performans optimizasyonları içerir . 
* Bu puanlar, web sitenizdeki kullanıcı deneyiminin önemli bir ölçümüdür ve Google'ın arama sıralamalarında dikkate alınır .

* Görüntü bileşeninde yerleşik olarak bulunan optimizasyonlardan bazıları şunlardır:
> * İyileştirilmiş Performans: Modern görüntü biçimlerini kullanarak her cihaz için her zaman doğru boyutta görüntü sunun
> * Görsel Kararlılık: Kümülatif Düzen Kaymasını otomatik olarak önleyin
> * Daha Hızlı Sayfa Yüklemeleri: Görüntüler, isteğe bağlı bulanıklaştırma yer tutucularıyla yalnızca görünüm alanına girdiklerinde yüklenir
> * Varlık Esnekliği: Uzak sunucularda depolanan görüntüler için bile isteğe bağlı görüntü yeniden boyutlandırma

## Redirects

* Yönlendirmeler, gelen bir istek yolunu farklı bir hedef yola yönlendirmenize olanak tanır.
* Yönlendirmeleri kullanmak için aşağıdaki redirectsanahtarı kullanabilirsiniz next.config.js:
* Redirects source, destination, ve permanent özelliklerine sahip nesneleri tutan bir dizinin döndürülmesini bekleyen bir zaman uyumsuz işlevdir.

![image](https://user-images.githubusercontent.com/98388628/182475771-47f1a327-ad0f-4ea1-b233-0c30f4191771.png)

* Source gelen istek yolu kalıbıdır.
* Destination yönlendirmek istediğiniz yoldur.
* permanent true veya false- true istemcilere/arama motorlarına yönlendirmeyi sonsuza kadar önbelleğe alma talimatı veren 308 durum kodunu false kullanacaksa, geçici * olan ve önbelleğe alınmamış 307 durum kodunu kullanacaksa.
* basePath: false veya undefined. False ise basePath eşleştirme sırasında dahil edilmez, yalnızca harici yeniden yazma işlemleri için kullanılabilir.
* locale: falseveya undefined- yerel ayarın eşleştirme sırasında dahil edilip edilmeyeceği.
* has, ve özelliklerine sahip nesneler dizisidir type, key, value
* Yönlendirmeler, sayfaları ve dosyaları içeren dosya sisteminden önce kontrol edilir.

![image](https://user-images.githubusercontent.com/98388628/182475909-08122767-0988-473e-81df-f2957e5e8aaf.png)

## Next-seo

* Next SEO, Next.js projelerinde SEO’nuzu yönetmeyi kolaylaştıran bir eklentidir.
* NextSeoSEO özelliklerinin eklenmesini istediğiniz sayfalara ekleyerek çalışır. Sayfaya dahil edildikten sonra, sayfanın SEO özelliklerine sahip bir yapılandırma nesnesi iletirsiniz. Bu, sayfa düzeyinde dinamik olarak oluşturulabilir veya bazı durumlarda API'niz bir SEO nesnesi döndürebilir

![image](https://user-images.githubusercontent.com/98388628/182476101-98cb53e1-5eb8-4d10-9c5b-11006a93def6.png)



