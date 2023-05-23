// Bài tập: Quản Lý Tuyển Sinh

function ketQuaTuyenSinh(){
var diemChuan = document.getElementById("diemChuan").value *1;
var diemMon1 = document.getElementById("diemMon1").value *1;
var diemMon2 = document.getElementById("diemMon2").value *1;
var diemMon3 = document.getElementById("diemMon3").value *1;
var diemBaMon = diemMon1 + diemMon2 + diemMon3;

// Khu Vực
var khuVuc = document.getElementById("khuVuc").value;
var diemKhuVuc = 0;
if(khuVuc == "A"){
    diemKhuVuc = 2;
} else if (khuVuc == "B"){
    diemKhuVuc == 1;
} else if (khuVuc == "C"){
    diemKhuVuc = 0.5;
} else {
    diemKhuVuc = 0;
}

// Đối Tượng
var doiTuong = document.getElementById("doiTuong").value *1;
var diemDoiTuong = 0;
if (doiTuong == 1){
    diemDoiTuong = 2.5;
}else if (doiTuong == 2){
    diemDoiTuong = 1.5;
}else if (doiTuong == 3){
    diemDoiTuong = 1;
} else {
    diemDoiTuong = 0;
}

var diemUuTien = diemDoiTuong + diemKhuVuc;
var diemTong = diemBaMon + diemUuTien;
if (diemTong >= diemChuan && diemMon1 >= 1 && diemMon2 >=1 && diemMon3 >=1){
    document.getElementById("hienThiKetQua").innerHTML = "Bạn đã đậu. Tổng điểm là: " + diemTong;
} else {
    document.getElementById("hienThiKetQua").innerHTML = "Bạn đã Rớt. Tổng điểm là: " + diemTong;
};
}
document.querySelector(".btn-success").onclick = ketQuaTuyenSinh;

// Bài tập 2: Tính Tiền Điện

function tinhTienDien(){
    var hoTen = document.getElementById("hoTen").value;
    var soDienSuDung = document.getElementById("soKW").value *1;
    var tienDien = 0;
    if (soDienSuDung <= 50){
        tienDien = 500 * soDienSuDung;
    } else if (soDienSuDung <= 100){
        tienDien = (500 * 50) + ((soDienSuDung - 50) * 650);
    } else if (soDienSuDung <= 200){
        tienDien = (500 * 50) + (650 * 50) + ((soDienSuDung - 100) * 850);
    } else if (soDienSuDung <= 350){
        tienDien = (500 * 50) + (650 * 50) + (850 * 100) + ((soDienSuDung - 200) * 1100);
    } else {
        tienDien = (500 * 50) + (650 * 50) + (850 * 100) + (350 * 1100) + ((soDienSuDung - 350)*1300);
    };
var tienDienString = tienDien.toLocaleString();
document.getElementById("hienThiSoTienDien").innerHTML = " Họ tên Khách Hàng: " + hoTen + " . Số điện tiêu thụ là: " + soDienSuDung + ". Tổng tiền điện phải trả là: " + tienDienString + ". VNĐ";
}
document.querySelector(".btn-danger").onclick = tinhTienDien;

// Tính thuế thu nhập cá nhân

function tinhThueThuNhap() {
    var hoTenCongDan = document.getElementById("hoTenCongDan").value;
    var tienThuNhap = document.getElementById("thuNhap").value * 1;
    var nguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
    var thueThuNhap = tienThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
    var thue = 0;
    if (thueThuNhap <= 0) {
        thue = 0;
    } else if (thueThuNhap <= 60000000) {
        thue = thueThuNhap * 0.05;
    } else if (thueThuNhap <= 120000000) {
        thue = thueThuNhap * 0.1;
    } else if (thueThuNhap <= 210000000) {
        thue =  thueThuNhap  * 0.15;
    } else if (thueThuNhap <= 384000000) {
        thue =  thueThuNhap  * 0.2;
    } else if (thueThuNhap <= 624000000) {
        thue = thueThuNhap  * 0.25;
    } else if (thueThuNhap <= 960000000) {
        thue =  thueThuNhap  * 0.3;
    } else {
        thue = thueThuNhap  * 0.35;
    }
    var thueChinhSua = thue.toLocaleString()
    document.getElementById("hienThiSoTienThueThuNhapCaNhan").innerHTML = "Họ và tên: " + hoTenCongDan + "Tiền thuế thu nhập cá nhân: " + thueChinhSua + " VNĐ";
}

document.querySelector(".btn-warning").onclick = tinhThueThuNhap;

// ----------------------------------------------

// Tính tiền cáp


function hienThiKetNoi() {
    var oKetNoi = document.getElementById("oKetNoi");
    var loaiKhachHang = document.getElementById("loaiKH").value;
    if (loaiKhachHang === "doanhNghiep") {
      oKetNoi.style.display = "block";
    } else {
      oKetNoi.style.display = "none";
    }
  }
function tinhTienCap() {
    var maKhachHang = document.getElementById("maKH").value;
    var soKenh = document.getElementById("soKenh").value *1;
    var soKetNoi = document.getElementById("soKetNoi").value *1;
    var loaiKhachHang = document.getElementById("loaiKH").value;
    if (loaiKhachHang === "nhaDan"){
        var phiXuLyHoaDon = 4.5;
        var phiDichVuCoBan = 20.5;
        var kenhCaoCap = 7.5 * soKenh;
    } else if (loaiKhachHang === "doanhNghiep"){
        var phiXuLyHoaDon = 15;
        if (soKetNoi>=1  && soKetNoi <=10){
            var phiDichVuCoBan = 75;
        } else if (soKetNoi >10){
            var phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        }
        var kenhCaoCap = 50 * soKenh;
    }
    var tongChiPhi = phiDichVuCoBan + phiXuLyHoaDon + kenhCaoCap;
    var tongChiPhiUSD = tongChiPhi.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    var tienCap = document.getElementById("hienThiSoTienCap").innerHTML = "Mã Khách Hàng là: " + maKhachHang + ". Tiền Cáp: " + tongChiPhiUSD;
}
document.querySelector(".btn-primary").onclick = tinhTienCap;