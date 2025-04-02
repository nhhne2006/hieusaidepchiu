let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];

// Tính điểm trung bình
function tinhDiemTrungBinh(scores) {
    let sum = scores.math + scores.english + scores.literature;
    return sum / 3;
}

// Lọc sinh viên có điểm trung bình >= 8
function locSinhVienHocTot(students) {
    return students.filter(student => tinhDiemTrungBinh(student.scores) >= 8);
}

// Lọc sinh viên và in ra kết quả
let filters = locSinhVienHocTot(students);

// In kết quả ra console
console.log(filters);

