function validateForm() {

    let pid = document.forms["myForm"]["numid"].value;

    if (pid.length != 13 || isNaN(pid)) {
        alert("กรุณาใส่เลขบัตรประชาชนให้ถูกต้อง");
        return false;
    }

    let prefix = document.forms["myForm"]["prefix"].value;
    if (prefix == "000") {
        alert("กรุณาเลือกคำนำหน้า");
        return false;
    }

    let fname = document.forms["myForm"]["firstName"].value;
    if (fname.length < 2 || fname.length > 20 || !isNaN(fname)) {
        alert("กรุณาใส่ชื่อด้วยความยาวระหว่าง 2-20 ตัวอักษร");
        return false;
    }

    let lname = document.forms["myForm"]["lastName"].value;
    if (lname.length < 2 || lname.length > 30 || !isNaN(lname)) {
        alert("กรุณาใส่นามสกุลด้วยความยาวระหว่าง 2-30 ตัวอักษร");
        return false;
    }

    let address = document.forms["myForm"]["address"].value.split('\n');
    if (address.length < 2) {
        alert("กรุณาใส่ที่อยู่ให้ครบทั้ง 2 บรรทัด");
        return false;
    }
    else{
        for(var i = 0; i < 2; i++){
            if (address[i].length < 5){
                alert("กรุณาใส่ที่อยู่ ความยาวไม่ต่ำกว่า 5 ตัวอักษร");
                return false;
            }
        }
    }

    let subDistrict = document.forms["myForm"]["subDistrict"].value;
    if (subDistrict.length < 2 || !isNaN(subDistrict)) {
        alert("กรุณาใส่ตำบล/แขวงด้วยความยาวไม่ต่ำกว่า 2 ตัวอักษร");
        return false;
    }

    let district = document.forms["myForm"]["district"].value;
    if (!isNaN(district)) {
        alert("กรุณาใส่อำเภอ/เขตให้ถูกต้อง");
        return false;
    }

    let province = document.forms["myForm"]["province"].value;
    if (province == "000") {
        alert("กรุณาเลือกจังหวัด");
        return false;
    }

    let postalcode = document.forms["myForm"]["postalcode"].value;
    if (postalcode.length != 5 || isNaN(postalcode)) {
        alert("กรุณาใส่รหัสไปรษณีย์ จำนวน 5 หลัก");
        return false;
    }

    let phonenumber = document.forms["myForm"]["phonenumber"].value;
    if (phonenumber.length < 9 || phonenumber.length > 10 || isNaN(phonenumber)) {
        alert("กรุณาใส่เบอร์โทรศัพท์ จำนวน 9-10 หลัก");
        return false;
    }

}
