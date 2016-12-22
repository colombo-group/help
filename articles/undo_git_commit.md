# Undo 1 commit

Sau khi commit, nếu muốn xóa lệnh commit đó mà không ảnh hưởng đến code thì có thể dùng lệnh sau

```
$ git commit -m "That tuyet! da xong tinh nang 1"           (1)
$ git reset HEAD~                                           (2)
<< tiếp tục chỉnh sửa >>                                    (3)
$ git add ...                                               (4)
$ git commit -c ORIG_HEAD                                   (5)
```

1. Commit lỡ tay :D
2. Nhận ra cần thêm một chút nữa vào lần commit này, hãy sử dụng lệnh này để thực hiện undo lần commit gần nhất mà ko mất code đã thay đổi. Lệnh này có tùy chọn reset như thế nào, gõ `git reset --help` để xem.
3. Code tiếp.
4. `git add` những thứ muốn cho lại vào lần commit tới.
5. Commit những thay đổi. Ở đây tùy chọn `-c ORIG_HEAD` sẽ giúp hiển thị trình chỉnh sửa để nhập `comment` với nội dung ban đầu là message của lần commit bạn đã undo trước đó. Nếu ko cần sửa message cũ thì chỉ cần `-C` là đủ.

# Thêm thay đổi vào lần commit gần nhất

- Tùy chọn `--amend` chính là một cách viết ngắn của
```
$ git reset --soft HEAD^
$ ... do something else to come up with the right tree ...
$ git commit -c ORIG_HEAD
```
- Tương tự như trên nhưng ngắn gọn hơn. Các tùy chọn có thể sử dụng kèm `-m, -F, -c, ...`
- Ví dụ :
```
git commit --amend -m "New commit message"
```