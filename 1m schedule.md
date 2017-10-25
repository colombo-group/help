# Kế hoạch đào tạo cơ bản 1 tháng

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



## Tuần 3
- Mục tiêu kiến thức
  - PHP 5.6 7, Design pattern trong PHP
  - Composer, khởi tạo 1 package

## Tuần 4
- Mục tiêu kiến thức
  - Command line, queue
  - Laravel
  - Webpack 
