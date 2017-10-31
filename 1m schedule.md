# Kế hoạch đào tạo cơ bản 1 tháng

[Tuần 1](#tuần-1) - [Tuần 2](#tuần-2) - [Tuần 3](#tuần-3) - [Tuần 4](#tuần-4)

## Tuần 1
- Mục tiêu kiến thức
  - HTML5 & CSS3
  - SASS, Gulp
  - Bootstrap 4, components của BS4. Modular trong css

- Lý thuyết : 
  - Đọc qua các thẻ HTML5, CSS3. Đọc 1 số bài so sánh với HTML4 CSS2
  - Cú pháp SASS
  - Cách dùng `Gulp` để compile file `sass` sang `css`
  - Cấu trúc project có dử fụng sass, html cơ bản
  - Modular trong css
  - Bootstrap4 : Các component của BS4, các Helper, utilities class, ...
  - Xem cấu trúc html của các module trong 1 trang html đầy đủ qua ví dụ https://v4-alpha.getbootstrap.com/examples/
  - Cấu trúc 1 project chỉ gồm html/css/js có sử dụng gulp để compile sass https://github.com/colombo-trainee/bootstrap4-scss-gulp-starter-kit.git

- Thực hành
  - Sử dụng BS4 để làm lại trang https://s.bootsnipp.com/iframe/Gzorl

- Note : khi đọc phần lý thuyết nên tự viết các demo để test thực tế trên máy.

## Tuần 2
- Mục tiêu kiến thức
  - Jquery, jquery plugin, Javascript
  - ES5 ES6
  - Nodejs

- Lý thuyết:
  - Jquery, các hàm jquery hỗ trợ, selector, dom manipulate
  - Cách tạo jquery plugin
  - Javascript cơ bản, Object vs Array trong javascript, thao tác với string trong javascript
  - ES6 và sự khác biệt với ES5
  - Cú pháp nodejs, cài đặt, modules, ...

- Thực hành 1
  - Tạo 1 jquery plugin để áp dụng hiệu ứng cho 1 thành phần div bên trong 1 div cha như hình vẽ

  ![normal](images/normal.png)
  - div cha có chiều cao được định sẵn, khi kéo trình duyệt lên nhưng chưa qua điểm cuối của div cha thì div con trôi dọc theo và cố định cách viền trên của trình duyệt 1 khoảng `a px`

  ![normal](images/scroll%201.png)
  - khi kéo trang web đi qua điểm cuối của trình duyệt thì cả 2 div đều bị kéo theo

  ![normal](images/scroll%202.png)
  - Giả sử div con có id `almost-show` thì chỉ cần gọi
  ```
  $('#almost-show').inner_float({
    top:10px
  });
  ```

- Thực hành 2
  - Tên : Remote browser
  - Tạo 1 server bằng nodejs đảm nhiệm nhiệm vụ vào 1 trang web được định sẵn và trả về thông tin được yêu cầu
  - Request :
  ```
  {
    url : 'http://google.com',
    request : 'html,header,cookie',
    script : {}
  }
  ```
  - Response lỗi 

  ```
  {
    success : false,
    message : 'Không thể khởi động selenium/phantomjs/puppetee'
  }
  ```

  - Response OK 
  ```
  {
    success : true,
    message : 'OK',
    data : {
      cookie : '',
      html : '',
      header : []
    }
  }
  ```

  - Sử dụng nodejs kết nối với Chromium qua `puppetee` để truy cập và lấy các thông tin cần thiết.
  - Script để điều khiển trình duyệt trước khi lấy thông tin, ví dụ : login rồi mới lấy kết quả. (Option)
  - Tham khảo (chỉ sử dụng puppetee): 
    - https://github.com/GoogleChrome/puppeteer
    - http://casperjs.org
    - http://phantomjs.org
  ![Sơ đồ](remote%20browser.png)

## Tuần 3
- Mục tiêu kiến thức
  - PHP 5.6 7, Design pattern trong PHP
  - Composer, khởi tạo 1 package

- Lý thuyết :
  - Cú pháp PHP cơ bản, cách đọc PHP document, tra hàm, ...
  - Hướng đối tượng trong PHP
  - PHP5 vs PHP7
  - [Design pattern](https://github.com/kamranahmedse/design-patterns-for-humans), [design pattern trong PHP](https://github.com/domnikl/DesignPatternsPHP)
  - Composer là gì, để làm gì, cú pháp file composer.json, cách dùng. Phar là gì. Thử xem code trong file composer/composer.phar 
  - Cách tạo 1 php package với composer
  - PHPUnit
  - Xem cấu trúc 1 số package trong PHP https://packagist.org/

- Thực hành 1:
  - Tạo 1 PHP package với composer hỗ trợ thao tác với URL
  - Tên package `ten_trainee/url_helper`
  - Tính năng:
    - Valid 1 chuỗi có là url hợp lệ không
    - Nối 1 path với 1 base url. Ví dụ `http://google.com/a/` nối với `xyz.html` thành `http://google.com/a/xyz.html` nhưng nối với `/xyz.html` thành `http://google.com/xyz.html`
    - Lấy ra được thông tin : protocol, port, domain
    - Viết file test sử dụng PHPUnit
  - Viết file `readme.md` giới thiệu, hướng dẫn cách sử dụng
  - Submit lên Packagist sau khi hoàn thiện các tính năng trên
  - Cập nhật file `readme.md` với cách cài đặt bằng composer


## Tuần 4
- Mục tiêu kiến thức
  - Command line, queue
  - Laravel
  - Webpack 
