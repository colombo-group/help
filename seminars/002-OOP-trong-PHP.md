# Nội dung

+ [Slide](002-slide.pptx)
+ Trình bày [HoanNC](https://github.com/hoannc54)


# Tài liệu: 
+ Các khái niệm về hướng đối tượng trong PHP:Mọi người tham khảo từ link sau đầy đủ ví dụ: [PHP nâng cao](http://freetuts.net/hoc-php/hoc-lap-trinh-php-nang-cao)

# Keynote

# Abstract: 
 + Lớp trừu tượng là gì : Chúng ta có thể hiểu đơn giản nó như một lớp cha cho tất cả các lớp con có cùng bản chất kế thừa nó. Chú ý là mỗi lớp con chỉ có thể thừa kế từ một lớp cha và chúng ta cũng không thể tạo được các đối tượng trực tiếp từ lớp cha. Các lớp này sẽ chứa các phương thức trừu tượng, các lớp khác khi kế thừa sẽ phải định nghĩa các phương thức ấy
 <br/>  public abstract TenClass{
<br/>  }

# Interface: 

+ Lớp này được xem như một mặt nạ cho tất cả các lớp cùng cách thức hoạt động nhưng có thể khác nhau về bản chất. Từ đó lớp dẫn xuất có thể kế thừa từ nhiều lớp Interface để bổ sung đầy để cách thức hoạt động của mình(đây gọi là đa kế thừa). Chú ý các bạn không được định nghĩa các phương thức trong lớp interface
 
# Sự khác nhau interface, abstract

+ Abstract sử dụng từ khóa extend .
+ Interface sử dụng từ khóa implement.
+ Lớp abstract đơn giản được xem như một class cha cho tất cả các Class có cùng bản chất. Do đó mỗi lớp dẫn xuất (lớp con) chỉ có thể kế thừa từ một lớp trừu tượng. +
+ Lớp interface này được xem như một mặt nạ cho tất cả các Class cùng cách thức hoạt động nhưng có thể khác nhau về bản chất. Từ đó lớp dẫn xuất có thể kế thừa từ nhiều lớp Interface để bổ sung đầy đủ cách thức hoạt động của mình (đa kế thừa - Multiple inheritance).
+ Abstract : có thể chứa thêm phương thức đã định nghĩa.
+ Interface: Không được phép chứa bất kỳ phương thức nào đã được định  nghĩa .


# Tham khảo

+ [PHP.NET]()
