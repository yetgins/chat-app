## chat-app
### Live site : https://chat-app-doka.netlify.app/

#### React && Redux
React uygulamaları bileşenlerden ve bu bileşenler de statelerden oluşmaktadır. App component ile başlayarak aşağı doğru ağaç şeklinde ilerleyen bir parent-child component yapısı mevcuttur. Bu bileşenlerin ve dolayısıyla statelerin sayısı çok fazla olduğunda yapı karmaşık bir hal alır. 

Örneğin bir şirkette müdür,müdür yardımcıları, departman yöneticileri, çalışanlar vs. diye giden bir yapı var. Müdürün alt çalışanlarına yeni bir iş vermek,işi güncellemesini istemek ya da hal hatır sormak için her ulaşmak istediğinde yardımcı-yönetici-çalışan şeklinde görüşme sıralaması gerektiğini hatta bunun 3-5 değil binlerce kişi arasında olduğunu düşünelim. Çok zor ve karmaşık bir süreç oluşacaktır.

Redux burada devreye girip stateleri yönetmemizi sağlayarak işimizi kolaylaştıran bir JS kütüphanesidir. 'Store' state yapımızı yönettiğimiz yerdir. Tüm componentlar bu store'ye abone olmuş durumdadır. Herhangi bir değişiklik, güncelleme olduğunda ilgili bileşene bildirilip gereken değişiklikler yapılmaktadır. 

Şirket örneğinde bu yapıyı kullanırsak tüm çalışanların store üzerinden istedikleri çalışana bildirim gönderebildiği ve bildirimi alan çalışanların da söylenen şekilde işlerini yapabildiği bir durum oluşturabiliriz.

Redux kullanırken tanımladığımız stateler uygulamanın genelini kapsadığından 'global state' olarak adlandırılır.