const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};

alert("Công ty: " + company.name);
alert("Nơi ở " + company.location);

for(i=0; i < company.employees.length; i++){
    alert("Nhân viên: " + company.employees[i].name);
}   