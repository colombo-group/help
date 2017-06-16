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

2. Laravel(5.4+)

- Tạo repository online(gitlab, github, bitbucket, ...)
- Tạo project trên máy(clone repo `laravel` hoặc sử dụng `laravel installer`)
- Khai báo sử dụng git cho project `git init`
- Khai báo thư viện cần dùng thêm(`debugbar, ide-helper, flysystem, ...`) qua composer và khai báo trong `app.php` rồi chạy `publish` nếu cần
- Khai báo trong `.gitignore` để bỏ qua các thư mục assets trong `public`, ngoại trừ `public/vendor` nếu có. Đối với các thư mục chứa file thay đổi trong quá trình chạy: ví dụ `public/sitemaps/`, `public/images` thì tạo file `.gitigore` trong thư mục đó

```
*
!.gitignore
```
như thế sẽ giữ được thư mục để push lên git và không đưa các file bên trong lên git.

- Cấu trúc thư mục assets để compile (tham khảo)

```
-- assets
	-- fonts
	-- images
	-- js
	-- plugins
	-- scss
```

- Cấu hình `webpack` để compile các file assets vào đúng thư mục cần thiết trong `public`, nên đưa tất cả vào trong 1 thư mục `public/assets` để dễ quản lý.
- Nếu project cần `auth` thì khởi tạo `auth` hoặc sử dụng package hỗ trợ.
- Thực hiện 1 tính năng cần làm của project.
- Commit lần đầu(ở các bước trên sau khi hoàn thiện có thể commit nếu muốn)
- Thực hiện `git remote add` để thêm remote là repo đã tạo ở trên cho projet hiện tại.
- Push lên server và gửi link, add quyền các member khác vào `repo`

### Sau khi khởi tạo base code
- Tạo các `branch` cần thiết và cài đặt quyền, ví dụ:
  - `master` : chỉ admin mới được quyền push và cần để chế độ `protect`, các dev khác vẫn pull được.
  - `develop` : nên đặt làm mặc định (active) để các dev khác khi clone sẽ nhận luôn branch này
  - `deploy` : repo này chỉ để người làm nhiệm vụ tạo deploy mới được push. cũng protect

- Quá trình dev và sử dụng các repo tham khảo : http://nvie.com/posts/a-successful-git-branching-model/
