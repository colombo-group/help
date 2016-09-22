# Xây dựng theme từ Bootstrap

Một số tài liệu hướng dẫn tạo theme từ bootstrap

Tuts 

  - http://antjanus.com/blog/web-development-tutorials/how-to-build-your-own-bootstrap-theme/
  - https://www.smashingmagazine.com/2013/03/customizing-bootstrap/#tips-and-techniques
  - http://treyhunner.com/2015/02/creating-a-custom-bootstrap-build/
  
Ví dụ

  - https://github.com/treyhunner/custom-bootstrap-example/tree/master/css

Các bước

- Tìm hiểu về bootstrap(các định dạng tải về, chú ý bản sass dùng để làm, xem cách build bản sass)
- Đọc về [css](http://getbootstrap.com/css/) để biết các css của BS để biết lõi của BS gồm những gì, xây dựng như thế nào, ...
- Đọc về [component](http://getbootstrap.com/components/) để biết các component có sẵn của BS gồm những thành phần nào, chú ý đến cấu trúc các thẻ trong ngoài, các thành phần của 1 component, cách đặt tên các thành phần và cách đặt tên biến thể của component.
- Đọc về cú pháp sass
- Tiến hành làm 1 ví dụ 
  + Xem các variable có thể chỉnh sửa
  + Chọn ra 5 màu tương ứng với các trạng thái primary,default,error,warning,info,error và màu gray
  + Xác định các component cần chỉnh sửa, compnent cần tạo biến thể và viết code vào các file riêng.
  + Tạo 1 file chung có include bootstrap và các file custom
  + Tạo có chứa các component hoặc file mẫu trên mạng sau đó chèn style sau khi biên dịch của mình vào để xem kết quả.
