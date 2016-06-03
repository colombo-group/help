# Nội dung

+ [Slide](002-slide.pptx)
+ Trình bày [HoanNC](https://github.com/hoannc54)

# Keynote

+ Các khái niệm về hướng đối tượng trong PHP

# Class
+ Khai báo lớp
<br/>
class Tên lớp{
     //các khai báo bên trong. 
}
+ Thuộc tính của lớp
class TenLop{
	  var $tenthuoctinh;
}
+ Phương thức của lớp
class TenLop{
	 Function tenPhuongThuc{
	   //các lệnh bên trong. 
  }
}
+ Khởi tạo lớp(đối tượng ) mới

Phân biệt Khởi tạo đối tượng và khai báo đối tượng
Khai báo đối tượng hay chính là khai báo Class của đối tượng đó
Khởi tạo đối tượng là tạo ra một hình tượng của lớp, đến đây thì class mới được gọi là đối tượng. 
Khởi tạo đối tượng(khởi tạo lớp)
$tenbien= new ClassName();
+ Gán và gọi thuộc tính – phương thức
Truy xuất đến các thuộc tính của đối tượng và gọi các phương thức của đối tượng ta dùng toán tử (->)
+ Hàm khởi tạo:
Hàm khởi tạo có đặc điểm nó luôn được gọi tới khi ta khởi tạo đối tượng.
function __construct(){
}
# 
 + Abstract, Interface, ...
 
+ Sự khác nhau interface, abstract
+ Một số chú ý liên quan đến interface..

# Tham khảo

+ [PHP.NET]()
