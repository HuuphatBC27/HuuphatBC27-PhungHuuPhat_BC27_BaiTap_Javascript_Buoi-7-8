var nums = [];
function addNumber() {
  var numberss = document.getElementById("number").value;
  //b2 : them value vua lay vao mang nums
  nums.push(numberss);
  document.getElementById("addNumbers").style.display = "block";
  document.getElementById(
    "addNumbers"
  ).innerHTML = `Số trong mảng là : ${nums}`;
  if (numberss === "") {
    alert("vui lòng nhập số liệu giùm đi :");
  }
}

function baitap1() {
  //b1 : dom toi input va lay value

  //b3 : tinh toan
  var sum1 = 0; // tổng các số chẵn

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum1 += nums[i];
    }

    // B4 : hiển thị :
    var divResult = document.getElementById("result");
    divResult.style.display = "block";
    divResult.innerHTML = `Tổng số dương: ${sum1}`;
  }
}
function baitap2() {
  var count = 0;
  for (var i = 0; i < nums.length > 0; i++) {
    if (nums[i] > 0) {
      count++;
      console.log(count);
    }
    document.getElementById("numbers").style.display = "block";
    document.getElementById("numbers").innerHTML = `số dương : ${count}`;
  }
}

function baitap3() {
  var min = nums[0];

  for (var i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
    document.getElementById("minNumber").style.display = "block";
    document.getElementById("minNumber").innerHTML = `Số nhỏ nhất là : ${min}`;
  }
}

function baitap4() {
  var MinpositiveNumber;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      MinpositiveNumber = nums[i];
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (MinpositiveNumber > nums[i] && nums[i] > 0) {
      MinpositiveNumber = nums[i];
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      document.getElementById("minNumbers").style.display = "block";
      document.getElementById("minNumbers").innerHTML = `không có số dương`;
    } else {
      document.getElementById("minNumbers").style.display = "block";
      document.getElementById(
        "minNumbers"
      ).innerHTML = `số dương nhỏ nhất là  : ${MinpositiveNumber}`;
      break;
    }
  }
}

function baitap5() {
  var soChan;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      soChan = nums[i];
      document.getElementById("numbers1").style.display = "block";
      document.getElementById(
        "numbers1"
      ).innerHTML = ` số chẵn cuối cùng ${soChan} `;
    } else {
      console.log(-1);
    }
  }
}
function baitap6() {
  var numbers1 = +document.getElementById("nums1").value;
  var numbers2 = +document.getElementById("nums 2").value;

  (x = numbers1), (y = numbers2);
  nums[numbers1] = nums.splice(numbers2, 1, nums[numbers1])[0];
  console.log(nums);
}

function baitap7() {
  nums.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("ketQua").innerHTML = `Mảng sau khi sắp xếp: ${nums}`;
}

function baitap8() {}

function baitap10() {
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count1++;
      console.log(count1);
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count2++;
      console.log(count2);
    }
  }
  if (count1 > count2) {
    document.getElementById("baiTapCount").style.display = "block";
    document.getElementById("baiTapCount").innerHTML = `số dương > số âm`;
  } else if (count1 < count2) {
    document.getElementById("baiTapCount").style.display = "block";
    document.getElementById("baiTapCount").innerHTML = `số dương < số âm`;
  } else {
    document.getElementById("baiTapCount").style.display = "block";
    document.getElementById("baiTapCount").innerHTML = `số dương = số âm`;
  }
}
