# Nội dung

+ [Slide](002-slide.pptx)
+ Trình bày [HoanNC](https://github.com/hoannc54)

# Keynote

+ Các khái niệm về hướng đối tượng trong PHP

# Class
+ Khai báo lớp
<br/>
class Tên lớp{
     <br/>//các khai báo bên trong. 
<br/>}
+ Thuộc tính của lớp
<br/>class TenLop{
	  <br/>var $tenthuoctinh;
<br/>}
+ Phương thức của lớp
<br/>class TenLop{
	 <br/>Function tenPhuongThuc{
	   <br/>//các lệnh bên trong. 
  <br/>}
<br/>}
+ Khởi tạo lớp(đối tượng ) mới

<br/>Phân biệt Khởi tạo đối tượng và khai báo đối tượng
<br/>Khai báo đối tượng hay chính là khai báo Class của đối tượng đó
<br/>Khởi tạo đối tượng là tạo ra một hình tượng của lớp, đến đây thì class mới được gọi là đối tượng. 
<br/>Khởi tạo đối tượng(khởi tạo lớp)
<br/>$tenbien= new ClassName();
+ Gán và gọi thuộc tính – phương thức
<br/>Truy xuất đến các thuộc tính của đối tượng và gọi các phương thức của đối tượng ta dùng toán tử (->)
+ Hàm khởi tạo:
<br/>Hàm khởi tạo có đặc điểm nó luôn được gọi tới khi ta khởi tạo đối tượng.
<br/>function __construct(){
<br/>}
# 
 + Abstract: Lớp trừu tượng là gì : Chúng ta có thể hiểu đơn giản nó như một lớp cha cho tất cả các lớp con có cùng bản chất kế thừa nó. Chú ý là mỗi lớp con chỉ có thể thừa kế từ một lớp cha và chúng ta cũng không thể tạo được các đối tượng trực tiếp từ lớp cha. Các lớp này sẽ chứa các phương thức trừu tượng, các lớp khác khi kế thừa sẽ phải định nghĩa các phương thức ấy
 + Interface: Lớp này được xem như một mặt nạ cho tất cả các lớp cùng cách thức hoạt động nhưng có thể khác nhau về bản chất. Từ đó lớp dẫn xuất có thể kế thừa từ nhiều lớp Interface để bổ sung đầy để cách thức hoạt động của mình(đây gọi là đa kế thừa). Chú ý các bạn không được định nghĩa các phương thức trong lớp interface
 
+ Sự khác nhau interface, abstract
+ Một số chú ý liên quan đến interface..

# Tham khảo

+ [PHP.NET]()
