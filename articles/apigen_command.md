# Cách dùng đơn giản nhất (Linux) 
Theo document ngắn ngủi trên trang chủ

    # download file apigen.phar về máy, 
    wget http://apigen.org/apigen.phar
    # đặt permission cho file là tập tin có thể chạy(executable)
    chmod +x apigen.phar
    # di chuyển file đến thư mục bin, đổi tên để lần sau gọi viết ngắn hơn
    mv apigen.phar /usr/local/bin/apigen
    # chạy thử, thành công nếu hiển thị version hiện tại của apigen
    apigen --version
    
    # hiển thị các trợ giúp liên quan đến `generate`
    apigen generate --help
    # tạo document từ code trong thư mục `src` và lưu vào thư mục `api`, 
    # thư mục `api` nếu có document cũ sẽ có thông báo ghi đè hay không
    apigen generate --source src --destination api
    
    # hoặc ngắn gọn hơn với tùy chọn được viết tắt
    apigen generate -s src -d api

### Liên quan:
+ [wget là gì](http://wikilinux.vn/wget-cong-cu-download-don-gian-manh-me/)
+ [`phar` file](http://www.ibm.com/developerworks/vn/library/os-php-5.3new4/index.html)
+ Bản chất `phar` là code php nên có thể chạy file phar như 1 file PHP, chạy trực tiếp trên Windows xem [hướng dẫn](http://php.net/manual/en/install.windows.commandline.php)
+ [`command` structure in linux](http://code.snipcademy.com/tutorials/linux-command-line/basic-commands/command-structure)

### Command với PHP

# Sử dụng template Bootstrap

Chạy lệnh `generate` thêm tùy chọn `--template-theme` với giá trị là `bootstrap`

    apigen generate -s ./classes/ -d ./api_v1 --template-theme bootstrap

**Template này đi kèm apigen nên ko cần download thêm gì.**

# Tham khảo

+ Giải thích các lệnh command [explainshell](http://explainshell.com) _(paste lệnh command vào, trang web sẽ hiển thị giải thích về lệnh)_


