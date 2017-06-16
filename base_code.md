## Các bước chuẩn bị base code

1. PHP thuần

- Tạo repository online( `gitlab, github, bitbucket, ...` )
- Tạo projext trên máy 
- Sử dụng `composer init` để khởi tạo file quản lý các thư viện sẽ dùng
- Tạo thư mục quan trọng, file cần có của project, ví dụ : `app, index.php, server.php, src, ...` việc này tùy thuộc vào project làm nhiệm vụ gì.
- Khai báo trong composer các thư viện sẽ dùng, khai báo chuẩn `psr` cho các thư mục tương ứng (ví dụ `app` và `src` dùng `psr-4`, `classes` dùng `autoload classes`, `helpers` dùng `autoload files`), ...
- Tạo file `.gitignore` để ignore các thư mục không cần quản lý trong `git` ví dụ `vendor`, `test_files`, `node_modules`, ... 
- Chạy `git init` để khởi tạo việc sử dụng git cho project hiện tại.
- Commit lưu lại trang thái khởi tạo base code hoặc thực hiện một tính năng của project và commit
- Thực hiện `git remote add` để thêm remote là repo đã tạo ở trên cho projet hiện tại.
- Push lên server và gửi link, add quyền các member khác vào `repo`

2. Laravel

- Tạo repository online(gitlab, github, bitbucket, ...)
- Tạo project trên máy(clone repo `laravel` hoặc sử dụng `laravel installer`)
- Khai báo thư việc cần dùng thêm(`debugbar, ide-helper, flysystem, ...`)
- 
